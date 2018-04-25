<template>
	<div class="page-group login">
		<div class="page">
			<header class="bar bar-nav">
				<router-link :to='{name:"Home"}' class="fl"><span class="iconfont icon-back_android"></span></router-link>
				<h1 class="title">登录</h1>
			</header>
			<div class="content">
				<div style="text-align:center;padding-top:2rem;">
					<img src="../../assets/timg.jpg" style="width:6rem;">
				</div>
				<div class="form">
					<form method="post" id="login">
						<div class="field">
							<input name="email" id="email" type="email" v-model="userName" placeholder="邮箱" autofocus />
						</div>
						<div class="field">
							<input name="password" type="password" v-model="passWord" placeholder="密码" v-if="passBoxShow" />
							<input name="password" type="text" v-model="passWord"  placeholder="密码" v-else />
							<div class="password-hide-show" @click="passwordHideShow">
								<span class="iconfont icon-password_hide" v-if="passBoxShow"></span>
								<span class="iconfont icon-password_show" v-else></span>
							</div>
						</div>
						<div class="field">
							<router-link :to='{name:""}' class="fr forget-pass" style="color:#008cff;" id="forgetPassword">忘记密码?</router-link>
						</div>
						<div class="field">
							<input type="button" class="button button-success" @click="mobileLogin " value="登录">
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
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      userInfo: null,
      userName: null,
      passWord: null,
      passBoxShow: true
    }
  },
  computed: {
    ...mapState([
    ])
  },
  mounted (){
    
  },
  methods: {
    ...mapActions([
      'userLogin'
    ]),
    back () {
      this.$router.go(-1);
    },
    passwordHideShow () {
      this.passBoxShow = !this.passBoxShow;
    },
    mobileLogin () {
      // let userInfo = {'name': this.userName, 'password': this.passWord}
      var formData = new FormData()
      formData.append('username', this.userName);
      formData.append('password', this.passWord);
      if(this.userName != null && this.passWord != null){
        this.userLogin(formData)
        // console.log(1,userInfo)
      }else{
        // console.log(2,userInfo)
      }
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
.field{
	position: relative;
}
input[type="text"],
input[type="password"] {
  padding: 0.2rem 2.5rem 0.2rem 0.5rem;
}
.password-hide-show{
	position: absolute;
	top: 0;right: 0;bottom:0;
	padding:0 .6rem;
}
.password-hide-show span{
	line-height: 2.6rem;
	font-size: 1.6rem;
}
</style>
