<template>
    <div>
        <div class="goods"  v-for="(item,index) in cartarr" :key="index">
            {{item.title}}
            <div class="goodsright">
                <i class="cubeic-remove" @click="goodsremove(index)"></i>
                <span>{{item.goodsCount}}</span>
                <i class="cubeic-add" @click="goodsadd(index)"></i>
            </div>
        </div>
        <cube-button style="margin:10px 0">下单</cube-button>
        <cube-button @click="clearboth()">清空购物车</cube-button>
    </div>
</template>
<script>
import {mapState} from "vuex"
export default {
    methods:{
      //减去商品数量
      clearboth(){
          this.$store.commit("removeall")
      },
      goodsremove(index){
          this.$store.commit("remove",index)
      },
     goodsadd(index){
         this.$store.commit("add",index)
     }
    },
    data(){
        return{
            // cartarr:[]
        }
    },
    computed:{
        ...mapState({
              cartarr:state=>state.cartarry
            //  cartarr:function(state){
            //      return state.cartarr
            //  }
        })
  
    }
}
</script>
<style  scoped>
    .goods{
        padding: 10px;
        text-align: left;

    }
    .goods .goodsright{
            float: right;
    }
    .goods .goodsright i{
        font-size: 18px;
    }
</style>