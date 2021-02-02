export default {
  name: 'message-user-list',
  computed: {
    getChatDialogs () {
      return this.$store.getters['chat/getChatDialogs']
    }
  },
  methods: {
    openDialogMessagesFromDb (chat) {
      this.$store.dispatch('chat/getMessagesFromDb', chat)
    }
  }
}
