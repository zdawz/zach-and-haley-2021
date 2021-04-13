<template>
  <div>
    <h1>Registry</h1>

    <v-col class="column-padding">
      <h3>
        Your love, laughter, and company on our big day is the greatest gift of all.
        However, should you wish to help us celebrate with a gift, please choose from our registries or contribute to our honeymoon fund.
      </h3>
    </v-col>

    <v-layout class="registry-cards">
      <v-card flat outlined class="registry-card">
        <v-avatar rounded size="200">
          <img src="../assets/images/registry/amazon.jpeg" />
        </v-avatar>
        <v-btn
          outlined
          large
          color="#2e2e2e"
          class="registry-button"
          href="https://www.amazon.com/wedding/zach-dawson-haley-pesik-kasota-august-2021/registry/2Z59QTTOH359J"
          target="_blank">
          See registry
        </v-btn>
      </v-card>
      <v-card flat outlined class="registry-card">
        <v-avatar rounded size="200">
          <img src="../assets/images/registry/bed-bath-and-beyond.jpg" />
        </v-avatar>
        <v-btn
          outlined
          large
          color="#2e2e2e"
          class="registry-button"
          href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/550108761?eventType=Wedding"
          target="_blank">
          See registry
        </v-btn>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "Registry",
};
</script>

<style scoped>
.registry-cards {
  flex-wrap: wrap;
  max-width: 75%;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

.registry-card {
  width: 280px;
  padding: 40px;
  margin: 16px;
}

.registry-button {
  margin: 24px 0 0 0;
}

.column-padding {
  padding: 0 24px 0 24px;
  max-width: 840px;
  margin-left: auto;
  margin-right: auto;
}
</style>
