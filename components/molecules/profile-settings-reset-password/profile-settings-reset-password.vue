<template>
  <div class="settings__keeper">
    <form action="#" method="GET">
      <div class="settings__form-row">
        <div class="settings__form-group">
          <label class="settings__form-label" for="pass">Текущий пароль</label>
          <input id="pass" class="settings__form-input" type="password" name="pass" autocomplete="off">
          <span class="settings__form-subtext">
            <a class="settings__form-subtext-link" href="#">Забыли пароль?</a>
          </span>
        </div>
        <div class="settings__form-group">
          <label class="settings__form-label" for="newpass">Новый пароль</label>
          <input id="newpass" class="settings__form-input" type="password" name="newpass" autocomplete="off">
          <span class="settings__form-subtext">
            Пароль должен содержать не менее восьми знаков, включать буквы, цифры.
          </span>
        </div>
        <div class="settings__form-group">
          <label class="settings__form-label" for="repeatpass">Повторите пароль</label>
          <input id="repeatpass" class="settings__form-input" type="password" name="repeatpass" autocomplete="off">
        </div>
      </div>
      <div class="settings__form-button-keeper">
        <button class="button button_primary" type="submit">
          Сохранить
        </button>
      </div>
    </form>
  </div>
</template>
<script src="./profile-settings-reset-password.js"></script>
<style scoped src="./profile-settings-reset-password.css"></style>
