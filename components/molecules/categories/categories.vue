<template>
  <div class="categories">
    <h3 class="categories-title">
      Категории
    </h3>
    <form class="categories-keeper" action="#" method="POST">
      <category v-for="category in categories" :key="category.id" :category="category" @changeElement="categoryChanged" />
    </form>
  </div>
</template>

<script src="./categories.js"></script>
<style scoped src="./categories.css"></style>
