<template>
  <v-container class="d-flex justify-center align-center" style="height: 100vh;">
    <v-card class="pa-4" max-width="800">
      <h1 class="text-center mb-4">Register</h1>
      <v-form @submit.prevent="register" class="with-100">
        <v-text-field
          label="Name"
          v-model="name"
          type="text"
          required
          outlined
          prepend-icon="mdi-account"
          dense
          full-width
          class="mb-4"
        ></v-text-field>
        
        <v-text-field
          label="Email"
          v-model="email"
          type="email"
          required
          outlined
          prepend-icon="mdi-email"
          dense
          full-width
          class="mb-4"
        ></v-text-field>
        
        <v-text-field
          label="Password"
          v-model="password"
          type="password"
          required
          outlined
          prepend-icon="mdi-lock"
          dense
          full-width
          class="mb-4"
        ></v-text-field>
        
        <v-btn type="submit" color="primary" block class="mt-4">Register</v-btn>
      </v-form>

      <v-divider class="my-4"></v-divider>
      
      <div class="text-center">
        <p>
          Já tem uma conta?
          <router-link :to="{ path: 'login' }" class="text-decoration-underline">Entre</router-link>
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
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        const register = await this.userStore.register({
          name: this.name,
          email: this.email,
          password: this.password,
        });
        if (register) {
          this.$router.push({ name: "login" });
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.text-decoration-underline {
  text-decoration: underline;
}
</style>
