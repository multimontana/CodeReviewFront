<template>
  <button :class="`button ${theme && `button_${theme}`}`" :disabled="disabled" :type="type" @click="$emit('click-event')">
    <slot />
    <svg
      v-if="arrow"
      class="button__arrow"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 12C4 11.4477 4.44771 11 5 11H16.585L14.2929 8.70711C13.9324 8.34662 13.9047 7.77939 14.2097 7.3871L14.2929 7.29289C14.6534 6.93241 15.2206 6.90468 15.6129 7.2097L15.7071 7.29289L19.7071 11.2929L19.7485 11.3369L19.8037 11.4047L19.8753 11.5159L19.9288 11.6287L19.9642 11.734L19.9932 11.8825L20 12L19.9972 12.0752L19.9798 12.2007L19.9503 12.3121L19.9063 12.4232L19.854 12.5207L19.7872 12.6168C19.7623 12.6485 19.7356 12.6786 19.7071 12.7071L15.7071 16.7071C15.3166 17.0976 14.6834 17.0976 14.2929 16.7071C13.9324 16.3466 13.9047 15.7794 14.2097 15.3871L14.2929 15.2929L16.585 13H5C4.44771 13 4 12.5523 4 12Z"
        fill="#F5F7F9"
      />
    </svg>
  </button>
</template>

<script src="./button.js"></script>

<style scoped src="./button.css"></style>
