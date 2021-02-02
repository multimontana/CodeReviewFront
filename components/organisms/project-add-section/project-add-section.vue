<template>
  <div class="summary__page">
    <button class="button button_white summary__responsive-menu-opener">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="4"
          y="15"
          height="2"
          width="16"
          rx="1"
          fill="#272C31"
        />
        <rect
          x="4"
          y="7"
          height="2"
          width="16"
          rx="1"
          fill="#272C31"
        />
      </svg>
    </button>
    <div class="summary__content">
      <h4 class="summary__content-title">
        Добавить проект
      </h4>
      <form action="#" method="POST" class="summary__form">
        <div class="summary__form-group">
          <label class="summary__form-label" for="title">Название</label>
          <input id="title" class="summary__form-input" name="title" type="text" placeholder="Введите название проекта">
        </div>
        <div class="summary__form-group">
          <label class="summary__form-label" for="category">Категория</label>
          <div class="summary__iconed-input-keeper">
            <input id="category" class="summary__form-input" name="category" type="text" placeholder="Поиск по категориям">
            <svg
              class="summary__input-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11 4C14.866 4 18 7.13401 18 11C18 12.5764 17.4789 14.0311 16.5996 15.2012L16.6545 15.2441L16.7071 15.2929L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3466 20.0676 18.7794 20.0953 18.3871 19.7903L18.2929 19.7071L15.2929 16.7071C15.2587 16.6729 15.2275 16.6368 15.1993 16.5992C14.031 17.4789 12.5764 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4ZM11 6C8.23858 6 6 8.23858 6 11C6 13.7614 8.23858 16 11 16C13.7614 16 16 13.7614 16 11C16 8.23858 13.7614 6 11 6Z" fill="#ACB7C5" />
            </svg>
          </div>
        </div>
        <div class="summary__form-group">
          <label class="summary__form-label" for="description">Описание</label>
          <textarea id="description" class="summary__form-textarea" name="description" placeholder="Опишите проект" />
        </div>
        <div class="summary__form-group summary__form-group_file">
          <label class="summary__form-label summary__form-label_file" for="image">
            <button class="button button_light summary__file-button" type="button">
              Добавить изображение
            </button>
            <input id="image" name="image" type="file" class="summary__form-input summary__form-input_file">
          </label>
          <span class="summary__file-text">Максимальный размер файла для загрузки - 8Мб. Формат изображения - jpg и png</span>
        </div>
        <button class="button button_primary summary__submit-button" type="submit">
          Опубликовать
        </button>
      </form>
    </div>
  </div>
</template>
<script src="./project-add-section.js"></script>
<style src="./project-add-section.css"></style>
