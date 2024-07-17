<script>
import { RouterLink } from 'vue-router'
import location from '../stores/location'
import { mapState } from 'pinia'

export default{
    components:{
        RouterLink
    },
    computed:{
        ...mapState(location, ["location", "pageLocation"])
    }
}
</script>

<template>
    <div class="headerArea">
        <RouterLink class="routeItem" :class="{ 'selected': this.location === 1 }" to="/">Home</RouterLink>
        <RouterLink class="routeItem" :class="{ 'selected': this.location === 2 }" to="/VtextAndVmodel">VtextAndVmodel</RouterLink>
        <RouterLink class="routeItem" :class="{ 'selected': this.location === 3 }" to="/VforAndVBind">VforAndVBind</RouterLink>
        <RouterLink class="routeItem" :class="{ 'selected': this.location === 4 }" to="/VonAndVifAndVshow">VonAndVifAndVshow</RouterLink>
        <RouterLink class="routeItem" :class="{ 'selected': this.location === 5 }" to="/Props">Props</RouterLink>
        <RouterLink class="routeItem" :class="{ 'selected': this.location === 6 }" to="/Emit">Emit</RouterLink>
        <RouterLink class="routeItem" :class="{ 'selected': this.location === 7 }" to="/WatchAndComputed">WatchAndComputed</RouterLink>
    </div>
    <span>{{ this.pageLocation }}</span>
</template>

<style scoped lang="scss">
.headerArea{
    width: 100%;
    height: 100%;
    background-color: rgb(110, 110, 213);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    .routeItem{
        margin: 0 3%;
        font-size: 20px;
        color: white;
        text-decoration: none;
        cursor: pointer;
    }
    .selected{
        color: rgb(110, 110, 213);
        background-color: white;
        border-radius: 3px
    }
}
</style>