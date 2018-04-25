'use strict'
import {
	GET_SWIPER,
	GET_NEW_DISHES,
	GET_ORDER,
	GET_ADDRESS,
	GET_SORT_DATA,
	RECORD_USERINFO,
	SET_NAME,
	SET_TOKEM
} from './mutation-type.js'

export default {
	[GET_SWIPER] (state,list){
		state.swipers = list;
	},
	[GET_NEW_DISHES] (state,list){
		state.newDishes = list;
	},
	[GET_ORDER] (state,list){
		state.orders = list;
	},
	[GET_ADDRESS] (state,list){
		state.addresses = list;
	},
	[GET_SORT_DATA] (state,list){
		state.sorts = list;
	},
	// [RECORD_USERINFO] (state,data){
	// 	state.userInfo = data;
	// },
	[SET_NAME] (state,data){
		state.name = data;
	},
	[SET_TOKEM] (state,data){
		state.token = data;
	}
}