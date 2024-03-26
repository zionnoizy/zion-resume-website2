<template>


    <class id="HomeScreen">
        <html>
    <head>
      
    <title> Zion Portfolio </title>
    </head>

    <body>
    <div class="p-3 mb-2 ">
        <!--https://www.codeproject.com/Articles/762201/Adjusting-your-Websites-to-Fit-all-Types-of-Resolu-->
        <!--navbar-->
        

        
        <p class="abt_me_txt">Welcome to Zion's webpage. Hopefully this website will get to know me better.
        I am a software engineer currently living in London. My favorite subject is mathematics since primary school. I discovered interesting to implement programs to reflect the images on the computer monitor. After studying computer science, I discovered programming not just related images, but also algorithms and data transfers. I like to read the data flow and design from a different platform. It heightened my curiosity and passion about software engineering.
        I have a professional background in developing mobile apps in the United States. I arrived in the United Kingdom in 2020 and I would like to obtain a job opportunity related to computer science in the United Kingdom. My dream is to become an expert programmer. In my leisure time, I like to discover old console games and skiing.  </p>
        
        <br>
        
          <div class="row">
            <div class="col"><img src="@/assets/images/1869.jpg" style="width:400px;height:300px ;"> </div>
            <div class="col"><img src="@/assets/images/020.jpg" style="width:400px;height:300px ;"> </div>
            <div class="col"><img src="@/assets/images/2928.jpg" style="width:400px;height:300px ;"> </div>
          </div>

        <!-- <div class="row align-items-start">
          <div class="col">
            <img src="@/assets/images/1869.JPG" class="img_face1" style="width:400px;height:300px ;">
          </div>
          <div class="col">
            <img src="@/assets/images/020.JPG" class="img_face1" style="width:400px;height:300px ;">
          </div>
          <div class="col">
            <img src="@/assets/images/2928.JPG" class="img_face1" style="width:400px;height:300px ;">
          </div>
        </div> -->


          
        <br>
        

        <h1>Passion</h1>
        <p class="abt_me_txt">
            I love computer science because we have engaged it every day in this generation. Understanding computing not only responds to my curiosity about algorithms, but also to my daily tasks, from calculation to data organization. When I was a child, I thought that inserting an image into the web forum is interesting because it reflects a pixel inside the monitor screen. After I learned just using the image tag and the image will reflect on the screen,
            the &#34;magic&#34; of img tag always stays in my memory. This is how I like to prolong my 'insert picture' memory of my future dream.
        </p>

    
    <div class="row">
      <!--experience-->
      <div class="col">
          <h1 class="text_center">Experience</h1>
          <div class="exp">
              2020 - Android Developer<br/>
              I worked as an Android software developer. This is a start-up company located in Ohio State. I'm responsible for creating a user interface, configuring a phone connection and a five-star evaluation system from Stretch, and managing messages from Firebase. Regular meetings per week to discuss progress & planning. <br/>
              <b>Company</b> - Resolve TOK Inc.<br/>
              <b>Duration</b> - Feb 2020 - Jul 2020<br/>
          </div>
      </div>

      <!--skills-->
      <div class="col">
          <h1 class="text_center">Key Skills</h1>
          <div class="skills-bar">
              C++
              <div class="progress-bar" style="--width: 95" data-label="95%"></div>
              Python
              <div class="progress-bar" style="--width: 80" data-label="80%"></div>
              Java
              <div class="progress-bar" style="--width: 75" data-label="75%"></div>
              Bash / Shell
              <div class="progress-bar" style="--width: 80" data-label="80%"></div>
              MySQL/MariaDB
              <div class="progress-bar" style="--width: 65" data-label="65%"></div>
          </div>
      </div>
    </div>

      

    <br>


    </div>

    </body>

  </html>

    </class>
</template>


<script>



</script>

<style>
/*0black background*/
.progress-bar{
    background-color: #111;
    position: relative;
    width: 500px;
    height: 3em;
    border-radius: 1.5em;
    color: white;
}

.progress-bar::before{
    content: attr(data-label);
    display: flex;
    align-items: center;
    position: absolute;
    left: .5em;
    top: .5em;
    bottom: .5em;
    width: calc(var(--width, 0)  * 1% );
    min-width: 2rem;
    max-width: calc(100% - 1em);
    background-color: #069;
    border-radius: 1em;
}

.img_face1{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}
</style>