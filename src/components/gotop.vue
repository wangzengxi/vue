<template>
	<div class="gotop" @click="gotop()">
		<img src="http://static.meishichina.com/v6/img/wap_a/gotop.png" alt="gotop">
	</div>
</template>
	
<script>
export default {
  data () {
    return {
      scrollTop: 0,
      viewHeight: 0,
      obj: null
    }
  },
  mounted () {
    document.querySelector('.content').addEventListener('scroll', () => {
      this.obj = document.querySelector('.gotop');
      this.scrollTop = document.querySelector('.content').scrollTop;
      this.viewHeight = document.body.clientHeight;
      this.scrollTop > this.viewHeight ? this.obj.style.display = 'block' : this.obj.style.display = 'none';

    })
  },
  methods: {
  	gotop () {
  	  document.querySelector('.content').scrollTop = 0;
  	}
  }
}
</script>

<style scoped>
.gotop{
	display: none;
	position: fixed;
	right: 3rem;bottom:3rem;
	width: 3.5rem;
}
</style>
