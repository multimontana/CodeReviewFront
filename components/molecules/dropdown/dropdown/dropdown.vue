<template>
  <div :class="`dropdown ${opened ? 'dropdown_open' : ''}`">
    <slot />
  </div>
</template>

<script src="./dropdown.js"></script>
<style scoped src="./dropdown.css"></style>
