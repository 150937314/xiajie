import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store=new Vuex.Store({
  state: {
    token:"",
    cartarry:JSON.parse(localStorage.getItem("aaa")) || [],//存储购物车商品的数组
  },
  mutations: {
    //设置vuex的token
    settoken(state,token){
      state.token=token
    },
    newadd(state,tag){
        // var goods=state.cartarry.find(v=>v.title==tag.label)
        // if(goods){
        //   goods.goodsCount+=1
        // }else{
        //   state.cartarry.push({title:tag.label,goodsCount:1})
        // }
        let goods=state.cartarry.some(item=>{
          if(item.title==tag.label){
            item.goodsCount++
            return true;
          }else{
            return false;
          }
        })
        if(!goods){
          state.cartarry.push({title:tag.label,goodsCount:1})
        }
    },
    removeall(state){
      if(window.confirm("确认全部移除?")){
        state.cartarry=[]
      }
   
    },
    remove(state,index){
      if(state.cartarry[index].goodsCount>1){
        state.cartarry[index].goodsCount--
      }else{
        if(window.confirm("确定移除该物品?")){
          state.cartarry.splice(index,1)
        } 
      }
      },
      add(state,index){
        state.cartarry[index].goodsCount++
    }
  },
  actions: {
  },
  modules: {
  },
  //相当于vue的computed计算属性
  getters:{
    countsum:function(state){
      let num=0;
      state.cartarry.forEach((ev,ind) => {
          num+=ev.goodsCount
      });
      return num;
    }
  }
})
//监听每次调用mutation的时候,都会选这个方法,然后我们可以做一些自己想做的处理
store.subscribe((mutations,state)=>{
  localStorage.setItem("aaa",JSON.stringify(state.cartarry))
})
export default store;