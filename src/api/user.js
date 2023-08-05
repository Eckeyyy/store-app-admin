import request from "./request";


export function login(params) {
    return request({
        url: '/passport/login',
        method: 'post',
        params
    })
}