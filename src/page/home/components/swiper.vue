<template>
    <div class="swiper">
        <ul class="carousel" ref="carousel" :style="{width:(len*100)+'%', transform:`translateX(-${activeIndex*100/len}%)`,transition:isResetIndex ? '' : `transform ${transitionInterval/1000}s`}" @touchstart="touch" @touchmove="touch" @touchend="touch">
            <li v-for="(value,index) in imgsComputed" :style="{'width':(100/len) + '%'}" :key="index">
                <img :src="(value.src)" :alt="value.name"><!-- 第一次加载imgsComputed,img的src等于undefined -->
            </li>
        </ul>
        <p class="index">
           {{activeIndex}}/{{(len-2)}}
        </p>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name:'carousel',
  props:([
    'array'  
  ]),
  data () {
    return {
      imgArr: [], //图片列表
      activeIndex: 1, //初始显示的图片索引
      timer: null, //定时器
      transitionInterval: 400, //过渡时长
      isResetIndex: false, //是否瞬间重置定位，重定位取消过渡动画
      interval: 2000, //图片切换间隔
      startX: 0, //触摸的初始位置
      moveX: null //滑动的距离
    }
  },
  computed: {//计算属性
    imgsComputed:function(){ //重新计算数组
      let firstImg = this.array[0];
      let lastImg = this.array[this.array.length-1];
      return [lastImg].concat(this.array,[firstImg]);//concat() 方法用于连接两个或多个数组。arrayObject.concat(arrayX,arrayX,......,arrayX)
       
    },
    len(){ //返回新数组长度
      return this.imgsComputed.length;
    }
  },
  mounted (){
    this.startInterval() //开始自动轮播
  },
  methods:{
    startInterval(){ //自动轮播
      this.timer = setInterval(()=>{
        this.activeIndex++;
      },this.interval)
    },
    touch(e){ //触摸事件
      switch(e.type){
        case 'touchstart': //手指按下
          clearInterval(this.timer); //关闭自动轮播
          this.isResetIndex = true; //关闭过渡效果
          this.startX = e.changedTouches[0].pageX; //记录手指按下的位置
        break;
        case 'touchmove': //手指滑动
          this.moveX = e.changedTouches[0].pageX - this.startX; //记录滑动的距离
          this.$refs.carousel.style.transform = 'translateX('+((this.moveX/this.$refs.carousel.offsetWidth*100) + (this.activeIndex*100/this.len)*-1)+'%)' //
        break;
        case 'touchend': //手指松开
          let distance = parseInt(this.$refs.carousel.children[0].offsetWidth)/2; //
          if (Math.abs(this.moveX)>distance) {
            ((this.moveX/this.$refs.carousel.offsetWidth*100) > 0) ? this.activeIndex-- : this.activeIndex++;
          }else{
            this.$refs.carousel.style.transform = 'translateX('+(this.activeIndex*100/this.len)*-1+'%)'
          }
          this.startInterval()
          this.isResetIndex = false;
        break;
      }
    }
  },
  watch: {
    activeIndex(newActiveIndex, oldActiveIndex){ //监听activeTndex的变化
      // console.log(newActiveIndex, oldActiveIndex)
      if((newActiveIndex === 1 && oldActiveIndex === (this.len - 1)) || (oldActiveIndex === 0 && newActiveIndex === (this.len - 2))) { //判断是否要瞬间重新定位
        this.isResetIndex = true; //关闭过渡效果
        return;
      }
      this.isResetIndex = false; //开启过渡效果
      setTimeout(()=>{
        if (this.activeIndex === 0) { //判断activeIndex的最小值
          this.activeIndex = this.len -2;
        }else if(this.activeIndex ===(this.len -1)){ //判断activeIndex的最大值
          this.activeIndex = 1;
        }
      },this.transitionInterval)
    }
  }
}

</script>

<style scoped>
/*轮播*/
.swiper {
    position: relative;
    width: 100%;
    overflow: hidden;
}
.carousel {
    overflow: hidden;
    display: flex;
}
.index{
    position: absolute;
    right: 1rem;bottom: 0.5rem;
}
</style>
