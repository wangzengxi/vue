'use strict'
import axios from 'axios'
import * as types from './mutation-type.js'

export default{
	getSwiper({commit,state}) {
		axios.get('/static/mock/home/swiper.json').then((response) => {
			if (response.data.list) {
				commit(types.GET_SWIPER,response.data.list);
			}
		})
	},
	getGoodsArea({commit,state}) {
		axios.get('/static/mock/home/new.json').then((response) => {
			if (response.data.list) {
				// console.log(response.data.list)
				commit(types.GET_GOODSAREA,response.data.list);
			}
		})
	},
	getOrder({commit,state}) {
		axios.get('/static/mock/order.json').then((response) => {
			console.log(response.data.list)
			if (response.data.list) {
				commit(types.GET_ORDER,response.data.list)
			}
		})
	},
	getAddress({commit,state}) {
		axios.get('./static/mock/address.json').then((response) => {
			if (response.data.list) {
				commit(types.GET_ADDRESS,response.data.list)
			}
		})
	},
	getSortData({commit,state},id) {
		axios.get('./static/mock/sort/'+id+'.json').then((response) => {
			if (response.data.list) {
				commit(types.GET_SORT_DATA,response.data.list)
			}
		})
	},
	userLogin({commit},userInfo) {
		axios.post('http://localhost:8008/login', userInfo).then((response) => {
			console.log(response.data)
			if(response.data.status == 0) {
				commit(types.SET_NAME,response.data.title);
				commit(types.SET_TOKEM,true);
			}else{

			}
		}).catch((error) => {
			console.log(error)
		})
	},
	FedLogOut({commit}) {

	}

}

