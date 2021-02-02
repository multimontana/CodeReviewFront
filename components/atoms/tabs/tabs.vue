<template>
  <div class="tabs">
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      :class="`tab${index === 0 ? ' tab_active' : '' }`"
      :data-tab="index"
      @click="tabClick"
    >
      {{ tab }}
    </div>
  </div>
</template>

<script src="./tabs.js"></script>
<style scoped src="./tabs.css"></style>
