<template>
	<div class="order">
		<header class="bar bar-nav">
			<span @click="back" class="fl iconfont icon-back_android"></span>
			<h1 class="title">收货地址管理</h1>
			<span @click="refresh" class="fr iconfont icon-refresh"></span>
		</header>
		<div class="content">
			<section class="address-list">
				<div v-for="list in addresses" :class="list.code == 0 ? 'address-info active' : 'address-info'" >
					<div class="font-1">
						<label>收货人：</label>
						<label name="name">{{list.name}}</label>
						<label name="phone">{{list.phone}}</label>
					</div>
					<div class="font-2">
						<label>收货地址：</label>
						<label name="address">{{list.address}}</label>
					</div>
					<label class="right-icon iconfont icon-check"></label>
				</div>
			</section>
		</div>
		<footer class="bar bar-footer"><input type="button" class="button b-ff5000" value="新增地址"></footer>
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
      'addresses'
    ])
  },
  mounted (){
  	this.getAddress()
  },
  methods: {
    ...mapActions([
      'getAddress'
    ]),
    back () {
      this.$router.go(-1);
    },
    refresh () {
      this.$router.go(0);
    }
  }
}
</script>
 
<style scoped>
header{
}
.address-list{
	margin-top: 1rem;
}
.address-info{
	position: relative;
	padding:1rem 3.5rem 1rem 1rem;
	background: #fff;
	border-top: 1px solid #ccc;
	color:#666;
}
.address-info.active{
	background: #5e6b85;
	color:#fff;
}
.address-info.active .right-icon{
	visibility: visible;
}
.font-1{
	margin-bottom: .5rem;
	font-size: 1.2rem;
	font-weight: 600;
}
.font-2{
	font-size: 1rem;
}
label[name="phone"]{
	float: right;
}

.right-icon{
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	visibility: hidden;
	margin:auto 1rem auto 0;
	width: 2rem;
	height: 2rem;
	line-height: 2rem;
	font-size: 1.45rem;
	font-weight: 500;
	text-align: center;
}

footer input{
	height: 100%;
}
</style>
