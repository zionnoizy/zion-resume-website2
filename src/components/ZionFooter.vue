<template>
  <div>

    <div class="about_me">
            <!--https://www.youtube.com/watch?v=MBaw_6cPmAw-->
            <!--https://www.youtube.com/watch?v=fNcJuPIZ2WE&pbjreload=10-->
            <h1>contact</h1>
            <div class="container" id="contact">

                <button data-openmessagebox-target="#mb"> <p style="color:white;"> Send an E-mail to Me </p></button>

                <div class="message_box" id="mb">
                    <p class="mb_title"> Get in touch! Let me know how my webside did, questions or concerns.</p>
                    <button data-close-button class="mb_close" style="color:white; float:right;" >&times;</button>
                    <div class="mb_body">
                        <form method="POST" action="send_form_email.php">
                            <input type="text" name="mb_fullname" style="color:white;" placeholder="full name"> <br/>

                            <input type="email" name="mb_email" style="color:white;" placeholder="your email"> <br/>

                            <textarea name="mb_message" cols="30" rows="10" style="color:white;" placeholder="message"></textarea> <br/>

                            <input type="submit" name="send_btn" style="color:white;">
                        </form>
                    </div>
                </div>

                <div id="overlay"></div>

            </div>
        </div>

    <div>
      <footer>
          <hr>
          <p> 2022 Copyright. All Rights Reserved</p>
      </footer>
    </div>
  </div>
</template>
  
  
  
<script>

</script>