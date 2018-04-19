<template>
    <div class="login">
  		<header class="bar bar-nav">
  			<router-link :to='{name:"Home"}' class="fl"><span class="iconfont icon-back_android"></span></router-link>
			<h1 class="title">登录</h1>
		</header>
		<div class="content">
			<div style="text-align:center;padding-top:2rem;"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523873787168&di=69e3ff5905e607e2c69122b76ab373a4&imgtype=0&src=http%3A%2F%2Fimg.25pp.com%2Fuploadfile%2Fapp%2Ficon%2F20160909%2F1473414369501474.jpg" style="width:6rem;"></div>
        	<div class="form">
						<form action="localhost:8080" method="post" id="login">
							<div class="field">
								<input required autofocus name="" type="email" placeholder="邮箱" >
								<span class="error"></span>
							</div>
							<div class="field">
								<input required name="password" type="password"  placeholder="密码" pattern="[a-zA-Z0-9]{6,15}" title="6 to 15 English letters or numbers">
								<span class="error"></span>
							</div>
							<div class="field">
								<!-- <p>Don't have an account? 
									<router-link :to='{name:"register"}' class="fr forget-pass" style="color:#008cff;" id="forgetPassword">前往注册</router-link>
								</p> -->
								<router-link :to='{name:""}' class="fr forget-pass" style="color:#008cff;" id="forgetPassword">忘记密码?</router-link>
							</div>
							<div class="field">
								<input type="submit" class="button button-success" value="登录">
							</div>
							<div class="field">
								<router-link :to='{name:"Register"}' class="button">新用户注册</router-link>
							</div> 
						</form>
					</div>
        </div>
		<footer>
              
        </footer>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted (){
    
  },
  methods: {
    back () {
      this.$router.go(-1);
    }
  }
  
}
</script>

<style scoped>
.facebook-login{
	background: #4f68a8;
	line-height: 2.5rem;
	color: #fff;
}
</style>
