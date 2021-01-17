<template>
  <div>
    <h1>RSVP</h1>
    <v-form
      v-if="!userFound"
      v-model="validName"
      @submit.prevent="onNameSubmit"
    >
      <v-container>
        <h3 class="pb-4">Haley Pesik and Zach Dawson's Wedding</h3>
        <h4 class="pb-4">
          If you're responding for you and a guest (or your family), you'll be
          able to RSVP for your entire group.
        </h4>
        <v-text-field
          v-model="fullName"
          :rules="nameRules"
          label="Full Name*"
          class="pb-2"
        >
        </v-text-field>
        <v-alert
          type="error"
          v-if="nameSubmitted"
          max-width="400px"
          class="alert-text"
        >
          Oops! We’re having trouble finding your invite. Please try another
          spelling of your name or contact Zach and Haley.
        </v-alert>
        <v-btn
          outlined
          large
          color="#2e2e2e"
          type="submit"
          :disabled="!validName"
          class="mt-2"
        >
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
                  label="Guest"
                >
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
                    label="Diet Restrictions"
                  >
                  </v-text-field>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email for RSVP verification"
        >
        </v-text-field>
        <v-btn type="submit" :disabled="!validForm">RSVP</v-btn>
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
        private_key: process.env.VUE_APP_GOOGLE_PRIVATE_KEY,
      });
      await doc.loadInfo(); // loads document properties and worksheets
      this.sheetRows = await doc.sheetsByIndex[0].getRows(); // load in the data
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
    onFormSubmit() {
      // Save changed rows
      _.each(this.groupMembers, (member) => member.save());

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
        to: this.email,
        subject: `Group ${this.group} has RSVPed to Our Wedding (on behalf of ${this.fullName})`,
        body: csv,
        autoReplySubject: "Thank you for RSVPing",
        autoReplyBody: "We can't wait for you to join us on our big day!",
      };
      emailjs.init(process.env.VUE_APP_EMAILJS_USER_ID);
      emailjs
        .send(
          process.env.VUE_APP_EMAILJS_SERVICE_ID,
          process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
          templateParams
        )
        .then(
          function(response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function(error) {
            console.log("FAILED...", error);
          }
        );
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
