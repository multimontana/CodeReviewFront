<template>
  <test-success-section />
</template>
<script>
import TestSuccessSection from '@/components/organisms/test-success-section/test-success-section.vue'
import indexDb from '@/services/indexedDb/indexedDb'
import { dateCompareFunction } from '@/_utils/date_helper'

export default {
  name: 'TestSuccess',
  components: {
    'test-success-section': TestSuccessSection
  },
  data () {
    return {
      quiz_participant_answers: {}
    }
  },
  async mounted () {
    const data = await indexDb.getById(parseInt(this.$route.params.id), 'questions', 'quiz_id')
    if (data) {
      window.addEventListener('popstate', () => {
        this.$router.push({
          path: `/tests/quiz/test-success/${data.quiz_id}`
        })
      })
    }

    if (data) {
      const request = {
        quiz_participant_answers: data.answers,
        questions_length: data.questions.length,
        quiz_completed_time: dateCompareFunction(data.started_at, data.ended_at),
        quiz_participant: {
          participant_start_time: data.started_at,
          participant_end_time: data.ended_at || this.$moment(new Date()).format('YYYY-MM-DD hh:mm:ss')
        },
        quiz_id: this.$route.params.id

      }
      this.$store.dispatch('quizes/testSuccessDataAction', request).then(() => {
        indexDb.deleteQuestion(parseInt(this.$route.params.id), 'questions', 'quiz_id')
      })
    } else {
      this.$router.push({
        path: '/tests'
      })
    }
  },
  layout: 'lesson'
}
</script>
