<template>
	<div class="swiper">
        <ul>
            <li v-for="list in swipers" :style="'background:url('+list.img+')no-repeat;background-position:center;background-size:auto 100%;'">
	            <a :href="list.url">
	            	<!-- <img :src="list.img" :alt="list.name" > -->
            	</a>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState([
      'swipers'
    ])
  },
  mounted (){
    this.getSwiper();
  	this.swiper({'oUl': document.querySelector('.swiper ul')})
  },
  methods:{
    ...mapActions([
      'getSwiper'
    ]),
    swiper (data) {
      var oLi = data.oUl.children;

      data.oUl.addEventListener('touchstart',touch,false);
      data.oUl.addEventListener('touchmove',touch,false);
      data.oUl.addEventListener('touchend',touch,false);
      data.oUl.transform = {};

      var startX = 0;
      var startPoint = null;
      var times = null;
      function touch(e){
        e = window.event;
        switch (e.type){
          case 'touchstart':
            data.oUl.style.transition = '0s';
            startPoint = e.changedTouches[0];
            startX = data.oUl.transform['translateX'] || 0;
            break;
          case 'touchmove':
            var newPoint = e.changedTouches[0];
            var endX = startX + newPoint.pageX - startPoint.pageX;
            data.oUl.transform['translateX'] = endX;
            data.oUl.style.transform = 'translateX(' + endX + 'px)';
            break;
          case 'touchend':
            var distance = data.oUl.transform['translateX'];
            distance = Math.min(0,distance);
            distance = Math.max(-oLi[0].offsetWidth * (oLi.length-1),distance);
            distance = -Math.round(-distance/(oLi[0].offsetWidth)) * oLi[0].offsetWidth;
            data.oUl.transform['translateX'] = distance;
            data.oUl.style.transition = '400ms';
            data.oUl.style.transform = 'translateX(' + distance + 'px)';
            break;
        }
      }
    }
  }
}

</script>

<style scoped>
/*轮播*/

.swiper {
    width: 100%;
    overflow: hidden;
}

.swiper>ul {
    overflow: hidden;
    display: flex;
    width:600%; 
}

.swiper>ul>li {
    width: calc(100%/6);
    height: 11rem;
}
.swiper>ul>li>a{
  display: block;
  width: 100%;
  height: 100%;
}
</style>
