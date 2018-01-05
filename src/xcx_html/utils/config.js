const root = 'http://124.172.160.225:30001/xcx/';
let route = {
    // 登录地址，用于建立会话
    loginUrl: `${root}login/main`,

    // 查询流量包信息
    queryFlowUrl: `${root}flowRecharge/getFlowPacketInfo`,

    // 提交订单
    submitPaymentUrl: `${root}flowRecharge/subOrder`,

    // 测试的信道服务接口
    tunnelUrl: `${root}/tunnel`,

    // 生成支付订单的接口
    paymentUrl: `${root}/payment`,

    // 发送模板消息接口
    templateMessageUrl: `${root}/templateMessage`,
};
let rootImg="../../";
let imgUrls = {
    imgUrls: [
        rootImg+'../icon/flow.png',
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        rootImg+'../icon/bill.png'
    ],
    icons: {
        film: rootImg+'../icon/film.png',
        heart_like: rootImg+'../icon/heart_like.png',
        fire: rootImg+'../icon/fire.png',
        money_bag:rootImg+'../icon/money_bag1.png',
        location: rootImg+'../icon/location.png',
        flow: rootImg+'../icon/flow.png',

        me_my:  rootImg+'../icon/me_my.png',
        mobilephone_fill:  rootImg+'../icon/mobilephone_fill.png',

        phone: rootImg+'../icon/phone.png',
        security: rootImg+'../icon/security.png',

        user: rootImg+'../icon/orange.jpg',
        integral: rootImg+'../icon/integral.png',
        coupon: rootImg+'../icon/coupon.png',
        set: rootImg+'../icon/set.png',
        goshopping: rootImg+'../icon/goshopping.png',
        arbApp_bg1: rootImg+'../icon/arbApp_bg1.jpg',
        mySalOrd_bg1: rootImg+'../icon/mySalOrd_bg1.png',
    },
    menu: [
        { img: rootImg+'../icon/film.png',text: '手机话费' }, { img: rootImg+'../icon/film.png',text: '手机流量' },
        { img: rootImg+'../icon/film.png',text: '电影票' }, { img: rootImg+'../icon/film.png',text: '影视影音' },
        { img: rootImg+'../icon/film.png',text: '咖啡奶茶' }, { img: rootImg+'../icon/film.png',text: '餐饮美食' },
        { img: rootImg+'../icon/film.png',text: '购物卡' }, { img: rootImg+'../icon/film.png',text: '出行优惠' },
        { img: rootImg+'../icon/film.png',text: '更多' }
    ]
};

let request = function (toobj,callback) {
    wx.request({
        url: toobj.url, //仅为示例，并非真实的接口地址
        data: toobj.data,
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: function (res) {
            console.log("ajax成功");
            callback(res.data);
        },
        fail: function (err) {
            console.log("ajax错误");
        }
    })
};

// let request = function (toobj) {
//     let promise = new Promise((resolve, reject) => {
//         wx.request({
//             url: toobj.url, //仅为示例，并非真实的接口地址
//             data: toobj.data,
//             header: {
//                 'content-type': 'application/json' // 默认值
//             },
//             success: function (res) {
//                 console.log("ajax成功");
//                 resolve(res.data);
//             },
//             fail: function (error) {
//                 console.log("ajax错误");
//                 reject(error);
//             }
//         })
//     });
//     return promise;
// };

module.exports = {
    route: route,
    imgUrls: imgUrls,
    request: request
}