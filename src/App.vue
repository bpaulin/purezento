<template>
  <v-app>
    <v-btn @click="loginWithFirebase" v-if="!userLoggedIn">Login</v-btn>
    <template v-if="userLoggedIn">
      <v-btn @click="logoutFromFirebase" v-if="userLoggedIn">Logout</v-btn>
      {{ userLoggedIn.displayName }}
    </template>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </v-app>
</template>

<script>
export default {
  computed: {
    userLoggedIn() {
      return this.$store.getters.user;
    },
  },
  methods: {
    loginWithFirebase() {
      this.$store.dispatch("signInAction");
    },
    logoutFromFirebase() {
      this.$store.dispatch("signOutAction");
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
