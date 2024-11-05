<template>
    <div class="parking-details">
      <h2>{{ park.name }}</h2>
      <img :src="park.image" alt="Imagem do Parque de Estacionamento" class="parking-image" />
      <p class="parking-location">Localização: Rua Parque 1, Porto</p>
      <p class="parking-price">Preço por Hora: 2.30 €</p>
      <p class="parking-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
  </template>
  
  <script>
import { useParkStore } from '@/stores/parkStore';

  export default {
    data() {
      return {
        parkStore:useParkStore()
      };
    },
    created() {
      const parkId = this.$route.params.id;
      console.log(parkId)
    },
    computed: {
      park() {
        return this.parkStore.getPark;
      }
    },
 };
  </script>
  
  <style scoped>
  .parking-details {
    max-width: 600px;
    margin: 2rem auto;
    text-align: center;
  }
  
  .parking-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-top: 1rem;
  }
  
  .parking-location,
  .parking-price,
  .parking-description {
    font-size: 1rem;
    margin: 0.5rem 0;
    color: #555;
  }
  
  h2 {
    font-size: 1.8rem;
    color: #333;
  }
  </style>
  