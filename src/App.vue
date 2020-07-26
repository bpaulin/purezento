<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <template v-slot:prepend v-if="userLoggedIn">
        <v-list-item two-line>
          <v-list-item-avatar>
            <img :src="userLoggedIn.photoURL" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{
              userLoggedIn.displayName
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="link in links"
          :key="link.route"
          link
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.label }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="loginWithFirebase" v-if="!userLoggedIn"
            >Login</v-btn
          >
          <v-btn block @click="logoutFromFirebase" v-if="userLoggedIn"
            >Logout</v-btn
          >
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app color="red" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Purezento</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-footer color="red" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    links: [
      {
        route: "/",
        label: "Home",
        icon: "mdi-home",
      },
      {
        route: "/about",
        label: "About",
        icon: "mdi-information-variant",
      },
    ],
  }),
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

<style lang="scss"></style>
