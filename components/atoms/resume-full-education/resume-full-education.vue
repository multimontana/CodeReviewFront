<template>
  <div class="summary__page">
    <div class="summary__content">
      <div class="summary__experience-element">
        <h3 class="summary__experience-title">
          СВФУ им. М. К. Аммосова
        </h3>
        <div class="summary__experience-location-keeper">
          <span class="summary__experience-location">Якутск</span>
        </div>
        <div class="summary__experience-position-keeper">
          <h3 class="summary__education-fakultet">
            Факультет: Институт математики и информатики
          </h3>
          <span class="summary__experience-job">
            Проектирование и дизайн веб-интерфейсов, сайтов, приложений.
          </span>
          <span class="summary__experience-date">Ноябрь 2011 — Июнь 2012 (8 месяцев)</span>
        </div>
        <div class="summary__experience-action-keeper">
          <a href="javascript:void(0)" class="summary__experience-action" data-action="edit">Редактировать</a>
          <a href="javascript:void(0)" class="summary__experience-action" data-action="remove">Удалить</a>
        </div>
      </div>
      <hr class="summary__experience-divider">
      <button class="button button_primary summary__experience-button" @click="$emit('openEducation')">
        Добавить образование
      </button>
    </div>
  </div>
</template>
<script src="./resume-full-education.js"></script>
<style src="./resume-full-education.css"></style>
