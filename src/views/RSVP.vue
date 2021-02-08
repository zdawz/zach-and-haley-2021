<template>
  <div>
    <h1>RSVP</h1>
    <v-form
      v-if="!userFound"
      v-model="validName"
      @submit.prevent="onNameSubmit">
      <v-container>
        <h3 class="pb-4">The Wedding of Zach Dawson and Haley Pesik</h3>
        <h4 class="pb-4">
          If you're responding for you and a guest (or your family), you'll be
          able to RSVP for your entire group.
        </h4>
        <v-text-field
          v-model="fullName"
          :rules="nameRules"
          label="Full Name*"
          class="pb-2">
        </v-text-field>
        <v-alert
          type="error"
          v-if="nameSubmitted"
          max-width="400px"
          class="alert-text">
          Oops! We’re having trouble finding your invite. Please try another
          spelling of your name or contact Zach and Haley.
        </v-alert>
        <v-btn
          outlined
          large
          color="#2e2e2e"
          type="submit"
          :disabled="!validName"
          class="mt-2">
          Find Your Invitation
        </v-btn>
      </v-container>
    </v-form>
    <v-form v-else v-model="validForm" @submit.prevent="onFormSubmit">
      <v-container>
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr v-for="member in groupMembers" :key="member.name">
                <v-text-field
                  v-if="!member.name"
                  v-model="member.name"
                  label="Guest">
                </v-text-field>
                <td v-else class="text-left">
                  {{ member.name }}
                </td>
                <td>
                  <v-radio-group v-model="member.attending" row mandatory>
                    <div class="pr-4">Attending?</div>
                    <v-radio label="Yes" :value="'Y'"></v-radio>
                    <v-radio label="No" :value="'N'"></v-radio>
                  </v-radio-group>
                </td>
                <td>
                  <v-text-field
                    v-model="member.dietRestrictions"
                    label="Diet Restrictions">
                  </v-text-field>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email for RSVP verification">
        </v-text-field>
        <div v-if="formSubmitted">
          <v-alert
            type="error"
            v-if="!responseSaved"
            max-width="400px"
            class="alert-text">
            Oops! Something went wrong when trying to save your response. Please
            try again or contact Zach and Haley if this error persists.
          </v-alert>
          <v-alert
            type="error"
            v-else-if="email && !emailSent"
            max-width="400px"
            class="alert-text">
            Oops! Something went wrong when trying to email you a confirmation.
            Please try again or contact Zach and Haley if this error persists.
          </v-alert>
          <v-alert type="success" v-else max-width="400px" class="alert-text">
            Thank you for your RSVP! If you provided an email address, a
            confirmation has been sent to you.
          </v-alert>
        </div>
        <v-btn
          type="submit"
          :loading="formSubmitLoading"
          :disabled="!validForm">
          RSVP
        </v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script>
var { GoogleSpreadsheet } = require("google-spreadsheet");
var validator = require("email-validator");
var _ = require("lodash");
var emailjs = require("emailjs-com");

export default {
  name: "RSVP",
  data() {
    return {
      validName: false,
      validForm: false,
      fullName: "",
      nameRules: [(v) => !!v || "Full Name is required"],
      email: "",
      emailRules: [(v) => !v || validator.validate(v) || "Email must be valid"],
      sheetRows: [],
      group: null,
      nameSubmitted: false,
      formSubmitted: false,
      formSubmitLoading: false,
      responseSaved: false,
      emailSent: false,
    };
  },
  computed: {
    userFound() {
      return this.nameSubmitted && this.group !== null;
    },
    groupMembers() {
      // Filter out all rows of data that don't match the active group
      return _.filter(this.sheetRows, ["group", this.group]);
    },
  },
  methods: {
    async loadSheet() {
      const doc = new GoogleSpreadsheet(
        process.env.VUE_APP_GOOGLE_SPREADSHEET_ID
      );
      await doc.useServiceAccountAuth({
        client_email: process.env.VUE_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: atob(process.env.VUE_APP_GOOGLE_PRIVATE_KEY), // Decode from Base64
      });
      await doc.loadInfo(); // Loads document properties and worksheets
      this.sheetRows = await doc.sheetsByIndex[0].getRows(); // Load in the data
    },
    async onNameSubmit() {
      let newGroup = null;
      // Find if the user is in a group
      this.sheetRows.forEach((row) => {
        if (
          row.name &&
          row.name.toLowerCase() === this.fullName.toLowerCase()
        ) {
          newGroup = row.group;
          return;
        }
      });
      this.group = newGroup; // Set the group. Null if user is not in one
      this.nameSubmitted = true;
    },
    async onFormSubmit() {
      this.formSubmitted = false;
      this.formSubmitLoading = true;
      this.responseSaved = false;
      this.emailSent = false;

      // Save changed rows
      try {
        _.each(this.groupMembers, async (member) => await member.save());
        console.log("Response saved!");
        this.responseSaved = true;
      } catch (error) {
        console.log("Response save failed...", error);
      }

      if (this.responseSaved) {
        // Convert the form JSON to CSV
        // Use the first response to choose the keys and the order
        const memberHeaders = Object.keys(this.groupMembers[0]);
        // Build the header
        let csv = memberHeaders.join(",") + "<br/>";
        // Add the rows
        this.groupMembers.forEach(function(obj) {
          csv += memberHeaders.map((k) => obj[k]).join(",") + "<br/>";
        });

        // Send the form data back to us and send an auto-reply to the user
        var templateParams = {
          subject: `Group ${this.group} has RSVPed to Our Wedding (on behalf of ${this.fullName})`,
          body: csv,
          autoReplyEmail: this.email,
          autoReplySubject: "Thank you for RSVPing",
          autoReplyBody: "We can't wait for you to join us on our big day!",
        };
        emailjs.init(process.env.VUE_APP_EMAILJS_USER_ID);
        let success = false;
        await emailjs
          .send(
            process.env.VUE_APP_EMAILJS_SERVICE_ID,
            process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
            templateParams
          )
          .then(
            (response) => {
              console.log("Email sent!", response.status, response.text);
              success = true;
            },
            (error) => {
              console.log("Email failed...", error);
            }
          );
        this.emailSent = success;
      }

      // Update state variables
      this.formSubmitted = true;
      this.formSubmitLoading = false;
    },
  },
  async created() {
    await this.loadSheet();
  },
};
</script>

<style scoped>
.v-input {
  max-width: 400px !important;
  margin-left: auto;
  margin-right: auto;
}

.alert-text {
  margin-left: auto;
  margin-right: auto;
}
</style>
