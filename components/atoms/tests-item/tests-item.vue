<template>
  <nuxt-link ref="link" :to="`/tests/test-description/${quiz.id}?difficulty=${difficulty}`">
    <div class="tests__item">
      <img class="tests__item-image" src="@/assets/icons/java.svg" alt="Java">
      <h4 class="tests__item-title">
        {{ quiz.name }}
      </h4>
    </div>
  </nuxt-link>
</template>
<script src="./tests-item.js"></script>
<style scoped src="./tests-item.css"></style>
