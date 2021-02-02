<template>
  <div class="checkbox" :data-category="category.category">
    <label class="checkbox-label" :for="category.category">
      <input
        :id="category.category"
        class="checkbox-input"
        type="checkbox"
        :value="category.category"
        :name="category.category"
        :checked="category.category === 'all'"
        @change="$emit('changeElement', { id: category.id, event: $event.target.checked , type: category.type})"
      >
      <div class="checkbox-input_custom">
        <div class="checkbox-input-active" />
      </div>
      {{ category.name }}
    </label>
  </div>
</template>

<script src="./category.js"></script>
<style scoped src="./category.css"></style>
