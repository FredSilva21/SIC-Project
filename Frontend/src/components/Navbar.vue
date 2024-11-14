<template>
  <v-sheet class="d-flex" color="primary" dark style="height: 50px;">
    <router-link :to="{name:'home'}" class="text-decoration-none ">
      <v-toolbar-title>MyPark</v-toolbar-title>
    </router-link>

    <v-spacer></v-spacer>
   
    <v-btn color="white" @click="logout" outlined>Logout</v-btn>
  </v-sheet>
</template>

<script>
import { useUserStore } from '@/stores/userStore';

export default {
  data() {
    return {
      userStore: useUserStore()
    };
  },

  computed: {
    user() {
      return this.userStore.getUserData;
    }
  },

  created () {
    const id = localStorage.getItem('user_Id');
    this.userStore.fetchUser(id);
  },

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
