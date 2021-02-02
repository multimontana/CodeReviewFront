<template>
  <section class="education">
    <h1 class="education__title">
      Мое обучение
    </h1>
    <tabs :tabs="educationTabs" :on-click-event="(index) => tabChangeEvent(index)" />
    <div class="education__courses">
      <education-course
        v-for="(course, index) in courses"
        :key="course.id"
        :course="course"
        :index="index"
      />
    </div>
  </section>
</template>

<script src="./education-section.js"></script>
<style scoped src="./education-section.css"></style>
