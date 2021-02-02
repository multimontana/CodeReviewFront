<template>
  <div>
    <test-section />
  </div>
</template>
<script>
import testsSection from '@/components/organisms/tests-section/tests-section.vue'
// import indexDb from '@/services/indexedDb/indexedDb'
export default {
  name: 'Tests',
  components: {
    'test-section': testsSection
  },
  async asyncData ({ store }) {
    if (!store.getters['categories/getCategories']?.length) {
      await store.dispatch('categories/fetchCategories')
    }
    await store.dispatch('quizes/fetchQuizes', {
      type: 2,
      difficulty: 1,
      categories: ''
    })
  },
  computed: {
    getCategories () {
      return this.$store.getters['categories/getCategories']
    }
  },
  mounted () {
    this.$store.commit('quizes/RESET_QUIZ_SUCCESS_DATA')
  },
  head: {
    title: 'Tests'
  }
}
</script>
