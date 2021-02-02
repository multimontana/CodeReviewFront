import SummaryItem from '@/components/atoms/summary-item/summary-item.vue'
import ProjectAddSection from '@/components/organisms/project-add-section/project-add-section.vue'
import SummaryItemModal from '@/components/modals/summary-item-modal/summary-item-modal.vue'
export default {
  name: 'resume-portfolio',
  data () {
    return {
      visibleFull: true
    }
  },
  computed: {
    getPortfolios () {
      return this.$store.getters['profile/getPortfolios']
    }
  },
  methods: {
    addProject () {
      this.visibleFull = false
    }
  },
  components: {
    'summary-item': SummaryItem,
    'project-add-section': ProjectAddSection,
    'summary-item-modal': SummaryItemModal
  }
}
