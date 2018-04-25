<template>
  <div id="app">
  	<transition :name="transitionName">
    	<router-view/>
  	</transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      transitionName: ''
    }
  },
  mounted () {
  },
  watch: {//使用watch 监听$router的变化
    $route(to, from) {
      this.transitionName = 'fade';
      document.querySelector('body').classList.remove('with-panel-left-reveal');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active,
.fade-enter-active,
.fade-leave-active{
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  /*transform: translate3d(-100%, 0, 0);*/
}
.slide-right-leave-active {
  opacity: 0;
  /*transform: translate3d(100%, 0, 0);*/
}
.slide-left-enter {
  opacity: 0;
  /*transform: translate3d(100%, 0, 0);*/
}
.slide-left-leave-active {
  /*opacity: 0;*/
  /*transform: translate3d(-100%, 0, 0);*/
}
.fade-enter{
	opacity: 0;
}
.fade-leave-active{

}
</style>
