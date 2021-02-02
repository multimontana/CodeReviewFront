import customSelect from '@/components/atoms/custom-select/custom-select.vue'

export default {
  name: 'education-add-section',
  components: {
    'custom-select': customSelect
  },
  data () {
    return {
      educationLevels: [
        {
          value: '1',
          name: 'Выберите уровень образования'
        },
        {
          value: '2',
          name: 'Выберите уровень образования'
        },
        {
          value: '3',
          name: 'Выберите уровень образования'
        }
      ]
    }
  }
}
