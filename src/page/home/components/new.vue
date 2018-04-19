<template>
	<section class="new card">
		<h2>{{title}}</h2>
		<ul>
			<li v-for="list in newDishes">
				<a href="#">
					<img :src="list.img" alt="">
					<p>{{list.name}}</p>
				</a>
			</li>
		</ul>
	</section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
    	title: '新秀菜谱'
    }
  },
  computed: {
    ...mapState([
      'newDishes'
    ])
  },
  mounted () {
    this.getNewDishes();
  },
  methods: {
    ...mapActions([
      'getNewDishes'
    ]),
  }
}
</script>

<style scoped>
.new{
	/*margin:1rem 0;*/
}
.new h2{
	padding:.7rem 1.2rem 0;
}
.new ul{
	display: flex;
	flex-wrap:wrap;
	padding:0 .5rem .5rem;
}
.new ul li{
	width: 50%;
	padding:.5rem;
	text-align: center;
}
.new ul li p{
	padding:.5rem 0;
	background: #fff;
}
</style>
