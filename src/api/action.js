export default {
    'SERVER': 'http://localhost:8080/j2ee15', //服务器
    'SYSTEM_USER_DOLOGIN': '/userAction.action', //登陆
    'SYSTEM_USER_DOREG': '/userAction.action', //注册
    'getFullPath': k => { //获得请求的完整地址，用于mockjs测试时使用
        return this.SERVER + this[k];
    }
}