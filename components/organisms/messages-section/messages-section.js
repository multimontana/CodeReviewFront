import MessagesUserList from '@/components/molecules/message-user-list/message-user-list.vue'
import MessagesContainer from '@/components/molecules/message-container/message-container.vue'
export default {
  name: 'messages-section',
  components: {
    'message-user-list': MessagesUserList,
    'message-container': MessagesContainer
  }
}
