

<!--#include virtual="include/header.asp"-->
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
    <img class="middle_shape" src="/assets/img/home2/shape_01.png" alt="">
    <img class="bottom_shoape" src="/assets/img/home2/shape.png" alt="">
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
               
              
                <div class="courses_item">
                   <a href="/kota/iit-jee-main-advanced-coaching.asp" title="">
                      <div class="icon "><img src="/assets/img/course-ico/1.png" class="img-fluid" alt="">
                      </div>
                      <h4 class="coursename">JEE (Main+advanced) <br>IIT-JEE</h4>
                   </a>
                </div>
                <div class="courses_item">
                   <a href="/kota/jee-main-coaching.asp" title="">
                      <div class="icon"><img src="/assets/img/course-ico/2.png" class="img-fluid" alt=""></div>
                      <h4 class="coursename">JEE Main / AIEEE </h4>
                   </a>
                </div>
                <div class="courses_item">
                   <a href="/kota/neet-ug-aiims-coaching.asp" title="">
                      <div class="icon"><img src="/assets/img/course-ico/3.png" class="img-fluid" alt=""></div>
                      <h4 class="coursename">NEET-UG</h4>
                   </a>
                </div>
                <div class="courses_item">
                   <a href="/pncf/kota/" title="">
                      <div class="icon"><img src="/assets/img/course-ico/4.png" class="img-fluid" alt=""></div>
                      <h4 class="coursename">PRE-NURTURE AND CAREER FOUNDATION   </h4>
                   </a>
                </div>
                <div class="courses_item">
                   <a href="https://theintellibrain.com/" title=""  target="_blank">
                      <div class="icon"><img src="/assets/img/course-ico/6.png" class="img-fluid" alt=""></div>
                      <h4 class="coursename">IntelliBrain </h4>
                   </a>
                </div>
                <div class="courses_item">
                  <a href="https://www.allen.ac.in/globalstudies/" title="" target="_blank">
                     <div class="icon"><img src="/assets/img/course-ico/7.png" class="img-fluid" alt=""></div>
                     <h4 class="coursename"> ALLEN Global Studies </h4>
                  </a>
               </div>
             </div>
          </div>
       </div>
    </div>
 </section>
 <!--End Courses  Section -->
 
 <!-- Achievement  Section -->
 <!--#include virtual="common/achivements.asp"-->
 <!--End Our Achivemnet Section -->

 <!-- End Achievement Upates Section -->

 <!-- Our Video  Section -->
 <!--#include virtual="common/our_video.asp"-->
 <!-- End Video  Section -->

 <!-- Site Counter Section -->
 <!--#include virtual="common/allen_counter.asp"-->
 <!-- End Site Counter Section -->

 <!-- Show App Area Section -->
 <!--#include virtual="common/app_slider.asp"-->
 <!-- End Show App Area Section -->

 <!-- Subscribe Newsletter Section -->
 <!--#include virtual="common/subscribe_newsletter.asp"-->
 <!-- End Subscribe Newsletter Section -->

 <!--#include virtual="include/footer.asp"-->


 <!-- Slider pass var -->
 <script>
   var center = "kota";
</script>
<!-- Popup pass var -->
<!--#include virtual="/popup/pop-up-onload.asp"-->

<!-- Notification Functions-->
<script type="text/javascript">
	$(document).ready(function () {
		var update = kota_updates_notification;
		updateLists(update, $);

		var results = kota_results_notification;
		resultsLists(results, $);

		var events = kota_events_notification;
		eventsLists(events, $);
	});
</script>

 
 