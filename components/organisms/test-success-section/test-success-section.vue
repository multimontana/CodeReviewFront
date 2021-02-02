<template>
  <section class="success__page-keeper container">
    <button class="button success__close" @click="removeDbIndex">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4143 12.0002L18.7072 6.70725C19.0982 6.31625 19.0982 5.68425 18.7072 5.29325C18.3162 4.90225 17.6842 4.90225 17.2933 5.29325L12.0002 10.5862L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68425 4.90225 6.31625 5.29325 6.70725L10.5862 12.0002L5.29325 17.2933C4.90225 17.6842 4.90225 18.3162 5.29325 18.7072C5.48825 18.9022 5.74425 19.0002 6.00025 19.0002C6.25625 19.0002 6.51225 18.9022 6.70725 18.7072L12.0002 13.4143L17.2933 18.7072C17.4882 18.9022 17.7443 19.0002 18.0002 19.0002C18.2562 19.0002 18.5122 18.9022 18.7072 18.7072C19.0982 18.3162 19.0982 17.6842 18.7072 17.2933L13.4143 12.0002Z" fill="#272C31" />
      </svg>
    </button>
    <div class="success__content">
      <div class="success__icon-keeper">
        <img class="success__icon" src="" alt="">
      </div>
      <h2 class="success__title">
        Тест сдан
      </h2>

      <div class="success__description-keeper">
        <div class="success__description">
          <h3 class="success__description-result">
            <span class="success__description-total">
              {{ `${getQuizSuccessData.allCount - getQuizSuccessData.wrong.length}  из  ${getQuizSuccessData.allCount}` }}
            </span>
          </h3>
          <span class="success__description-subtitle">
            Результат
          </span>
        </div>
        <div class="success__description">
          <h3 class="success__description-time">
            {{ getQuizSuccessData.quiz_completed_time }}
          </h3>
          <span class="success__description-subtitle">
            Время
          </span>
        </div>
      </div>
    </div>
    <div class="success__wrong-answers">
      <h3 class="success__wrong-count">
        Неправильные ответы: {{ getQuizSuccessData.wrong.length }}
      </h3>
      <div class="success__wrong-list">
        <div v-for="(wrong, index) in getQuizSuccessData.wrong" :key="index" class="success__wrong">
          <h4 class="success__wrong-question">
            {{ wrong.question }}
          </h4>
          <span class="success__wrong-subtitle">
            Ваш ответ
          </span>
          <br>
          <span class="success__wrong-your-answer">
            {{ wrong.answer }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
<script src="./test-success-section.js"></script>
<style scoped src="./test-success-section.css"></style>
