'use strict'
import axios from 'axios'
import * as types from './mutation-type.js'

export default{
	getSwiper({commit,state}) {
		axios.get('http://localhost:8080/static/mock/home/swiper.json').then((response) => {
			if (response.data.list) {
				commit(types.GET_SWIPER,response.data.list);
			}
		})
	},
	getGoodsArea({commit,state}) {
		axios.get('http://localhost:8080/static/mock/home/new.json').then((response) => {
			if (response.data.list) {
				// console.log(response.data.list)
				commit(types.GET_GOODSAREA,response.data.list);
			}
		})
	},
	getOrder({commit,state}) {
		axios.get('http://localhost:8080/static/mock/order.json').then((response) => {
			console.log(response.data.list)
			if (response.data.list) {
				commit(types.GET_ORDER,response.data.list)
			}
		})
	},
	getSortData({commit,state},id) {
		axios.get('http://localhost:8080/static/mock/sort/'+id+'.json').then((response) => {
			if (response.data.list) {
				commit(types.GET_SORT_DATA,response.data.list)
			}
		})
	},
	setToken({commit}, data) {
       commit(types.SET_NAME,data.userId)
       commit(types.SET_TOKEM,data.token)
	},
	FedLogOut({commit}) {

	}

}

