<template>
  <div>
    <h1>RSVP</h1>
    <v-form v-model="valid" @submit.prevent="onSubmit">
      <v-container>
        <v-text-field
          v-model="fullName"
          :rules="nameRules"
          label="Full Name*"
        ></v-text-field>
        <!-- <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail*"
          validate-on-blur
        ></v-text-field> -->
        <v-alert type="success" v-if="nameSubmitted && userGroup"
          >Your group number is {{ userGroup }}</v-alert
        >
        <v-alert type="error" v-else-if="nameSubmitted"
          >Oops! We’re having trouble finding your invite. Please try another
          spelling of your name or contact Zach and Haley</v-alert
        >
        <v-btn type="submit" :disabled="!valid">
          Find Your Invitation
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
  },
  async created() {
    await this.loadSheet();
  },
};
</script>
