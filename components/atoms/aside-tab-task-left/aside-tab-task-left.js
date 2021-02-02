export default {
  name: 'aside-tab-task',
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    asideMenuHandler () {
      this.isOpened = !this.isOpened
    },
    closeAsideMenu () {
      this.isOpened = false
    }
  }
}
