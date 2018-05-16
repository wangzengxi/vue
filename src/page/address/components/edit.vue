<template>
	<transition name="fade">
	<div class="page addAddress" v-if="this.isAddShow">
		<header class="bar bar-nav">
			<span @click="addHide" class="fl iconfont icon-back_android"></span>
			<h1 class="title">新增收货地址</h1>
		</header>
		<div class="content">
			<section class="address-list">
				<div class="field">
					省/市/区(县)
					<p class="region" @click="selectRegion">{{newAddress.province+newAddress.city+newAddress.area}}</p>
					<v-divsion :regionShow="regionShow" @selectRegion="selectRegion"></v-divsion>
				</div>
				<div class="field">
					具体地址
					<input type="text" v-model="newAddress.specific">
				</div>
				<div class="field">
					收件人姓名
					<input type="text" v-model="newAddress.name">
				</div>
				<div class="field">
					收件人电话
					<input type="text" v-model="newAddress.phone">
				</div>
				<div class="field">
					邮编
					<input type="text">
				</div>
			</section>
		</div>
		<footer class="bar bar-footer">
			<input type="button" @click="holdAddress" class="button b-ff5000" value="保存地址">
		</footer>
	</div>
	</transition>
</template>

<script>
import vDivsion from './divsion.vue'
import { mapState, mapActions} from 'vuex'
export default {
  data() {
    return {
      newAddress: {
        userId: '0001',
        name: null,
        phone: null,
        province: null,
        city: null,
        area: null,
        specific: null
      },
      regionShow: false,
      
    }
  },
  components:{
  	'v-divsion': vDivsion
  },
  props: ["isAddShow"],
  computed: {
    ...mapState([
      
    ])
  },
  mounted (){
    this.region = null;
  },
  methods: {
    ...mapActions([
    ]),
    addHide(){
      this.$emit('addHide')
    },
    selectRegion(province, city, area){
      if(this.regionShow){
        this.newAddress.province = province;
        this.newAddress.city = city;
        this.newAddress.area = area;
        console.log(province, city, area)
      }
      this.regionShow = !this.regionShow;
    },
    holdAddress(){
      this.$http.post('/address/add', JSON.stringify(this.newAddress)).then((response) => {
        if(response.data.code === 0){
          this.$Prompt.show({state: 'success', text: '添加成功！'});
          this.addHide()
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  watch:{
  }
}
</script>

<style scoped>
header{
}
.content{
	padding-bottom: 3rem;
}
.addAddress{
	position: absolute;
	top: 0;right:0;bottom:0;left:0;
	z-index: 1000;
	background: #eee;
}
.button{
	height: 100%;
}
.field{
	margin:1rem;
}
.region{
	padding:0.2rem 0.5rem;
	width: 100%;
    height: 2.5rem;
    background: #fff;
    border: 1px solid #c4c7a0;
    border-radius: .25rem;
    line-height: 2rem;
    font-size: 1rem;
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to {
  /*opacity: 0;*/
  transform:translateY(100%);
}

</style>
