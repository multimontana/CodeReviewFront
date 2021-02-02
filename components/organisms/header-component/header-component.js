import dropdownKeeper from '@/components/molecules/dropdown/dropdown-keeper/dropdown-keeper.vue'
import dropdownOpener from '@/components/molecules/dropdown/dropdown-opener/dropdown-opener.vue'
import dropdown from '@/components/molecules/dropdown/dropdown/dropdown.vue'
import button from '@/components/atoms/button/button.vue'
import language from '@/components/molecules/language/language.vue'
import headerSearch from '@/components/molecules/header-search/header-search.vue'
import bookmarksIcon from '@/assets/icons/bookmarks.svg'
import messagesIcon from '@/assets/icons/messages.svg'
import notifIcon from '@/assets/icons/notifications.svg'

export default {
  name: 'header-component',
  data () {
    return {
      responsive: false,
      responsiveSearch: false,
      icons: {
        bookmark: bookmarksIcon,
        messages: messagesIcon,
        notifications: notifIcon
      }
    }
  },
  computed: {
    isAuthenticated () {
      return this.$store.getters.isAuthenticated
    },
    loggedInUser () {
      return this.$store.getters.loggedInUser
    }
  },
  components: {
    'header-search': headerSearch,
    'dropdown-keeper': dropdownKeeper,
    'dropdown-opener': dropdownOpener,
    language,
    dropdown,
    Button: button
  },
  methods: {
    resizeHandler () {
      this.responsive = window.innerWidth <= 1024
    },
    async logout () {
      await this.$auth.logout()
    },
    openResponsiveMenu () {
      this.responsiveSearch = !this.responsiveSearch
      this.$emit('open-search')
    }
  },
  mounted () {
    this.resizeHandler()
    window.addEventListener('resize', this.resizeHandler)
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.resizeHandler, true)
  }
}
