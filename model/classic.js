import HTTP from '../utils/http'

class ClassicModel extends HTTP {
    getMyFavor(success){
        const params={
          url:'classic/favor',
          success:success
        }
        this.request(params)
    }

    getLast(callback) {
        this.request({
            url: 'classic/latest',
            success: (res) => {
                callback(res);
                this._setLastIndex(res.index)
                wx.setStorageSync(this._getKey(res.index), res);
            }
        })
    }

    getPrevious(index, callback) {
        this.request({
            url: `classic/${index}/previous`,
            method: 'get',
            success: (res) => {
                callback(res)
            }
        })
    }

    getNext(index, callback) {
        this.request({
            url: `classic/${index}/next`,
            success: (res) => {
                callback(res)
            }
        })
    }
    

    // 最新和最后推荐内容的index
    _setLastIndex(index) {
        wx.setStorageSync('latestIndex', index);
    }
    _getLastIndex() {
        return wx.getStorageSync('latestIndex');
    }

    // 获取缓存数据
    _getKey(index) {
        wx.getStorageSync('classic-' + index)
    }
    
}

export default new ClassicModel()