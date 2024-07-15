<script>
import vonCp from '../components/VonComponent.vue'
import vifAndVshowCp from '../components/VifAndVshowComponent.vue'
import SlotModel from '../components/SlotModel.vue'
export default{
    components:{
        vonCp,
        vifAndVshowCp,
        SlotModel
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