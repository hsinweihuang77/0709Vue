<script>
import vfor from '../components/VforComponent.vue'
import vbindCom from '../components/VBindComponent.vue'
import location from "../stores/location"
import { mapActions } from 'pinia'

export default{
    components:{
        vfor,
        vbindCom
    },
    methods:{
        ...mapActions(location, ["setPages"])
    },
    mounted(){
        this.setPages(3)
    }
}
</script>

<template>
    <vfor />
    <vbindCom />
</template>

<style scoped lang="scss">

</style>