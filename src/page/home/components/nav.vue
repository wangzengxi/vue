<template>
	<nav class="">
		<ul>
			<li v-for="list in navList">
				<a href="">
					<img :src="list.url" alt="" />
					<span>{{list.name}}</span>
				</a>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
  data () {
    return {
      navList: [{
        name: '人气菜肴',
        url: 'http://static.meishichina.com/v6/img/zhen/r02.jpg'
      },{
        name: '家常菜谱',
        url: 'http://static.meishichina.com/v6/img/zhen/r07.jpg'
      },{
        name: '烘焙大全',
        url: 'http://static.meishichina.com/v6/img/zhen/r08.jpg'
      },{
        name: '所有菜式',
        url: 'http://static.meishichina.com/v6/img/zhen/r10.jpg'
      }]
    }
  }
}
</script>

<style scoped>
nav{
}
nav ul{
	display: flex;
	flex-wrap:wrap;
	padding:0 1rem 1.5rem;
}
nav ul li{
	padding:1.5rem .8rem 0 .8rem;
	width: 25%;
	font-size: .85rem;
	text-align: center;
}
nav ul li img{
	width: 90%;
  border-radius: 50%;
}
nav ul li span{
  display: block;
}
</style>
