<template>
    <nav class="navbar">
      <ul class="navbar-list">
        <li class="navbar-item">
          <router-link to="/"> <button>Home </button> </router-link>
        </li>
        <li class="navbar-item">
            <router-link to="/"> <button>Sobre Nós</button> </router-link>
        </li>
        <li class="navbar-item">
            <router-link to="/"> <button>Contacto</button> </router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    methods: {
      navigateTo(page) {
        this.$router.push({ name: page });
      }
    }
  }
  </script>
  
  <style scoped>
  .navbar {
    background-color: #007BFF; /* Azul */
    padding: 1rem;
    display: flex;
    justify-content: center;
  }
  
  .navbar-list {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  
  .navbar-item button {
    background: none;
    border: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .navbar-item button:hover {
    text-decoration: underline;
  }
  </style>
  