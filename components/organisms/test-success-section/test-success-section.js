import indexDb from '@/services/indexedDb/indexedDb'

export default {
  name: 'TestSuccessSection',
  computed: {
    getQuizSuccessData () {
      return this.$store.getters['quizes/getQuizSuccessData']
    }
  },
  methods: {
    removeDbIndex () {
      indexDb.deleteQuestion(parseInt(this.$route.params.id), 'questions', 'quiz_id')
      this.$router.push({
        path: '/tests'
      })
    }
  }
}
