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
const { GoogleSpreadsheet } = require("google-spreadsheet");
const validator = require("email-validator");

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
      sheet: null,
      userGroup: null,
      nameSubmitted: false,
    };
  },
  computed: {
    userFound() {
      return this.nameSubmitted && this.userGroup;
    },
  },
  methods: {
    async loadSheet() {
      const doc = new GoogleSpreadsheet(
        process.env.VUE_APP_GOOGLE_SPREADSHEET_ID
      );
      doc.useApiKey(process.env.VUE_APP_GOOGLE_API_KEY);
      await doc.loadInfo(); // loads document properties and worksheets
      this.sheet = doc.sheetsByIndex[0];
    },
    async onNameSubmit() {
      const rows = await this.sheet.getRows();
      let foundUser = false;
      rows.forEach((row) => {
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
      console.log("Thanks for your RSVP!");
    },
  },
  async created() {
    await this.loadSheet();
  },
};
</script>
