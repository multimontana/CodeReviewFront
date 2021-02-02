import AsideTabGym from '@/components/atoms/aside-tab-gym/aside-tab-gym.vue'

export default {
  components: {
    'aside-tab-gym': AsideTabGym
  },
  methods: {
    openTest () {
      this.$router.push({
        path: '/gym/task/' + this.$route.params.id
      })
    }
  }
}
