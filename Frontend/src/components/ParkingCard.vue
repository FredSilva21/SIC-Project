<template>
    <router-link to="/park" class="parking-card">
        <div class="parking-card">
            <img src="../assets/img/parque1.jpeg" alt="Parque 1" class="parking-image" />
            <div class="parking-info">
                <h3 class="parking-name">Parque 1</h3>
                <p class="parking-location">Rua Parque 1, Porto</p>
                <p class="parking-price">Preço por Hora:  2.30 €</p>
            </div>
        </div>
    </router-link>
</template>
  
<script>
    export default {
        props: {
            image: String,
            name: String,
            location: String,
            pricePerHour: Number,
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
  