<template>
  <div class="summary__page">
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
    <div class="summary__form-group">
      <label class="summary__checkbox-label" for="busyType">Тип занятости</label>
      <div class="summary__checkbox-keeper">
        <label class="summary__checkbox">
          <input class="summary__checkbox-input" type="checkbox">
          <div class="summary__checkbox-input_custom">
            <div class="summary__checkbox-input-active" />
          </div>
          Полная занятость
        </label>
        <label class="summary__checkbox">
          <input class="summary__checkbox-input" type="checkbox">
          <div class="summary__checkbox-input_custom">
            <div class="summary__checkbox-input-active" />
          </div>
          Частичная занятость
        </label>
        <label class="summary__checkbox">
          <input class="summary__checkbox-input" type="checkbox">
          <div class="summary__checkbox-input_custom">
            <div class="summary__checkbox-input-active" />
          </div>
          Проектная работа
        </label>
        <label class="summary__checkbox">
          <input class="summary__checkbox-input" type="checkbox">
          <div class="summary__checkbox-input_custom">
            <div class="summary__checkbox-input-active" />
          </div>
          Стажировка
        </label>
      </div>
      <label class="summary__checkbox-label" for="dayGrafic">График работы</label>
      <div class="summary__checkbox-keeper">
        <label class="summary__checkbox">
          <input class="summary__checkbox-input" type="checkbox">
          <div class="summary__checkbox-input_custom">
            <div class="summary__checkbox-input-active" />
          </div>
          Полный день
        </label>
        <label class="summary__checkbox">
          <input class="summary__checkbox-input" type="checkbox">
          <div class="summary__checkbox-input_custom">
            <div class="summary__checkbox-input-active" />
          </div>
          Гибкий график
        </label>
        <label class="summary__checkbox">
          <input class="summary__checkbox-input" type="checkbox">
          <div class="summary__checkbox-input_custom">
            <div class="summary__checkbox-input-active" />
          </div>
          Удаленная работа
        </label>
      </div>
      <div class="summary__form-row">
        <div class="summary__double-form">
          <label class="summary__checkbox-label" for="wages">Зарплата</label>
          <div class="summary__form-group-keeper">
            <div class="summary__form-group">
              <input class="summary__form-input" type="text" placeholder="От">
              <span class="summary__form-input-currency">
                ₽
              </span>
            </div>
            <div class="summary__form-group">
              <input class="summary__form-input" type="text" placeholder="до">
              <span class="summary__form-input-currency">
                ₽
              </span>
            </div>
          </div>
        </div>
        <div class="summary__form-group">
          <label class="summary__checkbox-label" for="currency">Валюта</label>
          <custom-select :options="currencies" />
        </div>
      </div>
      <div class="summary__button-keeper">
        <button class="button button_primary">
          Сохранить
        </button>
      </div>
    </div>
  </div>
</template>
<script src="./work-wishes.js"></script>
<style scoped src="./work-wishes.css"></style>
