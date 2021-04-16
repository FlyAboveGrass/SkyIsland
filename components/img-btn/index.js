// components/img-btn/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    openType: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    getUserProfile() {
      const self = this
      wx.getUserProfile({
        lang: 'en',
        desc: '获取授权',
        success: function (res) {
          self.triggerEvent('getUserProfile', res)
        }
      })
    }
  }
})
