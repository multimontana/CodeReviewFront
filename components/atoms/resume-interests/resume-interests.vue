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
    <div class="summary__form-group">
      <label class="summary__form-label" for="interests">Интересы</label>
      <div class="summary__form-interests">
        <div class="summary__interests-keeper">
        <!-- <div class="summary__interest">
            Дизайн
            <button class="button summary__interest-delete" type='button'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.41425 8.00001L12.7072 4.70701C13.0982 4.31601 13.0982 3.68401 12.7072 3.29301C12.3162 2.90201 11.6842 2.90201 11.2933 3.29301L8.00025 6.58601L4.70725 3.29301C4.31625 2.90201 3.68425 2.90201 3.29325 3.29301C2.90225 3.68401 2.90225 4.31601 3.29325 4.70701L6.58625 8.00001L3.29325 11.293C2.90225 11.684 2.90225 12.316 3.29325 12.707C3.48825 12.902 3.74425 13 4.00025 13C4.25625 13 4.51225 12.902 4.70725 12.707L8.00025 9.41401L11.2933 12.707C11.4882 12.902 11.7443 13 12.0002 13C12.2562 13 12.5122 12.902 12.7072 12.707C13.0982 12.316 13.0982 11.684 12.7072 11.293L9.41425 8.00001Z" fill="#ACB7C5" />
                </svg>
            </button>
        </div>
        <div class="summary__interest">
            Мобильные приложения
            <button class="button summary__interest-delete" type='button'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.41425 8.00001L12.7072 4.70701C13.0982 4.31601 13.0982 3.68401 12.7072 3.29301C12.3162 2.90201 11.6842 2.90201 11.2933 3.29301L8.00025 6.58601L4.70725 3.29301C4.31625 2.90201 3.68425 2.90201 3.29325 3.29301C2.90225 3.68401 2.90225 4.31601 3.29325 4.70701L6.58625 8.00001L3.29325 11.293C2.90225 11.684 2.90225 12.316 3.29325 12.707C3.48825 12.902 3.74425 13 4.00025 13C4.25625 13 4.51225 12.902 4.70725 12.707L8.00025 9.41401L11.2933 12.707C11.4882 12.902 11.7443 13 12.0002 13C12.2562 13 12.5122 12.902 12.7072 12.707C13.0982 12.316 13.0982 11.684 12.7072 11.293L9.41425 8.00001Z" fill="#ACB7C5" />
                </svg>
            </button>
        </div>
        <div class="summary__interest">
            Интерфейсы
            <button class="button summary__interest-delete" type='button'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.41425 8.00001L12.7072 4.70701C13.0982 4.31601 13.0982 3.68401 12.7072 3.29301C12.3162 2.90201 11.6842 2.90201 11.2933 3.29301L8.00025 6.58601L4.70725 3.29301C4.31625 2.90201 3.68425 2.90201 3.29325 3.29301C2.90225 3.68401 2.90225 4.31601 3.29325 4.70701L6.58625 8.00001L3.29325 11.293C2.90225 11.684 2.90225 12.316 3.29325 12.707C3.48825 12.902 3.74425 13 4.00025 13C4.25625 13 4.51225 12.902 4.70725 12.707L8.00025 9.41401L11.2933 12.707C11.4882 12.902 11.7443 13 12.0002 13C12.2562 13 12.5122 12.902 12.7072 12.707C13.0982 12.316 13.0982 11.684 12.7072 11.293L9.41425 8.00001Z" fill="#ACB7C5" />
                </svg>
            </button>
        </div> -->
        </div>
        <input id="interests" class="summary__form-input" type="text" name="interests">
      </div>
    </div>
    <div class="summary__button-keeper">
      <button class="button button_primary">
        Сохранить
      </button>
    </div>
  </div>
</template>
<script src="./resume-interests.js"></script>
<style scoped src="./resume-interests.css"></style>
