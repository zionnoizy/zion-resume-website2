<template>
    <class id="profilescreen">

    <h1 class="px-10">Profile Photo</h1>
    <br>

    <!--profile picture-->
    <div class="row px-10 " style="">
        <div class="col one_profile">
            
            <img src="@/assets/images/profile/2019_w_profile.jpg" style="width:180px;height:200px;"> <br>
            2019
        </div>

        <div class="col one_profile">
            <img src="@/assets/images/profile/2020_w_profile.jpg" style="width:180px;height:200px"> <br>
            2020
        </div>
        <div class="col one_profile">
            <img src="@/assets/images/profile/2021_w_profile.jpg" style="width:180px;height:200px"> <br>
            2021
        </div>
        
        <div class="col one_profile">
            <img src="@/assets/images/profile/2022_w_profile.jpg" style="width:180px;height:200px"> <br>
            2022
        </div>

        <div class="col one_profile">
            <img src="@/assets/images/profile/2023_w_profile.jpg" style="width:180px;height:200px" > <br>
            2023
        </div>

        <br>
        <br>
    </div>

    <br>
    <br>
    <br>
    <br>

    <h1 class="px-10">Linkedin Background</h1>
    <div class="row">

        <div class="col">
            <img class="lin_bg" src="@/assets/images/profile/linkedin_bg/linkedin_1.jpg" style="width:684px;height:126px;">
            <label>Casquinez Bridge (taken 2019)</label>
        </div>

        <div class="col">
            <img class="lin_bg" src="@/assets/images/profile/linkedin_bg/linkedin_2.jpg" style="width:684px;height:126px;">
            <label>Euston Curch (taken 2020)</label>
        </div>
    </div>
    <br>

    <div class="row">
        <div class="col">
            <img class="lin_bg" src="@/assets/images/profile/linkedin_bg/linkedin_3.jpg" style="width:684px;height:146px;">
            <label>Milton Keynes Rose (taken 2021)</label>

        </div>

        <div class="col">
            <img class="lin_bg" src="@/assets/images/profile/linkedin_bg/linkedin_4.jpeg" style="width:684px;height:146px;"> 
            <label>London Bridge (taken 2022)</label>

        </div>
    </div>
    <br>

    <div class="row">
        <div class="col">
            <img class="lin_bg" src="@/assets/images/profile/linkedin_bg/linkedin_5.jpg" style="width:684px;height:146px;"> 
            <label>Liverpool Street' Spaces (taken 2023)</label>

        </div>
    </div>    
    <br>

    
    </class>
</template>
  
  
  
  <script>
  //import ZionFooter from './components/ZionFooter.vue'
  //import ZionHeader from './components/ZionHeader.vue'
  
  export default {
    name: 'ProfileScreen',
    components: {
  
      //ZionFooter,
      //ZionHeader,
    }
  }
  </script>
  
  <style>
  
  .one_profile{
    display: block;
    width: 15.00%;
    float: left;
}

.cb{
    clear:both;
}
  </style>
  