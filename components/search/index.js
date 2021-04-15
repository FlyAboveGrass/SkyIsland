import SearchBookModel from "../../model/search-book"

// components/search/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    searchHotList: [],
    searchHistoryList: ['niaalsdjhkasjhdkjho', 'qw','niaalsdjhkasjhdkjho', 'qw','niaalsdjhkasjhdkjho', 'qw','niaalsdjhkasjhdkjho', 'qw'],
    bookName: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onConfirm() {
      const searchHistoryList = this.data.searchHistoryList.slice(0)
      SearchBookModel.addToHistory(this.data.bookName)
      searchHistoryList.unshift(this.data.bookName)
      this.setData({
        searchHistoryList
      })

      this.triggerEvent('onSearch', { bookName: this.data.bookName })
    },
    onCancel() {
      this.triggerEvent('onCancel', { bookName: this.data.bookName })
    },
    tapSearchItem(e) {
      this.setData({
        bookName: e.target.dataset.searchItem
      })
      this.triggerEvent('onSearch', { bookName: this.data.bookName })
    }
  },
  lifetimes: {
    attached() {
      const searchHistory = SearchBookModel.getHistory()
      this.setData({
        searchHistoryList: searchHistory
      })

      SearchBookModel.getHot().then(res => {
        this.setData({
          searchHotList: res.hot
        })
      })
      console.log('this.data', this.data);
    }
  }
})
