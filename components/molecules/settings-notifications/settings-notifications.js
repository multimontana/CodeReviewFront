export default {
  name: 'settings-notifications',
  data () {
    return {
      smsState: true,
      emailState: true
    }
  },
  methods: {
    smsHandler () {
      this.smsState = !this.smsState
    },
    emailHandler () {
      this.emailState = !this.emailState
    }
  }
}
