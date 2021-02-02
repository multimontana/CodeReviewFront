import EducationCourse from '@/components/atoms/education-course/education-course.vue'
import Tabs from '@/components/atoms/tabs/tabs.vue'

export default {
  name: 'EducationSection',
  data () {
    return {
      educationTabs: [
        'Активные курсы',
        'Прошедшие курсы'
      ],
      tabView: 0,
      courses: []
    }
  },
  created () {
    this.courses = this.getEducationCourses.filter((el) => {
      return el.status === parseInt(this.tabView)
    })
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
  },
  components: {
    tabs: Tabs,
    'education-course': EducationCourse
  }
}
