import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store/index'
import 'normalize.css'
import './common/scss/global.scss'
import { Message } from 'ant-design-vue'
Vue.use(Message)
Vue.config.productionTip = false
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
