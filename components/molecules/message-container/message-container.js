export default {
  name: 'message-container',
  data () {
    return {
      isOpened: false,
      input: {
        message: ''
      }
    }
  },
  computed: {
    getChatDialogMessages () {
      return this.$store.getters['chat/getChatDialogMessages']
    },
    loggedInUserId () {
      return this.$store.getters.loggedInUserId
    },
    getDialogId () {
      return this.$store.getters['chat/getDialogId']
    },
    getMessageHistoryDate () {
      return this.$store.getters['chat/getMessageHistoryDate']
    },
    textAreaCompleted () {
      if (this.input.message.length > 0) {
        return true
      }
      return false
    }
  },
  mounted () {
    this.$echo.private(`web-chat.${this.loggedInUserId}`)
      .listen('.WebChatEvent', (data) => {
        this.$store.dispatch('chat/getMessageFromWs', data.messages)
      })
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (event) {
      if (event.target.scrollTop === 0) {
        this.$store.dispatch('chat/getMessagesFromDb', { dialogId: this.getDialogId })
      }
    },
    resizeHeight ($event) {
      // todo
    },
    sendMessage (data) {
      this.input.message = ''
      this.$store.dispatch('chat/createMessageFromDb', data)
    },
    searchOpener () {
      this.isOpened = !this.isOpened
    }
  }
}
