// pages/otherDetail/otherDetail.js


const config = require('../../../utils/config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // icons: {
    //     film: '../../../icon/film.png',
    //     heart_like: '../../../icon/heart_like.png',
    //     fire: '../../../icon/fire.png',
    //     money_bag:'../../../icon/money_bag1.png',
    //     location: '../../../icon/location.png'
    // },
    icons: config.imgUrls.icons,
    loadinginfo:{show_loading:'hidden_loading',loading_text:''}
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
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  gotoBuySuccess: function () {
    wx.navigateTo({
      url: '../buySuccess/buySuccess'
      //   url: '../../tab_me/moneyDetailed/moneyDetailed'
    })
  },
  gotoFlowdetail: function () {
    wx.navigateTo({
      url: '../flowdetail/flowdetail'
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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      loadinginfo:{show_loading:'show_loading',loading_text:'别扯了，没有数据了'}
    });
    setTimeout(()=>{
      this.setData({
        loadinginfo:{show_loading:'hidden_loading',loading_text:''}
      });
    },3000)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})