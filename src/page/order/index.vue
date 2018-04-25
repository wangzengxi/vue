<template>
	<div class="page-group order">
		<div class="page">
			<header class="bar bar-nav">
				<span @click="back" class="fl iconfont icon-back_android"></span>
				<h1 class="title">订单管理</h1>
				<span @click="refresh" class="fr iconfont icon-refresh"></span>
			</header>
			<div class="content">
				<ul class="nav-tab-top" @click="orderContShow">
					<li data-index="0" class="cur">全部</li>
					<li data-index="1">待支付</li>
					<li data-index="2">待发货</li>
					<li data-index="3">待确认</li>
					<li data-index="4">待评价</li>
				</ul>
				<div class="scroll-wrap">
					<section class="order-cont" style="display:block;">
						<ul class="order">
							<li class="card" v-for="list in orders">
								<h4>{{list.orderId}}<span class="fr">{{list.orderState}}</span></h4>
								<div class="order-goods" v-for="goods in list.dishes">
									<div class="goods-pic">
										<img v-bind:src="goods.img" alt="">
									</div>
									<div class="goods-info">
										{{goods.name}}
									</div>
									<div class="goods-pay">
										<span>{{goods.price}}</span>
									</div>
								</div>
								<div class="o-tab-btn">
									<span>删除订单</span>
									<span>追加评价</span>
								</div>
							</li>
						</ul>
					</section>
					<section class="order-cont">2</section>
					<section class="order-cont">3</section>
					<section class="order-cont">4</section>
					<section class="order-cont">5</section>
				</div>
			</div>
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
      'orders'
    ])
  },
  mounted (){
    this.getOrder();
  },
  methods: {
    ...mapActions([
      'getOrder'
    ]),
    back () {
      this.$router.go(-1);
    },
    refresh () {
    	console.log(1)
      this.$router.go(0);
    },
    orderContShow (events) {
      let e = events.target;

      if (e.tagName.toLowerCase() == 'li') {
        let index = e.getAttribute('data-index');

        let tab = document.querySelectorAll('.nav-tab-top li')
        let order = document.querySelectorAll('.order-cont')
        for (var i = 0; i < tab.length; i++) {
          tab[i].classList.remove('cur');
          order[i].style.display = 'none';
        }
        tab[index].classList.add('cur');
        order[index].style.display = 'block';
      }
    }
  }
  
}
</script>

<style scoped>
header{
}
.content{
	padding-top: 6rem;
}
.nav-tab-top{
	position: absolute;
	top:3rem;left:0;
	display: flex;
	justify-content:space-around;
	background: #fff;
	width: 100%;
	border-top: 1px solid #eee;
	line-height: 2.85rem;
}
.nav-tab-top li{
	flex-grow:1;
	text-align: center;
}
.nav-tab-top li.cur{
	border-bottom: .145rem solid #ff5000;
	box-sizing: border-box;
	color: #ff5000;
}
.scroll-wrap{
	height: 100%;
	overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
.scroll-wrap::-webkit-scrollbar {
  display: none
}
.order-cont{
	display: none;
}
.order h4,.o-tab-btn{
	padding:.2rem 1rem;
	margin:.3rem 0;
	text-align: left;
	font-weight: 400;
	font-size: 1rem;
}
.order h4 span,
.o-tab-btn span{
	font-size: .75rem;
}
.order h4 span{
	color: #ff5000;
}
.o-tab-btn{
	text-align: right;
}
.o-tab-btn span{
	padding:.15rem .3rem;
	border:1px solid #999;
	border-radius: .25rem;
	font-size: .75rem;
}
.order-goods{
	display: flex;
	padding:.5rem 1rem;
	background: #f0f0f0;
}
.goods-pic{
	flex-grow:1;
	width: 2rem;
	flex-shrink:0;
}
.goods-info{
	flex-grow:3;
	flex-shrink:1;

}
.goods-pay{
	flex-grow:0;
	flex-shrink:0;
	text-align: right;
}
</style>
