<template>
  <v-container class="d-flex justify-center align-center fill-height login-card">
    <v-card class="pa-4" max-width="800">
      <h1 class="mb-4 text-center">Registo</h1>
      <v-form @submit.prevent="register" class="with-100">
        <v-row class="mb-2" justify="center"> 
          <v-text-field
            label="Nome"
            v-model="name"
            type="text"
            required
            outlined
            prepend-icon="mdi-account"
            dense
            full-width
            class="input-field"
          ></v-text-field>
        </v-row>
      
        <v-row class="mb-2" justify="center"> 
          <v-text-field
            label="Email"
            v-model="email"
            type="email"
            required
            outlined
            prepend-icon="mdi-email"
            dense
            full-width
            class="input-field"
          ></v-text-field>
        </v-row>
        
        <v-row class="mb-2" justify="center"> 
          <v-text-field
            label="Password"
            v-model="password"
            type="password"
            required
            outlined
            prepend-icon="mdi-lock"
            dense
            full-width
            class="input-field"
          ></v-text-field>
        </v-row>

        <v-row justify="center">
          <v-col cols="auto">
            <v-btn class="custom-btn" type="submit" color="primary">Registar</v-btn>
          </v-col>
        </v-row>
        
      </v-form>

      <v-divider class="my-4"></v-divider>
      
      <div class="text-center">
        <p>
          Já tem conta?
          <router-link :to="{ path: 'login' }" class="text-decoration-underline">Login</router-link>
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

.login-card {
  position: absolute;
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
