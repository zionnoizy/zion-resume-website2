<template>
    
    <div>
      <link href="css/tailwindcss/styles.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
          
      
      <div class="d-flex justify-content-between p-3 mt-3 " style="background-color:aqua; position: sticky; top: 0; opacity: 0.95;">
        <div class=" " style="font-size:36pt;">
        <h1>Zion Wong</h1>
        
    </div>

    <div>
      <!--https://webdesign.tutsplus.com/tutorials/how-to-build-a-shifting-underline-hover-effect-with-css-and-javascript--cms-28510-->
        <nav class="zion_nav ">
            <ul>
              <li><a><router-link to="/">Home</router-link></a></li>
              <li><a><router-link to="/profile">Profile</router-link></a></li>
              <!-- <li>
                <router-link :to="{name: 'News' }" class="router-link" active-class="router-link-active"> 
                    <p class="text-3xl font-bold"> News 
                    </p> 
                </router-link>
              </li> -->
            </ul>
        </nav>

        
        
    </div>
    
    <!--2header-->
    
    <!--3header-->
    
      <span class="target"></span>
  </div>
    
      
  
    </div>
  
  </template>
  
<style>
.zion_nav ul{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

.zion_nav li:not(:last-child) {
  margin-right: 20px;
}

.zion_nav a {
  display: block;
  font-size: 30px;
  color: F8F8F8;
  text-decoration: none;
  padding: 7px 15px;
}

</style>
