<template>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"/>
  <NavBar></NavBar>
  <router-view></router-view>
</template>

<script>
import './styles/global.css';
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
</style>
