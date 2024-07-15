<script>
export default{
    data(){
        return{
            vonTextOne:"vonTestOne",
        }
    },
    methods:{
        vonTestFun(){
            console.log(this.vonTextOne);
        }
    }
}
</script>

<template>
    <button type="button" v-on:click="this.vonTestFun()">Btn</button>
    <button type="button" v-on:click="vonTestFun()">Btn</button>
    <button type="button" v-on:click="vonTestFun">Btn</button>
    <button type="button" @click="vonTestFun">Btn</button>

</template>

<style scoped lang="scss">

</style>