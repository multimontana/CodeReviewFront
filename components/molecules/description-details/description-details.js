export default {
  name: 'description-details',
  computed: {
    getQuizInfo () {
      return this.$store.getters['quizes/getQuizInfo']
    },
    getSingleQuiz () {
      return this.$store.getters['quizes/getSingleQuiz']
    }
  }
}
