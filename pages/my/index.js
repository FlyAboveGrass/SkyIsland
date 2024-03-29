import BookModel from '../../model/book'
import ClassicModel from '../../model/classic'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorized: false,
    userInfo: null,
    bookCount: 0,
    classics: []
  },

  onGetUserInfo(e) {
    const userInfo = e.detail.userInfo
    if(userInfo){
      this.setData({
        userInfo: userInfo,
        authorized: true
      }) 
      this.getMyBookCount()
      this.getMyFavor()
    }
  },
  getMyBookCount() {
    BookModel.getMyBookCount()
    .then(res=>{
      this.setData({
        bookCount:res.count
      })
    })
  },
  getMyFavor(){
    ClassicModel.getMyFavor(res=>{
      console.log('获取到喜欢的图书')
      this.setData({
        classics:res
      })
    })
  },

  // userAuthorized() {
  //   wx.getSetting({ 
  //     success: res => {
  //       console.log(res);
  //       if(res.authSetting['scope.userInfo']) {
  //         wx.getUserInfo({
  //           success: (res) => {
  //             console.log(res);
  //             // this.setData({
  //             //   authorized: true,
  //             //   userInfo: res.userInfo
  //             // })
  //           }
  //         })
  //       }
  //     } 
  //   });
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.userAuthorized()
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