<template>
    <div class="parking-details">
      <h2>{{ park.name }}</h2>
      <img :src="park.image" alt="Imagem do Parque de Estacionamento" class="parking-image" />
      <p class="parking-location">Localização: {{ park.location }}</p>
      <p class="parking-price">Preço por Hora: {{ park.price }} €</p>
      <p class="parking-capacity">Capacity: {{ park.capacity }}</p>
      <p class="parking-description">Free Places{{ park.free_places }}</p>
      <p class="parking-average-rating">Average Rating: {{ park.average_rating }}</p>
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

    created () {
      const parkId=this.$route.params.parkId;
      this.parkStore.fetchPark(parkId)
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
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .parking-image {
      width: 300px;
      height: 200px;
      object-fit: cover;
      margin-bottom: 20px;
    }
    .parking-location {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }
    .parking-price {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }
    .parking-capacity {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }
    .parking-description {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }
    .parking-average-rating {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }
  </style>
  