<template>
  <Navbar />
  
  <ParkingCard />
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ParkingCard from '@/components/ParkingCard.vue';

export default{

components: {
  Navbar,
  ParkingCard,
},
}
</script>