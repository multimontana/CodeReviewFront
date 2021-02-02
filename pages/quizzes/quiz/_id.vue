<template>
  <div>
    <test-question-section />
  </div>
</template>
<script>
import TestQuestionSection from '@/components/organisms/test-questions-section/test-questions-section.vue'
import indexDb from '@/services/indexedDb/indexedDb'
export default {
  name: 'TestQuestionSection',
  layout: 'lesson',
  components: {
    'test-question-section': TestQuestionSection
  },
  async mounted () {
    const data = await indexDb.getById(parseInt(this.$route.params.id), 'questions', 'quiz_id')
    if (data) {
      data.questions[data.current].current = data.current
      this.$store.commit('quizes/SET_CURRENT_INFO', data.questions[data.current])
      this.$store.commit('quizes/SET_QUIZ_INFO', data)
    }
  },
  head: {
    title: 'TestDescription'
  }
}
</script>
