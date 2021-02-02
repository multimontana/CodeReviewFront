import customSelect from '@/components/atoms/custom-select/custom-select.vue'

export default {
  name: 'work-wishes',
  components: {
    'custom-select': customSelect
  },
  data () {
    return {
      currencies: [
        {
          name: 'Рубль, ₽',
          value: 'rub'
        },
        {
          name: 'USD, $',
          value: 'usd'
        },
        {
          name: 'AMD, ₽',
          value: 'amd'
        }
      ]
    }
  }
}
