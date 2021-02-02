<template>
  <section class="lessons">
    <button class="lessons__back-button button">
      <img class="lessons__back-icon" src="@/assets/icons/arrow-left.svg" alt="Arrow Left">
      Вернуться на курсы
    </button>
    <h1 class="lessons__title">
      Основы языка Python
    </h1>
    <div class="lessons__lesson-keeper">
      <education-lesson-list v-if="!responsive" :is-open="sidebar" />
      <education-lesson :sidebar-open="sidebarOpen" :is-open="sidebar" :responsive="responsive" />
      <education-class />
    </div>
  </section>
</template>

<script src="./education-lesson-section.js"></script>
<style src="./education-lesson-section.css"></style>
