import BookModel from '../../model/book'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    BookModel.getHotBookList().then((res) => {
      console.log(res);
      this.setData({
        bookList: res
      })
    })
  },

  toBookDetail(event){
    //从从组件内部中拿到被绑定的id号
    const bid = event.target.dataset.id;
    if(!bid) {
      return ;
    }
    // 在组件内部直接写跳转会降低这个组件的通用性
    wx.navigateTo({
      url: '/pages/book-detail/index?bid=' + bid,
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
})