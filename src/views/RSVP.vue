<template>
  <div>
    <h1>RSVP</h1>
    <v-form v-model="valid" @submit.prevent="onSubmit">
      <v-container>
        <v-text-field
          v-model="fullName"
          :rules="nameRules"
          label="Full name*"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail*"
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
      fullName: "",
      nameRules: [(v) => !!v || "Full name is required"],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => validator.validate(v) || "E-mail must be valid",
      ],
      sheet: null,
      userGroup: null,
    };
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
    async onSubmit() {
      const rows = await this.sheet.getRows();
      rows.forEach((row) => {
        if (row.name.toLowerCase() === this.fullName.toLowerCase()) {
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
