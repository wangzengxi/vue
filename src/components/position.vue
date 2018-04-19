<template>
	<div class="position fr">
		<span v-if="bool" v-text="city">城市</span>
		<span v-else class="iconfont icon-location" @click="getCity"></span>
	</div>
</template>

<script>
// import BMap from 'http://api.map.baidu.com/api?v=1.4'
export default {
  data () {
    return {
      bool: false,
      city: null
    }
  },
  mounted (){
    
  },
  methods: {
  	getCity () {
      this.bool = !this.bool;
  	  if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(this.getPositionSuccess, this.getPositionError);
      }else{ 
        alert("您的设备不支持地理位置服务!");
      }
  	},
    getPositionSuccess (position) {
      console.log(position)
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      var address;
      // let map = new BMap.Map("allmap");
      let point = new BMap.Point(longitude,latitude);
      let gc = new BMap.Geocoder();

      gc.getLocation(point, function(rs){
      	let addComp = rs.addressComponents;
      	address = addComp.city;;
        // this.city = address;
      	console.log(addComp)
      })
      this.city = address;
    },
    getPositionError (error) {
      console.log(error)
      switch(error.code){
        case 1 || error.PERMISSION_DENIED:
          alert('位置服务被拒绝!');
          break;
        case 2 || error.POSITION_UNAVAILABLE:
          alert('暂时获取不到位置信息!');
          break;
        case 3 || error.TIMEOUT:
          alert('获取位置信息超时!');
          break;
      }
    }
  }
}
</script>

<style scoped>
.position span{
	/*font-size: 1.2rem;*/
}
</style>
