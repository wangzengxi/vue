<template>
	<div class="card-list">
		<section class="card activity">
			<a :href="goodsArea.activity.url"><img :src="goodsArea.activity.img" alt=""></a>
		</section>
		<section class="card apple">
			<h3>
				<a href=""><img :src="goodsArea.apple.head.img" alt=""></a>
			</h3>
			<ul>
				<li v-for="(value) in goodsArea.apple.list">
					<a href="#">
						<img :src="value.img" :alt="value.name">
					</a>
				</li>
			</ul>
		</section>
		<section class="card hot">
			<h3 class="hot-title">{{hotTitle}}</h3>
			<ul class="hot-list">
				<li v-for="(value,index) in goodsArea.hot.list">
					<a href=""><img :src="value.img" alt=""></a>
					<span :style="`background:url(http://pic.qiantucdn.com/58pic/21/78/03/19z58PICe4H_1024.jpg)no-repeat;background-size:300%;background-position:${index*50}%;`"></span>
				</li>
			</ul>
		</section>
		<section class="card banner">
			<ul>
				<li v-for="(value) in goodsArea.banner.list">
					<a href=""><img :src="value.img" alt=""></a>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
    	hotTitle: '~ 热销水果 ~'
    }
  },
  computed: {
    ...mapState([
      'goodsArea'
    ])
  },
  mounted () {
    this.getGoodsArea();
  },
  methods: {
    ...mapActions([
      'getGoodsArea'
    ]),
  }
}
</script>

<style scoped>
.apple ul{
	display: flex;
	flex-wrap:wrap;
	padding:.25rem;
}
.apple ul li{
	width: 50%;
	padding:.25rem;
}
.hot-title{
	margin:.5rem 0;
	text-align: center;
	font-size: 1.4rem;
}
.hot-list{
}
.hot-list li{
	position: relative;
	float: left;
	margin-left: 1.8%;
	margin-bottom: 1.8%;
	width: 44.8%;
}
.hot-list li:first-child{
	width: 50%;

}
.hot-list li img{
	border:1px solid #ccc;
}

.hot-list li span{
	display: block;
	position: absolute;
	top: 1px;right: 1px;
	width: 4rem;
	height: 4rem;
}
</style>
