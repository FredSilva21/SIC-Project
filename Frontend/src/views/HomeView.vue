<template>
  <div>
    <Navbar />
    <div class="content-container">
      <v-container class="d-flex">
        <v-row>
          <v-col cols="12" md="4" v-for="park in parks" :key="park.id">
            <ParkingCard :park="park" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import ParkingCard from "@/components/ParkingCard.vue";
import { useParkStore } from "@/stores/parkStore";
import { useUserStore } from "@/stores/userStore";

export default {
  components: {
    Navbar,
    ParkingCard,
  },

  data() {
    return {
      userStore: useUserStore(),
      useParkStore: useParkStore(),
    };
  },

  created() {
    const user = localStorage.getItem("loggedIn");
    if (Boolean(user) != true) {
      this.$router.push({ name: "login" });
    } else {
      this.useParkStore.fetchParks();
    }
    const type = localStorage.getItem("type");
    if (Boolean(type) == true) {
      this.userStore.adminSubscribe();
    }
  },

  computed: {
    parks() {
      return this.useParkStore.getParks;
    },
  },
};
</script>

<style>
.content-container {
  padding-top: 10rem;
}
</style>