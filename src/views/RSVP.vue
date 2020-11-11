<template>
  <div>
    <h1>RSVP</h1>
    <v-form v-model="valid" @submit.prevent="onSubmit">
      <v-container>
        <v-text-field
          v-model="firstName"
          :rules="nameRules"
          label="First name *"
        ></v-text-field>
        <v-text-field
          v-model="lastName"
          :rules="nameRules"
          label="Last name *"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          validate-on-blur
        ></v-text-field>
        <v-btn type="submit" :disabled="!valid">
          Submit
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
      valid: false,
      firstName: "",
      lastName: "",
      nameRules: [(v) => !!v || "Name is required"],
      email: "",
      emailRules: [
        (v) => (v ? validator.validate(v) || "E-mail must be valid" : true),
      ],
      sheet: null,
      userGroup: null,
    };
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
  },
  methods: {
    async loadSheet() {
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
      this.sheet = doc.sheetsByIndex[0];
    },
    async onSubmit() {
      const rows = await this.sheet.getRows();
      rows.forEach((row) => {
        if (row.name === this.fullName) {
          this.userGroup = row.group;
          return;
        }
      });
      console.log(this.userGroup);
    },
  },
  async created() {
    await this.loadSheet();
  },
};
</script>
