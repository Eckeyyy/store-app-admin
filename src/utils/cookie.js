import cookie from 'js-cookie'
//设置cookies
export function setUserCookies(Info) {
    const arr = Object.entries(Info)
    arr.forEach((item) => {
        cookie.set(item[0], item[1])
    })
    return true
}

//获取cookies
export function getUserCookies() {
    return {
        username: cookie.get('username'),
        appKey: cookie.get('appkey'),
        role: cookie.get('role'),
        email: cookie.get('email')
    }
}
//删除cookies
export function removeUserCookies() {
    cookie.remove('username');
    cookie.remove('appkey');
    cookie.remove('role');
    cookie.remove('email');
    return true
}