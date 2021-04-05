import apiConfig from '../config'

// 定义错误码:
const tips = {
    1:"抱歉，出现了一个错误",
    1005:'appkey失效',
    3000:'期刊不存在'
}

class HTTP {
    request(params) {
        wx.request({
            url: apiConfig.api_url + params.url,
            method: params.method || 'get',
            data: params.data,
            header: {
                'content-type': 'application/json',
                'appkey': apiConfig.appkey
            },
            success: (res) => {
                let code = res.statusCode.toString();
                if(code.startsWith('2')) {
                    params.success && params.success(res.data)
                } else {
                    this._show_error(res.error_code)
                }
            },
            fail: () => {
                this._show_error(1)
            }
        })
    }

    // 加下划线标识这是一个私有方法(不要从外部调用)
  _show_error(err_code) {
    if(!err_code) {
      err_code = 1
    }
    wx.showToast({
      title: tips[err_code],
      icon:'none',
      duration:2000
    })
  }
}

export default HTTP