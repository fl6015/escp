// pages/me/me.js

const config = require('../../../utils/config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // icons:{
    //   user:'../../../icon/orange.jpg',
    //   money_bag:'../../../icon/money_bag1.png',
    //   integral:'../../../icon/integral.png',
    //   coupon:'../../../icon/coupon.png',
    //   set:'../../../icon/set.png',
    //   goshopping:'../../../icon/goshopping.png',

    //   hammer:'../../../icon/hammer.png',
    //   package:'../../../icon/package.png',
    //   pending:'../../../icon/pending.png',
    //   time_2:'../../../icon/time_2.png',
    //   sign_2:'../../../icon/sign_2.png',
    // },
    icons: config.imgUrls.icons,
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

  gotoBindphone: function () {
    wx.navigateTo({
      url: `../bindPhone/bindPhone`
    })
  },
  gotoMyWallet: function () {//去我的钱包
    wx.navigateTo({
      url: '../myWallet/myWallet'
    })
  },
  gotoMyOrder: function () {//去我的订单
    wx.navigateTo({
      url: `../myOrder/myOrder`
    })
  },
  gotoSellOrder:function(){//去售卖订单
    wx.navigateTo({
      url: `../sellOrder/sellOrder`
    })
  },
  gotoMyResult: function () {//去我的战绩
    wx.navigateTo({
      url: '../myResult/myResult'
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})