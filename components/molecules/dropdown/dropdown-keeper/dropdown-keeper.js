import dropdownOpener from '@/components/molecules/dropdown/dropdown-opener/dropdown-opener.vue'
import dropdown from '@/components/molecules/dropdown/dropdown/dropdown.vue'

export default {
  name: 'dropdown-keeper',
  data () {
    return {
      opened: false
    }
  },
  components: {
    'dropdown-opener': dropdownOpener,
    dropdown
  },
  props: {
    // Style attribute for dropdown-opener
    openerStyle: {
      type: Object,
      default: () => {},
      required: false
    },
    // Style attribute for dropdown
    contentStyle: {
      type: Object,
      default: () => {},
      required: false
    },
    // Class attribute for dropdown-opener
    openerClass: {
      type: String,
      default: '',
      required: false
    },
    // Class attribute for dropdown
    contentClass: {
      type: String,
      default: '',
      required: false
    },
    // Opener button theme
    openerTheme: {
      type: String,
      default: 'white',
      required: false
    }
  },
  // mounted () {
  //   this.dropdownHandler()
  // },
  methods: {
    dropdownHandler () {
      this.opened = !this.opened
    },
    closeDropdown () {
      this.opened = false
    }
  }
}
