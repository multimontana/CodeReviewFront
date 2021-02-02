<template>
  <section
    class="settings"
  >
    <nuxt-link to="/profile" class="settings__back-button button">
      <img class="settings__back-icon" src="../../../assets/icons/arrow-left.svg" alt="Arrow Left">
      Профиль
    </nuxt-link>
    <h1 class="settings__title">
      Настройки профиля
    </h1>
    <div class="settings__content">
      <!--      <div class='tabs settings__tabs'>-->
      <!--        <div class='tab tab_active settings__tab'>-->
      <!--          Информация-->
      <!--        </div>-->
      <!--        <div class='tab settings__tab'>-->
      <!--          Сменить пароль-->
      <!--        </div>-->
      <!--        <div class='tab settings__tab'>-->
      <!--          Уведомления-->
      <!--        </div>-->
      <!--        <div class='tab settings__tab'>-->
      <!--          Рассылки-->
      <!--        </div>-->
      <!--        <div class='tab settings__tab'>-->
      <!--          Резюме-->
      <!--        </div>-->
      <!--      </div>-->
      <tabs class=" summary__tabs" :tabs="ProfileSettingsTabs" :on-click-event="(index) => tabChangeEvent(index)" />
      <profile-settings-information v-if="tabView === 0" />
      <profile-settings-reset-password v-if="tabView === 1" />
      <settings-notifications v-if="tabView === 2" />
      <mailing v-if="tabView === 3" />
      <resume v-if="tabView === 4" />
    </div>
  </section>
</template>
<script src="./profile-settings-section.js"></script>
<style scoped src="./profile-settings-section.css"></style>
