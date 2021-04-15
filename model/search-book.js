import HTTP from '../utils/http-p'

class SearchBookModel extends HTTP {
    maxLength = 10
    key = 'bookSearch'
    getHistory(){
        const words = wx.getStorageSync(this.key)
        if(!words){
            return []
        }
        return words
    }

    getHot(){
       return this.request({
           url:'book/hot_keyword'
       }) 
    }

    addToHistory(keyword){
        let words = this.getHistory()
        // 队列 栈
        if(!words.includes(keyword)){
            // 数组末尾 删除 ， keyword 数组第一位
            if (words.length >= this.maxLength){
                words.pop()
            }
            words.unshift(keyword)
            wx.setStorageSync(this.key, words)
        }
    }

}

export default new SearchBookModel()