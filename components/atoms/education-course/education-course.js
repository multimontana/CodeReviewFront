import Button from '../button/button.vue'

export default {
  name: 'EducationCourse',
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  components: {
    Button
  }
}
