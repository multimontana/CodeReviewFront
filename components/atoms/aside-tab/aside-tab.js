export default {
  name: 'aside-tabs',
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
    tabClick (currentTarget, index) {
      currentTarget.target.parentElement.querySelector('.tab_active').classList.remove('tab_active')
      currentTarget.target.classList.toggle('tab_active')
      if (this.onClickEvent) {
        this.onClickEvent(parseInt(currentTarget.target.getAttribute('data-tab')))
      }
      this.$emit('changeTab', index)
    }
  }
}
