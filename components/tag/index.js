// components/tag/index.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    type: String,
    content: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    type: {
      default: 'default',
      success: 'success',
      info: 'info',
      warning: 'waring',
      danger: 'danger'
    },
    curType: 'default'
  },

  lifetimes: {
    create() {
      if(this.data.type[this.properties.type]) {
        this.setData({
          curType: this.data.type[this.properties.type]
        })
      }
      console.log('this.data.content', this.data.content)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
