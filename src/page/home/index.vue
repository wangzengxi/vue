<template>
    <div class="page-group home">
  	    <div class="page">
  		      <header class="bar bar-nav">
			          <span class="iconfont icon-menu fl open-panel"></span>
			          <h1 class="title">logo</h1>
                  <v-position></v-position>
		        </header>
		        <div class="content" ref="viewBox">
                <div class="card">
                    <v-swiper></v-swiper>
                    <v-nav></v-nav>
                </div>
                <v-new></v-new>
                <v-ingredients></v-ingredients>
                <v-gotop></v-gotop>
                <v-loading :show="loadingShow"></v-loading> 
        		</div>
		        <footer>
              
            </footer>
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
import vIngredients from './components/ingredients'
import vMenu from './components/menu'
import vPosition from '../../components/position'
import vLoading from '../../components/loading'

export default {
  data () {
    return {
      loadingShow: false
    }
  },
  computed: {
    ...mapState([
      'name',
      'token'
    ])
  },
  mounted (){
    document.querySelector('body').classList.remove('with-panel-left-reveal');
  },
  methods: {
    ...mapActions([
    ])
  },
  components: {
    'v-swiper': vSwiper,
    'v-nav': vNav,
    'v-new': vNew,
    'v-ingredients': vIngredients,
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
