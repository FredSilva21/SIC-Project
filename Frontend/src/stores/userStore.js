import { defineStore } from "pinia";
import { useParkStore } from "./parkStore";
import mqttService from "@/services/mqttService";
const url = "http://localhost:3000";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
    user_id: null,
    loggedIn: false,
    user: null,
  }),
  getters: {
    getUsers: (state) => state.users,
    getUser: (state) => state.user_id,
    getLoggedIn: (state) => state.loggedIn,
    getUserData: (state) => state.user,
  },
  actions: {
    async fetchUsers() {
      try {
        const response = await fetch(`${url}/users`);
        this.users = await response.json();
        localStorage.setItem("users", JSON.stringify(this.users));
      } catch (error) {
        console.error(error);
      }
    },

    async fetchUser(id) {
      try {
        const response = await fetch(`${url}/users/${id}`);
        if (response.status === 200) {
          const data = await response.json();
          this.user = data.result;
        }
      } catch (error) {
        console.error(error);
      }
    },

    async register(user) {
      try {
        const response = await fetch(`${url}/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        if (response.status === 201) {
          return true;
        }
      } catch (error) {
        console.error(error);
      }
    },

    async login(user) {
      try {
        const response = await fetch(`${url}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        if (response.status === 200) {
          const data = await response.json();
          this.loggedIn = true;
          this.user_id = data.user_id;
          localStorage.setItem("token", data.token);
          localStorage.setItem("user_Id", data.user_id);
          localStorage.setItem("loggedIn", this.loggedIn);
          localStorage.setItem("type", JSON.stringify(data.type));
        }
      } catch (error) {
        console.error(error);
      }
    },

    adminSubscribe() {
      try {
        useParkStore().fetchParks();
        const parks = useParkStore().getParks;
        for (const park of parks) {
          const topicEnter = `parks/${park.id_park}/enter`;
          mqttService.subscribe(topicEnter, (message) => {
            return message;
          });
          const topicExit = `parks/${park.id_park}/exit`;
          mqttService.subscribe(topicExit, (message) => {
            return message;
          });
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
});
