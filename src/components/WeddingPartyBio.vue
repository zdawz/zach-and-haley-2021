<template>
    <v-card width="200px" tile>
        <v-avatar size="100" style="position:absolute; top: 130px">
            <v-img :src="imagePath"></v-img>
        </v-avatar>
        <v-list-item>
            <v-list-item-content>
            <v-list-item-title class="title">{{ name }}</v-list-item-title>
            <v-list-item-subtitle>{{ position }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-card>
</template>

<script>
export default {
  name: 'WeddingPartyBio',
  props: {
    name: String,
    position: String,
    biography: String,
    imagePath: String
  }
}
</script>

<style scoped>

</style>
