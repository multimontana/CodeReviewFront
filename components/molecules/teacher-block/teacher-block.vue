<template>
  <div class="teacher__block">
    <img class="teacher__avatar" src="../../../assets/icons/account.jpeg" alt="">
    <div class="teacher__about">
      <div class="teacher__name-keeper">
        <div class="teacher__name">
          <h3>
            Артем Манченков
            <span class="teacher__rating">
              <svg
                class="teacher__star-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.1417 4.55658L9.18879 8.69357L4.81945 9.35911C4.0359 9.47784 3.72188 10.4871 4.29011 11.0651L7.45122 14.2835L6.70356 18.8298C6.56898 19.6516 7.39739 20.2671 8.09122 19.8828L12 17.7362L15.9088 19.8828C16.6026 20.264 17.431 19.6516 17.2964 18.8298L16.5488 14.2835L19.7099 11.0651C20.2781 10.4871 19.9641 9.47784 19.1805 9.35911L14.8112 8.69357L12.8583 4.55658C12.5084 3.81917 11.4946 3.80979 11.1417 4.55658Z" fill="#F2C94C" />
              </svg>
              4.9
            </span>
          </h3>
          <span class="teacher__country">
            Россия, Москва
          </span>
          <br>
          <span class="teacher__birth-date">
            Мужчина, 25 лет, родился 20 августа 1994
          </span>
        </div>
        <button class="teacher__write-message button button_primary">
          Написать сообщение
        </button>
      </div>
      <div class="teacher__about-text">
        <strong>Senior Backend Web Developer</strong>
        <br><br>
        <strong>Образование и карьера</strong>
        <br>
        Начал заниматься профессиональной разработкой с 2012 года. Долгое время преподавал в колледже основы программирования, базы данных, веб-дизайн и проектирование информационных систем. Сейчас работаю на позиции Senior Backend Developer.
        <br><br>
        Как веб-разработчик проектирую корпоративные порталы, CRM-системы и коммерческие веб-сайты.
        <br><br>
        В студенчестве активно изучал языки C\C++\C# для десктоп-разработки, но знакомство с PHP и Python изменило мое отношение к программированию в целом.
        <br><br>
        На данный момент работаю в Mail.ru Group.
        <br><br>
        Мой основной стек технологий – PHP/Python, MySQL/Postgres
        <br><br>
        <strong>Почему веб-разработка?</strong>
        <br>
        Пользователи больше не готовы тратить время на скачивание и установку ПО, и эти продукты стали менее востребованными. Веб-приложения и сайты как раз позволяют получить то, что ищут люди, «здесь и сейчас».
        К тому же, в данной сфере разработчик может выбрать «свой» инструмент, подходящий ему по задачам или по духу.
        <br><br>
        <strong>Моим студентам</strong>
        <br>
        Чем бы вы ни занимались, самообразование всегда крайне важно. Недостаточно прочитать книгу о языке программирования или технологии, написать пару простых программ. Технологии развиваются очень быстро, поэтому знания и навыки нужно наращивать в таком же темпе.
      </div>
      <div class="teacher__interests">
        <h6 class="teacher__subtitle">
          Интересы
        </h6>
        <div class="teacher__interests-keeper">
          <button class="teacher__interest button button_primary" disabled>
            Python
          </button>
          <button class="teacher__interest button button_primary" disabled>
            Gu_Web
          </button>
          <button class="teacher__interest button button_primary" disabled>
            Sass
          </button>
          <button class="teacher__interest button button_primary" disabled>
            Javascript
          </button>
          <button class="teacher__interest button button_primary" disabled>
            CSS
          </button>
          <button class="teacher__interest button button_primary" disabled>
            Django
          </button>
          <button class="teacher__interest button button_primary" disabled>
            VueJS
          </button>
        </div>
      </div>
      <tabs :tabs="teacherCourseTabs" :on-click-event="(index) => tabChangeEvent(index)" />
      <teacher-courses v-if="tabView === 0" />
      <teacher-review v-if="tabView === 1" />
    </div>
  </div>
</template>
<script src="./teacher-block.js"></script>
<style scoped src="./teacher-block.css"></style>
