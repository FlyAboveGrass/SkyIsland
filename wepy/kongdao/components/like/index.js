// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    likeStatus: {
      type: Boolean,
      value: false
    },
    likeCount: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
      likeSrc: './images/like.png',
      unLikeSrc: './images/unLike.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function(event) {
      const newLikeCout = this.properties.likeStatus ? this.properties.likeCount - 1 : this.properties.likeCount + 1;
      this.setData({
        likeCount: newLikeCout,
        likeStatus: this.properties.likeStatus ? 0 : 1
      })

      this.triggerEvent('onLike', {
        triggerLike: this.properties.likeStatus ? true : false
      })
    }
  }
})
