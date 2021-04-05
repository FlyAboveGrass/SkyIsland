// components/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: Number,
      value: 1,
      observer: function(newVal, oldVal, changePath) {
          // console.log('newVal, oldVal, changePath', newVal, oldVal, changePath);
          if(newVal > 9) {
            this.setData({
              _index: newVal
            })
          } else {
            this.setData({
              _index: '0' + newVal
            })
          }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    months: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    year: 0,
    month: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  // 不能使用箭头函数，因为要得到外面的this，如果箭头函数，那么this是undefined
  attached: function() {
    const date = new Date();
    this.setData({
      year: date.getFullYear(),
      month: this.data.months[date.getMonth()]
    })
  }
})
