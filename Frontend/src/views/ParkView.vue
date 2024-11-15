<template>
  <v-container class="parking-details" fluid>
    <v-card class="mx-auto my-5" max-width="600">
      <img
        src="../assets/img/parque1.jpeg"
        alt="Imagem do Parque de Estacionamento"
        height="300"
      />

      <v-card-title class="text-h4">{{ park.name }}</v-card-title>

      <v-card-subtitle class="text-h6">{{ park.location }}</v-card-subtitle>

      <v-card-text>
        <v-row>
          <v-col>
            <p class="text-body-1">Preço por Hora: {{ park.price }} €</p>
          </v-col>
          <v-col>
            <p class="text-body-1">Capacidade: {{ park.capacity }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p class="text-body-1">Lugares Livres: {{ park.free_places }}</p>
          </v-col>
          <v-col>
            <p class="text-body-1">Avaliação Média: {{ 3 }}</p>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" @click="enterCar">Marcar Entrada</v-btn>
        <v-btn color="secondary" @click="seeReports">Ver Relatórios</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { useParkStore } from "@/stores/parkStore";
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      parkStore: useParkStore(),
    };
  },

  created() {
    const parkId = this.$route.params.parkId;
    this.parkStore.fetchPark(parkId);
  },

  computed: {
    park() {
      const park = this.parkStore.getPark;
      if (park == null) {
        return {
          name: "Nome do Parque",
          location: "Localização do Parque",
          price: 0,
          capacity: 0,
          free_places: 0,
          average_rating: 0,
        };
      }
      return this.parkStore.getPark;
    },
  },

  methods: {
    enterCar() {
      try {
        this.parkStore.addPlace(this.park).then(() => {
          if (this.parkStore.getPlaceId != null) {
            this.$router.push({
              name: "place",
              params: { placeId: this.parkStore.getPlaceId },
            });
          }
        });
      } catch (error) {
        console.error(error);
      }
    },

    seeReports() {
      this.$router.push({
        name: "reports",
        params: { parkId: this.park.id_park },
      });
    },
  },
};
</script>

<style scoped>
.parking-details {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-h4 {
  margin-bottom: 10px;
}

.text-h6 {
  color: gray;
  margin-bottom: 20px;
}
</style>
