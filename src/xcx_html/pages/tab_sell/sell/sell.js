// pages/me/me.js

const config = require('../../../utils/config.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // imgUrls: [
    //         '../../../icon/flow.png',
    //         'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    //         '../../../icon/bill.png'
    //     ],
    // icons: {
    //         film: '../../../icon/film.png',
    //         fire: '../../../icon/fire.png',
    // },
    imgUrls: config.imgUrls.imgUrls,
    icons: config.imgUrls.icons,
    toView: '',
    scrollTop: 100,
    scroll_h:"300px"
  },
  upper: function(e) {
    // console.log(e)
  },
  lower: function(e) {
    // console.log(e)
  },
  scroll: function(e) {
    // console.log(e)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // setTimeout(()=>{
    //   this.setHeight();
    // },100);
    this.setHeight();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  gotoSellGoodsInfo:function(){
    wx.navigateTo({
        url: '../sellGoodsInfo/sellGoodsInfo'
    })
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

  // setHeight:function(){
  //   let that=this;
  //   wx.getSystemInfo({
  //     success: function(res) {
  //       let w_h=res.windowHeight;
  //       // let w_h=res.screenHeight;
  //       wx.createSelectorQuery().select('#scroll_box').boundingClientRect(function(rect){
  //         // rect.id      // 节点的ID
  //         // rect.dataset // 节点的dataset
  //         // rect.left    // 节点的左边界坐标
  //         // rect.right   // 节点的右边界坐标
  //         // rect.top     // 节点的上边界坐标
  //         // rect.bottom  // 节点的下边界坐标
  //         // rect.width   // 节点的宽度
  //         // rect.height  // 节点的高度
  //         console.error(w_h,rect.top );
  //         let scroll_h=w_h-rect.top;
  //         console.warn(scroll_h);
  //         that.setData({scroll_h:scroll_h})
  //       }).exec()
  //     }
  //   });
  // },
  setHeight:function(){
    let that=this;
    wx.createSelectorQuery().select('#scroll_box').boundingClientRect(function(rect){
      wx.getSystemInfo({
        success: function(res) {
          let w_h=res.windowHeight;
          console.error(w_h,rect.top );
          let scroll_h=w_h-rect.top;
          console.warn(scroll_h);
          that.setData({scroll_h:scroll_h})
        }
      });
    }).exec()
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