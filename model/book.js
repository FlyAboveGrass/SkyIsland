import HTTP from "../utils/http-p";

class BookModel extends HTTP {
    getHotBookList() {
        return this.request({
            url: 'book/hot_list',
        })
    }
}

export default new BookModel();