<template>
  <div>
    <h1>Registry</h1>
    <h3>Your love, laughter, and company on our big day is the greatest gift of all.</h3>
    <h3>However, should you wish to help us celebrate with a gift, please choose from our registry.</h3>

    <v-layout class="registry-cards">
      <v-card flat outlined class="registry-card">
        <v-avatar rounded size="200">
            <img src="../assets/images/registry/amazon.jpeg"/>
        </v-avatar>
        <v-btn outlined large color="#2e2e2e" class="registry-button">See registry</v-btn>
      </v-card>
      <v-card flat outlined class="registry-card">
        <v-avatar rounded size="200">
            <img src="../assets/images/registry/bed-bath-and-beyond.jpg"/>
        </v-avatar>
        <v-btn outlined large color="#2e2e2e" class="registry-button">See registry</v-btn>
      </v-card>
      <v-card flat outlined class="registry-card">
        <v-avatar rounded size="200">
        </v-avatar>
        <v-btn outlined large color="#2e2e2e" class="registry-button">Honeymoon Fund</v-btn>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Registry',
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
  margin: 24px 16px 0 16px;
}
</style>
