import HTTP from '../utils/http'

class LikeModel extends HTTP {
    likePost(behavior, artID, category) {
        this.request({
            url: behavior ? 'like' : 'like/cancel',
            method: 'POST',
            data: {
                art_id: artID,
                type: category
            }
        })
    }
}

export default new LikeModel()