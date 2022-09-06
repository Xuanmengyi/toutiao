const pxToRem = require('postcss-pxtorem')

module.exports = {
  //插件
  plugins: [
    pxToRem({
      //根节点字体大小
      //如果是vant 37.5 如果是自己写的代码 75
      //file当前编译的css的文件路径
      rootValue: ({ file }) => (/vant/.test(file) ? 37.5 : 75),
      propList: ['*'] //所有的属性都转成rem
    })
  ]
}
