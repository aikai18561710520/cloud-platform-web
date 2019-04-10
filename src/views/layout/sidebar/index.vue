<template lang="pug">
    antd-menu(mode="inline",theme="light")
        antd-sub-menu(key="sub-1")
            span(slot="title")
                antd-icon(type="home")
                span 系统首页
            antd-menu-item(key="item-1") 系统首页
            antd-menu-item(key="item-2") 用户管理
            antd-menu-item(key="item-3") 登录信息
        
</template>
<script>
import { Menu, Icon } from 'ant-design-vue'
const { Item, SubMenu } = Menu
export default {
	name: 'SideBar',
	components: {
		'antd-menu': Menu,
		'antd-menu-item': Item,
		'antd-sub-menu': SubMenu,
		'antd-icon': Icon,
	},
}
</script>
<style lang="scss" scoped></style>
