<template>
	<section class="ing card">
		<h2>{{title}}</h2>
		<ul>
			<li v-for="list in newList">
				<a href="#">
					<img :src="list.url" alt="">
					<p>{{list.name}}</p>
					<p><span>{{list.describe}}</span></p>
				</a>
			</li>
		</ul>
	</section>
</template>

<script>
export default {
  data () {
    return {
    	title: '时令食材',
    	newList: [{
    		name:'韭菜',
    		url:'http://i3.meishichina.com/static/shicai/jiucai.jpg',
    		describe: '春季第一补'
    	},{
    		name:'菠菜',
    		url:'http://i3.meishichina.com/static/shicai/bocai.jpg',
    		describe: '红嘴绿鹦哥'
    	},{
    		name:'春笋',
    		url:'http://i3.meishichina.com/static/shicai/chunsun.jpg',
    		describe: '春味醉春盘'
    	},{
    		name:'螺蛳',
    		url:'http://i3.meishichina.com/static/shicai/luoshi.jpg',
    		describe: '四月螺,，赛过鹅'
    	},{
    		name:'荠菜',
    		url:'http://i3.meishichina.com/static/shicai/jicai.jpg',
    		describe: '食以野为奇'
    	},{
    		name:'生蚝',
    		url:'http://i3.meishichina.com/static/shicai/shenghao.jpg',
    		describe: '海中牛奶'
    	},{
    		name:'黑木耳',
    		url:'http://static.meishichina.com/v6/img/2016/heimuer.jpg',
    		describe: '八朵木耳一身轻'
    	},{
    		name:'虾',
    		url:'http://i3.meishichina.com/static/shicai/xia.jpg',
    		describe: '爱虾说'
    	},{
    		name: '猪肝',
    		url: 'http://i3.meishichina.com/static/shicai/zhugan.jpg',
    		describe: '补铁好搭档'
    	}]
    }
  }
}
</script>

<style scoped>
.ing{
	background: #fff;
}
.ing h2{
	padding:.7rem 1.2rem 0;
}
.ing ul{
	display: flex;
	flex-wrap:wrap;
	padding:0 .5rem .5rem;
}
.ing ul li{
	width: 33.3333334%;
	/*padding:.5rem;*/
	text-align: center;
}
.ing ul li p{
}
.ing ul li span{
	color: #999;
	font-size: .7rem;
}
</style>
