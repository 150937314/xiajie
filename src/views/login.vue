<template>
    <div>
        <cube-form
            :model="model"
            :schema="schema"
            @submit="submitHandler">
        </cube-form>
        <p>{{count}}</p>
    </div>
</template>
<script>
import axios from "axios"
export default {
    computed:{
        count(){
            return this.$store.state.token
        }
        
    },
    data(){
        return{
            model:{
                username:"",
                password:""
            },
            schema:{
                fields:[
                    //用户名配置
                    {
                        type:"input",
                        modelKey:"username",
                        label:"用户名",
                        props:{
                            placeholder:"请输入用户名",
                        },
                        rules:{
                            //校验规则
                            required:true,
                            type:'string',
                            min:3,
                            max:15 
                        },
                        trigger:'blur',
                        messages:{
                            required:"用户名不能为空",
                            min:"用户名不能少于三个字符",
                            max:"用户名不能多于15个字符"
                        }
                    },
                    //密码配置
                    {
                        type:"input",
                        modelKey:"password",
                        label:"密码",
                        props:{
                            placeholder:"请输入密码",
                            type:"password",
                            eye:{
                                open:false,
                            }
                        },
                        rules:{
                            //校验规则
                            required:true,
                        
                        },
                        trigger:'blur',
                    },
                    {
                        type:"submit",
                        label:'登录'
                    }
                ]
            }
        }
    },
      methods:{
             async submitHandler(e){ 
                e.preventDefault()
                try {
                    const result=await axios.get("/api/login",{params:this.model})
                    console.log(result)
                    if(result.code=="0"){
                        this.$store.commit("settoken",result.token)
                        window.localStorage.setItem("token",result.token)
                        this.$router.push({path:"/botnav"})
                    }else{
                        alert(result.message)
                    }
                } catch (error) {
                    console.log(error)
                } 
            }  
        }
}
</script>
<style lang="stylus" scoped>
    
</style>