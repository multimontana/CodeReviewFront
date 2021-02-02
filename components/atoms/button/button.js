export default {
  name: 'Button',
  props: {
    theme: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button'
    },
    arrow: {
      type: Boolean,
      default: false
    }
  }
}
