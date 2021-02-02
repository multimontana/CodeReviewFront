<template>
  <div v-click-outside="closeDropdown" class="dropdown-keeper">
    <dropdown-opener :style="openerStyle && openerStyle" :class="openerClass && openerClass" :theme="openerTheme" @dropdownHandler="dropdownHandler">
      <slot name="opener" />
    </dropdown-opener>
    <dropdown :style="contentStyle && contentStyle" :class="contentClass && contentClass" :opened="opened">
      <slot name="content" />
    </dropdown>
  </div>
</template>

<script src="./dropdown-keeper.js"></script>
<style scoped src="./dropdown-keeper.css"></style>
