<template>
  <div>
    <h1>RSVP</h1>
    <v-form
      v-if="!userFound"
      v-model="validName"
      @submit.prevent="onNameSubmit"
      class="form-padding">
      <v-container class="px-0">
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
    <v-alert
      v-else-if="formSubmitted && responseSaved && (email ? emailSent : true)"
      type="success"
      max-width="400px"
      class="alert-text">
      Thank you for your RSVP! If you provided an email address, a confirmation
      has been sent to you.
    </v-alert>
    <v-form
      v-else
      v-model="validForm"
      @submit.prevent="onFormSubmit"
      class="form-padding"
      :class="this.$vuetify.breakpoint.smAndDown ? 'form-style' : ''">
      <v-container class="px-0">
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <div v-for="member in groupMembers" :key="member.name">
                <v-row class="row-style">
                  <v-col
                    class="guest-name-column-style text-left column-style pt-2">
                    {{ member.name }}
                  </v-col>
                  <v-col class="column-style">
                    <v-radio-group
                      v-model="member.attending"
                      row
                      mandatory
                      hide-details>
                      <div class="pr-4">Attending?</div>
                      <v-radio label="Yes" :value="'Y'"></v-radio>
                      <v-radio label="No" :value="'N'"></v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col class="column-style pt-2">
                    <v-text-field
                      v-model="member.dietRestrictions"
                      label="Dietary Restrictions"
                      hide-details>
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row class="row-style">
                  <v-divider class="divider-style" />
                </v-row>
              </div>
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
        </div>
        <v-btn
          type="submit"
          outlined
          large
          :loading="formSubmitLoading"
          :disabled="!validForm">
          RSVP
        </v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { GoogleSpreadsheet } from "google-spreadsheet";
import * as EmailValidator from "email-validator";
import emailjs from "emailjs-com";

export default {
  name: "RSVP",
  data() {
    return {
      validName: false,
      validForm: false,
      fullName: "",
      nameRules: [(v) => !!v || "Full Name is required"],
      email: "",
      emailRules: [
        (v) => !v || EmailValidator.validate(v) || "Email must be valid",
      ],
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
      return this.sheetRows.filter((row) => row.group === this.group);
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
    generateResponseData() {
      // Start the table
      let responseHtml =
        '<table style="border-collapse: collapse; width: 100%;" border="0"><tbody>';
      // Build the header
      responseHtml += "<tr>";
      responseHtml +=
        '<td width="150px" style="text-decoration: underline;">Name</td>';
      responseHtml +=
        '<td width="100px" style="text-decoration: underline;">Status</td>';
      responseHtml +=
        '<td style="text-decoration: underline;">Dietary Restrictions</td>';
      responseHtml += "</tr>";
      // Add the rows
      this.groupMembers.forEach((response) => {
        let attendingColor = "red";
        let attendingText = "Not Attending";
        if (response.attending === "Y") {
          attendingColor = "green";
          attendingText = "Attending";
        }
        let dietText = response.dietRestrictions
          ? response.dietRestrictions
          : "";
        responseHtml += "<tr>";
        responseHtml += `<td style="vertical-align: top" width="150px">${response.name}</td>`;
        responseHtml += `<td style="color: ${attendingColor}; vertical-align: top" width="100px">${attendingText}</td>`;
        responseHtml += `<td style="vertical-align: top">${dietText}</td>`;
        responseHtml += "</tr>";
      });
      // End the table
      responseHtml += "</tbody></table>";
      return responseHtml;
    },
    async onFormSubmit() {
      this.formSubmitted = false;
      this.formSubmitLoading = true;
      this.responseSaved = false;
      this.emailSent = false;

      // Save changed rows
      try {
        this.groupMembers.forEach(async (member) => await member.save());
        console.log("Response saved!");
        this.responseSaved = true;
      } catch (error) {
        console.log("Response save failed...", error);
      }

      if (this.responseSaved) {
        // Send the response data back to us
        let templateParams = {
          group: this.group,
          name: this.fullName,
          responseData: this.generateResponseData(),
          autoReplyEmail: this.email, // Auto-reply to the user (if they included their email)
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

.form-padding {
  padding-left: 24px;
  padding-right: 24px;
}

.form-style {
  max-width: 545px;
  margin-left: auto;
  margin-right: auto;
}

.v-data-table_wrapper {
  overflow-x: hidden;
}

.row-style {
  max-width: 100%;
}

.column-style {
  min-width: 262px;
  max-width: 262px;
  padding-top: 0;
  padding-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  align-self: flex-end;
}

.guest-name-column-style {
  font-size: 16px !important;
}

.divider-style {
  margin-top: 24px;
  margin-bottom: 24px;
}
</style>
