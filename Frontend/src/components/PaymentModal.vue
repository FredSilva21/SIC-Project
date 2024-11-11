<template>
  <v-card>
    <v-card-title>
      <span class="headline">Pagamento</span>
      <span class="close">
        <v-btn color="primary" @click="$emit('close')">Fechar</v-btn>
      </span>
    </v-card-title>
    <v-card-text>
      <v-row class="mb-4">
        <v-col cols="12">
          <div><strong>Parque:</strong> {{ park.name }}</div>
          <div>
            <strong>Tempo Estacionado:</strong> {{ duration().hours }}h
            {{ duration().minutes }}min {{ duration().seconds }}seg
          </div>
          <div><strong>Total a Pagar:</strong> {{ amount() }} €</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="cardNumber"
            label="Número do Cartão"
            prepend-icon="mdi-credit-card"
            type="number"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="cardName"
            label="Nome do Titular"
            prepend-icon="mdi-account"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="cardExpiration"
            label="Validade"
            prepend-icon="mdi-calendar"
            pattern="\d{2}/\d{2}"
            maxlength="5"
            hint="Formato: MM/AA"
            persistent-hint
            required
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="cardCVV"
            label="CVV"
            prepend-icon="mdi-lock"
            type="number"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="pay">Pagar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    place: Object,
    park: Object,
  },
  data() {
    return {
      cardNumber: "",
      cardName: "",
      cardExpiration: "",
      cardCVV: "",
      totalPrice: 0,
    };
  },

  methods: {
    toggleModal() {
      this.showPaymentModal = !this.showPaymentModal;
    },

    duration() {
      const diffInHours =
        Math.abs(new Date(this.place.end) - new Date(this.place.start)) / 36e5;
      const hours = Math.floor(diffInHours);
      const minutes = Math.floor((diffInHours - hours) * 60);
      const seconds = Math.floor((diffInHours - hours) * 3600 - minutes * 60);
      return { hours, minutes, seconds };
    },

    amount() {
      const durationHours =
        Math.abs(new Date(this.place.end) - new Date(this.place.start)) / 36e5;
      this.totalPrice = durationHours * this.park.price;
      return this.totalPrice.toFixed(2);
    },

    pay() {
      if (
        this.cardNumber === "" ||
        this.cardName === "" ||
        this.cardExpiration === "" ||
        this.cardCVV === ""
      ) {
        alert("Por favor, preencha todos os campos");
      } else {
        this.$emit("pay", {
            cardNumber: this.cardNumber,
            cardName: this.cardName,
            cardExpiration: this.cardExpiration,
            cardCVV: this.cardCVV,
            totalPrice: this.totalPrice.toFixed(2),
        });
      }
    },
  },
};
</script>

<style scoped>
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
  cursor: pointer;
}

.icon {
  font-size: 24px;
  color: black;
}
</style>
