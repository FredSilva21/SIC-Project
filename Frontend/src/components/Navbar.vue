<template>
  <nav>
            <div class="container">
                <h3>MyPark</h3>
                    
                <ul id="nav__items">
                    <li><a href="/login" class="btn login-btn" ><i class='bx bxl-whatsapp' @click="logout"></i>Logout</a></li>
                </ul>
        
                <button id="open__nav-btn"><i class='bx bx-menu'></i></button>
                <button id="close__nav-btn"><i class='bx bx-x' ></i></button>
            </div>
        </nav>
</template>

<script>
import { useUserStore } from '@/stores/userStore';

export default {
  data() {
    return {
      userStore: useUserStore()
    };
  },

  computed: {
    user() {
      return this.userStore.getUserData;
    }
  },

  created () {
    const id = localStorage.getItem('user_Id');
    this.userStore.fetchUser(id);
  },

  methods: {
    logout() {
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("token");
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");
* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    list-style: none;
    text-decoration: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

body {
    font-family: Montserrat, sans-serif;
    line-height: 1.5;
    color: rgba(12, 3, 27, 0.7);
    background: rgba(76, 201, 240, 0.1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #fff;
}
.container {
    width: 82%;
    margin: 0 auto;
}
img {
    display: block;
    width: 100%;
}
h1,
h2,
h3,
h4,
h5 {
    line-height: 1.2;
}
section {
    margin-top: 6rem;
}
section > h2 {
    text-align: center;
}
section > p {
    text-align: center;
    width: 42%;
    margin: 0.6rem auto 2.5rem;
}

.btn {
    display: block;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    padding: 0.75rem 1rem;
    border-radius: 0.4rem;
    background: #ffffff;
    cursor: pointer;
    -webkit-transition: all 400ms ease;
    transition: all 400ms ease;
    color: black;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    gap: 0.3rem;
}

.btn i {
    color: inherit;
}
.btn:hover {
    background: #f0f0f0;
    -webkit-box-shadow: 0 1rem 1.6rem rgba(12, 3, 27, 0.15);
    box-shadow: 0 1rem 1.6rem rgba(12, 3, 27, 0.15);
}

.login-btn {
    color: black !important;
}
.btn-primary {
    display: block;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    padding: 0.75rem 1rem;
    border-radius: 0.4rem;
    background: #480ca8;
    cursor: pointer;
    -webkit-transition: all 400ms ease;
    transition: all 400ms ease;
    color: #fff;
}
.btn-primary:hover {
    background: #580fce;
    -webkit-box-shadow: 0 1rem 1.6rem rgba(12, 3, 27, 0.15);
    box-shadow: 0 1rem 1.6rem rgba(12, 3, 27, 0.15);
}

nav {
    width: 100vw;
    height: 5rem;
    position: fixed;
    z-index: 10;
    display: -ms-grid;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg, #480ca8, #4cc9f0);
    color: #fff;
    -webkit-box-shadow: 0 1rem 1rem rgba(12, 3, 27, 0.1);
    box-shadow: 0 1rem 1rem rgba(12, 3, 27, 0.1);
}
nav h1,
nav h2,
nav h3,
nav h4,
nav h5 {
    color: #fff;
}
nav.window-scroll {
    background: #fff;
}
nav.window-scroll .container button {
    color: #0c031b;
}
nav.window-scroll .container a {
    color: #0c031b;
}
nav.window-scroll .container a > h3 {
    color: #0c031b;
}
nav.window-scroll .container a.btn {
    color: #fff;
}
nav .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
nav .container ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 3rem;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
nav .container button {
    display: none;
}
nav .container a {
    color: #fff;
    font-weight: 400;
    font-size: 0.9rem;
}
nav .container .nav__logo {
    color: #fff;
}
</style>