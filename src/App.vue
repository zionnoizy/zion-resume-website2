
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
        <header>
            <h1>Zion Wong</h1>

            <nav>
                <ul class="nav_links">
                    <li> <a href="/"> <nav_color>   Home Page  </nav_color> </a> </li>
                    <li> <a href="news/news.html"> <nav_color>   Website News  </nav_color> </a> </li>
                </ul>
            </nav>
        </header>
        <br>

        
        <h1 class="px-10">Profile Photo</h1>
        <br>

        <!--https://stackoverflow.com/questions/39094612/css-to-display-divs-in-row-and-cols-->
        <div class="row px-10 " style="">
            <div class="col-sm-2 col-md-3 col-lg-4 ">
                <!--/resume-website/-->
                <img class="d-flex flex-column" src="/images/profile/2019_w_profile.jpg" style="width:180px;height:200px;  "> </br>
                2019
            </div>
            <div class="col-sm-2 col-md-3 col-lg-4 one_profile">
                <img src="/images/profile/2020_w_profile.jpg" style="width:180px;height:200px"> </br>
                2020
            </div>
            <div class="col-sm-2 col-md-3 col-lg-4 one_profile">
                <img src="/images/profile/2021_w_profile.jpg" style="width:180px;height:200px"> </br>
                2021
            </div>
            
            <div class=" col-sm-2 col-md-3 col-lg-4 one_profile">
                <img src="/images/profile/2022_w_profile.jpg" style="width:180px;height:200px"> </br>
                2022
            </div>

            <div class="col one_profile">
                <img src="/images/profile/comming_soon.png" style="width:180px;height:200px"> </br>
                2023
            </div>
        
            <br>
            <br>
        </div>

        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <h1 class="px-10">Linkedin Background</h1>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-1  px-2">

            <div class="">
                <img class="lin_bg" src="/images/profile/linkedin_bg/linkedin_1.jfif" style="width:684px;height:126px;"> </br>
                <label>Casquinez Bridge (taken 2019)</label>
            </div>
    
            <div class="">
                <img class="lin_bg" src="/images/profile/linkedin_bg/linkedin_2.jpg" style="width:684px;height:126px;"> </br>
                <label>Euston Curch (taken 2020)</label>
            </div>
    
            <div class="">
                <img class="lin_bg" src="/images/profile/linkedin_bg/linkedin_3.jpg" style="width:684px;height:146px;"> </br>
                <label>Milton Keynes Rose (taken 2021)</label>
    
            </div>

            <div class="">
                <img class="lin_bg" src="/images/profile/linkedin_bg/tmp-background-image.jpg" style="width:684px;height:146px;"> </br>
                <label>Coming-Soon (will be taken 2022)</label>
    
            </div>
        
            <br>
        
        </div>    

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
