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
        classicData: res
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

  },

  onLike: function(event) {
    let behavior = event.detail.triggerLike;
    likeModel.likePost(behavior, this.data.classicData && this.data.classicData.id, this.data.classicData && this.data.classicData.type)
  }
})