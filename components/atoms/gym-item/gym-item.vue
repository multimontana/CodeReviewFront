<template>
  <nuxt-link ref="link" :to="'/gym/simulator/direction/' + simulator.id">
    <div class="gym__item">
      <img class="gym__item-image" src="@/assets/icons/java.svg" alt="Java">
      <h4 class="gym__item-title">
        {{ simulator.name }}
      </h4>
    </div>
  </nuxt-link>
</template>
<script src="./gym-item.js"></script>
<style scoped src="./gym-item.css"></style>
