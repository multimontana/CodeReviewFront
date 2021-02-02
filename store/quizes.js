export const state = () => ({
  quizes: [],
  quiz: {
    questions: [],
    themes: []
  },
  quiz_info: {},
  current_question: {
    answers: [],
    question: ''
  },
  quiz_success: {
    wrong: [],
    allCount: 0,
    correct: 0,
    quiz_completed_time: '00:00'
  },
  difficultyLevels: [
    {
      name: 'Начальный уровень',
      value: 1
    },
    {
      name: 'Средний уровень',
      value: 2
    },
    {
      name: 'Сложный уровень',
      value: 3
    }
  ]
})

export const mutations = {
  SET_SINGLE_QUIZ (state, payload) {
    state.quiz = payload.quiz
    state.quiz.themes = payload.themes
  },
  SET_SINGLE_QUIZ_QUESTIONS (state, payload) {
    state.quiz.questions = payload
  },
  SET_QUIZES (state, payload) {
    state.quizes = payload
  },
  SET_QUIZ_INFO (state, payload) {
    state.quiz_info = { ...payload, current: payload.current || 0, answers: [] }
  },
  SET_CURRENT_INFO (state, payload) {
    state.current_question = payload
  },
  CHANGE_CURRENT_INDEX (state, payload) {
    state.quiz_info = payload
  },
  SET_QUIZ_SUCCESS_DATA (state, payload) {
    const allCount = payload.quiz_request.questions_length
    payload.quiz_request.quiz_participant_answers.forEach((item, index) => {
      const answers = JSON.parse(payload.quiz_response[index].answers)
      answers.forEach((answer) => {
        if ((item.answer_id === answer.id) && answer.is_correct === 'false') {
          state.quiz_success.wrong.push(answer)
        }
      })
    })
    state.quiz_success = {
      ...state.quiz_success,
      correct: allCount - state.quiz_success.wrong.length,
      allCount,
      quiz_completed_time: payload.quiz_request.quiz_completed_time
    }
  },
  RESET_QUIZ_SUCCESS_DATA (state) {
    state.quiz_success = {
      wrong: [],
      allCount: 0,
      correct: 0,
      quiz_completed_time: '00:00'
    }
  }
}

export const actions = {
  async fetchQuizes ({ commit }, data) {
    const quizes = await this.$axios.$get(`quizzes/get?offset=1&limit=10&difficulty=${data.difficulty}&category_id=${data.categories}`)
    commit('SET_QUIZES', quizes.data)
  },
  async getQuizById ({ commit }, data) {
    const quiz = await this.$axios.$get(`quiz/get-by-id/${data.id}?difficulty=${data.difficulty}&limit=4`)
    commit('SET_SINGLE_QUIZ', quiz.data)
  },
  async getQuizQuestionByQuizId ({ commit }, data) {
    const quizQuestions = await this.$axios.$get(`quiz/questions/get-by-quiz-id/${data.id}`)
    commit('SET_SINGLE_QUIZ_QUESTIONS', quizQuestions.data)
  },
  async testSuccessDataAction ({ commit }, data) {
    const quiz = await this.$axios.$post(`quiz/${data.quiz_id}/completed`, data)
    commit('SET_QUIZ_SUCCESS_DATA', { quiz_request: data, quiz_response: quiz.data })
  }
}

export const getters = {
  getQuizes: (state) => {
    return state.quizes
  },
  getSingleQuiz: (state) => {
    return state.quiz
  },
  getQuizInfo: (state) => {
    return state.quiz_info
  },
  getCurrentQuestion: (state) => {
    return state.current_question
  },
  getQuizSuccessData: (state) => {
    return state.quiz_success
  },
  getDifficultyLevels: (state) => {
    return state.difficultyLevels
  }
}
