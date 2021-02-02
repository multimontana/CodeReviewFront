import dropdownKeeper from '@/components/molecules/dropdown/dropdown-keeper/dropdown-keeper.vue'

export default {
  name: 'language',
  data () {
    return {}
  },
  components: {
    'dropdown-keeper': dropdownKeeper
  },
  methods: {
    changeLang (code) {
      this.$i18n.locale = code
      this.$store.commit('SET_LOCALE_ON_COOKIE', code)
    }
  }
}
