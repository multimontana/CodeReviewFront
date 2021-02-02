<template>
  <div>
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      :class="`tab ${index === 0 ? 'tab_active' : '' }`"
      :data-tab="index"
      class="summary__tab"
      @click="tabClick($event, index)"
    >
      {{ tab }}
    </div>
  </div>
</template>
<script src="./aside-tab.js"></script>
<style scoped src="./aside-tab.css"></style>
