<template>
    <transition name="fade">
        <div class="divsion-select" v-show="regionShow">
            <div class="selected">
                <p v-show="province">
                    选择地区：
                    {{province}} 
                    {{city}} 
                    {{area}}
                    <span class="fr iconfont icon-check" v-show="area" @click="Region(province,city,area)"></span>
                </p>
                <div class="divsion-title">
                    <p>省</p>
                    <p>市</p>
                    <p>区/县</p>
                </div>
            </div>
            <div class="forselect">
                <ul class="forProvince" >
                    <li v-for="(value,index) in provinceList" @click="selectProvince(value,index)" :class="p == index ? 'active' : ''" :key="index">{{value.name}}</li>
                </ul>
                <ul class="forCity" >
                    <li v-for="(value,index) in cityList" @click="selectCity(value,index)" :class="c == index ? 'active' : ''" :key="index">{{value.name}}</li>
                </ul>
                <ul class="forArea" >
                    <li v-for="(value,index) in areaList" @click="selectArea(value,index)" :class="a == index ? 'active' : ''" :key="index">{{value}}</li>
                </ul>
            </div>
        
        </div>
    </transition>
</template>

<script>
import http from 'axios'
import { mapActions} from 'vuex'
export default {
  data () {
    return {
      provinceList: [],
      cityList: [],
      areaList: [],
      province: null,
      city: null,
      area: null,
      p: null,
      c: null,
      a: null,
    }
  },
  props: ["regionShow"],
  mounted (){
    this.getData()
  },
  methods: {
    ...mapActions([
      ''
    ]),
    getData () {
      http.get('/static/mock/address/data.json').then((response) =>{
        this.provinceList = response.data;
      }).catch((error) =>{

      })
    },
    selectProvince (value,index) {
      this.cityList = value.city;
      this.areaList = [];
      this.province = value.name;
      this.city = '';
      this.area = '';
      this.p = index;
      this.c = null;
      this.a = null;
    },
    selectCity (value,index) {
      this.areaList = value.area;
      this.city = value.name;
      this.area = '';
      this.c = index;
      this.a = null;
    },
    selectArea (value,index){
      this.area = value;
      this.a = index;
    },
    Region(province,city,area){
      this.$emit('selectRegion',province,city,area)
    }
  }
}

</script>

<style scoped>
.divsion-select{
    position: absolute;
    top: 3rem;right: 0;bottom: 0;left:0;
    overflow: hidden;
    z-index: 101;
    background: #eee;
    
}
.selected>p{
    background: #5e6b85;
    color: #fff;
}
.selected>p span{
    padding: 0 1rem;
    font-size: 1.4rem;
}
.forselect,.divsion-title{
    display: flex;
    height: 100%;
}
.forselect ul,.divsion-title p{
    width: 33.3334%;
}
.divsion-title{
    border-bottom: 1px solid #ccc;
}
.forselect ul{
    height: 100%;
    overflow-y: auto; 
    -webkit-overflow-scrolling: touch;
}
.forselect ul::-webkit-scrollbar {
  display: none
}
.forProvince li,.forCity li,.forArea li,.selected p{
    padding:0 1rem;
    line-height: 3rem;
}
.forProvince li.active,.forCity li.active,.forArea li.active{
    background: #ccc;
}
</style>
