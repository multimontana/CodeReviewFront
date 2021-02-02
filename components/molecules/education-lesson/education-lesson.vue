<template>
  <div class="lessons__lesson">
    <button class="button lessons__list-opener" @click="sidebarOpen">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21 19C21.5523 19 22 19.4477 22 20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20C2 19.4477 2.44772 19 3 19H21ZM21 13C21.5523 13 22 13.4477 22 14C22 14.5523 21.5523 15 21 15H13C12.4477 15 12 14.5523 12 14C12 13.4477 12.4477 13 13 13H21Z" fill="#5181B8" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 8C22 8.55228 21.5523 9 21 9H5.415L7.70711 11.2929C8.06759 11.6534 8.09532 12.2206 7.7903 12.6129L7.70711 12.7071C7.34662 13.0676 6.77939 13.0953 6.3871 12.7903L6.29289 12.7071L2.29289 8.70711L2.2515 8.66315L2.19633 8.59531L2.12467 8.48406L2.07123 8.37134L2.03585 8.26599L2.00683 8.11747L2 8L2.00279 7.92476L2.02024 7.79927L2.04974 7.68786L2.09367 7.57678L2.146 7.47929L2.21279 7.38325C2.23767 7.35153 2.26443 7.32136 2.29289 7.29289L6.29289 3.29289C6.68342 2.90237 7.31658 2.90237 7.70711 3.29289C8.06759 3.65338 8.09532 4.22061 7.7903 4.6129L7.70711 4.70711L5.415 7H21C21.5523 7 22 7.44772 22 8Z" fill="#5181B8" />
      </svg>
      <h4>
        <span>Урок 2.</span>
        Встроенные типы и операции с ними
      </h4>
    </button>
    <education-lesson-list-responsive v-if="responsive" :is-open="sidebar" />
    <hr>
    <iframe class="lessons__lesson-video" src="https://www.youtube-nocookie.com/embed/BiaR8nZjT88?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
    <div class="lessons__comments">
      <h4 class="lessons__comments-title">
        Комментарии
      </h4>
      <div class="lessons__leave-comment">
        <img class="lessons__coments-avatar" src="@/assets/icons/account.jpeg" alt="Me">
        <div class="lessons__comments-input-keeper">
          <input class="lessons__comments-input" type="text" placeholder="Ваш комментарий">
          <svg
            class="lessons__send-comment-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.5279 11.2117L4.43049 3.0954C3.62113 2.73468 2.72183 3.45612 3.08155 4.26775L5.7 10.2L13.7817 12.0233L5.7 13.8L3.08155 19.7788C2.81176 20.5904 3.62113 21.3119 4.43049 20.861L20.5279 12.7447C21.1574 12.4742 21.1574 11.5724 20.5279 11.2117Z" fill="#ACB7C5" />
          </svg>
        </div>
      </div>
      <div class="lessons__comment">
        <img class="lessons__coments-avatar" src="@/assets/icons/account.jpeg" alt="Me">
        <div class="lessons__comment-content">
          <div class="lessons__comment-author-keeper">
            <h4 class="lessons__comment-author">
              Федор Топоров
            </h4>
            <h5 class="lessons__comment-date">
              2 сентября 2020 в 17:55
            </h5>
          </div>
          <article class="lessons__comment-text">
            К сожалению в видео отсутствует звук. Можно с этим что-то сделать?
          </article>
          <div class="lessons__comment-actions">
            <button class="button lessons__comment-reply-button">
              Ответить
            </button>
          </div>
        </div>
      </div>
      <div class="lessons__comment">
        <img class="lessons__coments-avatar" src="@/assets/icons/account.jpeg" alt="Me">
        <div class="lessons__comment-content">
          <div class="lessons__comment-author-keeper">
            <h4 class="lessons__comment-author">
              Федор Топоров
            </h4>
            <h5 class="lessons__comment-date">
              2 сентября 2020 в 17:55
            </h5>
          </div>
          <article class="lessons__comment-text">
            К сожалению в видео отсутствует звук. Можно с этим что-то сделать?
          </article>
          <div class="lessons__comment-actions">
            <button class="button lessons__comment-reply-button">
              Ответить
            </button>
          </div>
        </div>
      </div>
      <div class="lessons__comment">
        <img class="lessons__coments-avatar" src="@/assets/icons/account.jpeg" alt="Me">
        <div class="lessons__comment-content">
          <div class="lessons__comment-author-keeper">
            <h4 class="lessons__comment-author">
              Федор Топоров
            </h4>
            <h5 class="lessons__comment-date">
              2 сентября 2020 в 17:55
            </h5>
          </div>
          <article class="lessons__comment-text">
            К сожалению в видео отсутствует звук. Можно с этим что-то сделать?
          </article>
          <div class="lessons__comment-actions">
            <button class="button lessons__comment-reply-button">
              Ответить
            </button>
          </div>
        </div>
      </div>
      <div class="lessons__comment">
        <img class="lessons__coments-avatar" src="@/assets/icons/account.jpeg" alt="Me">
        <div class="lessons__comment-content">
          <div class="lessons__comment-author-keeper">
            <h4 class="lessons__comment-author">
              Федор Топоров
            </h4>
            <h5 class="lessons__comment-date">
              2 сентября 2020 в 17:55
            </h5>
          </div>
          <article class="lessons__comment-text">
            К сожалению в видео отсутствует звук. Можно с этим что-то сделать?
          </article>
          <div class="lessons__comment-actions">
            <button class="button lessons__comment-reply-button">
              Ответить
            </button>
          </div>
        </div>
      </div>
      <div class="lessons__comment lessons__comment_reply">
        <img class="lessons__coments-avatar" src="@/assets/icons/account.jpeg" alt="Me">
        <div class="lessons__comment-content">
          <div class="lessons__comment-author-keeper">
            <h4 class="lessons__comment-author">
              Федор Топоров
            </h4>
            <h5 class="lessons__comment-date">
              2 сентября 2020 в 17:55
            </h5>
          </div>
          <article class="lessons__comment-text">
            Александра, да, есть версия и под Linux <br> <a class="lessons__comment-text_link" target="_blank" href="https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html">https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html</a>, и под Windows, и под Mac, и даже по Solaris
          </article>
          <div class="lessons__comment-actions">
            <button class="button lessons__comment-reply-button">
              Ответить
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./education-lesson.js"></script>
<style scoped src="./education-lesson.css"></style>
