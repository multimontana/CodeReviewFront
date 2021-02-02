import button from '@/components/atoms/button/button.vue'

export default {
  name: 'main-page-item',
  data () {
    return {
      element: this.item
    }
  },
  components: {
    Button: button
  },
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    millisToMinutesAndSeconds: (millis) => {
      millis *= 900
      const minutes = Math.floor(millis / 60000)
      const seconds = ((millis % 60000) / 1000).toFixed(0)
      return `${(minutes < 10 ? '0' : '')}${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`
    }
  }
}
