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
    <div class="summary__content">
      <h4 class="summary__content-title">
        Добавить опыт работы
      </h4>
      <form action="#" method="POST" class="summary__form">
        <div class="summary__form-group">
          <label class="summary__form-label" for="organization">Организация</label>
          <input id="organization" class="summary__form-input" name="organization" type="text" placeholder="Название компании">
        </div>
        <div class="summary__form-row">
          <div class="summary__form-group">
            <label class="summary__form-label" for="start-month">Начало работы</label>
            <div class="summary__splitet-keeper">
              <custom-select :options="months" />
              <input class="summary__splitet-input" type="number" placeholder="Год">
            </div>
          </div>
          <div class="summary__form-group">
            <label class="summary__form-label" for="start-year">Окончание</label>
            <div class="summary__splitet-keeper">
              <custom-select :options="months" />
              <input class="summary__splitet-input" type="number" placeholder="Год">
            </div>
          </div>
          <div class="summary__form-group">
            <label class="summary__checkbox-label" for="now-working">
              <input
                id="now-working"
                class="summary__checkbox-input"
                type="checkbox"
                value="now-working"
                name="category"
                checked
              >
              <div class="checkbox-input_custom">
                <div class="checkbox-input-active" />
              </div>
              По настоящее время
            </label>
          </div>
        </div>
        <div class="summary__form-row">
          <div class="summary__form-group">
            <label for="location" class="summary__form-label">Местоположение компании</label>
            <input id="location" class="summary__form-input" name="location" type="text">
          </div>
          <div class="summary__form-group summary__form-group_big">
            <label for="website" class="summary__form-label">Сайт</label>
            <input id="website" class="summary__form-input" name="website" type="text" placeholder="http://">
          </div>
        </div>
        <div class="summary__form-group">
          <label class="summary__form-label" for="position">Должность</label>
          <input id="position" class="summary__form-input" type="text" name="position" placeholder="Укажите должность">
        </div>
        <div class="summary__form-group">
          <label class="summary__form-label" for="what-you-do">Обязанности на рабочем месте</label>
          <textarea id="what-you-do" class="summary__form-textarea" name="what-you-do" placeholder="Опишите, что вы делали на работе. Работодатели часто ищут резюме по ключевым навыкам, например, «работа в торговом зале», «работа с документами», «сопровождение первых лиц», «управление коллективом» и т.д." />
        </div>
        <button class="button button_primary summary__submit-button" type="submit">
          Опубликовать
        </button>
      </form>
    </div>
  </div>
</template>
<script src="./experience-add-section.js"></script>
<style src="./experience-add-section.css"></style>
