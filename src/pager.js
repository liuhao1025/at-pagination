export default {
  data () {
    return {
      query: {
        page: 1,
        pageSize: 10,
        totalItems: 0
      }
    }
  },
  methods: {
    // @override
    getData () { },
    resetData () {
      this.query.page = 1
      this.getData()
    },
    changePage (page) {
      this.query.page = page
      this.getData()
    },
    changeSize (size) {
      this.query.pageSize = size
      this.resetData()
    }
  }
}