<template>



    <ZionHeader></ZionHeader>
  
    <class id="app">

    </class>
    
    <ZionFooter></ZionFooter>
  </template>
  
  
  
  <script>
  import ZionFooter from './components/ZionFooter.vue'
  import ZionHeader from './components/ZionHeader.vue'
  
  export default {
    name: 'App',
    components: {
  
      ZionFooter,
      ZionHeader,
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  