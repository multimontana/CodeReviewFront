<template>
  <Button class="dropdown-opener" :theme="theme" @click-event="$emit('dropdownHandler')">
    <slot />
  </Button>
</template>

<script src="./dropdown-opener.js"></script>
<style scoped src="./dropdown-opener.css"></style>
