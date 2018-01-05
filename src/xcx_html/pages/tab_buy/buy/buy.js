// pages/buy/buy.js
const config = require('../../../utils/config.js');
// let menu = [
//     { img: '../../../icon/film.png',text: '手机话费' }, { img: '../../../icon/film.png',text: '手机流量' },
//     { img: '../../../icon/film.png',text: '电影票' }, { img: '../../../icon/film.png',text: '影视影音' },
//     { img: '../../../icon/film.png',text: '咖啡奶茶' }, { img: '../../../icon/film.png',text: '餐饮美食' },
    // { img: '../../../icon/film.png',text: '购物卡' }, { img: '../../../icon/film.png',text: '出行优惠' },
    // { img: '../../../icon/film.png',text: '更多' }
// ];
let menu = config.imgUrls.menu;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        region: ['广东省', '广州市', '海珠区'],
        // imgUrls: [
        //     '../../../icon/flow.png',
        //     'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        //     '../../../icon/bill.png'
        // ],
        // icons: {
        //     film: '../../../icon/film.png',
        //     heart_like: '../../../icon/heart_like.png',
        //     fire: '../../../icon/fire.png',
        //     money_bag:'../../../icon/money_bag1.png',
        //     location: '../../../icon/location.png'
        // },
        imgUrls: config.imgUrls.imgUrls,
        icons: config.imgUrls.icons,
        menum_w: "",
        menu: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.loadMenu();
    },

    loadMenu: function () {
        let length = menu.length;
        let menum_w = "150rpx";
        if (length > 0 && length <= 5) {
            menum_w = 750 / length + 'rpx'
        } else if (length === 6) {
            menum_w = 750 / 3 + 'rpx'
        } else if (length === 7 || length === 8) {
            menum_w = 750 / 4 + 'rpx'
        } else if (length >= 9) {
            menum_w = 750 / 5 + 'rpx'
        }
        this.setData({ menum_w: menum_w, menu: menu })
    },

    bindRegionChange: function (e) {
        console.log(e.detail.value)
        this.setData({
            region: e.detail.value
        })
    },
    gotoDetail: function (e) {
        console.error(e);
        let id=e.currentTarget.id;
        wx.navigateTo({
            url: `../detail/detail?id=${id}`
        })
    },
    gotoOtherDetail:function(){
        wx.navigateTo({
            url: `../otherDetail/otherDetail`
        })
    },
    gotoBuySuccess:function(){
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
    gotoAdvertisement:function(){
      wx.navigateTo({
        url: `../advertisement/advertisement`
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
        // console.info(config.route.loginUrl);
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
        return {
            title: '流畅淘淘',
            path: '/pages/tab_buy/buy/buy',
            success: function (res) {
                console.log("转发成功")
                // 转发成功
            },
            fail: function (res) {
                console.log("转发失败")
                // 转发失败
            }
        }
    }
})