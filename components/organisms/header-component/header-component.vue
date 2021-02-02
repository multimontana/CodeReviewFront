<template>
  <header ref="header" class="header">
    <div v-if="responsive" class="header__search-resp" @click="openResponsiveMenu">
      <Button style="height: 100%;" theme="white" class="header__search-button">
        <svg
          v-if="!responsiveSearch"
          class="header__search-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.7099 20.29L17.9999 16.61C19.44 14.8144 20.1374 12.5353 19.9487 10.2413C19.76 7.94733 18.6996 5.81281 16.9854 4.27667C15.2713 2.74053 13.0337 1.91954 10.7328 1.9825C8.43194 2.04546 6.24263 2.98759 4.61505 4.61517C2.98747 6.24275 2.04534 8.43207 1.98237 10.7329C1.91941 13.0338 2.74041 15.2714 4.27655 16.9855C5.81269 18.6997 7.94721 19.7601 10.2412 19.9488C12.5352 20.1375 14.8143 19.4401 16.6099 18L20.2899 21.68C20.3829 21.7738 20.4935 21.8482 20.6153 21.8989C20.7372 21.9497 20.8679 21.9758 20.9999 21.9758C21.1319 21.9758 21.2626 21.9497 21.3845 21.8989C21.5063 21.8482 21.6169 21.7738 21.7099 21.68C21.8901 21.4936 21.9909 21.2444 21.9909 20.985C21.9909 20.7257 21.8901 20.4765 21.7099 20.29ZM10.9999 18C9.61544 18 8.26206 17.5895 7.11091 16.8203C5.95977 16.0511 5.06256 14.9579 4.53275 13.6788C4.00293 12.3997 3.86431 10.9923 4.13441 9.63439C4.4045 8.27653 5.07119 7.02925 6.05016 6.05028C7.02912 5.07131 8.27641 4.40463 9.63427 4.13453C10.9921 3.86443 12.3996 4.00306 13.6787 4.53287C14.9578 5.06268 16.051 5.95989 16.8202 7.11103C17.5894 8.26218 17.9999 9.61556 17.9999 11C17.9999 12.8565 17.2624 14.637 15.9497 15.9498C14.6369 17.2625 12.8564 18 10.9999 18Z"
            fill="#5181B8"
          />
        </svg>
        <svg
          v-else
          class="header__search-icon"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.com/svgjs"
          version="1.1"
          width="24"
          height="24"
          x="0"
          y="0"
          viewBox="0 0 409.806 409.806"
          style="enable-background:new 0 0 24 24"
          xml:space="preserve"
        >
          <g xmlns="http://www.w3.org/2000/svg">
            <path
              d="M228.929,205.01L404.596,29.343c6.78-6.548,6.968-17.352,0.42-24.132c-6.548-6.78-17.352-6.968-24.132-0.42    c-0.142,0.137-0.282,0.277-0.42,0.42L204.796,180.878L29.129,5.21c-6.78-6.548-17.584-6.36-24.132,0.42    c-6.388,6.614-6.388,17.099,0,23.713L180.664,205.01L4.997,380.677c-6.663,6.664-6.663,17.468,0,24.132    c6.664,6.662,17.468,6.662,24.132,0l175.667-175.667l175.667,175.667c6.78,6.548,17.584,6.36,24.132-0.42    c6.387-6.614,6.387-17.099,0-23.712L228.929,205.01z"
              fill="#5181b8"
              data-original="#000000"
              style=""
            />
          </g>
        </svg>
      </Button>
    </div>
    <Button v-if="responsive" theme="white" class="header__menu-opener" @click-event="$emit('menu-handler')">
      <svg
        class="open"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.com/svgjs"
        version="1.1"
        width="24"
        height="24"
        x="0"
        y="0"
        viewBox="0 0 512 512"
        style="enable-background:new 0 0 24 24"
        xml:space="preserve"
      >
        <g xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              d="M501.333,96H10.667C4.779,96,0,100.779,0,106.667s4.779,10.667,10.667,10.667h490.667c5.888,0,10.667-4.779,10.667-10.667    S507.221,96,501.333,96z"
              fill="#5181b8"
              data-original="#000000"
              style=""
            />
          </g>
        </g>
        <g xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              d="M501.333,245.333H10.667C4.779,245.333,0,250.112,0,256s4.779,10.667,10.667,10.667h490.667    c5.888,0,10.667-4.779,10.667-10.667S507.221,245.333,501.333,245.333z"
              fill="#5181b8"
              data-original="#000000"
              style=""
            />
          </g>
        </g>
        <g xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              d="M501.333,394.667H10.667C4.779,394.667,0,399.445,0,405.333C0,411.221,4.779,416,10.667,416h490.667    c5.888,0,10.667-4.779,10.667-10.667C512,399.445,507.221,394.667,501.333,394.667z"
              fill="#5181b8"
              data-original="#000000"
              style=""
            />
          </g>
        </g>
      </svg>
      <svg
        class="close"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.com/svgjs"
        version="1.1"
        width="24"
        height="24"
        x="0"
        y="0"
        viewBox="0 0 409.806 409.806"
        style="enable-background:new 0 0 24 24"
        xml:space="preserve"
      >
        <g xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              d="M228.929,205.01L404.596,29.343c6.78-6.548,6.968-17.352,0.42-24.132c-6.548-6.78-17.352-6.968-24.132-0.42    c-0.142,0.137-0.282,0.277-0.42,0.42L204.796,180.878L29.129,5.21c-6.78-6.548-17.584-6.36-24.132,0.42    c-6.388,6.614-6.388,17.099,0,23.713L180.664,205.01L4.997,380.677c-6.663,6.664-6.663,17.468,0,24.132    c6.664,6.662,17.468,6.662,24.132,0l175.667-175.667l175.667,175.667c6.78,6.548,17.584,6.36,24.132-0.42    c6.387-6.614,6.387-17.099,0-23.712L228.929,205.01z"
              fill="#5181b8"
              data-original="#000000"
              style=""
            />
          </g>
        </g>
      </svg>
    </Button>
    <header-search />
    <div class="header__account">
      <language />
      <dropdown-keeper class="header__bookmark-keeper" content-class="header__bookmarks-dropdown" :opener-class="'header__bookmark-button'" :opener-style="{background: `url(${icons.bookmark}) center center no-repeat, var(--white)`}">
        <template v-slot:content>
          <article>bookmarks</article>
        </template>
      </dropdown-keeper>
      <dropdown-keeper class="header__messages-keeper" content-class="header__messages-dropdown" :opener-style="{background: `url(${icons.messages}) center center no-repeat, var(--white)`}">
        <template v-slot:opener>
          <div class="header__messages-counter">
            1
          </div>
        </template>
        <template v-slot:content>
          <nuxt-link to="/messages">
            <article>Сообщения</article>
          </nuxt-link>
        </template>
      </dropdown-keeper>
      <dropdown-keeper class="header__notifications-keeper" opener-class="header__notifications-button" :opener-style="{background: `url(${icons.notifications}) center center no-repeat, var(--white)`}" content-class="header__notifications-dropdown">
        <template v-slot:opener>
          <div class="header__notifications-counter">
            3
          </div>
        </template>
        <template v-slot:content>
          <div class="header__notifications-block">
            <div class="header__notification-keeper">
              <Button class="header__notification">
                <img class="header__notification-image" src="../../../assets/icons/notification-images/php.svg" alt="PHP">
                <div class="header__notification-content">
                  <p class="header__notification-source">
                    Курс “PHP. Уровень 1”
                  </p>
                  <p class="header__notification-title">
                    Начнется через 2 часа
                  </p>
                  <p class="header__notification-time">
                    3ч назад
                  </p>
                </div>
              </Button>
            </div>
            <div class="header__notification-keeper">
              <Button class="header__notification">
                <img class="header__notification-image" src="../../../assets/icons/notification-images/book.svg" alt="Achivement">
                <div class="header__notification-content">
                  <p class="header__notification-title">
                    Вы получили сертификат курса “Java. Базовый уровень”
                  </p>
                  <p class="header__notification-time">
                    Около 23ч назад
                  </p>
                </div>
              </Button>
            </div>
            <div class="header__notification-keeper">
              <Button class="header__notification">
                <img class="header__notification-image" src="../../../assets/icons/notification-images/messages.svg" alt="Achivement">
                <div class="header__notification-content">
                  <p class="header__notification-title">
                    Настройте SMS уведомления чтобы получать их на телефоне
                  </p>
                  <p class="header__notification-time">
                    День назад
                  </p>
                </div>
              </Button>
            </div>
          </div>
          <div class="header__notification-actions">
            <nuxt-link :to="{ path: 'notifications' }" class="header__notifications-all">
              Все уведомления
            </nuxt-link>
            <Button class="header__notification-settings">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.8976 2.00199L13.0201 2.00189C13.0843 2.00487 13.1406 2.01221 13.2197 2.02944C13.8002 2.15583 14.0209 2.36426 14.5611 3.64074L14.6491 3.85131L14.9886 4.69248L15.0165 4.70396L15.4539 4.50595C16.4066 4.07996 16.8976 3.90052 17.2278 3.85046L17.2962 3.84167L17.4209 3.83494C17.7182 3.83494 18.021 3.94025 18.2528 4.1236L18.3624 4.22165L19.7193 5.57296L19.8137 5.67265C20.2399 6.14218 20.2797 6.47505 19.8082 7.68823L19.6513 8.07961L19.2815 8.95458L19.2886 8.97166L20.1357 9.288L20.5441 9.4494C21.599 9.88072 21.8158 10.1106 21.9568 10.6386C21.9852 10.7451 21.9953 10.8176 21.9986 10.9077L22 11.0055V12.9132C22 13.0488 21.9954 13.1254 21.962 13.2594C21.8216 13.8231 21.6132 14.0378 20.3455 14.5733L20.1363 14.6606L19.301 14.9977L19.2952 15.0118L19.5972 15.6717C20.3484 17.3412 20.3746 17.7072 19.8809 18.257L19.8192 18.324L18.4263 19.7158C18.1769 19.9679 17.8217 20.1067 17.4779 20.1067C17.186 20.1067 16.7275 19.9679 15.9459 19.6545L15.5275 19.4831L15.0509 19.2815L15.0236 19.2928L14.7773 19.9533C14.1744 21.5419 13.9678 21.7998 13.3484 21.9596C13.2569 21.9832 13.1914 21.9933 13.1171 21.9974L12.9945 22H11.0856C10.9665 22 10.8993 21.9964 10.7809 21.9708C10.2007 21.845 9.97914 21.6361 9.43788 20.3589L9.34966 20.1482L9.0096 19.3066L8.98344 19.2957L8.34815 19.5813C7.332 20.0287 6.89179 20.1648 6.57806 20.1648C6.28426 20.1648 5.98508 20.0616 5.74708 19.8765L5.63349 19.7772L4.27843 18.4239L4.12369 18.2552C3.75208 17.8179 3.73381 17.4789 4.18994 16.3119L4.42762 15.7277L4.71777 15.0457L4.71172 15.031L4.05484 14.7862C2.73708 14.2862 2.33098 14.0559 2.138 13.6354L2.0858 13.503L2.0422 13.3566C2.01752 13.2629 2.00699 13.1958 2.00272 13.1195L2 12.9935V11.0847C2 10.948 2.00474 10.8707 2.03877 10.7355C2.16566 10.2316 2.34576 10.0077 3.29447 9.58261L3.68766 9.41282L4.69733 9.00451L4.70425 8.9877L4.32674 8.15478C3.70383 6.73991 3.65224 6.30911 4.04525 5.82796L4.09903 5.76483L4.22636 5.62987L5.57616 4.28313C5.82346 4.03446 6.1772 3.89427 6.5215 3.89427C6.76776 3.89427 7.12934 3.99171 7.70805 4.2109L8.29026 4.4417L8.95028 4.71832L8.97734 4.70707L9.22549 4.04225C9.83405 2.44226 10.0513 2.17469 10.6932 2.03099C10.7742 2.01286 10.8319 2.00513 10.8976 2.00199ZM12.523 4H11.4081L11.2509 4.36853C11.1912 4.51504 11.1238 4.68617 11.0478 4.88481L10.6993 5.81694C10.6157 6.03762 10.4574 6.2204 10.2538 6.33473L10.1483 6.38604L9.3292 6.7269C9.1224 6.81295 8.89398 6.82661 8.6804 6.768L8.55432 6.72416L7.58525 6.31569L7.06181 6.10695L6.70998 5.9771L5.91977 6.76552L6.01277 7.00042C6.04911 7.0889 6.09094 7.18782 6.13863 7.29803L6.2997 7.6633L6.70366 8.5464C6.80042 8.75669 6.82065 8.99264 6.76353 9.2141L6.71997 9.34493L6.38503 10.1588C6.29635 10.3743 6.13575 10.5509 5.93242 10.6598L5.82733 10.7085L4.73976 11.1457L4.19609 11.3787L4 11.4695V12.5997L4.23463 12.7014C4.32346 12.7386 4.42321 12.7791 4.53477 12.8233L4.90579 12.9672L5.80732 13.302C6.03461 13.384 6.22321 13.5449 6.34018 13.7532L6.39255 13.8612L6.72754 14.6728C6.81356 14.8812 6.82615 15.1112 6.76566 15.3257L6.7206 15.4523L6.33182 16.3646L6.088 16.9664L5.96921 17.286L6.75948 18.0752L6.99479 17.9822C7.08146 17.9469 7.17645 17.9073 7.28 17.8631L8.00585 17.543L8.5293 17.3021C8.74835 17.1974 8.99663 17.1766 9.22796 17.2408L9.342 17.28L10.1659 17.6202C10.3843 17.7104 10.5625 17.8744 10.6707 18.0816L10.7189 18.1887L10.9239 18.7061L11.2157 19.4157L11.3846 19.8034L11.4762 20H12.5944L12.7541 19.6235L12.9621 19.0924L13.3007 18.1844C13.3843 17.9617 13.5438 17.7774 13.7492 17.6626L13.8556 17.6112L14.676 17.2726C14.8804 17.1883 15.1058 17.1745 15.317 17.2313L15.4417 17.2738L16.2143 17.6015L16.7781 17.8311L17.0867 17.9501L17.2903 18.0238L18.0815 17.2341L17.929 16.8578L17.7004 16.3363L17.2956 15.4539C17.1985 15.2432 17.1782 15.0068 17.2356 14.7849L17.2793 14.6538L17.6137 13.8434C17.7019 13.6296 17.861 13.4541 18.0624 13.3452L18.1665 13.2964L19.0876 12.9262L19.5578 12.729L19.6871 12.6728L20 12.5297V11.4006L19.6863 11.2667L19.2615 11.0986L18.1891 10.6994C17.9623 10.6169 17.7744 10.4557 17.658 10.2473L17.6059 10.1393L17.2715 9.32452C17.1862 9.11664 17.1738 8.88739 17.2341 8.67355L17.279 8.54739L17.5895 7.8215C17.6703 7.62954 17.7406 7.45931 17.8014 7.30886L17.9103 7.03372L18.029 6.71221L17.2384 5.92482L17.0029 6.01798C16.8727 6.07108 16.7235 6.1341 16.5542 6.20769L16.3782 6.28483L15.4554 6.7034C15.2454 6.7996 15.0101 6.81961 14.7891 6.76264L14.6586 6.71921L13.8352 6.38074C13.6196 6.29214 13.443 6.13159 13.334 5.92829L13.2853 5.82321L12.9942 5.09482L12.7832 4.58452L12.6663 4.31313L12.523 4ZM12.0005 8C14.2066 8 16 9.79302 16 11.9991C16 14.2054 14.2065 16 12.0005 16C9.79382 16 8 14.2057 8 11.9991C8 9.7927 9.79369 8 12.0005 8ZM12.0005 10C10.898 10 10 10.8975 10 11.9991C10 13.1013 10.8985 14 12.0005 14C13.1016 14 14 13.1011 14 11.9991C14 10.8977 13.1021 10 12.0005 10Z"
                  fill="#5181B8"
                />
              </svg>
            </Button>
          </div>
        </template>
      </dropdown-keeper>
      <dropdown-keeper class="header__profile-keeper" :opener-theme="''" opener-class="header__profile-button" content-class="header__profile-dropdown">
        <template v-slot:opener>
          <div class="header__avatar-keeper">
            <img class="header__avatar" src="../../../assets/icons/account.jpeg" alt="">
          </div>
          <h5 class="header__profile-name">
            Николай А.
          </h5>
          <img class="header__profile-arrow" src="../../../assets/icons/select-arrow.svg" alt="">
        </template>
        <template v-slot:content>
          <nuxt-link to="/profile">
            <Button class="header__profile-buttons">
              Мой профиль
            </Button>
          </nuxt-link>
          <nuxt-link to="/courses">
            <Button class="header__profile-buttons">
              Мои курсы
            </Button>
          </nuxt-link>
          <nuxt-link to="/teacher-profile">
            <Button class="header__profile-buttons">
              Мои преподователи
            </Button>
          </nuxt-link>
          <nuxt-link to="/profile-settings">
            <Button class="header__profile-buttons">
              Настройки
            </Button>
          </nuxt-link>
          <Button class="header__profile-buttons" @click-event="logout">
            Выход
          </Button>
        </template>
      </dropdown-keeper>
      <!--      <div>-->
      <!--        <nuxt-link class="navbar-item" to="/auth/register">-->
      <!--          Register-->
      <!--        </nuxt-link>-->
      <!--        <nuxt-link class="navbar-item" to="/auth/login">-->
      <!--          Log In-->
      <!--        </nuxt-link>-->
      <!--      </div>-->
    </div>
  </header>
</template>

<script src="./header-component.js">
</script>
<style scoped src="./header-component.css"></style>
