import { defineStore } from "pinia";
const url = "http://localhost:3000";

export const useParkStore = defineStore("park", {
  state: () => ({
    parks: [],
    park_id: null,
  }),
  getters: {
    getParks: (state) => state.parks,
    getPark: (state) => state.park_id,
  },
  actions: {
    async fetchParks() {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${url}/parks`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          const data = await response.json();
          this.parks = data.parks;
        }
      } catch (error) {
        console.error(error);
      }
    },

    async fetchPark(id) {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${url}/parks/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          const data = await response.json();
          this.park_id = data.park;
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
});
