<template>
    <div class="page-group order">
        <div class="page">
            <header class="bar bar-nav">
                <span @click="back" class="fl iconfont icon-back_android"></span>
                <h1 class="title">购物车</h1>
                <span @click="refresh" class="fr iconfont icon-refresh"></span>
            </header>
            <div class="content">
        
            </div>
            <footer class="bar bar-footer">
                总计：￥99.00
                <input type="button" class="fr button checkOut" value="结算">
            </footer>
        </div>
	  </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      ''
    ])
  },
  mounted (){
  },
  methods: {
    ...mapActions([
      ''
    ]),
    back () {
      this.$router.go(-1);
    },
    refresh () {
    	console.log(1)
      this.$router.go(0);
    }
  }
  
}
</script>

<style scoped>
footer{
	text-align: right;
}
.checkOut{
	width: 8rem;
	height: 100%;
	border:none;
	background: #ff5000;
	border-radius: 0;
	color:#fff;
	margin-left: 1rem;
}
</style>
