<template>
<div>
  <transition :name="transitionName">
       <router-view class="Router"></router-view>
  </transition>
  <cube-tab-bar
    v-model="selectedLabelDefault"
    :data="tabs"
    @click="clickHandler"
    @change="changeHandler"
    class="botnav">
  </cube-tab-bar>
   <span class="countsum">{{countsum}}</span>
  </div>
</template>
<script>
import {mapGetters} from "vuex"
export default {
  computed:{
    ...mapGetters({
      countsum:"countsum"
    })
  },
  data () {
    return {
      transitionName:"slide-right",
      selectedLabelDefault: 'Vip',
      tabs: [{
        label: '首页',
        icon: 'cubeic-home'
      }, {
        label: '分类',
        icon: 'cubeic-delete'
      }, {
        label: '搜索',
        icon: 'cubeic-search'
      }, 
      {
        label: '购物车',
        icon: 'cubeic-mall'
      },{
        label: '我的',
        icon: 'cubeic-person'
      }]
    }
  },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      console.log(label)
    },
    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
      switch(label){
        case "首页":
          this.$router.replace({path:"/botnav/index"})
          break;
           case "分类":
          this.$router.replace({path:"/botnav/list"})
          break;
           case "搜索":
          this.$router.replace({path:"/botnav/search"})
          break;
           case "购物车":
          this.$router.push({path:"/botnav/cart"})
          break;
           case "我的":
          this.$router.push({path:"/botnav/mine"})
          break;
      }
    }
  }
}
</script>
<style  scoped>
  .cube-tab-bar{
    font-size:17px;
    padding-top:0px;
  }
    .botnav{
        position: fixed;
        bottom: 0;
        left:0;
        z-index:1000;
        background:#fff;
        width:100%;
    }
    .Router{
      position:absolute;
      width:100%;
      transition:all 0.8s ease;
    }
    .slide-left-enter,.slide-right-leave-active{
      opacity:0; 
      -webkit-transform:translate(100%,0);
      transform :translate(100%,0)
    }
    .slide-right-enter,.silde-left-leave-active{
       opacity:0; 
      -webkit-transform:translate(-100%,0);
      transform :translate(-100%,0)
    }
     .countsum{
       position:fixed;
       bottom:33px;
       right:23%;
       z-index: 1001;
       width:18px;
       height:18px;
       border-radius:50%;
       line-height:18px;
       background:red;
       color: #fff;
       font-size:14px
     }
</style>