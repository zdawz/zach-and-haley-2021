<template>
  <div>
    <h1>RSVP</h1>
    <v-form
      v-if="!userFound"
      v-model="validName"
      @submit.prevent="onNameSubmit"
    >
      <v-container>
        <v-text-field
          v-model="fullName"
          :rules="nameRules"
          label="Full Name*"
        ></v-text-field>
        <v-alert type="error" v-if="nameSubmitted"
          >Oops! We’re having trouble finding your invite. Please try another
          spelling of your name or contact Zach and Haley</v-alert
        >
        <v-btn type="submit" :disabled="!validName">
          Find Your Invitation
        </v-btn>
      </v-container>
    </v-form>
    <v-form v-else v-model="validForm" @submit.prevent="onFormSubmit">
      <v-container>
        <v-radio-group
          v-for="member in groupMembers"
          :key="member.name"
          row
          mandatory
        >
          {{ member.name }}
          <v-radio label="Yes" :value="true"></v-radio>
          <v-radio label="No" :value="false"></v-radio>
        </v-radio-group>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail*"
        ></v-text-field>
        <v-btn type="submit" :disabled="!validForm">
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
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => validator.validate(v) || "E-mail must be valid",
      ],
      sheetRows: [],
      userGroup: null,
      nameSubmitted: false,
    };
  },
  computed: {
    userFound() {
      return this.nameSubmitted && this.userGroup;
    },
    groupMembers() {
      return _.filter(this.sheetRows, ["group", this.userGroup]);
    },
  },
  methods: {
    async loadSheet() {
      const doc = new GoogleSpreadsheet(
        process.env.VUE_APP_GOOGLE_SPREADSHEET_ID
      );
      doc.useApiKey(process.env.VUE_APP_GOOGLE_API_KEY);
      await doc.loadInfo(); // loads document properties and worksheets
      this.sheetRows = await doc.sheetsByIndex[0].getRows();
    },
    async onNameSubmit() {
      let foundUser = false;
      this.sheetRows.forEach((row) => {
        if (row.name.toLowerCase() === this.fullName.toLowerCase()) {
          foundUser = true;
          this.userGroup = row.group;
          return;
        }
      });
      if (!foundUser) {
        this.userGroup = null;
      }
      this.nameSubmitted = true;
    },
    onFormSubmit() {
      emailjs.init(process.env.VUE_APP_EMAILJS_USER_ID);
      var templateParams = {
        responseSubject: `Group ${this.userGroup} has RSVPed to Our Wedding (on behalf of ${this.fullName})`,
        responseBody: "Attendance information goes here",
        autoReplySubject: "Thank you for RSVPing",
        autoReplyBody: "We can't wait for you to join us on our big day!",
        userEmail: this.email,
      };

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
