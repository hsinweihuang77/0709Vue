<script>
import watchChild from '../components/WatchComponent.vue'
import computedChild from '../components/ComputedComponent.vue'
import location from "../stores/location"
import { mapActions } from 'pinia'


export default{
    data(){
        return{
        }
    },
    components:{
        watchChild,
        computedChild
    },
    methods:{
        ...mapActions(location, ["setPages"])
    },
    mounted(){
        this.setPages(7)
    }
}
</script>

<template>
    <watchChild/>
    <computedChild/>
</template>

<style scoped lang="scss">

</style>