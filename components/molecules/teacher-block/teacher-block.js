import TeacherCourses from '@/components/atoms/teacher-courses/teacher-courses.vue'
import TeacherReview from '@/components/atoms/teacher-review/teacher-review.vue'
import Tabs from '@/components/atoms/tabs/tabs.vue'
export default {
  name: 'teacher-block',
  components: {
    'teacher-courses': TeacherCourses,
    'teacher-review': TeacherReview,
    tabs: Tabs
  },
  data () {
    return {
      teacherCourseTabs: [
        'Курсы',
        'Отзывы'
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
  },
  watch: {
    tabView () {
      this.courses = this.getEducationCourses.filter((el) => {
        return el.status === parseInt(this.tabView)
      })
    }
  }

}
