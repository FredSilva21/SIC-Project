<template>
  <v-container
    class="d-flex justify-center align-center flex-column"
    style="height: 100vh; width: 50%"
  >
    <h1 class="text-center">Login</h1>
    <v-form @submit.prevent="login">
      <v-text-field
        label="Email"
        v-model="email"
        type="email"
        required
        outlined
        prepend-icon="mdi-email"
      ></v-text-field>
      <v-text-field
        label="Password"
        v-model="password"
        type="password"
        required
        outlined
        prepend-icon="mdi-lock"
        class="mb-4"
        dense
        full-width
      ></v-text-field>
      <v-btn class="mt-4" type="submit" color="primary" block>Login</v-btn>
    </v-form>
    <v-divider class="my-4"></v-divider>
    <div class="text-center">
      <p>
        Não tem conta?
        <router-link :to="{ path: 'register' }">Crie uma</router-link>
      </p>
    </div>
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
        console.log(logId);
        if (logId===true) {
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
/* Adicione estilos adicionais, se necessário */
</style>
