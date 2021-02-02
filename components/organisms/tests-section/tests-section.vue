<template>
  <section class="tests">
    <div class="tests__title-keeper">
      <h1 class="tests__title">
        Тесты
      </h1>
      <article class="tests__description">
        Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.
      </article>
    </div>
    <div class="settings__form-group select_custom">
      <CustomSelect class="settings__country-select select_custom_component" :options="getDifficultyLevels" @get-active="handleSelectActive" />
    </div>
    <div class="tests__list">
      <Categories class="tests__categories" :categories="getCategories" @filterCategory="filterCategory" />
      <Loader v-if="!syncLoader || !asyncLoader" @changeLoader="asyncLoader = true" />
      <TestsItem v-for="quiz in getQuizes" v-else :key="quiz.id" :quiz="quiz" :difficulty="filterCategoriesAndDifficulty.difficulty" />
    </div>
  </section>
</template>
<script src="./tests-section.js"></script>
<style scoped src="./tests-section.css"></style>
