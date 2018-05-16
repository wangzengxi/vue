<template>
    <div class="page-group address">
        <div class="page">
            <header class="bar bar-nav">
                <span @click="$router.go(-1)" class="fl iconfont icon-back_android"></span>
                <h1 class="title">收货地址管理</h1>
                <!-- <span @click="edit" class="fr iconfont icon-integral" v-if="editShow"></span>
                <span @click="edit" class="fr iconfont icon-check" v-else></span> -->
            </header>
            <div class="content">
                <section class="address-list">
                    <div v-for="(value,index) in addressList" @click="selectAddress(index)" :class="value.isDefault == 1 ? 'address-info active' : 'address-info'" :key="value.addressId">
                        <div class="font-1">
                            <label>收货人：</label>
                            <label name="name">{{value.userName}}</label>
                            <label name="phone">{{value.userPhone}}</label>
                        </div>
                        <div class="font-2">
                            <label>收货地址：</label>
                            <label name="address">{{value.province}}{{value.city}}{{value.area}}{{value.user_address}}</label>
                        </div>
                        <div class="right-icon">
                          <label class="iconfont icon-check" v-show="editShow"></label>
                        </div>
                        
                    </div>
                </section>
            </div>
            <footer class="bar bar-footer"><input type="button" @click="addShow" class="open-panel button b-ff5000" value="新增地址"></footer>
        </div>
        <v-edit :isAddShow="isAddShow" @addHide="addShow"></v-edit>
    </div>
</template>

<script>
import vEdit from './components/edit.vue'
export default {
  data () {
    return {
      isAddShow: false,
      addressList: [],
      editShow: true
    }
  },
  mounted (){
      this.getAddress();
  },
  methods: {
    getAddress () {
      let id = 1;
      this.$http.get ('/address/getList?userId='+ id).then((response) => {
        console.log(response.data)
        this.addressList = response.data.result;
      })
    },
    edit () {
      this.editShow = !this.editShow;
    },
    selectAddress (index) {
      let list = document.querySelectorAll('.address-info');
      for (var i = 0; i < list.length; i++) {
          list[i].classList.remove('active');
      }
      list[index].classList.add('active');
    },
    addShow(){
      this.isAddShow = !this.isAddShow;
    }
  },
  components: {
      'v-edit': vEdit
  }
}
</script>
 
<style scoped>
header{
}
.content{
    padding-bottom: 3rem;
}
.address-list{
    margin-top: 1rem;
}
.address-info{
    position: relative;
    padding:1rem 3.5rem 1rem 1rem;
    background: #fff;
    border-top: 1px solid #ccc;
    color:#666;
}
.address-list .address-info:first-child{
    border:none;
}
.address-info.active{
    background: #5e6b85;
    color:#fff;
}
.address-info.active .right-icon{
    visibility: visible;
}
.font-1{
    margin-bottom: .5rem;
    font-size: 1.2rem;
    font-weight: 600;
}
.font-2{
    font-size: 1rem;
}
label[name="phone"]{
    float: right;
}

.right-icon{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    visibility: hidden;
    margin:auto 1rem auto 0;
    width: 2rem;
    /*height: 2rem;*/
    line-height: 2rem;
    font-size: 1.45rem;
    font-weight: 500;
    text-align: center;
}
.right-icon label{
}
footer input{
    height: 100%;
}

</style>
