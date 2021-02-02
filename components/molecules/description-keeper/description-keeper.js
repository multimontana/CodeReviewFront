import indexDb from '@/services/indexedDb/indexedDb'
export default {
  props: {
    param: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      difficulty: {
        1: 'Начальный уровень',
        2: 'Средний уровень',
        3: 'Сложный уровень'
      }
    }
  },
  computed: {
    getQuizInfo () {
      return this.$store.getters['quizes/getQuizInfo']
    },
    getSingleQuiz () {
      return this.$store.getters['quizes/getSingleQuiz']
    }
  },
  methods: {
    setQuestions () {
      if (this.getSingleQuiz.questions.length) {
        const questionData = {
          questions: this.getSingleQuiz.questions,
          current: 0,
          answers: [],
          name: this.getSingleQuiz.name,
          question_length: this.getSingleQuiz.questions.length,
          quiz_id: this.getSingleQuiz.id,
          started_at: this.$moment(new Date()).format('YYYY-MM-DD hh:mm:ss')
        }
        this.$store.commit('quizes/SET_CURRENT_INFO', questionData.questions[questionData.current])
        indexDb.saveQuestion(questionData, 'questions', 'quiz_id')
      }
    }
  },
  name: 'description-keeper'
}
