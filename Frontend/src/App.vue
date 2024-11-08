<template>
  <RouterView />
</template>
<script>
import { useParkStore } from './stores/parkStore';

export default {
  data() {
    return {
      useParkStore: useParkStore(),
    }
  },

  mounted(){
    this.useParkStore.connect()
  },

  beforeDestroy(){
    this.useParkStore.disconnect()
  }
};
</script>