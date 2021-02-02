import TestsItem from '@/components/atoms/tests-item/tests-item.vue'
import Categories from '@/components/molecules/categories/categories.vue'
import Loader from '@/components/atoms/loader/Loader.vue'
import CustomSelect from '@/components/atoms/custom-select/custom-select.vue'

export default {
  name: 'test-section',
  components: {
    TestsItem,
    Categories,
    Loader,
    CustomSelect
  },
  data () {
    return {
      asyncLoader: false,
      syncLoader: true,
      filterCategoriesAndDifficulty: {
        difficulty: 1,
        categories: [],
        type: 2
      }
    }
  },
  computed: {
    getQuizes () {
      return this.$store.getters['quizes/getQuizes']
    },
    getDifficultyLevels () {
      return this.$store.getters['quizes/getDifficultyLevels']
    },
    getCategories () {
      return this.$store.getters['categories/getCategories']
    }
  },
  methods: {
    filterCategory (data) {
      const categories = this.filterCategoriesAndDifficulty.categories
      if (data.event) {
        categories.push(data.id)
      } else {
        categories.splice(categories.indexOf(data.id), 1)
      }
      this.filterCategoriesAndDifficulty.type = data.type
      this.filterCategoriesAndDifficulty.categories = categories
      this.$store.dispatch('quizes/fetchQuizes', this.filterCategoriesAndDifficulty)
    },
    handleSelectActive (value) {
      this.filterCategoriesAndDifficulty.difficulty = value
      this.$store.dispatch('quizes/fetchQuizes', this.filterCategoriesAndDifficulty)
    }
  }
}
