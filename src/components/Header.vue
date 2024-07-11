<script>
import { RouterLink } from 'vue-router'
export default{
    components:{
        RouterLink
    }
}
</script>

<template>
    <div class="headerArea">
        <RouterLink class="routeItem" to="/">Home</RouterLink>
        <RouterLink class="routeItem" to="/VtextAndVmodel">VtextAndVmodel</RouterLink>
        <RouterLink class="routeItem" to="/VforAndVBind">VforAndVBind</RouterLink>
        <RouterLink class="routeItem" to="/VonAndVifAndVshow">VonAndVifAndVshow</RouterLink>
    </div>
</template>

<style scoped lang="scss">
.headerArea{
    width: 100%;
    height: 100%;
    background-color: rgb(110, 110, 213);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .routeItem{
        font-size: 36px;
        color: white;
        text-decoration: none;
        cursor: pointer;
    }
}
</style>