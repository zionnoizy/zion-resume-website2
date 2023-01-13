<template>



    <ZionHeader></ZionHeader>
  
    <class id="app">

        <div>
            <h2>Tik-Tak_Toe</h2>
            <P>exe download</P>
        </div>

        <div>
            <h2>Shopping Android App.</h2>
            <p>apk download</p>
        </div>

        <div>
            <h2>Beautiful Soup</h2>
            <p>python download</p>
        </div>

        <div>
            <h2>This website</h2>
            <p>yes, this website</p>
        </div>
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

  </style>
  