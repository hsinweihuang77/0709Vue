<script>
export default{
    data(){
        return{
        }
    },
    methods:{
    },
    props:[
        "giveChildMsg",
        // "giveChildObj",
        "giveChildObjName",
        //若父層使用v-bind自動解構,則要把物件屬性名稱寫在這告知子層
        "name",
        "type"
    ]
}
</script>

<template>
    <p>這邊是子層:{{ giveChildMsg }}</p>
    <!-- <p>直接傳物件</p>
    <input type="text" v-model="giveChildObj.name">
    <p>{{ giveChildObj.name }}</p> -->
    <p>有解構:</p>
    <input type="text" v-model="this.giveChildObjName">
    <p>{{ this.giveChildObjName }}</p>
</template>

<style scoped lang="scss">

</style>