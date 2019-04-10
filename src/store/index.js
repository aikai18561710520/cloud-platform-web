import Vue from 'vue'
import Vuex from 'vuex'
import state from './state/state'
import actions from './actions/actions'
import mutations from './mutations/mutations'
Vue.use(Vuex)

const Store = new Vuex.Store({
	state,
	actions,
	mutations,
})

export default Store
