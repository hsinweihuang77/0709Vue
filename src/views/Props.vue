<script>
import propChild from '../components/PropsComponent.vue'
import location from "../stores/location"
import { mapActions } from 'pinia'

export default{
    data(){
        return{
            parentMsg:"parentVal",
            parentObj:{
                name:"米諾",
                type:"臘腸"
            }
        }
    },
    components:{
        propChild,
    },
    methods:{
        ...mapActions(location, ["setPages"])
    },
    mounted(){
        this.setPages(5)
    }
}
</script>

<template>
    <h1>這邊是父層:{{ parentMsg }}</h1>
    <h1>父層物件:{{ parentObj }}</h1>
    <!-- 不能用物件傳props!!! -->
    <!-- <propChild :giveChildMsg="parentMsg" :giveChildObj="parentObj"/> -->
    <propChild :giveChildMsg="parentMsg" :giveChildObjName="this.parentObj.name" v-bind="parentObj"/>
</template>

<style scoped lang="scss">

</style>