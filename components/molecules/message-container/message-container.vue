<template>
  <div v-if="getChatDialogMessages.hasOwnProperty('messages')" class="messages__container">
    <div class="messages__header">
      <div class="messages__name-keeper" :class="{'opened' : isOpened}">
        <button class="button messages__open-responsive">
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
        <h4 class="messages__name">
          {{ getChatDialogMessages.to_user.username }}
        </h4>
        <h6 class="messages__status">
          Была в сети три часа назад
        </h6>
      </div>
      <button class="button messages__header-search-opener" :class="{ 'opened' :isOpened}" @click="searchOpener()">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.7473 19.4825L17.4102 16.17C18.7056 14.5537 19.3329 12.5021 19.1631 10.4372C18.9934 8.37227 18.0396 6.45088 16.4978 5.06813C14.9559 3.68538 12.9433 2.94636 10.8738 3.00303C8.80419 3.05971 6.83498 3.90777 5.37103 5.37283C3.90708 6.83789 3.05966 8.8086 3.00303 10.8797C2.9464 12.9509 3.68486 14.965 5.06656 16.508C6.44826 18.051 8.36819 19.0056 10.4316 19.1754C12.4949 19.3453 14.5449 18.7175 16.16 17.4212L19.47 20.7337C19.5536 20.8181 19.6531 20.8851 19.7627 20.9308C19.8723 20.9765 19.9899 21 20.1086 21C20.2274 21 20.3449 20.9765 20.4546 20.9308C20.5642 20.8851 20.6636 20.8181 20.7473 20.7337C20.9094 20.5659 21 20.3416 21 20.1081C21 19.8747 20.9094 19.6504 20.7473 19.4825ZM11.114 17.4212C9.8687 17.4212 8.65139 17.0516 7.61597 16.3593C6.58056 15.6669 5.77355 14.6828 5.297 13.5315C4.82045 12.3801 4.69577 11.1132 4.93871 9.89088C5.18165 8.6686 5.78131 7.54586 6.66186 6.66464C7.54241 5.78343 8.66429 5.18331 9.88565 4.94018C11.107 4.69706 12.373 4.82184 13.5235 5.29875C14.674 5.77566 15.6573 6.58328 16.3491 7.61948C17.041 8.65568 17.4102 9.87392 17.4102 11.1202C17.4102 12.7913 16.7469 14.394 15.5661 15.5757C14.3853 16.7573 12.7839 17.4212 11.114 17.4212Z" fill="#ACB7C5" />
        </svg>
      </button>
      <div class="messages__header-search" :class="{'opened' : isOpened}">
        <input class="messages__header-input" type="text" placeholder="Поиск по истории сообщений">
        <div class="messages__header-button-keeper">
          <button class="button button_primary messages__header-submit-button">
            Поиск
          </button>
          <button class="button button_light messages__header-cancel-button">
            Отмена
          </button>
        </div>
      </div>
    </div>
    <div class="messages__content" @scroll.passive="handleScroll">
      <div class="messages__messages-keeper">
        <div class="messages__date-block">
          <h6 class="messsages__date">
            {{ $moment(getMessageHistoryDate).format('DD') }} {{ $moment(getMessageHistoryDate).format('MMMM') }} {{ $moment(getMessageHistoryDate).format('YYYY') }}
          </h6>
          <div v-for="(message, index) in getChatDialogMessages.messages" :key="index" :class="(message.from_user === loggedInUserId) ? 'messages__author-block_to' : 'messages__author-block_from'" class="messages__author-block">
            <img class="messages__author-image" :src="(message.from_user === loggedInUserId) ? getChatDialogMessages.from_user.avatar : getChatDialogMessages.to_user.avatar" alt="">
            <div class="messages__message-content-keeper">
              <div class="messages__author-name-keeper">
                <h4 class="messages__authorname">
                  {{ (message.from_user === loggedInUserId) ? getChatDialogMessages.from_user.username : getChatDialogMessages.to_user.username }}
                </h4>
                <span class="messages__sent-time">{{ message.created_at }}</span>
              </div>
              <article class="messages__message-content">
                {{ message.text }}
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="messages__footer">
      <div class="messages__input-keeper">
        <button class="button messages__attachment">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 5C19.7614 5 22 7.23858 22 10C22 12.7614 19.7614 15 17 15H9C7.34315 15 6 13.6569 6 12C6 10.3431 7.34315 9 9 9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11H9L8.88338 11.0067C8.38604 11.0645 8 11.4872 8 12C8 12.5128 8.38604 12.9355 8.88338 12.9933L9 13H17C18.6569 13 20 11.6569 20 10C20 8.34315 18.6569 7 17 7H9C6.23858 7 4 9.23858 4 12C4 14.6888 6.12231 16.8818 8.78311 16.9954L9 17H17C17.5523 17 18 17.4477 18 18C18 18.5523 17.5523 19 17 19H9C5.13401 19 2 15.866 2 12C2 8.13401 5.13401 5 9 5H17Z" fill="#ACB7C5" />
          </svg>
        </button>
        <textarea
          v-model="input.message"
          rows="1"
          class="messages__input"
          placeholder="Напишите сообщение"
          @keyup.enter="sendMessage({from_user: loggedInUserId, to_user: getChatDialogMessages.to_user.id, text: input.message})"
          @keypress.shift.enter="resizeHeight($event)"
        />
      </div>
      <button class="button messages__send-button" :disabled="!textAreaCompleted" @click="sendMessage({from_user: loggedInUserId, to_user: getChatDialogMessages.to_user.id, text: input.message})">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.5279 11.2117L4.43049 3.0954C3.62113 2.73468 2.72183 3.45612 3.08155 4.26775L5.7 10.2L13.7817 12.0233L5.7 13.8L3.08155 19.7788C2.81176 20.5904 3.62113 21.3119 4.43049 20.861L20.5279 12.7447C21.1574 12.4742 21.1574 11.5724 20.5279 11.2117Z" fill="none" />
        </svg>
      </button>
    </div>
  </div>
</template>
<script src="./message-container.js"></script>
<style scoped src="./message-container.css"></style>
