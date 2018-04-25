<template>
    <div class="page-group login">
        <div class="page">
  		      <header class="bar bar-nav">
    		        <router-link :to='{name:"Home"}' class="fl"><span class="iconfont icon-back_android"></span></router-link>
			          <h1 class="title">新用户注册</h1>
		        </header>
		        <div class="content">
			          <div style="text-align:center;padding-top:2rem;">
                    <img src="../../assets/timg.jpg" style="width:6rem;">
                </div>
        	      <div class="form">
				            <form method="post" id="register">
					              <div class="field">
						                <input name="" type="email" placeholder="邮箱" v-model="userName" autofocus>
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
                						<input name="passwords" type="password" placeholder="确认密码" v-model="passWords" v-if="passBoxShow2">
                						<input name="password" type="text" v-model="passWords"  placeholder="确认密码" v-else />
                						<div class="password-hide-show" @click="passwordHideShow2">
                							  <span class="iconfont icon-password_hide" v-if="passBoxShow2"></span>
                							  <span class="iconfont icon-password_show" v-else></span>
                						</div>
					              </div>
					              <div class="field">
						                <input type="button" @click="mobileRegist" class="button button-success" value="注册">
					              </div>
					              <div class="field">
						                <router-link :to='{name:"Login"}' class="button">已注册，前往登录</router-link>
					              </div>
              					<div class="field">
              						  <p>
                                注册即视为同意
                                <router-link :to='{name:"Home"}' style="color:#008cff;">服务协议</router-link>
                                和
                                <router-link :to='{name:"Home"}' style="color:#008cff;">法律声明及隐私政策</router-link> 
                            </p>
              					</div>
				            </form>
			          </div>
            </div>
		        <footer>
              
            </footer>
            <v-tip :tipData="tipData"></v-tip>
        </div>
    </div>
</template>

<script>//    /registernew
import vTip from '../../components/tip.vue'
export default {
  components: {
    'v-tip': vTip
  },
  data () {
    return {
      userName: null,
      passWord: null,
      passWords: null,
      tipData: {tipShow: false, tipMask: false, tipInfo: null, tipState: null },
      passBoxShow: true,
      passBoxShow2: true
    }
  },
  mounted (){
    
  },
  methods: {
    back () {
      this.$router.go(-1);
    },
    mobileRegist () {
      let userInfo = {'name': this.userName, 'password': this.passWord}
      if(this.provingUserName() && this.provingPassWord() && this.provingPassWords()){
        // console.log(1,userInfo)
      }else{
        // console.log(2,userInfo)
      }
    },
    provingUserName(){
      let reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
      if(!this.userName){
      	this.tipData = {tipShow: true, tipMask: false, tipInfo: "邮箱不能为空！", tipState: "danger" };
      }else{
        if(reg.test(this.userName)){
          return true;
        }else{
          this.tipData = {tipShow: true, tipMask: false, tipInfo: "邮箱格式不正确！", tipState: "danger" };
        }
      }
    },
    provingPassWord(){
      let reg = /^[a-zA-Z0-9]{6,14}$/;
      if(!this.passWord){
        this.tipData = {tipShow: true, tipMask: false, tipInfo: "密码不能为空！", tipState: "danger" };
      }else{
        if(reg.test(this.passWord)){
          return true;
        }else{
          this.tipData = {tipShow: true, tipMask: false, tipInfo: "密码格式！", tipState: "danger" };
        }
      }
    },
    provingPassWords(){
      if(!this.passWords){
        this.tipData = {tipShow: true, tipMask: false, tipInfo: "确认密码不能为空！", tipState: "danger" };
      }else{
        if(this.passWord === this.passWords) {
          return true;
        }else{
          this.tipData = {tipShow: true, tipMask: false, tipInfo: "两次密码输入不一致！", tipState: "danger" };
        }
      }
    },
    passwordHideShow () {
      this.passBoxShow = !this.passBoxShow;
    },
    passwordHideShow2 () {
      this.passBoxShow2 = !this.passBoxShow2;
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
