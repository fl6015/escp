// pages/tab_me/myResult/myResult.js


let activeLine_w=50;
let menu=[
  {text:"出售中",id:"1"},{text:"待处理",id:"2"},
  {text:"待确认",id:"3"},{text:"已出售",id:"4"},
  {text:"已下架",id:"5"},{text:"仲裁",id:"6"}
]
Page({
  /**
   * 页面的初始数据
   */
  data: {
    menu:menu,
    // linespacing:0,
    menu_active:{
      active_index:0,
      td_left:0
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.menuinit();
  },
  menuinit:function(){
    let that=this;
    wx.getSystemInfo({
      success: function(res) {
        console.log(res.windowWidth);
        let w=res.windowWidth;
        let length=that.data.menu.length;
        let linespacing=(w/length-activeLine_w)/2;
        that.setData({linespacing});
      }
    })
  },
  menuTap:function(e){
    console.warn(e);
    let active_index=e.currentTarget.dataset.tdindex;
    let td_left=e.currentTarget.offsetLeft;
    this.setData({
      menu_active:{active_index,td_left}
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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})