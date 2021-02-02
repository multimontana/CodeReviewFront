<template>
  <ul :class="`lessons__lessons-list ${ isOpen ? 'opened' : '' }`">
    <li class="lessons__lessons-item done">
      <svg
        class="lessons__lessons-icon-status"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="12" fill="#5181B8" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91006 14.4959L7.7071 12.2929C7.31658 11.9024 6.68342 11.9024 6.29289 12.2929C5.90237 12.6834 5.90237 13.3166 6.29289 13.7071L9.29288 16.7071C9.7168 17.131 10.4159 17.0892 10.7863 16.6178L17.7863 8.61786C18.1275 8.18359 18.0521 7.55494 17.6178 7.21372C17.1835 6.87251 16.5549 6.94795 16.2136 7.38222L9.91006 14.4959Z" fill="white" />
      </svg>
      <div class="lessons__lessons-description">
        <h4 class="lessons__lessons-title">
          <span class="lessons__lessons-number">Урок 1.</span> Знакомство с Python
        </h4>
        <h4 class="lessons__lessons-status">
          Завершен
        </h4>
      </div>
    </li>
    <li class="lessons__lessons-item active">
      <svg
        class="lessons__lessons-icon-status"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="12" fill="#5181B8" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91006 14.4959L7.7071 12.2929C7.31658 11.9024 6.68342 11.9024 6.29289 12.2929C5.90237 12.6834 5.90237 13.3166 6.29289 13.7071L9.29288 16.7071C9.7168 17.131 10.4159 17.0892 10.7863 16.6178L17.7863 8.61786C18.1275 8.18359 18.0521 7.55494 17.6178 7.21372C17.1835 6.87251 16.5549 6.94795 16.2136 7.38222L9.91006 14.4959Z" fill="white" />
      </svg>
      <div class="lessons__lessons-description">
        <h4 class="lessons__lessons-title">
          <span class="lessons__lessons-number">Урок 2.</span> Встроенные типы и операции с ними
        </h4>
        <h4 class="lessons__lessons-status">
          Завершен
        </h4>
      </div>
    </li>
    <li class="lessons__lessons-item undone">
      <svg
        class="lessons__lessons-icon-status"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="12" fill="#5181B8" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91006 14.4959L7.7071 12.2929C7.31658 11.9024 6.68342 11.9024 6.29289 12.2929C5.90237 12.6834 5.90237 13.3166 6.29289 13.7071L9.29288 16.7071C9.7168 17.131 10.4159 17.0892 10.7863 16.6178L17.7863 8.61786C18.1275 8.18359 18.0521 7.55494 17.6178 7.21372C17.1835 6.87251 16.5549 6.94795 16.2136 7.38222L9.91006 14.4959Z" fill="white" />
      </svg>
      <div class="lessons__lessons-description">
        <h4 class="lessons__lessons-title">
          <span class="lessons__lessons-number">Урок 3.</span> Функции
        </h4>
        <h4 class="lessons__lessons-status">
          Начнется через 8ч 30м
        </h4>
      </div>
    </li>
    <li class="lessons__lessons-item undone">
      <svg
        class="lessons__lessons-icon-status"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="12" fill="#5181B8" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91006 14.4959L7.7071 12.2929C7.31658 11.9024 6.68342 11.9024 6.29289 12.2929C5.90237 12.6834 5.90237 13.3166 6.29289 13.7071L9.29288 16.7071C9.7168 17.131 10.4159 17.0892 10.7863 16.6178L17.7863 8.61786C18.1275 8.18359 18.0521 7.55494 17.6178 7.21372C17.1835 6.87251 16.5549 6.94795 16.2136 7.38222L9.91006 14.4959Z" fill="white" />
      </svg>
      <div class="lessons__lessons-description">
        <h4 class="lessons__lessons-title">
          <span class="lessons__lessons-number">Урок 4.</span> Полезные инструменты
        </h4>
        <h4 class="lessons__lessons-status">
          9 сентября 14:00
        </h4>
      </div>
    </li>
    <li class="lessons__lessons-item undone">
      <svg
        class="lessons__lessons-icon-status"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="12" fill="#5181B8" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91006 14.4959L7.7071 12.2929C7.31658 11.9024 6.68342 11.9024 6.29289 12.2929C5.90237 12.6834 5.90237 13.3166 6.29289 13.7071L9.29288 16.7071C9.7168 17.131 10.4159 17.0892 10.7863 16.6178L17.7863 8.61786C18.1275 8.18359 18.0521 7.55494 17.6178 7.21372C17.1835 6.87251 16.5549 6.94795 16.2136 7.38222L9.91006 14.4959Z" fill="white" />
      </svg>
      <div class="lessons__lessons-description">
        <h4 class="lessons__lessons-title">
          <span class="lessons__lessons-number">Урок 5.</span> Работа с файлами
        </h4>
        <h4 class="lessons__lessons-status">
          11 сентября 14:00
        </h4>
      </div>
    </li>
    <li class="lessons__lessons-item undone">
      <svg
        class="lessons__lessons-icon-status"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="12" fill="#5181B8" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91006 14.4959L7.7071 12.2929C7.31658 11.9024 6.68342 11.9024 6.29289 12.2929C5.90237 12.6834 5.90237 13.3166 6.29289 13.7071L9.29288 16.7071C9.7168 17.131 10.4159 17.0892 10.7863 16.6178L17.7863 8.61786C18.1275 8.18359 18.0521 7.55494 17.6178 7.21372C17.1835 6.87251 16.5549 6.94795 16.2136 7.38222L9.91006 14.4959Z" fill="white" />
      </svg>
      <div class="lessons__lessons-description">
        <h4 class="lessons__lessons-title">
          <span class="lessons__lessons-number">Урок 6.</span> Объектно-ориентированное программирование
        </h4>
        <h4 class="lessons__lessons-status">
          14 сентября 14:00
        </h4>
      </div>
    </li>
    <li class="lessons__lessons-item undone">
      <svg
        class="lessons__lessons-icon-status"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="12" fill="#5181B8" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91006 14.4959L7.7071 12.2929C7.31658 11.9024 6.68342 11.9024 6.29289 12.2929C5.90237 12.6834 5.90237 13.3166 6.29289 13.7071L9.29288 16.7071C9.7168 17.131 10.4159 17.0892 10.7863 16.6178L17.7863 8.61786C18.1275 8.18359 18.0521 7.55494 17.6178 7.21372C17.1835 6.87251 16.5549 6.94795 16.2136 7.38222L9.91006 14.4959Z" fill="white" />
      </svg>
      <div class="lessons__lessons-description">
        <h4 class="lessons__lessons-title">
          <span class="lessons__lessons-number">Урок 7.</span> ООП. Продвинутый уровень
        </h4>
        <h4 class="lessons__lessons-status">
          16 сентября 14:00
        </h4>
      </div>
    </li>
    <li class="lessons__lessons-item undone">
      <svg
        class="lessons__lessons-icon-status"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="12" fill="#5181B8" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91006 14.4959L7.7071 12.2929C7.31658 11.9024 6.68342 11.9024 6.29289 12.2929C5.90237 12.6834 5.90237 13.3166 6.29289 13.7071L9.29288 16.7071C9.7168 17.131 10.4159 17.0892 10.7863 16.6178L17.7863 8.61786C18.1275 8.18359 18.0521 7.55494 17.6178 7.21372C17.1835 6.87251 16.5549 6.94795 16.2136 7.38222L9.91006 14.4959Z" fill="white" />
      </svg>
      <div class="lessons__lessons-description">
        <h4 class="lessons__lessons-title">
          <span class="lessons__lessons-number">Урок 8.</span> Полезные дополнения
        </h4>
        <h4 class="lessons__lessons-status">
          18 сентября 14:00
        </h4>
      </div>
    </li>
  </ul>
</template>

<script src="./education-lesson-list.js"></script>
<style src="./education-lesson-list.css"></style>
