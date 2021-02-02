import MyProfileActiveCourses from '@/components/molecules/my-profile-active-courses/my-profile-active-courses.vue'
import MyProfilePastCourses from '@/components/molecules/my-profile-past-courses/my-profile-past-courses.vue'
import Tabs from '@/components/atoms/tabs/tabs.vue'
export default {
  name: 'my-profile-section',
  components: {
    'my-profile-active-courses': MyProfileActiveCourses,
    'my-profile-past-courses': MyProfilePastCourses,
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
  },
  watch: {
    tabView () {
      this.courses = this.getEducationCourses.filter((el) => {
        return el.status === parseInt(this.tabView)
      })
    }
  }
}
