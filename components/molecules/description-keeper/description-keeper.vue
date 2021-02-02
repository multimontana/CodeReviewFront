<template>
  <section class="description__page-keeper">
    <nuxt-link to="/tests">
      <button class="button description__close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4143 12.0002L18.7072 6.70725C19.0982 6.31625 19.0982 5.68425 18.7072 5.29325C18.3162 4.90225 17.6842 4.90225 17.2933 5.29325L12.0002 10.5862L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68425 4.90225 6.31625 5.29325 6.70725L10.5862 12.0002L5.29325 17.2933C4.90225 17.6842 4.90225 18.3162 5.29325 18.7072C5.48825 18.9022 5.74425 19.0002 6.00025 19.0002C6.25625 19.0002 6.51225 18.9022 6.70725 18.7072L12.0002 13.4143L17.2933 18.7072C17.4882 18.9022 17.7443 19.0002 18.0002 19.0002C18.2562 19.0002 18.5122 18.9022 18.7072 18.7072C19.0982 18.3162 19.0982 17.6842 18.7072 17.2933L13.4143 12.0002Z" fill="#272C31" />
        </svg>
      </button>
    </nuxt-link>
    <div class="container">
      <button class="button description__back-button" @click="$router.back()">
        <img class="description__back-icon" src="@/assets/icons/arrow-left.svg" alt="Arrow Left">
        Выбор сложности
      </button>
      <div class="description__start-keeper">
        <div class="description__test-name-keeper">
          <img class="description__test-icon" src="../../../assets/icons/python_icon.svg" alt="">
          <div class="description__test-name">
            <h2 class="description__test-name-title">
              {{ getSingleQuiz.name }}
            </h2>
            <p class="description__test-name-subtitle">
              {{ difficulty[$route.query.difficulty] }}
            </p>
          </div>
        </div>
        <nuxt-link ref="link" :to="`/tests/quiz/${getSingleQuiz.id}`">
          <button class="button button_primary" type="button" @click="setQuestions">
            Начать тестирование
            <svg
              class="button__arrow"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4 12C4 11.4477 4.44771 11 5 11H16.585L14.2929 8.70711C13.9324 8.34662 13.9047 7.77939 14.2097 7.3871L14.2929 7.29289C14.6534 6.93241 15.2206 6.90468 15.6129 7.2097L15.7071 7.29289L19.7071 11.2929L19.7485 11.3369L19.8037 11.4047L19.8753 11.5159L19.9288 11.6287L19.9642 11.734L19.9932 11.8825L20 12L19.9972 12.0752L19.9798 12.2007L19.9503 12.3121L19.9063 12.4232L19.854 12.5207L19.7872 12.6168C19.7623 12.6485 19.7356 12.6786 19.7071 12.7071L15.7071 16.7071C15.3166 17.0976 14.6834 17.0976 14.2929 16.7071C13.9324 16.3466 13.9047 15.7794 14.2097 15.3871L14.2929 15.2929L16.585 13H5C4.44771 13 4 12.5523 4 12Z" fill="#F5F7F9" />
            </svg>
          </button>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<script src="./description-keeper.js"></script>
<style scoped src="./description-keeper.css"></style>
