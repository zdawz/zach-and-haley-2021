<template>
  <v-card width="280px" tile flat class="bio-card">
    <v-avatar rounded size="200">
      <v-img :src="require('../assets/images/wedding-party/' + imageName)" />
    </v-avatar>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="name">{{ name }}</v-list-item-title>
        <v-list-item-subtitle class="position-text">{{
          position
        }}</v-list-item-subtitle>
        <v-list-item-subtitle class="bio-text">{{
          biography
        }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "WeddingPartyBio",
  props: {
    name: String,
    position: String,
    biography: String,
    imageName: String,
  },
};
</script>

<style scoped>
.bio-card {
  padding-bottom: 36px;
}

.position-text {
  text-transform: uppercase;
}

.bio-text {
  text-transform: lowercase;
}

.name {
  font-family: "Aesthete";
  font-size: 50px !important;
  overflow: unset !important;
}
</style>
