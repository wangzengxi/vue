<template>
	<div class="position fr" v-if="bool">
		<span>{{city}}</span>
	</div>
</template>

<script>
export default {
  data () {
    return {
      city: null
    }
  },
  props:([
    'bool'
  ]),
  mounted (){
    this.getCity();
  },
  methods: {
  	getCity () {
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
      let _this=this;
      // let map = new BMap.Map("allmap");
      let point = new BMap.Point(longitude,latitude);
      let gc = new BMap.Geocoder();

      gc.getLocation(point, function(rs){
      	let addComp = rs.addressComponents;
      	_this.city = addComp.city;
      })
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
