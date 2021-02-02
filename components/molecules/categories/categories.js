import Category from '@/components/atoms/category/category.vue'

export default {
  name: 'categories',
  components: {
    category: Category
  },
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  methods: {
    categoryChanged (element) {
      this.$emit('filterCategory', element)
    }
  }
}
