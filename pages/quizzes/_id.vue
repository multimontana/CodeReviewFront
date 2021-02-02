<template>
  <choose-level />
</template>
<script>
import ChooseLevelSection from '@/components/organisms/choose-level-section/choose-level-section.vue'
export default {
  name: 'Test',
  components: {
    'choose-level': ChooseLevelSection
  },
  async asyncData ({ store, route }) {
    await store.dispatch('quizes/getQuizById', { id: route.params.id })
  },
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  head: {
    title: 'Profession'
  }
}
</script>
