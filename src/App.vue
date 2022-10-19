<template>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"/>
  <span v-if="logged()"><NavBar></NavBar></span> 
  <router-view></router-view>
</template>

<script>
import './styles/global.css';
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }, 
  methods:{
    logged(){
      if(this.$route.name == "login" || this.$route.name == "signup")
        return false
      else return true 
    }
  }
}
</script>

<style>
</style>
