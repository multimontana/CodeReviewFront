import customSelect from '@/components/atoms/custom-select/custom-select.vue'
import Button from '@/components/atoms/button/button.vue'

export default {
  name: 'course-information',
  data () {
    return {
      times: [
        {
          value: '14',
          name: '14:00'
        },
        {
          value: '16',
          name: '16:00'
        },
        {
          value: '20',
          name: '20:00'
        },
        {
          value: '22',
          name: '22:00'
        }
      ],
      activeDay: null
    }
  },
  components: {
    'custom-select': customSelect,
    Button
  },
  methods: {
    changeActiveDay (day) {
      if (day === this.activeDay) {
        this.activeDay = null
      } else {
        this.activeDay = day
      }
    }
  }
}
