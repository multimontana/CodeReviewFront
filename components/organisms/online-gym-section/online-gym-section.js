import GymItem from '@/components/atoms/gym-item/gym-item.vue'
import Categories from '@/components/molecules/categories/categories.vue'
export default {
  name: 'test-section',
  components: {
    GymItem,
    Categories
  },
  computed: {
    getSimulators () {
      return this.$store.getters['gym/getSimulators']
    },
    getCategories () {
      return this.$store.getters['categories/getCategories']
    }
  }
}
