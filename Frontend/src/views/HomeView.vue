<template>
  <Navbar />
  <ParkingCard v-for="park in parks" :key="park.id" :park="park" />
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
    if (user === false) {
      this.$router.push({ name: "login" });
    }

    this.useParkStore.fetchParks();
  },

  computed: {
    parks() {
      return this.useParkStore.parks;
    },
  },
};
</script>
