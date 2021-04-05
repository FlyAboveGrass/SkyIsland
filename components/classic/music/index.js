import classic_behavior from "../classic-bh";

const mMgr = wx.getBackgroundAudioManager();

Component({
  behaviors: [classic_behavior],
  /**
   * 组件的属性列表
   */
  properties: {
    src: String,
    title: String,
  },

  attached() {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    playSrc: 'images/player@play.png',
    pauseSrc: 'images/player@pause.png',
    playing: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    play: function(e) {
      if(this.data.playing) {
        this.setData({
          playing: false
        });
        mMgr.pause()
      } else {
        this.setData({
          playing: true
        });
        console.log('mMgr.src ',mMgr, mMgr.src,this.properties.src );
        mMgr.src = this.properties.src
        mMgr.title = this.properties.title
        console.log(mMgr.src )
      }
    }
  }
})
