<template lang="pug">
	antd-layout.cloud-layout
		antd-header
			cloud-header
		antd-layout
			antd-sider.cloud-sidebar(v-model="collapsed",:collapsible="true",theme="light")
				side-bar
			antd-content
				antd-Bbeadcrumb(:routes="routes")
					template(slot="itemRender",slot-scope="{route, params, routes, paths}")
						span(v-if="routes.indexOf(route) === routes.length - 1")
				router-view
</template>
<script>
import CloudHeader from './header'
import SideBar from './sidebar'
import { Layout, Button, Icon, Breadcrumb } from 'ant-design-vue'
const { Header, Content, Sider } = Layout
export default {
	name: 'layout',
	components: {
		CloudHeader,
		SideBar,
		'antd-layout': Layout,
		'antd-header': Header,
		'antd-sider': Sider,
		'antd-content': Content,
		'antd-button': Button,
		'antd-icon': Icon,
		'antd-Bbeadcrumb': Breadcrumb,
	},
	data() {
		return {
			collapsed: false,
		}
	},
	computed: {
		routes() {
			return this.$router.options.routes
		},
	},
	methods: {
		toggleCollapsed() {
			this.collapsed = !this.collapsed
		},
	},
}
</script>
<style lang="scss" scoped>
.cloud-layout {
	height: 100%;
}
</style>
