
<template>

  <ZionHeader></ZionHeader>

  <router-view></router-view>
  
  <ZionFooter></ZionFooter>

</template>



<script>
import ZionFooter from './components/ZionFooter.vue'
import ZionHeader from './components/ZionHeader.vue'
//import router from '../plugins/router';

export default {
  name: 'App',
  setup(){

  },
  components: {

    
    ZionHeader,
    ZionFooter,
  }
}
</script>

<style>
body{
  background: #2c3e50 !important;
  color: #FFF!important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
