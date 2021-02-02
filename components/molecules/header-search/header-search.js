import customSelect from '@/components/atoms/custom-select/custom-select.vue'

export default {
  name: 'header-search',
  components: {
    customSelect
  },
  data () {
    return {
      searchQuery: '',
      active: 'all',
      selectOptions: [
        {
          name: 'Везде',
          value: 'all'
        },
        {
          name: 'Курсы',
          value: 'courses'
        },
        {
          name: 'Профессии',
          value: 'professions'
        },
        {
          name: 'Тесты',
          value: 'tests'
        }
      ]
    }
  },
  methods: {
    getActive (active) {
      this.active = active
    }
  }
}
