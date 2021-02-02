<template>
  <div v-if="visibleFull">
    <div class="summary__page summary__page_empty">
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
      <div v-if="!getExperience.length" class="summary__empty-content">
        <h3>Не указан опыт работы</h3>
        <article>
          Укажите компании, в которых вы работали, а также ваши должностные обязанности.
        </article>
        <button class="button button_primary" @click="addExperience">
          Добавить место работы
        </button>
      </div>
      <div v-else>
        <resume-work-full @openExperience="addExperience" />
      </div>
    </div>
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
    <experience-add-section />
  </div>
</template>
<script src="./resume-work-experience.js"></script>
<style scoped src="./resume-work-experience.css"></style>
