<template>
  <div>
      <button @click="kuayu">今天学习跨域处理</button>
  </div>
</template>

<script>


export default {
    name:"AAA.vue",
    methods:{
        kuayu(){
          this.$axios.get("/movie/top250").then((res) => {
                res = res.data
                console.log(res)
            }).catch((err) => {
                console.log(err)
            });
        }
    },
    created(){
        this.kuayu()
    }     
}
</script>

<style>

</style>