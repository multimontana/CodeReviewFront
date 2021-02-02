export default {
  name: 'ChooseLevelSection',
  data () {
    return {
      difficulty: {
        easy: 1,
        normal: 2,
        hard: 3
      }
    }
  },
  computed: {
    getSingleQuiz () {
      return this.$store.getters['quizes/getSingleQuiz']
    }
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    // $route (to, from) {
    //   switch (this.$route.path) {
    //     case '/test/choose-level':
    //       this.SET_ACTIVE_TAB(1)
    //       break
    //     case '/tests/choose-level/level-description':
    //       this.SET_ACTIVE_TAB(2)
    //       break
    //     case '/tests/choose-level/level-description/test':
    //       this.SET_ACTIVE_TAB(3)
    //       break
    //     default:
    //       this.SET_ACTIVE_TAB(0)
    //   }
    // }
  }
}
