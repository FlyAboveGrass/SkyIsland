import HTTP from "../utils/http-p";

class BookModel extends HTTP {
    getHotBookList() {
        return this.request({
            url: 'book/hot_list',
        })
    }

    search(start, q) {
        return this.request({
          url: 'book/search?summary=1',
          data: {
            q: q,
            start: start
          }
        })
    }

    getMyBookCount(){
        return this.request({
          url: 'book/favor/count',
        })
    }
    // 获取图书详情：
    getDetail(bid){
        return this.request({
            url:'book/'+bid+'/detail'
        })
    }
    // 获取图书详情内的点赞状态:
    getLikeStatus(bid){
        return this.request({
            url: 'book/' + bid + '/favor'
        })
    }
    // 获取图书详情内的评论
    getComments(bid){
        return this.request({
            url: 'book/' + bid + '/short_comment'
        })
    }
    // 提交用户评论
    postComment(bid,comment){
        // 返回this.request的promise对象
        return this.request({
            url:'book/add/short_comment',
            method:'POST',
            data:{
            book_id: bid,
            content: comment
            }
        })
    }
}

export default new BookModel();