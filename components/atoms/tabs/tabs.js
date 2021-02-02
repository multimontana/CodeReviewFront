export default {
  name: 'tabs',
  props: {
    tabs: {
      type: Array,
      required: true
    },
    onClickEvent: {
      type: Function
    }
  },
  methods: {
    tabClick ({ currentTarget }) {
      currentTarget.parentElement.querySelector('.tab_active').classList.remove('tab_active')
      currentTarget.classList.toggle('tab_active')
      if (this.onClickEvent) {
        this.onClickEvent(parseInt(currentTarget.getAttribute('data-tab')))
      }
    }
  }
}
