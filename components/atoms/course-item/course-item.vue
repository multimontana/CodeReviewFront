<template>
  <router-link :to="`/courses/${course.id}`" class="courses__item">
    <img class="courses__item-image" :src="course.image" alt="">
    <h4 class="courses__item-title">
      {{ course.name }}
    </h4>
  </router-link>
</template>

<script src="./course-item.js"></script>
<style scoped src="./course-item.css"></style>
