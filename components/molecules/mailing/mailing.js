export default {
  name: 'mailing',
  data () {
    return {
      toggleState: true
    }
  },
  methods: {
    toggleHandler () {
      this.toggleState = !this.toggleState
    }
  }
}
