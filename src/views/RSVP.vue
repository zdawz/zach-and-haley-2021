<template>
  <div>
    <h1>RSVP</h1>
    <p>This might just be a link in the future</p>
    <v-btn @click="loadSpreadsheet">Load Spreadsheet</v-btn>
    <p>{{ spreadsheetTitle }}</p>
  </div>
</template>

<script>
const { GoogleSpreadsheet } = require("google-spreadsheet");

export default {
  name: "RSVP",
  data: function() {
    return {
      spreadsheetTitle: null,
    };
  },
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
