<template>
  <div>
    <h1>Login</h1>
  </div>
  <form @submit.prevent="login" >
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required v-model="email" />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" />
    </div>
    <div>
      <button type="submit">Login</button>
    </div>
    <hr />
    <div>
      <p>
        Não tem conta?
        <router-link :to="{ path: 'register' }">Crie uma</router-link>
      </p>
    </div>
  </form>
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
    login() {
      try {
        const login = this.userStore.login({
          email: this.email,
          password: this.password,
        });
        if (login) {
          this.$router.push({ name: "home" });
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style></style>
