import educationLessonListResponsive from '@/components/molecules/education-lesson-list-responsive/education-lesson-list-responsive.vue'

export default {
  name: 'education-lesson',
  components: {
    'education-lesson-list-responsive': educationLessonListResponsive
  },
  data () {
    return {
      sidebar: false
    }
  },
  props: {
    responsive: {
      type: Boolean,
      required: true
    },
    sidebarOpen: {
      type: Function,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: true
    }
  }
}
