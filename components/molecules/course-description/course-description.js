import CourseProgramm from '@/components/atoms/course-programm/course-programm.vue'
import CourseReview from '@/components/atoms/course-review/course-review.vue'
import Tabs from '@/components/atoms/tabs/tabs.vue'

export default {
  name: 'course-description',
  components: {
    'course-programm': CourseProgramm,
    'course-review': CourseReview,
    tabs: Tabs
  },
  data () {
    return {
      courseTabs: [
        'Программа курса',
        'Отзывы выпускников'
      ],
      tabView: 0
    }
  },
  methods: {
    tabChangeEvent (index) {
      this.tabView = index
    }
  },
  computed: {
    getEducationCourses () {
      return this.$store.getters['educationCourses/getEducationCourses']
    }
  }
}
