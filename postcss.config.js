module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
        //  表示根元素字体大小或根据input参数返回根元素字体大小
        rootValue: 16,
        //  允许REM单位增加的十进制数字
        unitPrecision: 5,
        //  可以从px更改为rem的属性
        //  propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
        //  要忽略的选择器，保留为px
        selectorBlackList: [],
        //  替换包含rems的规则
        replace: true,
        //  允许在媒体查询中转换px
        mediaQuery: false,
        //  设置要替换的最小像素值
        minPixelValue: 0,
        //  要忽略并保留为px的文件路径
        exclude: /node_modules/i
    }
  }
}