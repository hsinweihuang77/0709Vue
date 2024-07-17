<script>
import vonCp from '../components/VonComponent.vue'
import vifAndVshowCp from '../components/VifAndVshowComponent.vue'
import SlotModel from '../components/SlotModel.vue'
import location from "../stores/location"
import { mapActions } from 'pinia'

export default{
    components:{
        vonCp,
        vifAndVshowCp,
        SlotModel
    },
    methods:{
        ...mapActions(location, ["setPages"])
    },
    mounted(){
        this.setPages(4)
    }
}
</script>

<template>
    <vonCp />
    <vifAndVshowCp />

    <!-- 把值丟到子層的slot中 -->
    <SlotModel>
        Funny
        <template v-slot:title>
            這是標題
        </template>
    </SlotModel>

</template>

<style scoped lang="scss">

</style>