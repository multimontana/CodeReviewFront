<template>
  <div class="modal test-close-modal open">
    <h4>
      Do You want to close the test?
    </h4>
    <div class="summary__project-modal-action-keeper">
      <Button class="summary__project-modal-action-button" :theme="'light'" @click-event="$emit('confirmModal')">
        Confirm
      </Button>
      <Button class="summary__project-modal-action-button" :theme="'red'" @click-event="$emit('closeModal')">
        Cancel
      </Button>
    </div>
  </div>
</template>
<style src="./test-close-modal.css"></style>
<script src="./test-close-modal.js"></script>
