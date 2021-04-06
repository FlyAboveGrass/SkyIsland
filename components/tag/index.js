// components/tag/index.js
Component({
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
      success: 'success',
      info: 'info',
      warning: 'waring',
      danger: 'danger'
    },
    curType: ''
  },

  lifetimes: {
    create() {
      if(this.data.type[this.properties.type]) {
        this.setData({
          curType: this.data.type[this.properties.type]
        })
      }
      console.log(this.data);
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
