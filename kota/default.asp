<!--#include virtual="/kota/include/header.asp"-->
<script>
   var center = "kota";
</script>

<!-- Slider Section -->
<section class="slider_area topmr">
   <div class="container">
      <div class="row">
         <div class="col-lg-4 ">
            <div class="slider_content padTop wow fadeInLeft">
               <h1 class="h2-hd"><span class="small-txt d-block">Since 1988</span>ALLEN CAREER INSTITUTE
               </h1>
               <p class="subdiscrip mt_10">A premier coaching institute for the preparation of JEE
                  (Main+Advanced), JEE (Main), Pre-Medical (AIPMT (NEET-UG)/ AIIMS), Pre-Nurture & Career
                  Foundation (Class VI to X, NTSE & Olympiads).
               </p>
               <a href="/aboutus/about-allen.asp" class="slide_btn mt_30 trns">More Detail</a>
            </div>
         </div>
         <div class="col-lg-8">
            <div class="homeslider-wraper wow fadeInRight" id="homeSlider">
               <div class="homeslider owl-carousel"></div>
            </div>
         </div>
      </div>
   </div>
   <img class="middle_shape" src="/assets/img/home/shape_01.png" alt="">
   <img class="bottom_shoape" src="/assets/img/home/shape.png" alt="">
</section>
<!-- End Slider Section -->






<!--Latest Updates Section -->
<!--#include virtual="common/latest_updates.asp"-->
<!--End Latest Updates Section -->

<!--Courses  Section -->
<section class="courses_area sec_pad">
   <div class="container">
      <div class="row">
         <div class="col-md-12 text-center hdmrb">
            <h2 class="f_p f_size_30 l_height50 f_700 mainhd-section">
               <span class="circle"></span>
               <span class="position-relative">Classroom Courses</span>
            </h2>
         </div>
      </div>
      <div class="row">
         <div class="col-md-12 wow fadeInRight">
            <div class="owl-carousel courses_carousel">

            </div>
         </div>
      </div>
   </div>
</section>
<!--End Courses  Section -->








<!-- Achievement  Section -->
<!--#include virtual="common/achivements.asp"-->
<!--End Our Achivemnet Section -->

<!-- Student life / ALLEN System Section -->
<section class="allenlife_area">
   <div class="overlay_img"></div>
   <div class="cloud_img" style="background: url(/assets/img/home/cloud.png) no-repeat;"></div>
   <div class="container">
      <div class="seo_sec_title text-center wow fadeInUp">

         <div class=" text-center">
            <h2 class="f_p f_size_30 l_height50 f_700 mainhd-section">
               <span class="circle"></span>
               <span class="position-relative">Student life in ALLEN</span>
            </h2>
         </div>
         <p class="p-2">At ALLEN, we aim to transform the life of each student through our value-based education and a
            holistic approach. The ALLEN system is centred on inculcating a sense of responsibility in students along
            with passion for learning. Our classroom-programmes are also designed to help students follow a systematic
            pattern where they can focus on their studies in a healthy manner. Along with carefully designed classroom
            programmes, we also organize interactive sessions where we aim to impart them with valuable life lessons
            while connecting them to the outer world. </p>
         <p class="mt-3"><a href="/aboutus/allen-system.asp" class="slide_btn mt_30 trns">Read More</a></p>
      </div>

   </div>
</section>
<!-- End Student life / ALLEN System Section -->

<!-- Our Video  Section -->
<!--#include virtual="common/our_video.asp"-->
<!-- End Video  Section -->

<!-- Site Counter Section -->
<!--#include virtual="common/counter-site.asp"-->
<!-- End Site Counter Section -->

 <!-- Show App Area Section -->
 <!--#include virtual="common/app_slider.asp"-->
 <!-- End Show App Area Section -->

<!-- Subscribe Newsletter Section -->

<!-- End Subscribe Newsletter Section -->
<!--#include virtual="common/newsletter/subscribe_newsletter_kota.asp"-->
<!--#include virtual="/kota/include/footer.asp"-->


<!-- Slider pass var -->
<!-- Popup pass var -->
<!--#include virtual="/popup/pop-up-onload.asp"-->

<!-- Notification Functions-->
<script type="text/javascript">

   $(document).ready(function () {
      var centerUpdate = kota_updates;
      centerUpdates(centerUpdate, $);

      var importantUpdate = kota_importantNotification;
      importantNotifications(importantUpdate, $);

      var resultUpdate = kota_resultNotification;
      resultNotifications(resultUpdate, $);
   });

</script>