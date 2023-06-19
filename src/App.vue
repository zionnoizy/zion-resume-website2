
<template>
  <ZionHeader></ZionHeader>

  <html>

    <head>
    <title> Zion Portfolio </title>
    </head>

    <body>
    <div class="p-3 mb-2 ">
        <!--https://www.codeproject.com/Articles/762201/Adjusting-your-Websites-to-Fit-all-Types-of-Resolu-->
        <!--navbar-->
        

        
        

        

        <div class="cb">
            <br>
            <br>
            <br>
            <hr>
            <h1 class="no-new-line px-10">Connect Me in Social Network</h1>

                <a href="https://www.linkedin.com/in/zion-wong24/"> <i class="fa fa-linkedin-square" style="font-size:50px; color:white;"></i> </a>
            <a href="https://www.youtube.com/channel/UCK1EVyeYdV-c_DTNviA5_cA"> <i class="fa fa-youtube" aria-hidden="true" style="font-size:50px; color:white;"></i>
                 </a>

            <a href="https://github.com/zionnoizy"> <i class="fa fa-github" aria-hidden="true" style="font-size:50px; color:white;"></i> </a>

            
        </div>

    </div>

    </body>

  </html>

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
