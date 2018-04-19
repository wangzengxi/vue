import axios from 'axios'
import Vue from 'vue'

export default {
	// getOrderAll () {

	// },
	getOrderInfo (id) {
		return Vue.http.get('http://localhost:8008/yonk/singleorder?id=' + id)
	}
}
