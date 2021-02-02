<template>
  <section
    class="messages"
  >
    <button class="messages__back-button button">
      <img class="messages__back-icon" src="@/assets/icons/arrow-left.svg" alt="Arrow Left">
      Вернуться на главную
    </button>
    <h1 class="messages__title">
      Сообщения
    </h1>
    <section class="messages__block">
      <message-user-list />
      <message-container />
    </section>
  </section>
</template>
<script src="./messages-section.js"></script>
<style scoped src="./messages-section.css"></style>
