import BookModel from '../../model/book'
import searchBook from '../../model/search-book';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookList: [],
    searching: false,
    bookPlaceSearch: '搜索数据'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    BookModel.getHotBookList().then((res) => {
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

  onSearch() {
    this.setData({
      searching: true
    })
  },
  cancelSearch() {
    this.setData({
      searching: false
    })
  },
  searchBook(e) {
    this.setData({
      searching: false,
      bookPlaceSearch: e.detail.bookName
    })
    BookModel.search(0, e.detail.bookName).then(res => {
      this.setData({
        bookList: res.books
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
})