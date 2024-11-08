import { defineStore } from "pinia";

const url = "http://localhost:3000";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
    user_id: null,
    loggedIn: false,
  }),
  getters: {
    getUsers: (state) => state.users,
    getUser: (state) => state.user_id,
    getLoggedIn: (state) => state.loggedIn,
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
          this.user = await response.result;
          localStorage.setItem("user", JSON.stringify(this.user));
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
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
});
