<template>
  <div>
    <h1>RSVP</h1>
    <v-btn @click="loadSpreadsheet">Load Spreadsheet</v-btn>
    <p>{{ spreadsheetTitle }}</p>
    <v-form v-model="valid">
      <v-container>
        <v-text-field
          v-model="firstName"
          :rules="nameRules"
          label="First name"
          required
        ></v-text-field>
        <v-text-field
          v-model="lastName"
          :rules="nameRules"
          label="Last name"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
      </v-container>
    </v-form>
  </div>
</template>

<script>
const { GoogleSpreadsheet } = require("google-spreadsheet");
const validator = require("email-validator");

export default {
  name: "RSVP",
  data: () => ({
    valid: false,
    firstName: "",
    lastName: "",
    nameRules: [(v) => !!v || "Name is required"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => validator.validate(v) || "E-mail must be valid",
    ],
    spreadsheetTitle: null,
  }),
  methods: {
    async loadSpreadsheet() {
      const doc = new GoogleSpreadsheet(
        process.env.VUE_APP_GOOGLE_SPREADSHEET_ID
      );
      await doc.useServiceAccountAuth({
        client_email: process.env.VUE_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.VUE_APP_GOOGLE_PRIVATE_KEY.replace(
          /\\n/g,
          "\n"
        ),
      });
      await doc.loadInfo(); // loads document properties and worksheets
      this.spreadsheetTitle = doc.title;
    },
  },
};
</script>
