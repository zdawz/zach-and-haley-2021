<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/our-story">Our Story</router-link> |
      <router-link to="/wedding-party">Wedding Party</router-link> |
      <router-link to="/photos">Photos</router-link> |
      <router-link to="/registry">Registry</router-link> |
      <router-link to="/rsvp">RSVP</router-link> |
      <router-link to="/guest-accommodations">Guest Accommodations</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
