<script setup>

</script>

<template>
  <main class="container">
    <h1>Calculator</h1>
    <div class="calculator">


    </div>
  </main>
</template>
<style lang="scss" scoped>
@use '../assets/scss/main' as *;
.container{
  @include FlexDisplay(column, center, normal, 100%, auto);
  .calculator{
    @include FlexDisplay(column, center, normal, 70%, 90vh);
    background-color: $CalculatorColor;
  }
}
</style>