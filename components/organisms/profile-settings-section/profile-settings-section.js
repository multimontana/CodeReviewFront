import ProfileSettingsInformation from '@/components/molecules/profile-settings-information/profile-settings-information.vue'
import ProfileSettingsResetPassword from '@/components/molecules/profile-settings-reset-password/profile-settings-reset-password.vue'
import SettingsNotifications from '@/components/molecules/settings-notifications/settings-notifications.vue'
import Mailing from '@/components/molecules/mailing/mailing.vue'
import Resume from '@/components/molecules/resume/resume.vue'
import Tabs from '@/components/atoms/tabs/tabs.vue'
export default {
  name: 'profile-section-settings',
  components: {
    'profile-settings-information': ProfileSettingsInformation,
    'profile-settings-reset-password': ProfileSettingsResetPassword,
    'settings-notifications': SettingsNotifications,
    mailing: Mailing,
    resume: Resume,
    tabs: Tabs
  },
  data () {
    return {
      ProfileSettingsTabs: [
        'Информация',
        'Сменить пароль',
        'Уведомления',
        'Рассылки',
        'Резюме'
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
