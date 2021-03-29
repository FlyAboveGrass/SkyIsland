import HTTP from '../utils/http'

class ClassicModel extends HTTP {
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

    // 最新和最后推荐内容的index
    _setLastIndex(index) {
        wx.setStorageSync('latestIndex', index);
    }
    _getLastIndex() {
        return wx.wx.getStorageSync('latestIndex');
    }

    // 获取缓存数据
    _getKey(index) {
        wx.getStorageSync('classic-' + index)
    }
    
}

export default ClassicModel