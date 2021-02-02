<template>
  <div class="settings__keeper">
    <form action="#" method="GET">
      <label for="fileUpload">
        <div class="settings__image-upload button">
          <img class="settings__image-upload-icon" src="../../../assets/icons/usericon.svg" alt="">
          <h4 class="settings__image-upload-text">
            Загрузить фотографию
          </h4>
        </div>
        <input id="fileUpload" type="file" accept="image/jpeg">
      </label>
      <div class="settings__form-row">
        <div class="settings__form-group">
          <label class="settings__form-label" for="lastname">Фамилия</label>
          <input id="lastname" class="settings__form-input" type="text" name="lastname" value="Антонов">
        </div>
        <div class="settings__form-group">
          <label class="settings__form-label" for="name">Имя</label>
          <input id="name" class="settings__form-input" type="text" name="name" value="Николай">
        </div>
        <div class="settings__form-group settings__form-selects">
          <label class="settings__form-label" for="birthDay">Дата рождения</label>
          <div class="settings__form-row">
            <custom-select class="settings__day-select" :options="days" />
            <custom-select class="settings__month-select" :options="months" />
            <custom-select class="settings__year-select" :options="years" />
          </div>
        </div>
      </div>
      <div class="settings__form-row">
        <div class="settings__form-group">
          <label class="settings__form-label" for="gender">Пол</label>
          <div :class="`settings__gender-input settings__gender-input_${activeGender === 'male' ? 'left' : 'right'}`">
            <div class="settings__gender-male" @click="setActiveGender('male')">
              Мужской
            </div>
            <div class="settings__gender-female" @click="setActiveGender('female')">
              Женский
            </div>
          </div>
        </div>
        <div class="settings__form-group">
          <label class="settings__form-label" for="telephone">Телефон</label>
          <input id="telephone" class="settings__form-input" type="tel" name="telephone" value="(900) 900-90-90">
        </div>
        <div class="settings__form-group">
          <label class="settings__form-label" for="email">Email</label>
          <input id="email" class="settings__form-input" type="email" name="email" value="etojeduke@gmail.com">
        </div>
      </div>
      <div class="settings__form-row">
        <div class="settings__form-group">
          <label class="settings__form-label" for="country">Страна</label>
          <custom-select class="settings__country-select" :options="countries" />
        </div>
        <div class="settings__form-group">
          <label class="settings__form-label" for="city">Город</label>
          <custom-select class="settings__country-select" :options="cities" />
        </div>
        <div class="settings__form-group">
          <label class="settings__form-label" for="timezone">Часовой пояс</label>
          <custom-select class="settings__country-select" :options="timezones" />
        </div>
      </div>
      <div class="settings__form-group">
        <label class="settings__form-label" for="about">О себе</label>
        <div class="settings__area-keeper">
          <textarea id="about" class="settings__form-textarea" name="about" />
          <div class="settings__area-instruments">
            <button class="button settings__bold-button" type="button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" fill="white" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 20C6.44772 20 6 19.5523 6 19V5C6 4.44772 6.44772 4 7 4H12C14.2463 4 16 6.04599 16 8.5C16 9.50829 15.7039 10.4477 15.1993 11.2046C16.8407 11.7792 18 13.5047 18 15.5C18 17.8818 16.3479 19.8793 14.1969 19.9947L14 20H7ZM14.1327 13.0056L14 13H8V18H14C15.0674 18 16 16.912 16 15.5C16 14.1468 15.1435 13.0912 14.1327 13.0056ZM12 6H8V11H12C13.0674 11 14 9.91199 14 8.5C14 7.14685 13.1435 6.09123 12.1327 6.00561L12 6Z"
                  fill="#ACB7C5"
                />
              </svg>
            </button>
            <button class="button settings__italic-button" type="button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18 4C18.5523 4 19 4.44772 19 5C19 5.55228 18.5523 6 18 6H14.754L11.325 18H14C14.5523 18 15 18.4477 15 19C15 19.5523 14.5523 20 14 20H6C5.44772 20 5 19.5523 5 19C5 18.4477 5.44772 18 6 18H9.245L12.674 6H10C9.44772 6 9 5.55228 9 5C9 4.44772 9.44772 4 10 4H18Z"
                  fill="#ACB7C5"
                />
              </svg>
            </button>
            <button class="button settings__strict-button" type="button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13 15V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V15H13ZM5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5ZM17 4C17.5523 4 18 4.44772 18 5C18 5.55228 17.5523 6 17 6H13V9H11V6H7C6.44772 6 6 5.55228 6 5C6 4.44772 6.44772 4 7 4H17Z"
                  fill="#ACB7C5"
                />
              </svg>
            </button>
            <button class="button settings__underline-button" type="button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.9933 4.88338C16.9355 4.38604 16.5128 4 16 4C15.4477 4 15 4.44772 15 5V11L14.9949 11.1763C14.9037 12.7511 13.5977 14 12 14C10.3431 14 9 12.6569 9 11V5L8.99327 4.88338C8.93551 4.38604 8.51284 4 8 4C7.44772 4 7 4.44772 7 5V11L7.00462 11.2169C7.11818 13.8777 9.31125 16 12 16C14.7614 16 17 13.7614 17 11V5L16.9933 4.88338ZM17 19C17 18.4477 16.5523 18 16 18H8C7.44772 18 7 18.4477 7 19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19Z"
                  fill="#ACB7C5"
                />
              </svg>
            </button>
            <div class="settings__instrument-divider" />
            <button class="button settings__quotes-button" type="button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 6H10C10.5128 6 10.9355 6.38604 10.9933 6.88338L11 7V11C11 11.0717 10.9923 11.143 10.9771 11.2128L10.9487 11.3162L8.94868 17.3162C8.82494 17.6874 8.49788 17.9488 8.11604 17.9933L8 18H7C6.35759 18 5.89287 17.4077 6.02037 16.7981L6.05132 16.6838L7.61257 12H5C4.48716 12 4.06449 11.614 4.00673 11.1166L4 11V7C4 6.48716 4.38604 6.06449 4.88338 6.00673L5 6H10H5ZM14 6H19C19.5128 6 19.9355 6.38604 19.9933 6.88338L20 7V11C20 11.0717 19.9923 11.143 19.9771 11.2128L19.9487 11.3162L17.9487 17.3162C17.8249 17.6874 17.4979 17.9488 17.116 17.9933L17 18H16C15.3576 18 14.8929 17.4077 15.0204 16.7981L15.0513 16.6838L16.6126 12H14C13.4872 12 13.0645 11.614 13.0067 11.1166L13 11V7C13 6.48716 13.386 6.06449 13.8834 6.00673L14 6H19H14Z"
                  fill="#ACB7C5"
                />
              </svg>
            </button>
            <button class="button settings__list-button" type="button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 16C5.55228 16 6 16.4477 6 17C6 17.5523 5.55228 18 5 18C4.44772 18 4 17.5523 4 17C4 16.4477 4.44772 16 5 16ZM19 16C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H9C8.44772 18 8 17.5523 8 17C8 16.4477 8.44772 16 9 16H19ZM5 11C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11ZM19 11C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H9C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11H19ZM5 6C5.55228 6 6 6.44772 6 7C6 7.55228 5.55228 8 5 8C4.44772 8 4 7.55228 4 7C4 6.44772 4.44772 6 5 6ZM19 6C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H9C8.44772 8 8 7.55228 8 7C8 6.44772 8.44772 6 9 6H19Z"
                  fill="#ACB7C5"
                />
              </svg>
            </button>
            <button class="button settings__link-button" type="button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.47186 11.4214L6.31457 10.5786C6.70707 10.1861 7.34343 10.1861 7.73593 10.5786C8.10039 10.9431 8.12643 11.5178 7.81403 11.9123L7.73593 12L6.89322 12.8427C5.71573 14.0202 5.71573 15.9293 6.89322 17.1068C8.02866 18.2422 9.84437 18.2828 11.0284 17.2284L11.1573 17.1068L12 16.2641C12.3925 15.8716 13.0289 15.8716 13.4214 16.2641C13.7858 16.6285 13.8119 17.2033 13.4995 17.5978L13.4214 17.6854L12.5786 18.5281C10.6162 20.4906 7.43435 20.4906 5.47186 18.5281C3.56102 16.6173 3.51074 13.5505 5.32101 11.5788L5.47186 11.4214ZM11.4214 5.47186C13.3838 3.50938 16.5657 3.50938 18.5281 5.47186C20.4906 7.43435 20.4906 10.6162 18.5281 12.5786L17.6854 13.4214C17.2929 13.8139 16.6566 13.8139 16.2641 13.4214C15.8716 13.0289 15.8716 12.3925 16.2641 12L17.1068 11.1573C18.2843 9.9798 18.2843 8.07071 17.1068 6.89322C15.9293 5.71573 14.0202 5.71573 12.8427 6.89322L12 7.73593C11.6075 8.12843 10.9711 8.12843 10.5786 7.73593C10.1861 7.34343 10.1861 6.70707 10.5786 6.31457L11.4214 5.47186ZM12.4214 10.1573C12.8139 9.76479 13.4502 9.76479 13.8427 10.1573C14.2352 10.5498 14.2352 11.1861 13.8427 11.5786L11.5786 13.8427C11.1861 14.2352 10.5498 14.2352 10.1573 13.8427C9.76479 13.4502 9.76479 12.8139 10.1573 12.4214L12.4214 10.1573Z"
                  fill="#ACB7C5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="settings__form-group">
        <label class="settings__form-label" for="interests">Интересы</label>
        <div class="settings__form-interests">
          <div class="settings__interests-keeper">
            <div class="settings__interest">
              Дизайн
              <button class="button settings__interest-delete" type="button">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.41425 8.00001L12.7072 4.70701C13.0982 4.31601 13.0982 3.68401 12.7072 3.29301C12.3162 2.90201 11.6842 2.90201 11.2933 3.29301L8.00025 6.58601L4.70725 3.29301C4.31625 2.90201 3.68425 2.90201 3.29325 3.29301C2.90225 3.68401 2.90225 4.31601 3.29325 4.70701L6.58625 8.00001L3.29325 11.293C2.90225 11.684 2.90225 12.316 3.29325 12.707C3.48825 12.902 3.74425 13 4.00025 13C4.25625 13 4.51225 12.902 4.70725 12.707L8.00025 9.41401L11.2933 12.707C11.4882 12.902 11.7443 13 12.0002 13C12.2562 13 12.5122 12.902 12.7072 12.707C13.0982 12.316 13.0982 11.684 12.7072 11.293L9.41425 8.00001Z"
                    fill="#ACB7C5"
                  />
                </svg>
              </button>
            </div>
            <div class="settings__interest">
              Мобильные приложения
              <button class="button settings__interest-delete" type="button">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.41425 8.00001L12.7072 4.70701C13.0982 4.31601 13.0982 3.68401 12.7072 3.29301C12.3162 2.90201 11.6842 2.90201 11.2933 3.29301L8.00025 6.58601L4.70725 3.29301C4.31625 2.90201 3.68425 2.90201 3.29325 3.29301C2.90225 3.68401 2.90225 4.31601 3.29325 4.70701L6.58625 8.00001L3.29325 11.293C2.90225 11.684 2.90225 12.316 3.29325 12.707C3.48825 12.902 3.74425 13 4.00025 13C4.25625 13 4.51225 12.902 4.70725 12.707L8.00025 9.41401L11.2933 12.707C11.4882 12.902 11.7443 13 12.0002 13C12.2562 13 12.5122 12.902 12.7072 12.707C13.0982 12.316 13.0982 11.684 12.7072 11.293L9.41425 8.00001Z"
                    fill="#ACB7C5"
                  />
                </svg>
              </button>
            </div>
            <div class="settings__interest">
              Интерфейсы
              <button class="button settings__interest-delete" type="button">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.41425 8.00001L12.7072 4.70701C13.0982 4.31601 13.0982 3.68401 12.7072 3.29301C12.3162 2.90201 11.6842 2.90201 11.2933 3.29301L8.00025 6.58601L4.70725 3.29301C4.31625 2.90201 3.68425 2.90201 3.29325 3.29301C2.90225 3.68401 2.90225 4.31601 3.29325 4.70701L6.58625 8.00001L3.29325 11.293C2.90225 11.684 2.90225 12.316 3.29325 12.707C3.48825 12.902 3.74425 13 4.00025 13C4.25625 13 4.51225 12.902 4.70725 12.707L8.00025 9.41401L11.2933 12.707C11.4882 12.902 11.7443 13 12.0002 13C12.2562 13 12.5122 12.902 12.7072 12.707C13.0982 12.316 13.0982 11.684 12.7072 11.293L9.41425 8.00001Z"
                    fill="#ACB7C5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <input id="interests" class="settings__form-input" type="text" name="interests">
        </div>
      </div>
      <div class="settings__form-button-keeper">
        <button class="button button_primary" type="submit">
          Сохранить
        </button>
        <button class="button button_red" type="button">
          Удалить аккаунт
        </button>
      </div>
    </form>
  </div>
</template>
<script src="./profile-settings-information.js"></script>
<style src="./profile-settings-information.css"></style>
