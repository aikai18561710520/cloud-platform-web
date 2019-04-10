import Service from '../common/services/index'
// 虚拟机模块接口。
class VmApi extends Service {
	constructor() {
		super()
	}
	getHostInfo(params) {
		return this.post('', params)
	}
}

export default new VmApi()
