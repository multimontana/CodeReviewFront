import Button from '@/components/atoms/button/button.vue'

export default {
  name: 'dropdown-opener',
  components: {
    Button
  },
  props: {
    theme: {
      type: String,
      default: 'white'
    }
  }
}
