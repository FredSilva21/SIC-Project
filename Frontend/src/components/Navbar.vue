<template>
    <v-sheet class="d-flex" color="primary" dark style="height: 50px;">
      <v-toolbar-title>MyPark</v-toolbar-title>

      <v-spacer></v-spacer>
      <router-link>
        <v-btn color="white" text> Relatórios </v-btn>
      </router-link>
      <v-btn color="white" @click="logout" outlined> Logout </v-btn>
    </v-sheet>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("token");
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style scoped></style>
