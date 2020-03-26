<template>
    <div id="index">
        <cube-slide ref="slide" :data="items" @change="changePage">
            <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
                <a :href="item.url">
                    <img :src="item.image">
                </a>
            </cube-slide-item>
        </cube-slide>
        <!-- 滚动分类 -->
        <cube-slide ref="slidelist" :data="List" @change="changePage">
            <cube-slide-item v-for="(list, index) in List" :key="index">
                <ul>
                    <li v-for="(item,index1) in list" :key="index1"></li>
                        <a :href="item.url">
                            <img :src="item.img" >
                  
                        </a>
                </ul>
            </cube-slide-item> 
        </cube-slide>
    </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
        items:[],
        List:[],
    }
  },
 async created(){
   axios.get("/api/banner")
   .then(res => {
       let pics=res.data;
       this.items=pics;
   })
   .catch(err => {
       console.error(err); 
   })
  },
  methods: {
    changePage(current) {
      console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
      console.log(item, index)
    }
  }
}
</script>
<style scoped>
    #index a{
        height:175px;
     }
</style>