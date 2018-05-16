import {request} from '../utils/http.js'

export const login = (params) => {
  return request({method: 'post', url: '/login', data: params})
}
export const register = (params) => {
  return request({method: 'post', url: '/register', data: params})
}