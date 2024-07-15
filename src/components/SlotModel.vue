<script>
export default{
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>

<template>
    <button type="button">
        <slot></slot>
    </button>
    <h1>
        <slot name="title"></slot>
    </h1>

</template>

<style scoped lang="scss">

</style>