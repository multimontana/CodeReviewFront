import WorkWishes from '@/components/atoms/work-wishes/work-wishes.vue'
import ResumePortfolio from '@/components/atoms/resume-portfolio/resume-portfolio.vue'
import ResumeEducation from '@/components/atoms/resume-education/resume-education.vue'
import ResumeWorkExperience from '@/components/atoms/resume-work-experience/resume-work-experience.vue'
import ResumeInterests from '@/components/atoms/resume-interests/resume-interests.vue'
import ResumeAboutMe from '@/components/atoms/resume-about-me/resume-about-me.vue'
import AsideTab from '@/components/atoms/aside-tab/aside-tab.vue'
export default {
  name: 'Resume',
  components: {
    'work-wishes': WorkWishes,
    'resume-portfolio': ResumePortfolio,
    'resume-education': ResumeEducation,
    'resume-interests': ResumeInterests,
    'resume-about-me': ResumeAboutMe,
    'resume-work-experience': ResumeWorkExperience,
    'aside-tab': AsideTab
  },
  data () {
    return {
      ResumeSettingsTabs: [
        'Пожелания к работе',
        'Портфолио',
        'Опыт работы',
        'Образование',
        'Интересы',
        'О себе'
      ],
      tabView: 0
    }
  },
  computed: {
    getEducationCourses () {
      return this.$store.getters['educationCourses.js/getEducationCourses']
    }
  },
  watch: {
    // tabView () {
    //   this.courses = this.getEducationCourses.filter((el) => {
    //     return el.status === parseInt(this.tabView)
    //   })
    // }
  },
  methods: {
    tabChangeEvent (index) {
      this.tabView = index
    }
  }
}
