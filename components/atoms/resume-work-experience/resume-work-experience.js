import ResumeWorkFull from '@/components/atoms/resume-work-full/resume-work-full.vue'
import ExperienceAddSection from '@/components/organisms/experience-add-section/experience-add-section.vue'
export default {
  name: 'resume-work-experience',
  data () {
    return {
      visibleFull: true
    }
  },
  computed: {
    getExperience () {
      return this.$store.getters['profile/getExperience']
    }
  },
  methods: {
    addExperience () {
      this.visibleFull = false
    }
  },
  components: {
    'resume-work-full': ResumeWorkFull,
    'experience-add-section': ExperienceAddSection
  }
}
