<template>
  <div>
    <button class="course-sec__back-button button" @click="$router.back()">
      <img class="course-sec__back-icon" src="@/assets/icons/arrow-left.svg" alt="Arrow Left">
      Вернуться на курсы
    </button>
    <h1 class="course-sec__title">
      Основы языка Python
    </h1>
    <div class="course-sec__content">
      <course-information />
      <course-description />
    </div>
  </div>
</template>
<script src="./course-section.js"></script>
<style scoped src="./course-section.css"></style>
