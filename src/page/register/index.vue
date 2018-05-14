<template>
    <div class="page-group register">
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
                            <input v-model="registInfo.registName" type="email" name="" placeholder="邮箱" autofocus />
                        </div>
                        <div class="field">
                            <input v-model="registInfo.registPwd" type="password" name="" placeholder="密码" v-if="passBoxShow" />
                            <input v-model="registInfo.registPwd" type="text" name=""  placeholder="密码" v-else />
                            <div class="password-hide-show" @click="passwordHideShow">
                                <span class="iconfont icon-password_hide" v-if="passBoxShow"></span>
                                <span class="iconfont icon-password_show" v-else></span>
                            </div>
                        </div>
                        <div class="field">
                            <input v-model="registInfo.registPwds" type="password" name="" placeholder="确认密码" v-if="passBoxShow2" />
                            <input v-model="registInfo.registPwds" type="text" name=""  placeholder="确认密码" v-else />
                            <div class="password-hide-show" @click="passwordHideShow2">
                                <span class="iconfont icon-password_hide" v-if="passBoxShow2"></span>
                                <span class="iconfont icon-password_show" v-else></span>
                            </div>
                        </div>
                        <div class="field">
                            <input type="button" @click="mobileRegist" class="button button-success" value="注册" />
                        </div>
                        <div class="field">
                            <router-link :to='{name:"Login"}' class="button">已注册，前往登录</router-link>
                        </div>
                        <div class="field">
                            <p>
                                点击注册即视为同意
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
        </div>
    </div>
</template>

<script>// 
export default {
  components: {
  },
  data () {
    return {
      registInfo: {
        registName: null,
        registPwd: null,
        registPwds: null
      },
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
      if(this.verifyUserName() && this.verifyPassWord() && this.verifyPassWords()){
        var data = JSON.stringify(this.registInfo);
        this.$http.post('http://192.168.10.185:3000/register', data).then((response) => {
          if (response.status === 200) {
            console.log(response.data)
            if(response.data.code === 0){
              this.$Prompt.show('注册成功！')
              this.$router.push({ name: 'Login'})
            }
            this.$Prompt.show(response.data.message)
          }
        }).catch((error) => {
          console.log(error)
          this.$Prompt.show({state: 'failed',text: '注册失败！'})
        })
      }else{
        console.log(2,this.registInfo)
      }
    },
    verifyUserName(){
      let reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
      if(this.registInfo.registName == '' || this.registInfo.registName == null){
        this.$Prompt.show({state: 'failed',text: '邮箱不能为空！'})
      }else{
        if(reg.test(this.registInfo.registName)){
          return true;
        }else{
          this.$Prompt.show({state: 'failed',text: '邮箱格式不正确！'})
        }
      }
    },
    verifyPassWord(){
      let reg = /^[a-zA-Z0-9]{6,14}$/;
      if(this.registInfo.registPwd == '' || this.registInfo.registPwd == null){
        this.$Prompt.show({state: 'failed',text: '密码不能为空！'})
      }else{
        if(reg.test(this.registInfo.registPwd)){
          return true;
        }else{
          this.$Prompt.show({state: 'failed',text: '密码格式不正确！'})
        }
      }
    },
    verifyPassWords(){
      if(this.registInfo.registPwds == '' || this.registInfo.registPwds == null){
        this.$Prompt.show({state: 'failed',text: '确认密码不能为空！'})
      }else{
        if(this.registInfo.registPwd === this.registInfo.registPwds) {
          return true;
        }else{
          this.$Prompt.show({state: 'failed',text: '两次密码输入不一致！'})
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
.field{
    position: relative;
}
input[type="text"],
input[type="password"] {
    padding: 0.2rem 2.5rem 0.2rem 0.5rem;
}
input[type="phone"] {
    width: 64%;
}
input[name="getPhoneCode"] {
    float: right;
    padding: 0;
    width: 34%;
    height: 2.5rem;
    border: 1px solid #c4c7a0;
    border-radius: .15rem;
    font-size: 1rem;
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
