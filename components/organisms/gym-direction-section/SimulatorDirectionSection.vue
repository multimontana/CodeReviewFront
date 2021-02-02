<template>
  <div class="direction_block">
    <nuxt-link class="gym__item" :to="`/gym/simulator/lesson/${$route.params.id}?type=newest`">
      <img class="gym__item-image" src="@/assets/icons/account.jpeg" alt="">
      <h4 class="gym__item-title">
        Обучение с нуля
      </h4>
    </nuxt-link>
    <nuxt-link class="gym__item" :to="`/gym/simulator/lesson/${$route.params.id}?type=skills`">
      <img class="gym__item-image" src="@/assets/icons/account.jpeg" alt="">
      <h4 class="gym__item-title">
        Улучшить скилл
      </h4>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'SimulatorDirectionSectionVue'
}
</script>

<style scoped src="./simulator-direction.css">
</style>
