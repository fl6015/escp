// pages/startArbitration/startArbitration.js

const config = require('../../../utils/config.js');
let addimgarr=[];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['申请仲裁原因1', '申请仲裁原因2', '申请仲裁原因3', '申请仲裁原因4'],
    index:'',
    // icons: {
    //   film: '../../../icon/film.png',
    // },
    icons: config.imgUrls.icons,
    addimgarr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */

  //添加图片
  addImg:function(){
    let that=this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        addimgarr.push(tempFilePaths);
        that.setData({addimgarr:addimgarr});
        console.log(addimgarr);
      }
    })
  },
  //删除图片
  clearImg:function(e){
    let index=e.currentTarget.dataset.index;
    addimgarr.splice(index,1);
    this.setData({addimgarr})
  },
  //预览图片
  previewImage:function(e){
    let imgsrc=e.currentTarget.dataset.imgsrc[0];
    wx.previewImage({
      current: imgsrc, // 当前显示图片的http链接
      urls: [imgsrc] // 需要预览的图片http链接列表
    })
  },

  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  okArbitration:function(){
    wx.showModal({
      title: '提示',
      content: '您的订单已经提交处理中，请稍后，订单处理完成，系统会通过微信通知您，请注意查收。或您也可以随时到个人中心的购买订单中查看订单进展信息。',
      showCancel:false,
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

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
    console.warn("onShow");
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

  goBack:function(){
    wx.navigateBack({
      delta: 1
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})