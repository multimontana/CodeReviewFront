<template>
  <div class="summary__content">
    <h4 class="summary__content-title">
      Добавить образование
    </h4>
    <form action="#" method="POST" class="summary__form">
      <div class="summary__form-group summary__form-group_middle">
        <label class="summary__form-label" for="level">Уровень</label>
        <custom-select class="summary__form-input" :options="educationLevels" />
      </div>
      <div class="summary__form-group">
        <label class="summary__form-label" for="where">Учебное заведение</label>
        <input id="where" class="summary__form-input" type="text" name="where" placeholder="Название или аббревиатура">
      </div>
      <div class="summary__form-group">
        <label class="summary__form-label" for="graduation">Год окончания</label>
        <div class="summary__input-text-keeper">
          <input id="graduation" class="summary__form-input" type="text" name="graduation" placeholder="Год">
          <span class="summary__input-text">Если учитесь в настоящее время — укажите год предполагаемого окончания</span>
        </div>
      </div>
      <button class="button button_primary summary__submit-button" type="submit">
        Опубликовать
      </button>
    </form>
  </div>
</template>
<script src="./education-add-section.js"></script>
<style src="./education-add-section.css"></style>
