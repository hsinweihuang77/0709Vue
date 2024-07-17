<script>
export default{
    data(){
        return{
            point:0,
            ntd:0,
        }
    },
    watch:{
        point(){
            this.ntd = this.point * 10
        }
    },
    methods:{
        arrTest(){

            //forEach沒辦法用return停下

            // let arr = [1,2,3,4,5,6]
            // arr.forEach((item) =>{
            //     console.log(item);
            //     if(item == 4){
            //         return
            //     }
            // })

            //用try catch報錯能強制停下

            try{
                let arr = [1,2,3,4,5,6]
                arr.forEach((item) =>{
                    console.log(item);
                    if(item == 4){
                        throw new Error("到4了")
                    }
                })
            }
            catch(e){
                alert(e.message)
            }
        }
    },
    mounted(){
        this.arrTest();
    }
}
</script>

<template>
    <h1>變數 point : {{ this.point }}</h1>
    <button type="button" @click="this.point++">BTN</button>
    <h2>變數 ntd : {{ this.ntd }}</h2>
</template>

<style scoped lang="scss">

</style>