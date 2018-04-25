'use strict'
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

Vue.use(Vuex)

const state = {
	swipers: [],
	newDishes: [],
	orders: [],
	addresses: [],
	sorts: [],
	// userInfo: null,
	name: null,
	token: null
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})
