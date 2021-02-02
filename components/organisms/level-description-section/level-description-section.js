import DescriptionKeeper from '@/components/molecules/description-keeper/description-keeper.vue'
import DescriptionDetails from '@/components/molecules/description-details/description-details.vue'
export default {
  name: 'level-description-section',
  components: {
    'description-keeper': DescriptionKeeper,
    'description-details': DescriptionDetails
  },
  computed: {
    param () {
      return this.$route.params.id
    }
  }
}
