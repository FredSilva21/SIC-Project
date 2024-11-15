<template>
  <v-container class="d-flex justify-center align-center fill-height login-card">
    <v-card class="pa-4" max-width="400">
      <h1 class="mb-4 text-center">Login</h1>
      <v-form @submit.prevent="login">
        <v-row class="mb-2" justify="center">
          <v-col cols="12">
            <v-text-field
              label="Email"
              v-model="email"
              type="email"
              required
              outlined
              prepend-icon="mdi-email"
              class="input-field"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mb-2" justify="center">
          <v-col cols="12">
            <v-text-field
              label="Password"
              v-model="password"
              type="password"
              required
              outlined
              prepend-icon="mdi-lock"
              class="input-field"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="auto">
            <v-btn class="custom-btn" type="submit" color="primary">Login</v-btn>
          </v-col>
        </v-row>
      </v-form>
      <v-divider class="my-4"></v-divider>
      <div class="text-center">
        <p>
          Don't have an account?
          <router-link :to="{ path: 'register' }">Register</router-link>
        </p>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import { useUserStore } from "@/stores/userStore";
export default {
  data() {
    return {
      userStore: useUserStore(),
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const login = await this.userStore.login({
          email: this.email,
          password: this.password,
        });
        const logId = this.userStore.getLoggedIn;
        if (logId === true) {
          this.$router.push({ name: "home" });
        }
      } catch (error) {
        console.error(error);
        alert(error);
      }
    },
  },
};
</script>

<style scoped>
.login-card {
  position: absolute;
  left: 10%;
}
.fill-height {
  height: 100vh;
}
.input-field {
  position: relative;
  width: 320px;
  left: -5%
}
.custom-btn {
  width: 200px;
  font-size: 14px;
}
</style>