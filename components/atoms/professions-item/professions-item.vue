<template>
  <nuxt-link :to="`/professions/${element.id}`" class="professions__item">
    <img class="professions__item-image" :src="element.image" alt="">
    <h4 class="professions__item-title">
      {{ element.title }}
    </h4>
  </nuxt-link>
</template>
<script src="./professions-item.js"></script>
<style scoped src="./professions-item.css"></style>
