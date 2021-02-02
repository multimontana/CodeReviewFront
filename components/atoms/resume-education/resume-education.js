import ResumeFullEducation from '@/components/atoms/resume-full-education/resume-full-education.vue'
import EducationAddSection from '@/components/organisms/education-add-section/education-add-section.vue'

export default {
  name: 'resume-education',
  data () {
    return {
      visibleFull: true
    }
  },
  computed: {
    getEducation () {
      return this.$store.getters['profile/getEducation']
    }
  },
  methods: {
    addEducation () {
      this.visibleFull = false
    }
  },
  components: {
    'resume-full-education': ResumeFullEducation,
    'education-add-section': EducationAddSection
  }
}
