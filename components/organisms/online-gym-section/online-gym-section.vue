<template>
  <section class="trenazhor">
    <h1 class="trenazhor__title">
      Онлайн-тренажер
    </h1>
    <article class="trenazhor__subtitle">
      Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.
    </article>

    <div class="trenazhor__list">
      <Categories class="tests__categories" :categories="getCategories" />
      <GymItem v-for="(simulator, index) in getSimulators" :key="index" :simulator="simulator" />
    </div>
  </section>
</template>
<script src="./online-gym-section.js"></script>
<style scoped src="./online-gym-section.css"></style>
