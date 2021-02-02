<template>
  <div class="settings__keeper">
    <div class="settings__notification-keeper">
      <div :class="`settings__mailings-notifications${!toggleState ? ' disabled' : ''}`">
        <div class="settings__notification-title-keeper">
          <span :class="`toggle${toggleState ? ' active' : ''} settings__notification-toggle`" @click="toggleHandler" />
          <h3 class="settings__notification-title">
            Рассылки
          </h3>
        </div>
        <label class="settings__form-label" for="telephone">Укажите рассылки, которые вы хотели бы получать на E-mail</label>
        <div class="settings__checkbox-keeper">
          <div class="settings__checkbox">
            <label class="settings__checkbox-label" for="check1">
              <input
                id="check1"
                class="settings__checkbox-input"
                type="checkbox"
                value="check1"
                name="category"
                checked="true"
              >
              <div class="settings__checkbox-input_custom">
                <div class="settings__checkbox-input-active" />
              </div>
              Специальные предложения и услуги
            </label>
          </div>
          <div class="settings__checkbox">
            <label class="settings__checkbox-label" for="check2">
              <input id="check2" class="settings__checkbox-input" type="checkbox" value="check2" name="category">
              <div class="settings__checkbox-input_custom">
                <div class="settings__checkbox-input-active" />
              </div>
              Новостная рассылка
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./mailing.js"></script>
<style scoped src="./mailing.css"></style>
