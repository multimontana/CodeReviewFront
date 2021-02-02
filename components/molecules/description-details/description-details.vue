<template>
  <section class="description-details">
    <div class="description-details__duration-keeper">
      <div class="description-details__duration-item">
        <div class="description-details__image-keeper">
          <img class="description-details__image" src="../../../assets/icons/question.svg" alt="">
        </div>
        <div class="description-details__content">
          <h5 class="description-details__title">
            {{ getSingleQuiz.questions.length }}
          </h5>
          <h6 class="description-details__subtitle">
            Вопросов
          </h6>
        </div>
      </div>
      <div class="description-details__duration-item">
        <div class="description-details__image-keeper">
          <img class="description-details__image" src="../../../assets/icons/clock.svg" alt="">
        </div>
        <div class="description-details__content">
          <h5 class="description-details__title">
            25 минут
          </h5>
          <h6 class="description-details__subtitle">
            Время на тест
          </h6>
        </div>
      </div>
      <div class="description-details__duration-item">
        <div class="description-details__image-keeper">
          <img class="description-details__image" src="../../../assets/icons/calendar.svg" alt="">
        </div>
        <div class="description-details__content">
          <h5 class="description-details__title">
            1 день
          </h5>
          <h6 class="description-details__subtitle">
            Интервал попыток
          </h6>
        </div>
      </div>
      <div class="description-details__duration-item">
        <div class="description-details__image-keeper">
          <img class="description-details__image" src="../../../assets/icons/user.svg" alt="">
        </div>
        <div class="description-details__content">
          <h5 class="description-details__title">
            {{ getSingleQuiz.finished_users_count ? getSingleQuiz.finished_users_count : '0' }} чел.
          </h5>
          <h6 class="description-details__subtitle">
            Прошли тест
          </h6>
        </div>
      </div>
    </div>
    <div class="description-details__topics-keeper">
      <h4 class="description-details__title">
        Темы тестирования
      </h4>
      <ul class="description-details__topic-list">
        <li v-for="(theme, index) in getSingleQuiz.themes" :key="index" class="description-details__topic">
          <div class="list-bullet" />
          {{ theme.name }}
        </li>
      </ul>
    </div>
    <div class="">
      <h4 class="description-details__title">
        Тест прошли {{ getSingleQuiz.completed ? getSingleQuiz.completed : '0' }} человека
      </h4>
      <h6 class="description-details__subtitle">
        Последние прошедшие
      </h6>
      <div class="description-details__user-list">
        <div class="description-details__user">
          <img class="description-details__user-avatar" src="../../../assets/icons/account.jpeg" alt="">
          <div class="description-details__user-info">
            <h4 class="description-details__user-name">
              Екатерина Горбунова
            </h4>
            <span class="description-details__user-points">
              30 /
              <span class="description-details__total-points">
                30
              </span>
            </span>
          </div>
        </div>
        <div class="description-details__user">
          <img class="description-details__user-avatar" src="../../../assets/icons/account.jpeg" alt="">
          <div class="description-details__user-info">
            <h4 class="description-details__user-name">
              Федор Топоров
            </h4>
            <span class="description-details__user-points">
              28 /
              <span class="description-details__total-points">
                30
              </span>
            </span>
          </div>
        </div>
        <div class="description-details__user">
          <img class="description-details__user-avatar" src="../../../assets/icons/account.jpeg" alt="">
          <div class="description-details__user-info">
            <h4 class="description-details__user-name">
              Сергей Санжаров
            </h4>
            <span class="description-details__user-points">
              16 /
              <span class="description-details__total-points">
                30
              </span>
            </span>
          </div>
        </div>
        <div class="description-details__user">
          <img class="description-details__user-avatar" src="../../../assets/icons/account.jpeg" alt="">
          <div class="description-details__user-info">
            <h4 class="description-details__user-name">
              Александра Малышенко
            </h4>
            <span class="description-details__user-points">
              24 /
              <span class="description-details__total-points">
                30
              </span>
            </span>
          </div>
        </div>
        <div class="description-details__user">
          <img class="description-details__user-avatar" src="../../../assets/icons/account.jpeg" alt="">
          <div class="description-details__user-info">
            <h4 class="description-details__user-name">
              Артём Тсулирюк
            </h4>
            <span class="description-details__user-points">
              30 /
              <span class="description-details__total-points">
                30
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script src="./description-details.js"></script>
<style scoped src="./description-details.css"></style>
