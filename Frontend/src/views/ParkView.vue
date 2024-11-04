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
  export default {
    data() {
      return {
        park: null,
      };
    },
//     created() {
//       const parkId = this.$route.params.id;
//       this.fetchParkDetails(parkId);
//     },
//     methods: {
//       fetchParkDetails(id) {
//         // Simulação de dados; idealmente, obterias isto de uma API ou base de dados
//         const parks = [
//           {
//             id: '1',
//             name: 'Parque Central',
//             image: 'https://example.com/image1.jpg',
//             location: 'Rua das Flores, 123',
//             pricePerHour: 2.5,
//             description: 'Parque de estacionamento com ampla capacidade e segurança 24 horas.',
//           },
//           {
//             id: '2',
//             name: 'Parque Avenida',
//             image: 'https://example.com/image2.jpg',
//             location: 'Avenida Principal, 456',
//             pricePerHour: 3.0,
//             description: 'Localização central, ideal para quem quer acesso fácil a pontos turísticos.',
//           },
//         ];
//         // Busca o parque pelo ID
//         this.park = parks.find((p) => p.id === id);
//       },
//     },
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
  