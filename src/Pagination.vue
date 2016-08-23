<template>
  <div class="pagination-wrapper">
    <div class="sizer" v-if="sizer">
      <span>每页显示</span>
      <select v-model="pageSize" @change="changeSize">
        <option v-for="item in sizes" :value="item">{{ item }}</option>
      </select>
    </div>
    <div class="pagination">
      <ul>
        <li @click="prev" :disabled="item === 1">&lt;</li>
        <li v-for="item in items" :class="{active: item === page}" @click="goPage(item)">{{ item }}</li>
        <li @click="next" :disabled="item === totalPage">&gt;</li>
      </ul>
    </div>
    <div class="ladder" v-if="ladder">
      <input type="text" v-model="ladderPage">
      <button type="button" @click="ladderTo">Go</button>
    </div>
  </div>
</template>
<script>
  const SIZES = [10, 20, 50]
  export default {
    props: {
      page: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 10,
        validator (value) {
          return value > 0
        }
      },
      totalItems: {
        type: Number,
        default: 0,
        validator (value) {
          return value >= 0
        }
      },
      sizer: {
        type: Boolean,
        default: true
      },
      ladder: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      items: function () {
        var items = []
        var curr = this.page, limit = this.limit, total = this.totalPage
        var start = 1, end = this.totalPage
        var isOutOfLimit = typeof limit !== 'undefined' && limit < total
        if(isOutOfLimit) {
          // TODO CALCULATE
          start = Math.max(1, curr - Math.floor(limit/2))
          end = start + limit - 1
        }
        if(end > total) {
          end = total
          start = end - limit + 1;
        }
        for(var i = start; i <= end; i++) {
          items.push(i)
        }
        return items
      },
      totalPage: function () {
        return Math.ceil(this.totalItems/this.pageSize)
      }
    },
    data () {
      return {
        sizes: SIZES,
        // TODO MAKE 'limit' CONFIGURABLE
        limit: 5,
        ladderPage: ""
      }
    },
    methods: {
      prev () {
        this.goPage(this.page - 1)
      },
      next () {
        this.goPage(this.page + 1)
      },
      ladderTo () {
        var page = Number(this.ladderPage)
        page = isNaN(page)?1:page
        page = Math.min(this.totalPage, Math.max(1, page))
        this.goPage(page)
        this.ladderPage = ""
      },
      goPage (page) {
        page = Number(page)
        if(isNaN(page) || page < 1 || page > this.totalPage || page === this.page) {
          console.log('Not a valid page number.')
          return
        }
        this.page = page
        this.$dispatch('change-page', this.page)
      },
      changeSize () {
        this.$dispatch('change-size', this.pageSize)
      }
    }
  }
</script>
<style scoped>
  select, input, button {
    padding: 5px 12px;
    border: 1px solid #e0e0e0;
    outline: none;
    background: #fff;
  }
  input {
    width: 30px;
  }
  button {
    cursor: pointer;
  }
  button:hover {
    background-color: #e0e0e0;
  }
  button:active {
    background-color: #ccc;
  }
  .pagination-wrapper {
    text-align: center;
  }
  .sizer, .pagination, .ladder {
    display: inline-block;
    vertical-align: middle;
  }
  .pagination > ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
  }
  .pagination > ul > li {
    float: left;
    padding: 5px 12px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-left: none;
    cursor: pointer;
    -webkit-user-select: none;
  }
  .pagination > ul > li:first-child {
    border-left: 1px solid #e0e0e0;
  }
  .pagination > ul > li.active {
    background-color: #d31027;
    border-color: #d31027;
    color: #fff;
  }
</style>