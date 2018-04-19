<template>
    <div class="login">
  		<header class="bar bar-nav">
  			<router-link :to='{name:"Home"}' class="fl"><span class="iconfont icon-back_android"></span></router-link>
			<h1 class="title">新用户注册</h1>
		</header>
		<div class="content">
			<div style="text-align:center;padding-top:2rem;"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523873787168&di=69e3ff5905e607e2c69122b76ab373a4&imgtype=0&src=http%3A%2F%2Fimg.25pp.com%2Fuploadfile%2Fapp%2Ficon%2F20160909%2F1473414369501474.jpg" style="width:6rem;"></div>
        	<div class="form">
				<form action="" method="post" id="register">
					<div class="field">
						<input name="" type="email" placeholder="邮箱" required autofocus>
						<span></span>
					</div>
					<div class="field">
						<input name="password" type="password" placeholder="密码" required pattern="^[0-9A-Za-z]{6,16}$">
						<span></span>
					</div>
					<div class="field">
						<input name="password" type="password" placeholder="确认密码" required pattern="^[0-9A-Za-z]{6,16}$">
						<span></span>
					</div>
					<div class="field">
						<input type="submit" class="button button-success" value="注册">
					</div>
					<div class="field">
						<router-link :to='{name:"Login"}' class="button">已注册，前往登录</router-link>
					</div>
					<div class="field">
						<p>
                    		注册即视为同意
                    		<router-link :to='{name:" "}' style="color:#008cff;">服务协议</router-link>
                    		和
                    		<router-link :to='{name:" "}' style="color:#008cff;">法律声明及隐私政策</router-link> 
                    	</p>
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
