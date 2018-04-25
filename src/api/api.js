'use strict'
import Vue from 'vue'

export default {
	register () {
		return Vue.$http.post('/registernew');
	},
	getOrderInfo (id) {
		return Vue.http.get('http://localhost:8008/yonk/singleorder?id=' + id)
	}
}
