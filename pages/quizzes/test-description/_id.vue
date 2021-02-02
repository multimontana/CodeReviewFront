<template>
  <div>
    <level-description-section />
  </div>
</template>
<script>
import LevelDescriptionSection from '@/components/organisms/level-description-section/level-description-section.vue'
export default {
  name: 'TestParam',
  components: {
    'level-description-section': LevelDescriptionSection
  },
  async asyncData ({ store, route }) {
    await store.dispatch('quizes/getQuizById', { id: route.params.id, difficulty: route.query.difficulty }).then(async () => {
      await store.dispatch('quizes/getQuizQuestionByQuizId', { id: route.params.id })
    })
  },
  computed: {
    getQuizInfo () {
      return this.$store.getters['quiz/getQuizInfo']
    },
    getSingleQuiz () {
      return this.$store.getters['quiz/getSingleQuiz']
    }
  }
}
</script>
