<template>
  <div>
    <h1 class="header-padding">Wedding Party</h1>
    <v-layout class="wedding-party-bios">
      <WeddingPartyBio 
        name="Kylie Pesik"
        position="Maid of Honor"
        biography="Sister"
        imageName="Kylie.jpeg"/>
      <WeddingPartyBio 
        name="Michelle Simms"
        position="Bridesmaid"
        biography="College roommate and teammate"
        imageName="Michelle.jpeg"/>
      <WeddingPartyBio 
        name="Caitlin Steffen"
        position="Bridesmaid"
        biography="College roommate"
        imageName="Caitlin.jpeg"/>
      <WeddingPartyBio 
        name="Meghan Skluzacek"
        position="Bridesmaid"
        biography="Childhood friend"
        imageName="Meghan.jpeg"/>
      <WeddingPartyBio 
        name="Linde Schaffer"
        position="Bridesmaid"
        biography="High school friend"
        imageName="Linde.jpeg"/>
      <WeddingPartyBio 
        name="Lydia Dawson"
        position="Bridesmaid"
        biography="Sister of the groom"
        imageName="Lydia.jpeg"/>

      <WeddingPartyBio 
        name="Jared Dawson"
        position="Best Man"
        biography="Brother"
        imageName="Jared.jpeg"/>
      <WeddingPartyBio 
        name="Connor Winter"
        position="Groomsman"
        biography="College roommate and teammate"
        imageName="Connor.jpeg"/>
      <WeddingPartyBio 
        name="Sam Deyak"
        position="Groomsman"
        biography="College roommate and teammate"
        imageName="Sam.jpeg"/>
      <WeddingPartyBio 
        name="Ryan Sklar"
        position="Groomsman"
        biography="College roommate and teammate"
        imageName="Ryan.jpeg"/>
      <WeddingPartyBio 
        name="Eli Broman"
        position="Groomsman"
        biography="High school friend and teammate"
        imageName="Eli.jpeg"/>
      <WeddingPartyBio 
        name="Joey Pesik"
        position="Groomsman"
        biography="Brother of the bride"
        imageName="Joey.jpeg"/>
    </v-layout>
  </div>
</template>

<script>
import WeddingPartyBio from "@/components/WeddingPartyBio.vue";

export default {
  name: 'WeddingParty',
  components: {
    WeddingPartyBio,
  },
};
</script>

<style scoped>
.wedding-party-bios {
  flex-wrap: wrap;
  max-width: 840px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

.header-padding {
  padding-bottom: 18px;
}
</style>
