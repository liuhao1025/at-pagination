const Pager = {
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

export default Pager