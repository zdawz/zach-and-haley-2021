<template>
  <div>
    <h1>RSVP</h1>
    <iframe
      :src="googleFormUrl"
      width="100%"
      height="1080"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      Loading…
    </iframe>
  </div>
</template>

<script>
export default {
  name: "RSVP",
  data() {
    return { googleFormUrl: process.env.VUE_APP_GOOGLE_FORM_URL };
  },
};
</script>
