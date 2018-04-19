import {
	GET_SWIPER,
	GET_NEW_DISHES,
	GET_ORDER,
	GET_ADDRESS,
	GET_SORT_DATA
} from './mutation-type.js'
// const GET_SWIPER = 'GET_SWIPER'

// const GET_NEW_DISHES = 'GET_NEW_DISHES'

// const GET_ORDER = 'GET_ORDER'

// const GET_ADDRESS = 'GET_ADDRESS'

// const GET_SORT_DATA = 'GET_SORT_DATA'

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
	}
}