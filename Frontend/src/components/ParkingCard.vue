<template>
    <router-link :to="{ name: 'park', params:{parkId:park.id_park} }" class="parking-card">
        <div class="parking-card">
            <img src="../assets/img/parque1.jpeg" alt="Parque 1" class="parking-image" />
            <div class="parking-info">
                <h3 class="parking-name">{{ park.name }}</h3>
                <p class="parking-location">{{ park.location }}</p>
                <p class="parking-price">Preço por Hora:  {{ park.price }} €</p>
            </div>
        </div>
    </router-link>
</template>
  
<script>
    export default {
        props: {
            park: {
                type: Object,
                required: true,
                default: () => ({
                    id_park: 1,
                    name: "Parque 1",
                    location: "Rua Parque 1, Porto",
                    average_rating: 1,
                    capacity: 100,
                    free_places: 50,
                    price: 2.30,
                }),
            },
        }
    }
</script>
  
<style scoped>
  .parking-card {
    display: flex;
    flex-direction: column;
    width: 250px; /* Formato retangular vertical */
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .parking-image {
    width: 100%;
    height: 180px; /* Ajuste a altura conforme necessário */
    object-fit: cover;
  }
  
  .parking-info {
    padding: 1rem;
  }
  
  .parking-name {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0.5rem 0;
  }
  
  .parking-location,
  .parking-price {
    margin: 0.3rem 0;
    color: #555;
  }
</style>