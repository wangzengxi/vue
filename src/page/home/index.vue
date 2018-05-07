<template>
    <div class="page-group home">
  	    <div class="page">
  		      <header class="bar bar-nav">
			          <span class="iconfont icon-menu fl open-panel"></span>
			          <h1 class="title"><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2154443573,98755096&fm=27&gp=0.jpg" style="width:6rem;margin-top:.3rem;" alt=""></h1>
                  <v-position v-if="bool" :bool="bool"></v-position>
                  <span v-else class="fr iconfont icon-location" @click="isBool"></span>
		        </header>
		        <div class="content" ref="viewBox" @scroll="getScroll">
                <div class="card">
                    <v-swiper :array="swipers"></v-swiper>
                    <v-nav></v-nav>
                </div>
                <v-new></v-new>
                <v-guess></v-guess>
                <v-loading :show="loadingShow"></v-loading> 
        		</div>
		        <footer>
              
            </footer>
            <v-gotop :scrollTop="scrollTop"></v-gotop>
  	    </div>
        <!-- 菜单遮罩层 -->
  	    <div class="panel-overlay"></div>
        <!-- 侧栏菜单 -->
        <div class="panel panel-left panel-reveal">
    	      <v-menu :name="name" :token="token"></v-menu>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import vGotop from '../../components/gotop'
import vSwiper from './components/swiper'
import vNav from './components/nav'
import vNew from './components/new'
import vGuess from '../../components/guess'
import vMenu from './components/menu'
import vPosition from '../../components/position'
import vLoading from '../../components/loading'

export default {
  data () {
    return {
      loadingShow: false,
      bool: false,
      scrollTop: 0
    }
  },
  computed: {
    ...mapState([
      'name',
      'token',
      'swipers'
    ])
  },
  mounted (){
    this.getSwiper();
    
  },
  methods: {
    ...mapActions([
      'getSwiper'
    ]),
    isBool(){
      this.bool = true;
    },
    getScroll(){
      this.scrollTop = this.$refs.viewBox.scrollTop;
    }
  },
  components: {
    'v-swiper': vSwiper,
    'v-nav': vNav,
    'v-new': vNew,
    'v-guess': vGuess,
    'v-gotop': vGotop,
    'v-menu': vMenu,
    'v-position': vPosition,
    'v-loading': vLoading
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
	background: #222;
	height: 3rem;
	line-height: 3rem;
	color:#fff;
}
.title{
	color:#fff;
}
</style>
