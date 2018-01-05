//app.js
const config = require('utils/config.js')
App({
    onLaunch: function (options) {
        console.log("[onLaunch] 场景值:", options.scene)
        // 展示本地存储能力
        // var logs = wx.getStorageSync('logs') || []
        // logs.unshift(Date.now())
        // wx.setStorageSync('logs', logs)

        // this.loginFn();
        this.getUserInfo();
    },
    // 获取用户信息
    getUserInfo: function () {
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo

                            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况
                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res)
                            }
                        }
                    })
                }
            }
        })
    },

    // 登录
    loginFn: function () {
        wx.login({
            success: res => {
                // console.error(config.route.loginUrl);
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
                let toobj = {
                    data: {
                        code: res.code
                    },
                    url: config.route.loginUrl
                };
                config.request(toobj, backdata => {
                    console.error(backdata);
                    if (Number(backdata.code) === 200) {
                        console.log("本地存储rdSession")
                        wx.setStorageSync('rdSession', backdata.data);
                    } else {
                        console.log("code错误")
                    }
                });
            }
        })
    },

    // // 登录
    // loginFn: function () {
    //     wx.login({
    //         success: res => {
    //             // console.error(config.route.loginUrl);
    //             // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //             let toobj = {
    //                 data: {
    //                     code: res.code
    //                 },
    //                 url: config.route.loginUrl
    //             };
    //             config.request(toobj)
    //                 .then(backdata => {
    //                     console.error('resolveajax成功');
    //                     console.log(backdata);
    //                     if (Number(backdata.code) === 200) {
    //                         console.log("本地存储rdSession");
    //                         wx.setStorageSync('rdSession', backdata.data);
    //                     } else {
    //                         console.log("code错误");
    //                     }
    //                 })
    //                 .catch(error => {
    //                     console.error('rejectajax错误');
    //                     console.error(error);
    //                 });
    //         }
    //     })
    // },

    //检查登录态
    checkLogin: function () {
        let that = this;
        wx.checkSession({
            success: function () {
                //session 未过期，并且在本生命周期一直有效
            },
            fail: function () {
                //登录态过期
                wx.clearStorageSync();
                that.loginFn();
            }
        })
    },
    globalData: {
        userInfo: null,
        rdSession: ''
    }
})