<template>
  <div class="summary__page">
    <div class="summary__content">
      <div class="summary__experience-element">
        <h3 class="summary__experience-title">
          ООО “Сахаинтернет”
        </h3>
        <div class="summary__experience-location-keeper">
          <span class="summary__experience-location">Якутск</span>
          <a href="javascript:void(0)" class="summary__experience-website">http://sinetgroup.net</a>
        </div>
        <div class="summary__experience-position-keeper">
          <h3 class="summary__experience-position">
            Помощник арт-директора
          </h3>
          <span class="summary__experience-date">Ноябрь 2011 — Июнь 2012 (8 месяцев)</span>
        </div>
        <span class="summary__experience-job">
          Проектирование и дизайн веб-интерфейсов, сайтов, приложений.
        </span>
        <div class="summary__experience-action-keeper">
          <a href="javascript:void(0)" class="summary__experience-action" data-action="edit">Редактировать</a>
          <a href="javascript:void(0)" class="summary__experience-action" data-action="remove">Удалить</a>
        </div>
      </div>
      <hr class="summary__experience-divider">
      <div class="summary__experience-element">
        <h3 class="summary__experience-title">
          ООО МГ “Реакция”
        </h3>
        <div class="summary__experience-location-keeper">
          <span class="summary__experience-location">Якутск</span>
        </div>
        <div class="summary__experience-position-keeper">
          <h3 class="summary__experience-position">
            Веб-дизайнер
          </h3>
          <span class="summary__experience-date">Июль 2012 — Май 2015 (2 года 11 месяцев)</span>
        </div>
        <span class="summary__experience-job">
          Проектирование и дизайн веб-интерфейсов, сайтов, приложений.
        </span>
        <div class="summary__experience-action-keeper">
          <a href="javascript:void(0)" class="summary__experience-action" data-action="edit">Редактировать</a>
          <a href="javascript:void(0)" class="summary__experience-action" data-action="remove">Удалить</a>
        </div>
      </div>
      <hr class="summary__experience-divider">
      <button class="button button_primary summary__experience-button" @click="$emit('openExperience')">
        Добавить опыт работы
      </button>
    </div>
  </div>
</template>
<script src="./resume-work-full.js"></script>
<style scoped src="./resume-work-full.css"></style>
