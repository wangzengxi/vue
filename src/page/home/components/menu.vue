<template>
	<div class="menu">
		<div class="user" style="background:url(http://img.alicdn.com/tfs/TB1gCf4SpXXXXaPaXXXXXXXXXXX-608-344.png_960x960Q50s50.jpg_.webp)">
			<img src="http://wwc.alicdn.com/avatar/getAvatar.do?userNick=&width=128&height=128&type=sns&_input_charset=UTF-8" alt="">
			<div class="user-login">
				<router-link :to='{name:"Login"}'>登录</router-link>
				<span>|</span>
				<router-link :to='{name:"Register"}'>注册</router-link>
			</div>
		</div>
		<nav class="list-group">
			<div class="list">
				<router-link :to='{name:"Home"}'><span class="iconfont icon-home"></span>首页</router-link>
				<router-link :to='{name:"Sort"}'><span class="iconfont icon-sort_fill"></span>所有分类</router-link>
				<router-link :to='{name:"Cart"}'><span class="iconfont icon-cart_fill"></span>购物车</router-link>
				<router-link :to='{name:"Order"}'><span class="iconfont icon-order_fill"></span>我的订单</router-link>
				<router-link :to='{name:"Address"}'><span class="iconfont icon-location_fill"></span>收货地址</router-link>
				<router-link :to='{name:"Favorite"}'><span class="iconfont icon-like_fill"></span>我的收藏</router-link>
				<router-link :to='{name:"Message"}'><span class="iconfont icon-message_fill"></span>我的消息</router-link>
				<p :to='{name:""}'><span class="iconfont icon-help_fill"></span>在线帮助<span class="fr iconfont icon-down_fill"></span></p>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.user{
	padding:1.5rem;
}
.user img{
	width: 5rem;
	border-radius: 50%;
}
.user-login{
	margin-top: 3rem;
	font-size: 1.25rem;
}
.list{

}
.list a,.list p{
	display: block;
	padding:0 1.2rem;
	line-height: 3rem;
	font-size: 1.25rem;
	color:#e0e0e0;
}
.list span{
	display: inline-block;
	font-weight: 400;
	margin-right: 1rem;
	font-size: 1.25rem;
}
.list p {
	border:1px solid #999;
	border-left: none;
	border-right: none;
}
.list p span:last-child{
	margin:0;
}
</style>
