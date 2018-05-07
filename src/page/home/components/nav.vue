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
        name: '进口专区',
        url: '/static/images/nav-2.png'
      },{
        name: '新疆葡萄',
        url: '/static/images/nav-3.png'
      },{
        name: '热带水果',
        url: '/static/images/nav-1.png'
      },{
        name: '水果礼篮',
        url: '/static/images/nav-4.png'
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
	padding:.8rem 0;
}
nav ul li{
	width: 25%;
	font-size: .85rem;
	text-align: center;
}
nav ul li img{
	width: 56%;
  border-radius: 50%;
}
nav ul li span{
  display: block;
}
</style>
