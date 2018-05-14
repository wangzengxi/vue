<template>
	<transition name="fadeIn">
		<div class="tip-box" v-show="show">
			<div class="tip-content" >
				<span class="fl prompt-icon"><img :src="'/static/images/' + state + '.jpg'" alt=""></span>
				<p>{{text}}</p>
				<!-- <span class="iconfont icon-roundclose prompt-icon close-tip" @click=""></span> -->
			</div>
			<div class="tip-mask" v-if="isShowMask"></div>
		</div>
	</transition>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    show: {
      default: false
    },
    state: {
      default: 'success'
    },
    text: {
      default: 'loading'
    },
    position: {
      default: 'top'
    },
    isShowMask: {
      default: false
    },
    time: {
      default: 1500
    },
    transition: {
      default: true
    }
  },
  mounted () {
  	// setTimeout(() => {
  	//   this.show = false
  	// }, this.time)
  },
  computed: {
  },
  watch: {
    show(){
      this.isshow = this.show;
    }
  }
}
</script>

<style scoped>
.tip-box,.tip-mask{
	
}
.tip-content{
	position: absolute;
	top: 30%;right: 0;left: 0;
	z-index: 102;
	display: flex;
	margin:auto;
	width: 60%;
	border-radius: .3rem;
	box-shadow: 0 .1rem .8rem rgba(0,0,0,.5);
	background: #fff;
}

.tip-content p{
	flex-grow:1;
	align-self:center;
	margin:.35rem 0;
	color:#777;
	font-size: 1rem;
}
.prompt-icon{
	flex-shrink:0;
	align-self:center;
    width:2.2rem;
    padding:0 .5rem;
}
.close-tip{
	flex-shrink:0;
	align-self:center;
	width: auto;
	padding:.5rem;
	color:#999;
}

.tip-mask{
	z-index: 101;
	background: rgba(0,0,0,.5);
}
.fadeIn-enter-active, .fadeIn-leave-active{
  transition: opacity .3s;
}
.fadeIn-enter, .fadeIn-leave-active{
  opacity: 0;
}
.translate-top-enter-active, .translate-top-leave-active{
  transition: all 0.3s cubic-bezier(.36,.66,.04,1);
}
.translate-top-enter, .translate-top-leave-active{
  transform: translateY(-50%);
  opacity: 0;
}
.translate-middle-enter-active, .translate-middle-leave-active{
  transition: all 0.3s cubic-bezier(.36,.66,.04,1);
}
.translate-middle-enter, .translate-middle-leave-active{
  transform: translateY(80%);
  opacity: 0;
}
.translate-bottom-enter-active, .translate-bottom-leave-active{
  transition: all 0.3s cubic-bezier(.36,.66,.04,1);
}
.translate-bottom-enter, .translate-bottom-leave-active{
  transform: translateY(100%);
  opacity: 0;
}
</style>
