<template>
  <div class="task_main">
    <aside-tab-task-left />
    <div class="background-effect" />
    <div class="main_task">
      <div class="lesson-sidebar_responsive">
        <button class="button button_white lesson-sidebar__menu-opener">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="15"
              y="4"
              width="2"
              height="16"
              rx="1"
              fill="#272C31"
            />
            <rect
              x="7"
              y="4"
              width="2"
              height="16"
              rx="1"
              fill="#272C31"
            />
          </svg>
          <svg
            class="close"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4143 12.0002L18.7072 6.70725C19.0982 6.31625 19.0982 5.68425 18.7072 5.29325C18.3162 4.90225 17.6842 4.90225 17.2933 5.29325L12.0002 10.5862L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68425 4.90225 6.31625 5.29325 6.70725L10.5862 12.0002L5.29325 17.2933C4.90225 17.6842 4.90225 18.3162 5.29325 18.7072C5.48825 18.9022 5.74425 19.0002 6.00025 19.0002C6.25625 19.0002 6.51225 18.9022 6.70725 18.7072L12.0002 13.4143L17.2933 18.7072C17.4882 18.9022 17.7443 19.0002 18.0002 19.0002C18.2562 19.0002 18.5122 18.9022 18.7072 18.7072C19.0982 18.3162 19.0982 17.6842 18.7072 17.2933L13.4143 12.0002Z" fill="#272C31" />
          </svg>
        </button>
        <div class="lesson-sidebar__menu">
          <div class="breadcrumb">
            <a class="breadcrumb__link" href="#" @click="$router.back()">Курс</a>
            <img class="breadcrumb__icon" src="@/assets/icons/breadcrumb-arrow.svg" alt="">
            <a class="breadcrumb__link" href="#">Уроки</a>
          </div>
          <div class="lesson-sidebar__title-keeper">
            <h4 class="lesson-sidebar__title">
              C++
            </h4>
            <span class="lesson-sidebar__subtitle" href="#">Уроки</span>
          </div>
          <ul class="lesson-sidebar__lesson-list">
            <li class="lesson-sidebar__lesson lesson-sidebar__lesson_completed">
              <span class="lesson-sidebar__lesson-number">
                1.
              </span>
              <span class="lesson-sidebar__lesson-name">
                Как тут всё устроено
              </span>
              <div class="lesson-sidebar__lesson-status">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.91006 10.4959L3.7071 8.29291C3.31658 7.90239 2.68342 7.90239 2.29289 8.29291C1.90237 8.68343 1.90237 9.3166 2.29289 9.70712L5.29288 12.7071C5.7168 13.131 6.4159 13.0892 6.7863 12.6178L13.7863 4.61786C14.1275 4.18359 14.0521 3.55494 13.6178 3.21372C13.1835 2.87251 12.5549 2.94795 12.2136 3.38222L5.91006 10.4959Z" fill="#5181B8" />
                </svg>
              </div>
            </li>
            <li class="lesson-sidebar__lesson lesson-sidebar__lesson_completed">
              <span class="lesson-sidebar__lesson-number">
                2.
              </span>
              <span class="lesson-sidebar__lesson-name">
                Hello, friend
              </span>
              <div class="lesson-sidebar__lesson-status">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.91006 10.4959L3.7071 8.29291C3.31658 7.90239 2.68342 7.90239 2.29289 8.29291C1.90237 8.68343 1.90237 9.3166 2.29289 9.70712L5.29288 12.7071C5.7168 13.131 6.4159 13.0892 6.7863 12.6178L13.7863 4.61786C14.1275 4.18359 14.0521 3.55494 13.6178 3.21372C13.1835 2.87251 12.5549 2.94795 12.2136 3.38222L5.91006 10.4959Z" fill="#5181B8" />
                </svg>
              </div>
            </li>
            <li class="lesson-sidebar__lesson lesson-sidebar__lesson_completed">
              <span class="lesson-sidebar__lesson-number">
                3.
              </span>
              <span class="lesson-sidebar__lesson-name">
                Что здесь происходит?
              </span>
              <div class="lesson-sidebar__lesson-status">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.91006 10.4959L3.7071 8.29291C3.31658 7.90239 2.68342 7.90239 2.29289 8.29291C1.90237 8.68343 1.90237 9.3166 2.29289 9.70712L5.29288 12.7071C5.7168 13.131 6.4159 13.0892 6.7863 12.6178L13.7863 4.61786C14.1275 4.18359 14.0521 3.55494 13.6178 3.21372C13.1835 2.87251 12.5549 2.94795 12.2136 3.38222L5.91006 10.4959Z" fill="#5181B8" />
                </svg>
              </div>
            </li>
            <li class="lesson-sidebar__lesson lesson-sidebar__lesson_completed">
              <span class="lesson-sidebar__lesson-number">
                4.
              </span>
              <span class="lesson-sidebar__lesson-name">
                Почему С++?
              </span>
              <div class="lesson-sidebar__lesson-status">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.91006 10.4959L3.7071 8.29291C3.31658 7.90239 2.68342 7.90239 2.29289 8.29291C1.90237 8.68343 1.90237 9.3166 2.29289 9.70712L5.29288 12.7071C5.7168 13.131 6.4159 13.0892 6.7863 12.6178L13.7863 4.61786C14.1275 4.18359 14.0521 3.55494 13.6178 3.21372C13.1835 2.87251 12.5549 2.94795 12.2136 3.38222L5.91006 10.4959Z" fill="#5181B8" />
                </svg>
              </div>
            </li>
            <li class="lesson-sidebar__lesson lesson-sidebar__lesson_current">
              <span class="lesson-sidebar__lesson-number">
                5.
              </span>
              <span class="lesson-sidebar__lesson-name">
                Целые числа
              </span>
              <div class="lesson-sidebar__lesson-status">
                Текущий урок
                <div class="lesson-sidebar__lesson-bullet" />
              </div>
            </li>
            <li class="lesson-sidebar__lesson">
              <span class="lesson-sidebar__lesson-number">
                6.
              </span>
              <span class="lesson-sidebar__lesson-name">
                Вещественные числа
              </span>
            </li>
            <li class="lesson-sidebar__lesson">
              <span class="lesson-sidebar__lesson-number">
                7.
              </span>
              <span class="lesson-sidebar__lesson-name">
                Ошибки компиляции
              </span>
            </li>
            <li class="lesson-sidebar__lesson">
              <span class="lesson-sidebar__lesson-number">
                8.
              </span>
              <span class="lesson-sidebar__lesson-name">
                Что он пытается нам сказать?
              </span>
            </li>
            <li class="lesson-sidebar__lesson">
              <span class="lesson-sidebar__lesson-number">
                9.
              </span>
              <span class="lesson-sidebar__lesson-name">
                Строки
              </span>
            </li>
            <li class="lesson-sidebar__lesson">
              <span class="lesson-sidebar__lesson-number">
                10.
              </span>
              <span class="lesson-sidebar__lesson-name">
                Символы
              </span>
            </li>
            <li class="lesson-sidebar__lesson">
              <span class="lesson-sidebar__lesson-number">
                11.
              </span>
              <span class="lesson-sidebar__lesson-name">
                Как тут всё устроено
              </span>
            </li>
            <li class="lesson-sidebar__lesson">
              <span class="lesson-sidebar__lesson-number">
                12.
              </span>
              <span class="lesson-sidebar__lesson-name">
                Заключение
              </span>
            </li>
          </ul>
        </div>
      </div>
      <section class="lesson-content">
        <div>
          <div class="lesson-content__part">
            <h3 class="lesson-content__title lesson-content__title_margin_small">
              Урок 5. Целые числа
            </h3>
            <h4 class="lesson-content__subtitle lesson-content__subtitle_small">
              Задача 1
            </h4>
            <p class="lesson-content__paragraph">
              Число из терминала вводится объектом <code><span>cin</span></code> . Например:
            </p>
            <span class="lesson-content__code-block code-block">
              int x = 123; <br>
              cin >> x;
            </span>
          </div>
          <div class="lesson-content__part">
            <p class="lesson-content__paragraph">
              Эта команда прочитает число 123 и запишет его в переменную <code><span>x</span></code> . Поэкспериментируйте: вводите разные числа и другие символы и следите, что произойдёт. Значение будет считано с терминала после того, как вы переведёте строку клавишей <code><span>Enter</span></code> .
            </p>
          </div>
        </div>
        <div class="lesson-content__terminal">
          <h3 class="lesson-content__terminal-title">
            Терминал
          </h3>
        </div>
      </section>
      <div class="code-editor" />
      <div class="lesson-content__terminal lesson-content__terminal_responsive">
        <h3 class="lesson-content__terminal-title">
          Терминал
        </h3>
      </div>
    </div>
    <!-- What is this? -->
    <aside-tab-task-right />
  </div>
</template>
<script src="./task-main-section.js"></script>
<style src="./task-main-section.css"></style>
