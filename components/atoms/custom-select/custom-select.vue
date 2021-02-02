<template>
  <div v-click-outside="closeCustomMenu" class="custom-select">
    <div :class="`select-selected${isOpened ? ' select-arrow-active' : ''}`" @click="customMenuHandler">
      {{ activeName !== null ? activeName : options[activeOption].name }}
    </div>
    <div :class="`select-items${!isOpened ? ' select-hide' : ''}`">
      <div v-for="option of options" :key="option.value" :data-index="options.indexOf(option)" :class="options.indexOf(option) === activeOption ? 'same-as-selected' : ''" @click="changeActive(option)">
        {{ option.name }}
      </div>
    </div>
  </div>
</template>

<script src="./custom-select.js"></script>

<style src="./custom-select.css"></style>
