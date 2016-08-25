# At-Pagination

A pagination components for VueJs

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

    var AtPagination = require('at-pagination')
or

    import AtPagination from 'at-pagination' if you are using es6

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