<template>
    <section class="guess">
        <h3 class="guess-title">{{title}}</h3>
        <ul class="loadmore-body">
            <li v-for="(value, index) in list" class="card" :key="index">
                <a href=""><img :src="value.img[0]" alt=""></a>
                <p>{{value.title}}</p>
                <p>￥{{value.price}}</p>
            </li>
        </ul>
        <div class="card">
            <input @click="getMore(pageCode)" type="button" class="button" value="加载更多">
        </div>
    </section>
</template>

<script>
// import {mapState,mapActions} from 'vuex'
import axios from 'axios'
export default {
  data () {
    return {
      title: '~ 猜你喜欢 ~',
      guess: [],
      pageCode: 1,
      list: ["array"]
    }
  },
  components:{
    // ...mapState([
        // ])
  },
  mounted(){
    this.getGuess()
  },
  methods:{
    getGuess(){
      axios.get('http://localhost:8080/static/mock/goods.json').then((response) => {
        this.guess = response.data.list;
        this.getMore(this.pageCode)
    }).catch((error) => {
      console.log(error)
    })
    },
    getMore(page){
      let newpage = page*10;
      if(newpage>this.guess.length) newpage= this.guess.length;
      this.list=this.guess.slice(0,newpage);
      this.pageCode++;
    }
  }
}
</script>

<style scoped>
.card{
    margin:.25rem;
}
.guess-title{
    margin:1.5rem 0 1rem;
    text-align: center;
    font-size: 1.4rem;
}
.loadmore-body{
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.loadmore-body li{
    width: 47%;
}
</style>
