// pages/myOrder/myOrder.js



const config = require('../../../utils/config.js');
let activeLine_w=80;
let menu=[
  {text:'待确认',id:'111'},{text:'已完成',id:'222'},
  {text:'仲裁',id:'333'}
];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu:menu,
    menu_active:{
      td_left:0,
      active_index:0
    },
    icons: config.imgUrls.icons,
  },

  menuinit:function(){
    let that=this;
    wx.getSystemInfo({
      success: function(res) {
        let w=res.windowWidth;
        let length=that.data.menu.length;
        let linespacing=(w/length-activeLine_w)/2;
        that.setData({
          linespacing
        });
      }
    });
  },
  menuTap:function(e){
    console.log(e);
    let td_left=e.currentTarget.offsetLeft;
    let active_index=e.currentTarget.dataset.tdindex;
    this.setData({
      menu_active:{td_left,active_index}
    })
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
      this.menuinit();
    // },100)
    
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