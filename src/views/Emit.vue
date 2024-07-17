<script>
import emitChild from '../components/EmitComponent.vue'
import location from "../stores/location"
import { mapActions } from 'pinia'

export default{
    data(){
        return{
            getChildVal:"",
            childChange:""
        }
    },
    components:{
        emitChild
    },
    methods:{
        childFun(params){
            console.log(params);
            this.getChildVal = params;
        },
        ...mapActions(location, ["setPages"])
    },
    mounted(){
        this.setPages(6)    
    }
}
</script>

<template>
    <emitChild @childMsg="this.childFun" v-model:fromChild="this.childChange"/>
    <h2>{{ this.getChildVal }}</h2>

    <h2>{{ this.childChange }}</h2>
</template>

<style scoped lang="scss">

</style>