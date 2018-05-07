<template>
	<div class="gotop" @click="gotop()" v-show="isShow">
		<img src="http://static.meishichina.com/v6/img/wap_a/gotop.png" alt="gotop">
	</div>
</template>
	
<script>
export default {
  data () {
    return {
      isShow: true,
      osTop: 0,
      timer: null
    }
  },
  props:([
    'scrollTop'
  ]),
  computed:{
    viewHeight(){
      return document.body.clientHeight;
    }
  },
  mounted () {
  },
  methods: {
  	gotop () {
      this.timer = setInterval(()=>{
        this.osTop = this.osTop-100;
        let peed = Math.floor(-this.osTop/10)
        document.querySelector('.content').scrollTop = this.osTop + peed;
        if (this.osTop <=0)  clearInterval(this.timer);
      },30)
  	}
  },
  watch: {
    scrollTop(){
      this.isShow = this.scrollTop > this.viewHeight;
      this.osTop = this.scrollTop;
    }
  }
}
</script>

<style scoped>
.gotop{
	position: absolute;
	right: 3rem;bottom:3rem;
	width: 3.5rem;
}
</style>
