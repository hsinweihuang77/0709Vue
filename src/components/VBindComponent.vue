<script>
export default{
    data(){
        return{
            imgArr:[
                "https://bluearchive.wikiru.jp/attach2/696D67_E382A2E383AAE382B95F69636F6E2E706E67.png",
                "https://bluearchive.wikiru.jp/attach2/696D67_E382A4E383ADE3838F5F69636F6E2E706E67.png",
                "https://bluearchive.wikiru.jp/attach2/696D67_E38381E382BBEFBC88E6B0B4E79D80EFBC895F69636F6E2E706E67.png"
            ],
            clsArr:[]
        }
    }
}
</script>

<template>
<!-- v-bind 跟標籤的屬性雙向綁定 -->
    <!-- <img v-bind:src="item" alt="" v-for="item in this.imgArr"> -->
    <div class="imgDiv">
        <img :src="item" alt="" v-for="item in this.imgArr">
    </div>

    <label for="">Blue</label>
    <input type="checkbox" value="blue" v-model="this.clsArr">
    <label for="">Large</label>
    <input type="checkbox" value="large" v-model="this.clsArr">
    <label for="">Underline</label>
    <input type="checkbox" value="underline" v-model="this.clsArr">
    <h1 :class="this.clsArr">榕駿威武</h1>
</template>

<style scoped lang="scss">
.imgDiv{
    display: flex;
}
.blue{
    color: blue;
}
.large{
    font-size: 50px;
}
.underline{
    text-decoration: underline
}
</style>