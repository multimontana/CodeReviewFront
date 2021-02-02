<template>
  <div class="settings__keeper">
    <div class="settings__notification-keeper">
      <div :class="`settings__phone-notifications${!smsState ? ' disabled' : ''}`">
        <div class="settings__notification-title-keeper">
          <span :class="`toggle${smsState ? ' active' : ''} settings__notification-toggle`" @click="smsHandler" />
          <h3 class="settings__notification-title">
            SMS уведомления
          </h3>
        </div>
        <label class="settings__form-label" for="telephone">Введите номер на который будут приходить уведомления</label>
        <div class="settings__verification-group">
          <div class="settings__form-group">
            <input id="telephone" class="settings__form-input" type="tel" name="telephone" value="(900) 900-90-90">
          </div>
          <button class="button button_primary">
            Выслать код подтверждения
          </button>
        </div>
        <label class="settings__form-label">Укажите уведомления, которые вы хотели бы получать по SMS</label>
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
              Начало урока
            </label>
          </div>
          <div class="settings__checkbox">
            <label class="settings__checkbox-label" for="check2">
              <input
                id="check2"
                class="settings__checkbox-input"
                type="checkbox"
                value="check2"
                name="category"
                checked="true"
              >
              <div class="settings__checkbox-input_custom">
                <div class="settings__checkbox-input-active" />
              </div>
              Перенос урока
            </label>
          </div>
          <div class="settings__checkbox">
            <label class="settings__checkbox-label" for="check3">
              <input id="check3" class="settings__checkbox-input" type="checkbox" value="check3" name="category">
              <div class="settings__checkbox-input_custom">
                <div class="settings__checkbox-input-active" />
              </div>
              Начало бесплатного вебинара
            </label>
          </div>
        </div>
      </div>
      <div :class="`settings__email-notifications${!emailState ? ' disabled' : ''}`">
        <div class="settings__notification-title-keeper">
          <span :class="`toggle${emailState ? ' active' : ''} settings__notification-toggle`" @click="emailHandler" />
          <h3 class="settings__notification-title">
            E-Mail уведомления
          </h3>
        </div>
        <label class="settings__form-label">Укажите уведомления, которые вы хотели бы получать по SMS</label>
        <div class="settings__checkbox-keeper">
          <div class="settings__checkbox">
            <label class="settings__checkbox-label" for="email1">
              <input
                id="email1"
                class="settings__checkbox-input"
                type="checkbox"
                value="email1"
                name="category"
                checked="true"
              >
              <div class="settings__checkbox-input_custom">
                <div class="settings__checkbox-input-active" />
              </div>
              Добавление в поток
            </label>
          </div>
          <div class="settings__checkbox">
            <label class="settings__checkbox-label" for="email2">
              <input
                id="email2"
                class="settings__checkbox-input"
                type="checkbox"
                value="email2"
                name="category"
                checked="true"
              >
              <div class="settings__checkbox-input_custom">
                <div class="settings__checkbox-input-active" />
              </div>
              Перенос урока
            </label>
          </div>
          <div class="settings__checkbox">
            <label class="settings__checkbox-label" for="email3">
              <input id="email3" class="settings__checkbox-input" type="checkbox" value="email3" name="category">
              <div class="settings__checkbox-input_custom">
                <div class="settings__checkbox-input-active" />
              </div>
              Начало урока
            </label>
          </div>
          <div class="settings__checkbox">
            <label class="settings__checkbox-label" for="email4">
              <input id="email4" class="settings__checkbox-input" type="checkbox" value="email4" name="category">
              <div class="settings__checkbox-input_custom">
                <div class="settings__checkbox-input-active" />
              </div>
              Новый поток в курсе, на который Вы записаны
            </label>
          </div>
          <div class="settings__checkbox">
            <label class="settings__checkbox-label" for="email5">
              <input id="email5" class="settings__checkbox-input" type="checkbox" value="email5" name="category">
              <div class="settings__checkbox-input_custom">
                <div class="settings__checkbox-input-active" />
              </div>
              Начало бесплатного вебинара
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./settings-notifications.js"></script>
<style scoped src="./settings-notifications.css"></style>
