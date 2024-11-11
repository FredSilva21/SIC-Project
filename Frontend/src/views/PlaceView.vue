<template>
  <v-container v-if="showPaymentModal">
    <PaymentModal
      :place="place"
      :park="park"
      @close="showPaymentModal = false, this.place.end=null"
      @pay="payPlace"
    ></PaymentModal>
  </v-container>
  <v-container class="place" fluid v-else>
    <v-card class="mx-auto my-5" max-width="600">
      <v-card-title>
        <h1 class="text-h4">Detalhes do Lugar</h1>
      </v-card-title>

      <v-card-text>
        <v-row>
          <v-col>
            <h2 class="text-h5">Parque: {{ park.name }}</h2>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <h3 class="text-body-1">Início: {{ formatDate(place.start) }}</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-select
              label="Interval"
              :items="[
                '5 minutos',
                '10 minutos',
                '15 minutos',
                '30 minutos',
                '1 hora',
              ]"
              v-model="notificationInterval"
            ></v-select>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" @click="toggleModal">Fazer Pagamento</v-btn>
        <v-btn color="primary" @click="notifyUser">Notificar</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import PaymentModal from "@/components/PaymentModal.vue";
import { useParkStore } from "@/stores/parkStore";
import { useNotStore } from "@/stores/notificationStore";

export default {
  components: {
    PaymentModal
  },
  data(){
    return {
      useParkStore: useParkStore(),
      useNotStore: useNotStore(),
      notificationInterval: "5 minutos",
      showPaymentModal: false,
    };
  },

  created() {
    const placeId = this.$route.params.placeId;
    this.useParkStore.fetchPlace(placeId).then(() => {
      this.useParkStore.fetchPark(this.place.id_park);
    });
  },

  computed: {
    place() {
      const place = this.useParkStore.getPlace;
      if (place == null) {
        return {
          id: 0,
          start: new Date(),
          end: new Date(),
          id_park: 0,
          id_user: 0,
        };
      }
      return this.useParkStore.getPlace;
    },
    park() {
      const park = this.useParkStore.getPark;
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
      return this.useParkStore.getPark;
    }
  },

  methods: {
    formatDate(date) {
      return new Date(date).toLocaleTimeString();
    },

    toggleModal() {
      this.place.end = new Date().toISOString();;
      this.showPaymentModal = !this.showPaymentModal;

      if(this.showPaymentModal){
        setTimeout(() => {
          this.showPaymentModal = false;
          this.place.end = null;
        }, 5 * 60 * 1000);
      }
    },

    payPlace() {
      try {
        this.useParkStore.editPlace(this.place,this.park);
        this.$router.push({ name: "home" });
      } catch (error) {
        console.error(error);
      }
    },

    notifyUser() {
      switch (this.notificationInterval) {
        case "5 minutos":
          this.notificationInterval = 5;
          break;
        case "10 minutos":
          this.notificationInterval = 10;
          break;
        case "15 minutos":
          this.notificationInterval = 15;
          break;
        case "30 minutos":
          this.notificationInterval = 30;
          break;
        case "1 hora":
          this.notificationInterval = 60;
          break;
        default:
          this.notificationInterval = 5;
          break;
      }
      try {
        this.useNotStore.notifyTime(this.place,this.park.price, this.notificationInterval);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
      
</script>

<style scoped>
.place {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.text-h4 {
  margin-bottom: 10px;
}
.v-card-text {
  padding-top: 10px;
}
</style>