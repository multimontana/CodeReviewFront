import language from '@/components/molecules/language/language.vue'
import Button from '@/components/atoms/button/button.vue'
import customSelect from '@/components/atoms/custom-select/custom-select.vue'
import dropdownKeeper from '@/components/molecules/dropdown/dropdown-keeper/dropdown-keeper.vue'
import bookmarksIcon from '@/assets/icons/bookmarks.svg'
import messagesIcon from '@/assets/icons/messages.svg'
import notifIcon from '@/assets/icons/notifications.svg'

export default {
  name: 'sidebar',
  components: {
    language,
    'dropdown-keeper': dropdownKeeper,
    Button,
    'custom-select': customSelect
  },
  data () {
    return {
      searchQuery: '',
      opened: true,
      icons: {
        bookmark: bookmarksIcon,
        messages: messagesIcon,
        notifications: notifIcon
      },
      selectOptions: [
        {
          name: 'Везде',
          value: 'all'
        },
        {
          name: 'Курсы',
          value: 'courses'
        },
        {
          name: 'Профессии',
          value: 'professions'
        },
        {
          name: 'Тесты',
          value: 'tests'
        }
      ]
    }
  },
  props: {
    isSearchOpened: {
      type: Boolean
    },
    isMenuOpened: {
      type: Boolean
    }
  },
  methods: {
    closeMenu () {
      this.opened = false
    },
    getActive (active) {
      this.active = active
    }
  }
}
