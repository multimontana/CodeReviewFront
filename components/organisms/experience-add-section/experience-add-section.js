import customSelect from '@/components/atoms/custom-select/custom-select.vue'

export default {
  name: 'experience-add-section',
  components: {
    'custom-select': customSelect
  },
  data () {
    return {
      months: [
        {
          value: 'month',
          name: 'Month'
        },
        {
          value: 'month',
          name: 'Month'
        },
        {
          value: 'month',
          name: 'Month'
        },
        {
          value: 'month',
          name: 'Month'
        }
      ]
    }
  }
}
