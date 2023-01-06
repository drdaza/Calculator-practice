<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HeaderCalculator from './components/Header/HeaderCalculator.vue';

</script>

<template>
  <header>
    <HeaderCalculator/>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
</style>
