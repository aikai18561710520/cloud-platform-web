<template lang="pug">
antd-row.cloud-header
	antd-col(:span="2") 
		antd-avatar(icon="user")
	antd-col(:span="16",:xs="8",:md="12",:lg="15") 
		antd-menu.antd-c-menu(mode="horizontal",theme="dark",@click="menuClickHandle")
			antd-menu-item.antd-cmenu-item(v-for="(item,index) in navList",:key="item.id") {{item.label}}
	antd-col(:span="6",:xs="14",:md="10",:lg="7")
		antd-row
			antd-col(:span="8")
				antd-select(style="width:100%",defaultValue="A")
					antd-select-option(v-for="(item, index) in ['A','B','C','D','E']",:key="index",:value="item") 区域{{item}}
			antd-col(:span="7",:offset="1")
				antd-button(type="primary",:icon="isFullscreen ? 'fullscreen-exit' : 'laptop'",:block="true",@click="fullscreen") {{isFullscreen ? '退出全屏' : '大屏展示'}}
			antd-col(:span="7",:offset="1")
				antd-button(type="primary",icon="logout",:block="true") 退出登录
</template>
<script>
import naviLink from '../../../common/data/navi'
import screenfull from 'screenfull'
import { Row, Col, Menu, Avatar, Select, Button } from 'ant-design-vue'
const { Item } = Menu
const { Option } = Select
export default {
	name: 'CloudHeader',
	components: {
		'antd-row': Row,
		'antd-col': Col,
		'antd-menu': Menu,
		'antd-menu-item': Item,
		'antd-avatar': Avatar,
		'antd-select': Select,
		'antd-select-option': Option,
		'antd-button': Button,
	},
	data() {
		return {
			navList: naviLink,
			isFullscreen: false,
		}
	},
	mounted() {
		this.fullscreenInit()
	},
	methods: {
		menuClickHandle() {
			console.log(arguments)
		},
		fullscreenInit() {
			if (screenfull.enabled) {
				screenfull.on('change', this.fullscreenChange)
			}
		},
		fullscreenChange() {
			this.isFullscreen = screenfull.isFullscreen
		},
		fullscreen() {
			if (!screenfull.enabled) {
				this.$message.warning('you browser can not work')
				return false
			}
			screenfull.toggle()
		},
	},
}
</script>
<style lang="scss" scoped>
.antd-c-menu {
	line-height: 64px;
	.antd-cmenu-item {
		padding: 0 30px;
	}
}
</style>
