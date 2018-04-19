<template>
	<div class="user" style="background:url(http://img.alicdn.com/tfs/TB1gCf4SpXXXXaPaXXXXXXXXXXX-608-344.png_960x960Q50s50.jpg_.webp)">
		<img src="http://wwc.alicdn.com/avatar/getAvatar.do?userNick=&width=128&height=128&type=sns&_input_charset=UTF-8" alt="">
		<div class="user-login">
			<router-link :to='{name:"Login"}'>登录</router-link>
			<span>|</span>
			<router-link :to='{name:"Login"}'>注册</router-link>
		</div>
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
</style>
