<template>
	<div class="sort">
		<header class="bar bar-nav">
  			<span @click="back" class="fl iconfont icon-back_android"></span>
			<ul class="sort-title">
				<li v-for="(value,index) in sort" @click="getSort(index)" :class="index == 0 ? 'active' : 'ds'">{{value}}</li>
			</ul>
		</header>
		<div class="content">
			<ul class="sorts">
				<li v-for="list in sorts" :data-id="list.id">
					<img :src="list.img" :alt="list.name">
					<p>{{list.name}}</p>
				</li>
			</ul>
        </div>
		<footer>
              
        </footer>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
    	sort: ["最新推荐","最新发布","热菜","凉菜","汤羹","主食","小吃","西餐","烘焙","自制食材"]
    }
  },
  computed: {
    ...mapState([
      'sorts'
    ])
  },
  mounted () {
    this.getSortData(0)
  },
  methods: {
    ...mapActions([
    	'getSortData'
    ]),
    back () {
      this.$router.go(-1);
    },
    getSort(id){
      let sortTitle = document.querySelectorAll('.sort-title li');
      for (var i = 0; i < sortTitle.length; i++) {
      	sortTitle[i].classList.remove('active');
      }
      sortTitle[id].classList.add('active')
      this.getSortData(id)
    }
  }
}
</script>

<style scoped>
header{overflow: hidden;}
header a:first-child{
	box-shadow: 2px 0 8px rgba(100,100,100,.3)
}
.sort-title{
	position: absolute;
	top:0;right: 0;left: 0;
	overflow: hidden;
	display: flex;
	display: -webkit-box;
	overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin-left: 3.4rem;
    width: auto;
}
.sort-title::-webkit-scrollbar {
  display: none;
}
.sort-title li{
	padding:0 .85rem;
	height: 3rem;
	line-height: 3rem;
}
.sort-title li.active{
	color: #fff;
	background: #5e6b85;
}
.sorts{
	display: flex;
	flex-wrap:wrap;
	padding:.25rem;
}
.sorts li{
	width: 50%;
	padding:.25rem;
	margin-bottom: 1rem;
}
.sorts li p{
	text-align: center;
	background: #fff;
	line-height: 2rem;
}
</style>
