<template>
  <v-card class="parking-card" outlined max-width="300">
    <img
      src="../assets/img/parque1.jpeg"
      height="180"
      alt="Imagem do Parque"
      class="parking-image"
    />
    <v-card-title class="parking-name">{{ park.name }}</v-card-title>
    <v-card-subtitle class="parking-location">{{ park.location }}</v-card-subtitle>
    <v-card-text>
      <div class="parking-price">Preço por Hora: {{ park.price }} €</div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        :to="{ name: 'park', params: { parkId: park.id_park } }"
        color="primary"
        block
        outlined
      >
        Ver Detalhes
      </v-btn>
    </v-card-actions>
  </v-card>
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
        price: 2.3,
        image: "", // Imagem em base64 ou caminho para imagem
      }),
    },
  },
};
</script>

<style scoped>
.parking-card {
  transition: box-shadow 0.3s ease;
}
.parking-card:hover {
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

.parking-name {
  font-weight: bold;
}

.parking-location {
  color: #555;
}

.parking-price {
  font-size: 1rem;
  color: #333;
  font-weight: 500;
  margin-top: 0.5rem;
}
</style>