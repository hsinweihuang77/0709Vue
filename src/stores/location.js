import { defineStore } from 'pinia';

export default defineStore("location", {

    state(){ //data
        return {
            location:1,
        }
    },

    getters:{ //computed
        pageLocation(){
            return `現在位置:第 ${this.location} 頁`
        }
    },

    actions:{ //methods
        setPages(param){
            this.location = param
        }
    }
})