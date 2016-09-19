# At-Pagination

A pagination components for VueJs. BTW, [Sony The Best][playstation] and the [demo][]

# Install && Usage

`npm install git@https://github.com/liuhao1025/at-pagination.git`

Add these lines to your `webpack.config.js`

    module: {
      loaders: [
        {
          test: /\.vue$/,
          loader: 'vue'
          // exclude fold 'node_modules' will cause an error
        }
      ]
    }

Import this component in your app

    var AtPagination = require('at-pagination').AtPagination
or

    import { AtPagination, AtPager } from 'at-pagination'

if you are using es6

Registry this component on Vue or another componet

    {
        mixins: [AtPager],
        components： {
            AtPagination
        }
    }

***

Use it in your template like this

    <at-pagination :page="query.page" :page-size="query.pageSize" :total-items="query.totalItems" @change-page="changePage" @change-size="changeSize"></at-pagination>

# Props
A few props are available
## page

## pageSize

## totalItems

## sizer

## ladder

# Events

## changePage

@change-page

## changeSize

@change-size

# Pager

## Props

- query
  - page 
  - pageSize
  - totalItems

## Methods

- getData
- resetData
- changePage
- changeSize

[playstation]: https://asia.playstation.com
[demo]: https://liuhao1025.github.io/at-pagination