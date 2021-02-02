<template>
  <div v-if="!visibleFull">
    <button class="button button_white summary__responsive-menu-opener">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="4"
          y="15"
          height="2"
          width="16"
          rx="1"
          fill="#272C31"
        />
        <rect
          x="4"
          y="7"
          height="2"
          width="16"
          rx="1"
          fill="#272C31"
        />
      </svg>
    </button>
    <education-add-section />
  </div>
  <div v-else>
    <button class="button button_white summary__responsive-menu-opener">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="4"
          y="15"
          height="2"
          width="16"
          rx="1"
          fill="#272C31"
        />
        <rect
          x="4"
          y="7"
          height="2"
          width="16"
          rx="1"
          fill="#272C31"
        />
      </svg>
    </button>
    <div v-if="!getEducation.length" class="summary__empty-content">
      <h3>Не указано образование</h3>
      <article>
        Укажите высшие учебные заведения, которые вы закончили, а также вашу учебную специализацию и достижения.
      </article>
      <button class="button button_primary" @click="addEducation">
        Добавить образование
      </button>
    </div>
    <div v-else>
      <resume-full-education @openEducation="addEducation" />
    </div>
  </div>
</template>
<script src="./resume-education.js"></script>
<style scoped src="./resume-education.css"></style>
