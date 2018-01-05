// pages/detail/detail.js
const util = require('../../../utils/util.js');
const config = require('../../../utils/config.js');
let flow = [
  { num: "30M", money: "3.75" }, { num: "100M", money: "7.00" },
  { num: "300M", money: "14.00" }, { num: "500M", money: "22.50" },
  { num: "1000M", money: "45.50" }, { num: "2000M", money: "63.50" },
  { num: "3000M", money: "94.00" }, { num: "6000M", money: "169.20" },
];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // icons: {
    //   me_my: '../../../icon/me_my.png',
    //   mobilephone_fill: '../../../icon/mobilephone_fill.png'
    // },
    icons: config.imgUrls.icons,
    flow: [],
    choose: {
      num: '500M'
    },
    phone: { num: '1592766134', local: "湖北武汉" },
    alertinfo:{
        show_alert:'hidden_alert',
        alert_text:''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.warn(options);
    this.setData({ flow: flow });
  },

  chooseFlow: function (e) {
    // console.log(e);
    let id = e.currentTarget.dataset.id;
    this.setData({ choose: { num: id } })
  },

  // fotoFlowdetail: function () {
  //   wx.navigateTo({
  //     url: '../flowdetail/flowdetail'
  //   })
  // },

  //获取手机号并加载对应的数据流量
  writePhone: function (e) {
    let num = e.detail.value;
    num =util.trim(num);
    let phone = { num: num, local: '' };
    if (num.length === 11) {
      util.test('phone',this, (confirmFn) => {
        let confirm_phone = confirmFn(num);
        if (confirm_phone) {
          let rdSession = wx.getStorageSync('rdSession');
          let objto = {
            url: config.route.queryFlowUrl,
            data: {
              rdSession: rdSession,
              mobile: num
            }
          };
          config.request(objto, backdata => {
            // console.warn(backdata);
            if(Number(backdata.code)===200){
              phone.local=backdata.msg;
              loadDate(backdata.data);
            }
          });
        }
      })
    } else {
      phone.local = ''
    }
    this.setData({ phone });
    function loadDate(alldata){
      console.log(alldata)
    }
  },

  //购买
  buy: function () {
    let phone = this.data.phone.num;
    util.test('phone',this, backdata => {
      let result = backdata(phone);
      if (result) {
        let rdSession = wx.getStorageSync('rdSession');
          let objto = {
            url: config.route.submitPaymentUrl,
            data: {
              rdSession: rdSession,
              flowPacketCode:"100010",
              mobile: phone
            }
          };
          config.request(objto, backdata => {
            // console.warn(backdata);
            if(Number(backdata.code)===200){
              pay(backdata.data)
            }
          });
      } else { console.log("XXXXXXX") }
    });
    function pay(objdata){
      wx.requestPayment({
        'timeStamp': objdata.timeStamp,
        'nonceStr': objdata.nonceStr,
        'package': objdata.package,
        'signType': objdata.signType,
        'paySign': objdata.paySign,
        'success':function(res){
          console.log("成功支付");
          console.log(res)
        },
        'fail':function(res){
          console.log("支付失败")
          console.log(res)
        }
      })
    }
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