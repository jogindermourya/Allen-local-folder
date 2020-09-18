
<!-- #Include virtual="/pune/include/header.asp" -->

<!-- Breadcrumb Section -->
<section class="breadcrumb_area">
   <img class="breadcrumb_shap" src="/assets/img/aboutus/innerbghead.png" alt="">
   <div class="container">
      <div class="breadcrumb_content text-center">
         <h1 class="breadcrumb-hed">ALLEN Scholarship Admission Test</h1>
         <ul class="list-unstyled breadcrumb-links m-0">
            <li><a href="/kota/">Home</a></li>
            <li>ALLEN Scholarship Admission Test</li>
         </ul>
      </div>
   </div>
</section>
<!-- End Breadcrumb Section -->
<!--  content Section -->
<section class="payment_testimonial_area pb-1  ">
   <div class="container">
      <div class="row payment_testimonial_info mb-lg-4 mb-md-1">
         <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="row">
               <div class="col-lg-12 mb-lg-4 text-justify">
                  <b>About ASAT :</b> ASAT is an Offline (Pen Paper mode) test; consist of multiple choice  questions as per NCERT syllabus. A student has to qualify ALLEN Scholarship Admission Test to take Admission in Yearlong ALLEN Classroom Program at pune Center. To register for ASAT, either fill the Application
                  Form available at ALLEN pune Center or apply online at <strong><a href="http://www.allen.ac.in/">http://www.allen.ac.in/</a></strong>. ASATs are conducted on scheduled dates for Admission in the Courses starting on various dates.
				</div>
            </div>
            <div class="row mb-3 mt-3">
               <div class="col-lg-12 mb-lg-4">
                  <h3 class="subhed-in mt-2 mb-4">Dates & Syllabus</h3>
                  <div class="table-responsive">
                     <table class="table table-bordered table-hover customtbl cetnble" id="asatDates">
                        <thead>
                           <tr>
                              <th width="20%">For Courses</th>
                              <th width="30%">Dates</th>
                              <th width="10%">Timing</th>
                              <th>Test Pattern</th>
                              <th width="30%">Syllabus</th>
                           </tr>
                        </thead>
						<tbody class="data">
						 
						</tbody> 
                     </table>
                  </div>
                  <p class="f_size_13">
					  <ul class="list-unstyled data" id="noteLists">
					  </ul>
                  </p>
               </div>
            </div>
            <!-- Include ASAT Test center -->
               <!-- #Include virtual="common/asat_sample_papers.asp" -->
            <!-- end -->
            <div class="row mb-3 mt-3">
             
            <!-- Include ASAT Test center -->
               <!-- #Include virtual="common/asat-test-centers.asp" -->
            <!-- end -->

            </div>
            <div class="row mb-3 mt-3">
               <div class="col-lg-12 ">
                  <h3 class="subhed-in mt-2 mb-4">ASAT Result</h3>
                  <p>ASAT ResuIt will be available within a week on our website www.allen.ac.in &amp; successful candidates will be informed by SMS on registered Mobile No. as filled in Application Form.</p>
               </div>
            </div>
         </div>
      </div>
   </div>
   </div>
   </div>
</section>
<!-- End  content Section -->
<!--Footer-->
<!-- #Include virtual="/pune/include/footer.asp" -->
<!--/Footer-->


<script type="text/javascript">
	$(document).ready(function () {
		var dates = pune_asat;
		asatDates(dates, $);

	});
	
	$(document).ready(function () {
		var note = pune_asat_note;
		noteLists(note, $);

	});
	
	$(document).ready(function () {
		var paper = pune_sample_papers;
		samplePapers(paper, $);
	});

</script>

