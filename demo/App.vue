<template>
  <div class="wrapper">
    <section>
      <h3>DEMO FOR : {{ name }}</h3>
      <ul>
        <li v-for="item in items">{{ item }}</li>
      </ul>
      <p>
        <p>PAGEINFO: </p>
        <p>{{ query | json }}</p>
      </p>
      <div>
        <at-pagination :page="query.page" :page-size="query.pageSize" :total-items="query.totalItems" @change-page="changePage" @change-size="changeSize"></at-pagination>
      </div>
    </section>
  </div>
</template>
<script>
  import AtPagination from 'src/Pagination'
  var service = {
    get: function () {}
  }
  var Pager = {
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
        typeof this.getData === 'function' && this.getData()
      },
      changeSize (size) {
        this.query.pageSize = size
        typeof this.resetData === 'function' && this.resetData()
      }
    }
  }
  export default {
    mixins: [Pager],
    data () {
      return {
        name: 'PAGINATION',
        items: []
      }
    },
    methods: {
      getData () {
        this.items = [1, 2, 3, 4, 5]
        this.query.totalItems = 70
      },
      resetData () {
        this.query.page = 1
        this.getData()
      }
    },
    components: {
      AtPagination
    },
    ready () {
      this.getData()
    }
  }
</script>
<style>
  html, body {
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
  }
  .wrapper {
    width: 960px;
    margin: 0 auto;
  }
  .wrapper > section {
    margin-top: 20px;
    padding: 15px;
    background-color: #fff;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .3)
  }
  .wrapper > section > h3 {
    margin: 0;
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;
    font-weight: normal;
  }
</style>