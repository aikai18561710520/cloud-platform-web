import axios from 'axios'

class Service {
	constructor() {
		this.$http = this.httpInit()
		this.requestInterceptors()
		this.responseInterceptors()
	}

	httpInit() {
		return axios.create({
			timeout: 10000,
			headers: {
				'Content-Type': 'application/json',
			},
		})
	}

	responseInterceptors() {
		// 相应拦截器
		this.$http.interceptors.response.use(
			response => {
				let { data } = response
				if (data.code !== 200) {
					return Promise.reject(data)
				}
				return data
			},
			error => {
				return Promise.reject(error)
			},
		)
	}

	requestInterceptors() {
		// 请求拦截器
		this.$http.interceptors.request.use(
			config => {
				// 添加token，过滤登录等接口
				return config
			},
			error => {
				return Promise.reject(error)
			},
		)
	}

	put = this.$http.put
	delete = this.$http.delete
	post = this.$http.post
	get(url, param) {
		if (param !== undefined) {
			Object.assign(param, { _t: new Date().getTime() })
		} else {
			param = { _t: new Date().getTime() }
		}
		return this.$http.get({ url, params: param })
	}
}

export default Service
