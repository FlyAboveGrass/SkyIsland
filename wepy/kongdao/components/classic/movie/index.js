import classic_behavior from "../classic-bh";

// components/classic/movie/index.js
Component({
  behaviors: [classic_behavior],
  /**
   * 组件的属性列表
   */
  properties: {
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

  },

  lifetimes: {
    attached: function() {
      console.log(this.data, this.properties);
    }
  }
})
