<template>
  <div>
    <h1>Wedding Party</h1>
    <WeddingPartyBio 
      name="Kylie Pesik"
      position="Maid of Honor"
      biography="Sister"
      imagePath="DSC04258.jpg" />
  </div>
</template>

<script>
import WeddingPartyBio from "@/components/WeddingPartyBio.vue";

export default {
  name: 'Wedding Party',
  components: {
    WeddingPartyBio,
  },
};
</script>
