<template>
  <div class="summary__keeper">
    <aside class="summary__tabs-keeper">
      <aside-tab :tabs="ResumeSettingsTabs" @changeTab="tabChangeEvent" />
    </aside>
    <work-wishes v-if="tabView === 0" />
    <resume-portfolio v-if="tabView === 1" />
    <resume-work-experience v-if="tabView === 2" />
    <resume-education v-if="tabView === 3" />
    <resume-interests v-if="tabView === 4" />
    <resume-about-me v-if="tabView === 5" />
  </div>
</template>
<script src="./resume.js"></script>
<style scoped src="./resume.css"></style>
