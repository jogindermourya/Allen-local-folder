<!--#include virtual="pncf/kochi/include/header.asp"-->
<script>
   var center = "pncf_kochi";
</script>

<!-- Slider Section -->
<section class="slider_area topmr">
   <div class="container">
      <div class="row">
         <div class="col-lg-4 ">
            <div class="slider_content padTop wow fadeInLeft">
               <h1 class="h2-hd">
                  <!-- <span class="small-txt d-block">Since 1988</span> -->
                  ALLEN’s Pre-Nurture And Career
                  Foundation
               </h1>
               <p class="subdiscrip mt_10">Offers courses for various Competitive Exams and Olympiads for the students
                  of classes 6th to 10th. It fosters Creativity, Scientific Thinking, Competitive Temperament and
                  Divergent Aptitude in the students by means of our Classroom Contact Programs and Workshops.
               </p>
               <!-- <a href="/aboutus/about-allen.asp" class="slide_btn mt_30 trns">More Detail</a> -->
            </div>
         </div>
         <div class="col-lg-8">
            <div class="homeslider-wraper wow fadeInRight" id="homeSlider">
               <div class="homeslider owl-carousel"></div>
           </div>
         </div>
      </div>
   </div>
   <img class="middle_shape" src="../../assets/img/home/shape_01.png" alt="">
   <img class="bottom_shoape" src="../../assets/img/home/shape.png" alt="">
</section>
<!-- End Slider Section -->


<!--Latest Updates Section -->
<!--#include virtual="common/latest_updates_pncf.asp"-->
<!--End Latest Updates Section -->


<!--#include virtual="pncf/common/courses/courses.asp"-->

<!-- Our Video  Section -->
<!--#include virtual="common/our_video.asp"-->
<!-- End Video  Section -->


<!-- Show App Area Section -->
<!--#include virtual="common/app_slider.asp"-->
<!-- End Show App Area Section -->

<!-- Show App Area Section -->
	<section class="pricing_area sec_pad">
		<div class="container text-center">
			<h2 class="f_p f_size_30 l_height50 f_700 mainhd-section mb-3">
				<span class="circle"></span>
				<span class="position-relative">Latest Events</span>
			</h2>
			<div class="row">
				<div class="col-lg-12">
					<!--#include virtual="/pncf/common/achivement/events.asp"-->
				</div>
			</div>
		</div>
	</section>
<!-- End Show App Area Section -->

<!-- Subscribe Newsletter Section -->
<!--#include virtual="common/subscribe_newsletter.asp"-->
<!-- End Subscribe Newsletter Section -->

<!--#include virtual="pncf/kochi/include/footer.asp"-->


<!-- Slider pass var -->
<!-- Popup pass var -->
<!--#include virtual="/popup/pop-up-onload.asp"-->


<script type="text/javascript">
	
	$(document).ready(function () {
		var centerUpdate = kochi_pncf_updates;
		centerUpdates(centerUpdate, $);

		var importantUpdate = kochi_pncf_importantNotification;
		importantNotifications(importantUpdate, $);

		var resultUpdate = kochi_pncf_resultNotification;
		resultNotifications(resultUpdate, $);
	});
	
</script>

