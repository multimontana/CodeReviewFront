<template>
  <div class="messages__users-list-keeper">
    <div class="messages__users-search-keeper">
      <div class="messsages__users-input-keeper">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.7473 19.4825L17.4102 16.17C18.7056 14.5537 19.3329 12.5021 19.1631 10.4372C18.9934 8.37227 18.0396 6.45088 16.4978 5.06813C14.9559 3.68538 12.9433 2.94636 10.8738 3.00303C8.80419 3.05971 6.83498 3.90777 5.37103 5.37283C3.90708 6.83789 3.05966 8.8086 3.00303 10.8797C2.9464 12.9509 3.68486 14.965 5.06656 16.508C6.44826 18.051 8.36819 19.0056 10.4316 19.1754C12.4949 19.3453 14.5449 18.7175 16.16 17.4212L19.47 20.7337C19.5536 20.8181 19.6531 20.8851 19.7627 20.9308C19.8723 20.9765 19.9899 21 20.1086 21C20.2274 21 20.3449 20.9765 20.4546 20.9308C20.5642 20.8851 20.6636 20.8181 20.7473 20.7337C20.9094 20.5659 21 20.3416 21 20.1081C21 19.8747 20.9094 19.6504 20.7473 19.4825ZM11.114 17.4212C9.8687 17.4212 8.65139 17.0516 7.61597 16.3593C6.58056 15.6669 5.77355 14.6828 5.297 13.5315C4.82045 12.3801 4.69577 11.1132 4.93871 9.89088C5.18165 8.6686 5.78131 7.54586 6.66186 6.66464C7.54241 5.78343 8.66429 5.18331 9.88565 4.94018C11.107 4.69706 12.373 4.82184 13.5235 5.29875C14.674 5.77566 15.6573 6.58328 16.3491 7.61948C17.041 8.65568 17.4102 9.87392 17.4102 11.1202C17.4102 12.7913 16.7469 14.394 15.5661 15.5757C14.3853 16.7573 12.7839 17.4212 11.114 17.4212Z" fill="#ACB7C5" />
        </svg>
        <input class="messages__users-input" type="text" placeholder="Поиск">
      </div>
      <div class="messages__users-button-keeper">
        <button class="button messages__add-user">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z" fill="#5181B8" />
          </svg>
        </button>
        <button class="button messages__open-responsive">
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
      </div>
    </div>
    <ul class="messages__user-list">
      <!-- active class messages__user_active -->
      <li
        v-for="(dialog, index) in getChatDialogs"
        :key="dialog.id"
        class="messages__user"
        @click="openDialogMessagesFromDb({ index, dialogId: dialog.id })"
      >
        <img :src="dialog.to_user.avatar" alt="anyone" class="messages__user-image">
        <div class="messages__username-keeper">
          <h4 class="messages__username">
            {{ dialog.to_user.username }} {{ dialog.to_user.surname }}
          </h4>
          <div class="messages__last-keeper">
            <h6 class="messages__last">
              {{ dialog.to_user.last_message.text }}
            </h6>
            <div v-if="dialog.to_user.last_message.count > 0" class="messages__new-count">
              {{ dialog.to_user.last_message.count }}
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script src="./message-user-list.js"></script>
<style scoped src="./message-user-list.css"></style>
