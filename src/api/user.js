import request from "./request";


export function login(data) {
    return request({
        url: '/passport/login',
        method: 'post',
        data
    })
}