export default {
  name: 'custom-select',
  data () {
    return {
      isOpened: false,
      activeName: this.defaultValue,
      activeOption: this.defaultValue ? null : 0
    }
  },
  props: {
    images: {
      type: Boolean,
      default: false,
      required: false
    },
    options: {
      type: Array,
      required: true
    },
    defaultValue: {
      type: String,
      required: false,
      default: null
    }
  },
  methods: {
    customMenuHandler () {
      this.isOpened = !this.isOpened
    },
    closeCustomMenu () {
      this.isOpened = false
    },
    changeActive (option) {
      this.activeName = null
      const index = this.options.indexOf(option)
      if (this.activeOption !== index) {
        this.activeOption = index
      }
      this.closeCustomMenu()
      this.$emit('get-active', option.value)
    }
  }
}
