const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}
let trim=function (str) {
  return str.replace(/(^\s*)|(\s*$)/g, '');
}
//显示提示信息3s
let showAlert=function(that,alertinfo){
    that.setData({alertinfo});
    setTimeout(()=>{
        that.setData({
            alertinfo:{
                show_alert:'hidden_alert',
                alert_text:''
            }
        });
    },3000)
};

let test = function (testtype,that, callback) {
    function confirm_phone(phone) {//手机验证
        let length = phone.length;
        if (length === 0) {
            // wx.showToast({ title: "请输入手机号" });
            let alertinfo={
                show_alert:'show_alert',
                alert_text:'请输入手机号'
            }
            showAlert(that,alertinfo);
            return false;
        } else if (length < 11) {
            // wx.showToast({ title: "请输入11位手机号" });
            let alertinfo={
                show_alert:'show_alert',
                alert_text:'请输入11位手机号'
            }
            showAlert(that,alertinfo);
            return false;
        } else if ((/^1[34578]\d{9}$/.test(phone))) {
            return true;
        } else {
            // wx.showToast({ title: "手机号码有误，请重填" });
            let alertinfo={
                show_alert:'show_alert',
                alert_text:'手机号码有误，请重填'
            }
            showAlert(that,alertinfo);
            return false;
        }
    };
    function confirm_inputvalue(inputvalue){
      let length = inputvalue.length;
      if (length === 0) {
        let alertinfo = {
          show_alert: 'show_alert',
          alert_text: '输入框不能为空'
        }
        showAlert(that, alertinfo);
        return false;
      }else{
        return true;
      }
    }
    switch (testtype) {
        case 'phone':
            callback(confirm_phone); break;
        case 'inputvalue':
          callback(confirm_inputvalue); break;
    }
};

module.exports = {
    formatTime: formatTime,
    test: test,
    trim: trim
}
