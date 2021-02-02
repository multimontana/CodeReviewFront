import educationLessonList from '@/components/molecules/education-lesson-list/education-lesson-list.vue'
import educationLesson from '@/components/molecules/education-lesson/education-lesson.vue'
import educationClass from '@/components/molecules/education-class/education-class.vue'

export default {
  name: 'education-lesson-section',
  data () {
    return {
      sidebar: false,
      responsive: false
    }
  },
  components: {
    'education-lesson-list': educationLessonList,
    'education-lesson': educationLesson,
    'education-class': educationClass
  },
  methods: {
    sidebarOpen () {
      this.sidebar = !this.sidebar
    },
    changeResponsive (resp) {
      this.responsive = resp
    }
  },
  mounted () {
    this.responsive = window.innerWidth <= 768
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        this.changeResponsive(true)
      } else {
        this.changeResponsive(false)
      }
    })
  }

}
