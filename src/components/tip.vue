<template>
	<div class="tip-box" v-show="data.tipShow">
		<div class="tip-content" :class="data.tipState">
			<span class="fl iconfont icon-prompt prompt-icon"></span>
			<p>{{data.tipInfo}}</p>
			<span class="iconfont icon-roundclose close-tip" @click="closeTip"></span>
		</div>
		<div class="tip-mask" v-if="data.tipMask"></div>
	</div>
</template>

<script>
export default {
  // name: "tip",
  data () {
    return {
      data: this.tipData
    }
  },
  props: ["tipData"],
  mounted () {
  	console.log(this.data)
  },
  methods: {
  	closeTip(){
      this.data = {tipShow: false, tipMask: false, tipInfo: null, tipState: null };
  	}
  },
  watch:{
    tipData(){
      this.data = this.tipData;
    }
  }
}
</script>

<style scoped>
.tip-box,.tip-mask{
	position: absolute;
	top: 0;right: 0;bottom: 0;left: 0;
}
.tip-content{
	position: absolute;
	top: 30%;right: 0;left: 0;
	z-index: 102;
	margin:auto;
	padding:1rem .5rem;
	width: 80%;
	border-radius: .3rem;
	box-shadow: 0 .1rem .8rem rgba(0,0,0,.5);
	background: #fff;
}
.tip-content p{
	margin-right: 1.5rem;
	color:#777;
	font-size: 1.4rem;
}
.prompt-icon{
	margin-right: .5rem;
	margin-top: .2rem;
	font-size: 1.4rem;
	font-weight: 600;
}
.close-tip{
	position: absolute;
	top: 0;right: 0;bottom: 0;
	margin:auto;
	padding:.5rem;
	height: 2.5rem;
	color:#999;
	font-size: 1.5rem;
}
.success .prompt-icon{
	color:#67af05;
}
.warning .prompt-icon{
	color:#ffca00;
}
.danger .prompt-icon{
	color:#ff3100;
}

.tip-mask{
	z-index: 101;
	background: rgba(255,255,255,.5);
}
</style>
