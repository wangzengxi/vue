<template>
	<div class="loading" v-show="isShow">
		<span class="iconfont icon-loading"></span>
		<p>加载中</p>
	</div>
</template>

<script>
export default {
  data () {
    return {
      isShow: this.show,
      timer: null
    }
  },
  props: ["show"],
  mounted () {
  	this.timer = setTimeout(() => {
        this.isShow = false;
      },2000);
  },
  methods:{
    hide() {
      setTimeout(function(){
        this.isShow = false;
      },2000);
    }
  },
  watch: {
  	show() {
      this.isShow = this.show;
  	}
  }
}
</script>

<style scoped>
.loading{
	position: absolute;
	top: 0;right: 0;bottom: 0;left: 0;
	margin:auto;
	width: 7.2rem;
	height: 8rem;
	background: rgba(0,0,0,.6);
	border-radius: .5rem;
	color:#fff;
	text-align: center;
}
.loading span{
	display: inline-block;
	margin-top: 1.4rem;
	font-size: 3.2rem;
	animation: rotate 1.5s steps(12) infinite;
}
.loading p{
	margin-top: 1rem;
}
@keyframes rotate
{
	form{
		transform: rotate(0deg);
	}
	to{
		transform: rotate(1turn);
	}
}
</style>
