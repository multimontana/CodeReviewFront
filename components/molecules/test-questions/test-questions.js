import testCloseModal from '@/components/modals/tests/test-close-modal/test-close-modal.vue'
import indexDb from '@/services/indexedDb/indexedDb'

export default {
  name: 'TestQuestion',
  data () {
    return {
      activeAnswer: '',
      answer: '',
      showModal: false,
      minutes: 30,
      seconds: 60000,
      allDate: 0
    }
  },
  computed: {
    getCurrentQuestion () {
      return this.$store.getters['quizes/getCurrentQuestion']
    },
    getQuizInfo () {
      return this.$store.getters['quizes/getQuizInfo']
    }
  },
  methods: {
    setCurrentQuestion () {
      let activeAnswer = this.$refs['answer' + this.activeAnswer]
      if (!activeAnswer || !activeAnswer.length) {
        return
      }
      activeAnswer = activeAnswer[0].value.split('/')
      const answers = this.getAnswers(activeAnswer)
      const data = {
        ...this.getQuizInfo,
        current: this.getQuizInfo.current + 1,
        answers
      }
      this.$store.commit('quizes/CHANGE_CURRENT_INDEX', data)
      const currentIndex = this.getQuizInfo.current
      if (this.getQuizInfo.questions.length > currentIndex) {
        indexDb.saveQuestion(this.getQuizInfo, 'questions', 'quiz_id')
        this.$store.commit('quizes/SET_CURRENT_INFO', this.getQuizInfo.questions[currentIndex])
      } else if (this.getQuizInfo.questions.length === parseInt(currentIndex)) {
        data.ended_at = this.$moment(new Date()).format('YYYY-MM-DD hh:mm:ss')
        indexDb.saveQuestion(this.getQuizInfo, 'questions', 'quiz_id')
        this.$router.push({
          path: `/tests/quiz/test-success/${this.$route.params.id}`
        })
      }
    },
    getAnswers (activeAnswer) {
      const info = { ...this.getQuizInfo }
      let answers = [{
        answer: activeAnswer[0],
        answer_id: activeAnswer[1],
        question: info.questions[info.current].question,
        question_id: parseInt(info.questions[info.current].id)
      }]
      answers = [...info.answers, ...answers]
      return answers
    },
    confirmExit () {
      indexDb.deleteQuestion(parseInt(this.$route.params.id), 'questions', 'quiz_id')
      this.showModal = false
      this.$router.push({
        path: '/tests'
      })
    },
    getCountDownTimer () {
      const timeLeft = { minutes: 30, seconds: 60000 }
      if (this.getQuizInfo.time_left && this.getQuizInfo.time_left.allDate) {
        this.allDate = this.getQuizInfo.time_left.allDate
      } else {
        this.allDate = new Date((new Date()).getTime() + parseInt(timeLeft.minutes) * parseInt(timeLeft.seconds))
      }
      const myfunc = setInterval(() => {
        const now = new Date().getTime()
        const timeleft = this.allDate - now
        this.minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))
        this.seconds = Math.floor((timeleft % (1000 * 60)) / 1000)
        if (timeleft < 0 || !this.$refs.timer) {
          clearInterval(myfunc)
          if (timeleft < 0) {
            this.removeAllEventListeners()
            this.$router.push({
              path: `/tests/quiz/test-success/${this.$route.params.id}`
            })
          }
        } else {
          this.$refs.timer.innerHTML = this.minutes + 'm ' + this.seconds + 's '
        }
      }, 1000)
    },
    setData () {
      const quizInfo = { ...this.getQuizInfo }
      quizInfo.time_left = {
        allDate: this.allDate
      }
      indexDb.saveQuestion(quizInfo, 'questions', 'quiz_id')
    },
    removeAllEventListeners () {
      window.addEventListener('popstate', () => {
        return null
      })
      window.addEventListener('beforeunload', (event) => {
        return null
      })
      window.addEventListener('offline', () => {
        return null
      })
    }
  },
  watch: {
    getCurrentQuestion () {
      const answer = this.$refs['answer' + this.activeAnswer]
      if (answer && answer.length) {
        answer[0].checked = false
      }
    }
  },
  mounted () {
    window.addEventListener('popstate', () => {
      this.$router.push({
        path: `/tests/quiz/${this.$route.params.id}`
      })
      this.setData()
    })
    window.addEventListener('beforeunload', () => {
      this.setData()
    })
    window.addEventListener('offline', () => {
      this.setData()
    })
    setTimeout(() => {
      this.getCountDownTimer()
    }, 1000)
  },
  components: {
    testCloseModal
  }
}
