import ClassicModel from '../../model/classic'
import LikeModel from '../../model/like'
const classicModel = new ClassicModel();
const likeModel = new LikeModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    likeStatus: false,
    likeCount: 0,
    latest: true,
    first: false,
    classicData: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLast((res) => {
      this.setData({
        likeStatus: res.like_status,
        likeCount: res.fav_nums,
        classicData: res,
        first: res.index === 1,
        latest: res.index === classicModel._getLastIndex()
      })
    })
  },

  onLike: function(event) {
    likeModel.likePost(event.detail.triggerLike, this.data.classicData && this.data.classicData.id, this.data.classicData && this.data.classicData.type)
  },

  onPrev: function(event) {
    if(this.data.first) {
      return ;
    }
    classicModel.getPrevious(this.data.classicData.index, (res) => {
      this.setData({
        likeStatus: res.like_status,
        likeCount: res.fav_nums,
        classicData: res,
        first: res.index === 1,
        latest: res.index === classicModel._getLastIndex()
      })
    })
  },

  onNext: function(event) {
    if(this.data.latest) {
      return ;
    }
    classicModel.getNext(this.data.classicData.index, (res) => {
      this.setData({
        likeStatus: res.like_status,
        likeCount: res.fav_nums,
        classicData: res,
        first: res.index === 1,
        latest: res.index === classicModel._getLastIndex()
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})