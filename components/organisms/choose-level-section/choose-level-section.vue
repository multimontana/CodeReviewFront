<template>
  <section class="choose__page-keeper">
    <button class="button choose__close">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4143 12.0002L18.7072 6.70725C19.0982 6.31625 19.0982 5.68425 18.7072 5.29325C18.3162 4.90225 17.6842 4.90225 17.2933 5.29325L12.0002 10.5862L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68425 4.90225 6.31625 5.29325 6.70725L10.5862 12.0002L5.29325 17.2933C4.90225 17.6842 4.90225 18.3162 5.29325 18.7072C5.48825 18.9022 5.74425 19.0002 6.00025 19.0002C6.25625 19.0002 6.51225 18.9022 6.70725 18.7072L12.0002 13.4143L17.2933 18.7072C17.4882 18.9022 17.7443 19.0002 18.0002 19.0002C18.2562 19.0002 18.5122 18.9022 18.7072 18.7072C19.0982 18.3162 19.0982 17.6842 18.7072 17.2933L13.4143 12.0002Z" fill="#272C31" />
      </svg>
    </button>
    <div class="choose__content">
      <div class="choose__icon-keeper">
        <img class="choose__icon" src="../../../assets/icons/python_icon.svg" alt="Python">
      </div>
      <h2 class="choose__title">
        {{ getSingleQuiz.name }}
      </h2>
      <span class="choose__subtitle">
        Выберите уровень сложности
      </span>
      <div class="choose__difficulty-keeper">
        <button class="button choose__difficulty">
          <div class="choose__difficulty-icon-keeper">
            <img class="choose__difficulty-icon" src="" alt="">
          </div>
          <nuxt-link ref="link" :to="`/tests/test-description/${getSingleQuiz.id}?difficulty=${difficulty.easy}`">
            <span class="choose__difficulty-text">
              Начальный уровень
            </span>
          </nuxt-link>
        </button>
        <button class="button choose__difficulty">
          <div class="choose__difficulty-icon-keeper">
            <img class="choose__difficulty-icon" src="" alt="">
          </div>
          <nuxt-link ref="link" :to="`/tests/test-description/${getSingleQuiz.id}?difficulty=${difficulty.normal}`">
            <span class="choose__difficulty-text">
              Средний уровень
            </span>
          </nuxt-link>
        </button>
        <button class="button choose__difficulty">
          <div class="choose__difficulty-icon-keeper">
            <img class="choose__difficulty-icon" src="" alt="">
          </div>
          <nuxt-link ref="link" :to="`/tests/test-description/${getSingleQuiz.id}?difficulty=${difficulty.hard}`">
            <span class="choose__difficulty-text">
              Сложный уровень
            </span>
          </nuxt-link>
        </button>
      </div>
    </div>
  </section>
</template>
<script src="./choose-level-section.js"></script>
<style scoped src="./choose-level-section.css"></style>
