<!-- #Include virtual="/kota/include/header.asp" -->

<!--Result Header-->
<!-- #Include virtual="common/courses-headers/result-header2.asp" -->
<!--/Result Header-->
<section class="coursebg"> 
  
  <!-- Navigation bar -->
  <section class="menu_course_wrp">
    <div class="container">
      <div class="row">
        <div class="navbar">
          <ul class="d-flex justify-content-between">
            <li class="active"><a href="#course_details" class="scroll"><i class="fa fa-fw fa-book"></i>Course Details</a></li>
            <li><a href="#fee_structure" class="scroll"><i class="fa fa-fw fa-inr"></i>Fee Structure</a></li>
            <li><a href="#scholarship" class="scroll"><i class="fa fa-fw fa-graduation-cap"></i>Scholarship</a></li>
            <li><a href="#ASAT_details" class="scroll"><i class="fa fa-fw fa-universal-access"></i>ASAT Details</a></li>
            <li><a href="#get_assistance" class="scroll"><i class="fa fa-fw fa-headphones"></i>Get Assistance</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Navigation bar -->
  <section class="bricurm">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-sm-9 ">
          <ul class="list-unstyled breadcrumb-links m-0">
                  <li><a href="/kota/">Home</a></li>
                  <li><a href="/kota/iit-jee-main-Advanced-coaching.asp">IIT-JEE (MAIN + ADVANCED) Coaching</a></li>
                  <li>Courses for Jee Main Advanced 2020-21</li>
          </ul>
        </div>
        <div class="col-lg-2 col-sm-3 "> <a href="/kota/iit-jee-main-advanced-coaching.asp" class=" blue_btn btn_hover d-inline-block"><i class="fa fa-angle-left f_size_20 mr-1"></i> Back</a> </div>
      </div>
    </div>
  </section>
  <style>
	#datatable-course  th {
		padding: 8px 10px;
		text-align: center;
		background: #338CDB;
		color: #fff;
		border: .5px solid #eee;
		font-size: 13px;
		vertical-align: top;
		text-align: center;
	}
	</style>
  
  <!--  content Section -->
  <section class="cours_content_wrp" ng-app="myApp" ng-controller="myController">
    <div class="container">
      <div class="row mb-3 mt-3 ">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <div class="cover_box" id="course_details">
            <h3>Course Details</h3>
            
        <h4 class="color-green"><strong>NURTURE : <span class="color-darker"> Two Year Course for Class XI Students</span></strong>
        
          <span class="applyonlinetable"> <a href="https://www.allen.ac.in/appsmvc2021/appforms/Login" class="blue_btn btn_hover d-inline-block">Apply Online</a> </span>
        </h4>
            <div class="table-responsive">
              <table  class="table table-bordered dt-responsive nowrap table-hover customtbl cetnble" >
                <thead>
                  <tr >
                    <th align="center" valign="middle"  class="zui-sticky-col">Phases</th>
                    <th align="center" valign="middle" >Commencement <br>
                      Date </th>
                    <th align="center" valign="middle" data-defaultsort="disabled">Course<br>
                      Code </th>
                    <th align="center" valign="middle" data-defaultsort="disabled">Admission<br>
                      Mode </th>
                    <th align="center" valign="middle" data-defaultsort="disabled">Medium</th>
                    <th align="center" valign="middle" data-defaultsort="disabled">Date of <br>
                      1st Instllment / Lumpsum</th>
                    <th align="center" valign="middle" data-defaultsort="disabled">Date of <br>
                      2nd Instllment</th>
                    <th align="center" valign="middle" data-defaultsort="disabled">Date of <br>
                      First Refund</th>
                    <th align="center" valign="middle" data-defaultsort="disabled">Date of <br>
                      Last Refund</th>
                  </tr>
            
                </thead>
                <tbody>
                      <tr ng-repeat="data in iitnur | orderBy : 'old.commdate'" ng-class="{active: datehighlight(data.old.commdate)}">
                    <td align="center" valign="middle" >{{data.old.phase}}</td>
                    <td align="center" valign="middle">{{data.old.commdate | date : 'dd/MM/yyyy'}}</td>
                    <td align="center" valign="middle">{{data.old.ccode}}</td>
                    <td align="center" valign="middle">{{data.old.mode}}</td>
                    <td align="center" valign="middle">{{data.old.med}}</td>
                    <td align="center" valign="middle">{{data.Istinst | date : 'dd/MM/yyyy'}}</td>
                    <td align="center" valign="middle">{{data.IIndinst | date : 'dd/MM/yyyy'}}</td>
                    <td align="center" valign="middle">{{data.Iref | date : 'dd/MM/yyyy'}}</td>
                    <td align="center" valign="middle">{{data.Lastref | date : 'dd/MM/yyyy'}}</td>
                  </tr>
                  
                  
                </tbody>
              </table>
            </div>
              <!-- Accordion v1 -->
              
        <h4 class="color-green"><strong>ENTHUSIAST  : <span class="color-darker">  One Year Course for Class XII Students (English / Hindi Medium)</span></strong>
          <span class="applyonlinetable"> <a href="https://www.allen.ac.in/appsmvc2021/appforms/Login" class="blue_btn btn_hover d-inline-block">Apply Online</a> </span>
        </h4>
              <div class="table-responsive">
              <table  class="table table-bordered dt-responsive nowrap table-hover customtbl cetnble" >
                <thead>
                  <tr >
                    <th align="center" valign="middle"  class="zui-sticky-col">Phases</th>
                    <th align="center" valign="middle" >Commencement <br>
                      Date </th>
                    <th align="center" valign="middle" data-defaultsort="disabled">Course<br>
                      Code </th>
                    <th align="center" valign="middle" data-defaultsort="disabled">Admission<br>
                      Mode </th>
                    <th align="center" valign="middle" data-defaultsort="disabled">Medium</th>
                    <th align="center" valign="middle" data-defaultsort="disabled">Date of <br>
                      1st Instllment / Lumpsum</th>
                    <th align="center" valign="middle" data-defaultsort="disabled">Date of <br>
                      2nd Instllment</th>
                    <th align="center" valign="middle" data-defaultsort="disabled">Date of <br>
                      First Refund</th>
                    <th align="center" valign="middle" data-defaultsort="disabled">Date of <br>
                      Last Refund</th>
                  </tr>
            
                </thead>
                <tbody>
                      <tr ng-repeat="data in iitenth | orderBy : 'old.commdate'" ng-class="{active: datehighlight(data.old.commdate)}">
                    <td align="center" valign="middle" >{{data.old.phase}}</td>
                    <td align="center" valign="middle">{{data.old.commdate | date : 'dd/MM/yyyy'}}</td>
                    <td align="center" valign="middle">{{data.old.ccode}}</td>
                    <td align="center" valign="middle">{{data.old.mode}}</td>
                    <td align="center" valign="middle">{{data.old.med}}</td>
                    <td align="center" valign="middle">{{data.Istinst | date : 'dd/MM/yyyy'}}</td>
                    <td align="center" valign="middle">{{data.IIndinst | date : 'dd/MM/yyyy'}}</td>
                    <td align="center" valign="middle">{{data.Iref | date : 'dd/MM/yyyy'}}</td>
                    <td align="center" valign="middle">{{data.Lastref | date : 'dd/MM/yyyy'}}</td>
                  </tr>
                  
                  
                </tbody>
              </table>
            </div>
              
        <h4 class="color-green"><strong>LEADER  : <span class="color-darker"> One Year Course for Class XII Passed/Appeared Students (English / Hindi Medium)</span></strong>
          <span class="applyonlinetable"> <a href="https://www.allen.ac.in/appsmvc2021/appforms/Login" class="blue_btn btn_hover d-inline-block">Apply Online</a> </span>
        </h4>
              <div class="table-responsive">
              <table  class="table table-bordered dt-responsive nowrap table-hover customtbl cetnble" >
                <thead>
                  <tr >
                    <th align="center" valign="middle"  class="zui-sticky-col">Phases</th>
                    <th align="center" valign="middle" >Commencement <br>
                      Date </th>
                    <th align="center" valign="middle" data-defaultsort="disabled">Course<br>
                      Code </th>
                    <th align="center" valign="middle" data-defaultsort="disabled">Admission<br>
                      Mode </th>
                    <th align="center" valign="middle" data-defaultsort="disabled">Medium</th>
                    <th align="center" valign="middle" data-defaultsort="disabled">Date of <br>
                      1st Instllment / Lumpsum</th>
                    <th align="center" valign="middle" data-defaultsort="disabled">Date of <br>
                      2nd Instllment</th>
                    <th align="center" valign="middle" data-defaultsort="disabled">Date of <br>
                      First Refund</th>
                    <th align="center" valign="middle" data-defaultsort="disabled">Date of <br>
                      Last Refund</th>
                  </tr>
            
                </thead>
                <tbody>
                      <tr ng-repeat="data in iitlead | orderBy : 'old.commdate'" ng-class="{active: datehighlight(data.old.commdate)}">
                    <td align="center" valign="middle" >{{data.old.phase}}</td>
                    <td align="center" valign="middle">{{data.old.commdate | date : 'dd/MM/yyyy'}}</td>
                    <td align="center" valign="middle">{{data.old.ccode}}</td>
                    <td align="center" valign="middle">{{data.old.mode}}</td>
                    <td align="center" valign="middle">{{data.old.med}}</td>
                    <td align="center" valign="middle">{{data.Istinst | date : 'dd/MM/yyyy'}}</td>
                    <td align="center" valign="middle">{{data.IIndinst | date : 'dd/MM/yyyy'}}</td>
                    <td align="center" valign="middle">{{data.Iref | date : 'dd/MM/yyyy'}}</td>
                    <td align="center" valign="middle">{{data.Lastref | date : 'dd/MM/yyyy'}}</td>
                  </tr>
                  
                  
                </tbody>
              </table>
            </div>
<!--                           <div id="fee_structure"></div> -->
            
          </div>
          
			
			<div class="cover_box" id="fee_structure">
                        <h3>Fee Structure</h3>
                        <div class="table-responsive">
                          <% If date <= feedate1  Then %>
                            <table ng-repeat="data in feetable "  class="table table-bordered table-striped customtbl table-hover myTable" width="100%" ng-class="{active: datehighlight(data.dateaft)}">



                                                <thead>
                                                    <tr >
                                                        <th width="20%" rowspan="2" align="center" class="text-center">Course Name</th>
                                                        <th colspan="3" align="center" class="text-center">Final Fee (Fee valid after {{data.old.dateaft | date : 'dd/MM/yyyy'}})</th>
                                                        <th colspan="3" align="center" class="text-center">Fee valid till {{data.old.dateaft | date : 'dd/MM/yyyy'}}</th>
                                                        <th colspan="3" align="center" class="text-center">Fee valid till {{data.old.datetill | date : 'dd/MM/yyyy'}} </th>
                                                    </tr>
                                                    <tr>
                                                        <th align="center" class="text-center">Total Amount*</th>
                                                        <th align="center" class="text-center">1st Installment</th>
                                                        <th align="center" class="text-center">2nd Installment**</th>
                                                        <th align="center" class="text-center">Total Amount*</th>
                                                        <th align="center" class="text-center">1st Installment</th>
                                                        <th align="center" class="text-center">2nd Installment**</th>
                                                        <th align="center" class="text-center">Total Amount*</th>
                                                        <th align="center" class="text-center">1st Installment</th>
                                                        <th align="center" class="text-center">2nd Installment**</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr ng-repeat="data in iitfee | orderBy : 'values.feecname'">
                                                        <td>{{data.feecname}} </td>
                                                        <td align="center" class=" color-red">{{ data.totamt | currency:'&#8377;&nbsp;' }} </td>
                                                        <td align="center">{{data.istamt | currency:'&#8377;&nbsp;'}}</td>
                                                        <td align="center">{{data.iiamt | currency:'&#8377;&nbsp;'}}</td>
                                                        <td align="center" class="color-red">{{data.totamt1 | currency:'&#8377;&nbsp;'}} </td>
                                                        <td align="center">{{data.istamt1 | currency:'&#8377;&nbsp;' }}</td>
                                                        <td align="center">{{data.iiamt1 | currency:'&#8377;&nbsp;'}}</td>
                                                        <td align="center" class="color-red">{{data.totamt2 | currency:'&#8377;&nbsp;'}} </td>
                                                        <td align="center">{{data.istamt2 | currency:'&#8377;&nbsp;'}}</td>
                                                        <td align="center">{{data.iiamt2 | currency:'&#8377;&nbsp;'}}</td>
                                                    </tr>
                                                   
                                         
                                                </tbody>
                          </table>
                        
                                
                                <% ElseIf date <= feedate2  Then %>
                                     <table ng-repeat="data in feetable "  class="table table-bordered table-striped customtbl table-hover myTable" width="100%" ng-class="{active: datehighlight(data.dateaft)}">



                                                <thead>
                                                    <tr >
                                                        <th width="20%" rowspan="2" align="center" class="text-center">Course Name</th>
                                                        <th colspan="3" align="center" class="text-center">Final Fee (Fee valid after {{data.old.dateaft | date : 'dd/MM/yyyy'}})</th>
                                                        <th colspan="3" align="center" class="text-center">Fee valid till {{data.old.dateaft | date : 'dd/MM/yyyy'}}</th>
                                                    </tr>
                                                    <tr>
                                                        <th align="center" class="text-center">Total Amount*</th>
                                                        <th align="center" class="text-center">1st Installment</th>
                                                        <th align="center" class="text-center">2nd Installment**</th>
                                                        <th align="center" class="text-center">Total Amount*</th>
                                                        <th align="center" class="text-center">1st Installment</th>
                                                        <th align="center" class="text-center">2nd Installment**</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr ng-repeat="data in iitfee | orderBy : 'values.feecname'">
                                                        <td>{{data.feecname}} </td>
                                                        <td align="center" class=" color-red">{{ data.totamt | currency:'&#8377;&nbsp;' }} </td>
                                                        <td align="center">{{data.istamt | currency:'&#8377;&nbsp;'}}</td>
                                                        <td align="center">{{data.iiamt | currency:'&#8377;&nbsp;'}}</td>
                                                        <td align="center" class="color-red">{{data.totamt1 | currency:'&#8377;&nbsp;'}} </td>
                                                        <td align="center">{{data.istamt1 | currency:'&#8377;&nbsp;' }}</td>
                                                        <td align="center">{{data.iiamt1 | currency:'&#8377;&nbsp;'}}</td>
                                                    </tr>
                                                   
                                         
                                                </tbody>
                          </table>
                                    <%Else%>
                                        
                                        
<table ng-repeat="data in feetable "  class="table table-bordered table-striped customtbl table-hover myTable" width="100%" ng-class="{active: datehighlight(data.dateaft)}">



                                                <thead>
                                                    <tr >
                                                        <th width="20%" align="center" class="text-center">Course Name</th>
                                                        <th align="center" class="text-center">Total Amount*</th>
                                                        <th align="center" class="text-center">1st Installment</th>
                                                        <th align="center" class="text-center">2nd Installment**</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr ng-repeat="data in iitfee | orderBy : 'values.feecname'">
                                                        <td>{{data.feecname}} </td>
                                                        <td align="center" class=" color-red">{{ data.totamt | currency:'&#8377;&nbsp;' }} </td>
                                                        <td align="center">{{data.istamt | currency:'&#8377;&nbsp;'}}</td>
                                                        <td align="center">{{data.iiamt | currency:'&#8377;&nbsp;'}}</td>
                                                    </tr>
                                                   
                                         
                                                </tbody>
                          </table>


<%End If%>
                        </div>

                        <ol>
                            <li>If Total Amount Paid in Lump-sum (one time) : Rebate of <i class="fa fa-inr"></i> 3000/- will be given.
                            </li>
                            <li>Total Deductable Amount in Refund Cases : First Refund : <i class="fa fa-inr"></i> 10000/- & Last Refund : <i class="fa fa-inr"></i> 20000/- ( <a href="/kota/2020-21/refund-rules.asp" class="color-blue">Click here for Refund Rules</a> )</li>
                            <li>2nd year fee of Nurture Course will be same as 2020-21 final fee of Enthusiast Course if deposited on or before following last dates;<br> 1st installment or lump-sum :<strong> 20.12.2020</strong>, 2nd installment : within 45
                                days of course commencement. Otherwise fee for 2021-22 will be applicable. <br> * Total Amount is inclusive of GST 18% (Present Rate). Fee can be changed, if there is levy/change in taxes by the Central/State Govt.<br>                                ** In case of installment payment option, student have to deposit PDC (Post Dated Cheque) of balance amount at the time of first installment deposit. </li>
                        </ol>
                    </div>
          
			<div class="cover_box" id="scholarship">
            <h3>Scholarship</h3>
            <table class="table table-bordered table-striped customtbl table-hover">
              <tbody>
                <tr>
                  <th class="bg-color-green">Eligibility</th>
                  <th width="1%" class="bg-color-green">Code</th>
                  <th class="bg-color-green"><strong>[%] #</strong></th>
                </tr>
                <tr>
                  <td>For any State Board(X) Top 15 Merit Students / based on marks</td>
                  <td>TS01</td>
                  <td>Upto 50%</td>
                </tr>
                <tr>
                  <td>For any State Board(XII) Top 15 Merit Students / based on marks</td>
                  <td>TS02</td>
                  <td>Upto 50%</td>
                </tr>
                <tr>
                  <td>For CBSE XII Board [ &gt;= 90% (Aggregate in all subjects) ]</td>
                  <td>TS04</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>For ICSE XII Board [ &gt;= 90% (Aggregate in all subjects) ]</td>
                  <td>TS06</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>For JEE (Advanced) 2020 Qualified students Based on Performance (For Leader Course)</td>
                  <td>TS07</td>
                  <td>10%-90%</td>
                </tr>
                <tr>
                  <td>Based on Performance in JEE(Main) 2020 (For Leader Course)</td>
                  <td>TS08</td>
                  <td>Upto 75%</td>
                </tr>
                <tr>
                  <td>For Ex-ALLEN Students of Yearlong CCP, taking admission in Leader
                    (Based on Performance of ENTHUSIAST COURSE)</td>
                  <td>TS09</td>
                  <td>10%-90%</td>
                </tr>
                <tr>
                  <td>Overall Top 20 students of ALLEN NURTURE Course
                    taking admission in ENTHUSIAST Course</td>
                  <td>TS11</td>
                  <td>10%-90%</td>
                </tr>
                <tr>
                  <td>For NTSE 1st Stage qualified Students (NCERT) for Nurture, Enthusiast &amp; Leader Course</td>
                  <td>TS14</td>
                  <td>15%</td>
                </tr>
                <tr>
                  <td>For NTSE 2nd Stage qualified Students (NCERT) for Enthusiast &amp; Leader Course</td>
                  <td>TS15</td>
                  <td>35%</td>
                </tr>
                <tr>
                  <td>For Pre RMO qualified students</td>
                  <td>PRERMO15</td>
                  <td>15%</td>
                </tr>
                <tr>
                  <td>For HBCSE Olympiad Stage NSEP/C/B/A/JS or RMO qualified Students</td>
                  <td>TS16</td>
                  <td>25%</td>
                </tr>
                <tr>
                  <td>For HBCSE Olympiad Stage INPhO/ChO/BO/AO/JSO or INMO qualified students</td>
                  <td>TS17</td>
                  <td>75%</td>
                </tr>
                <tr>
                  <td>For HBCSE Olympiad OCSC Stage Physics/Chemistry/Biology/
                    Astronomy/Jr. Science/Mathematics Qualified Students &amp; Medalist</td>
                  <td>TS35</td>
                  <td>90%</td>
                </tr>
                <tr>
                  <td>For KVPY Written Examination Qualified</td>
                  <td>TS18</td>
                  <td>25%</td>
                </tr>
                <tr>
                  <td>For KVPY Scholarship Qualified</td>
                  <td>TS19</td>
                  <td>50%</td>
                </tr>
                <tr>
                  <td>Any two or more siblings (Real Brother / Sister )
                    studying in ALLEN (Same Session)</td>
                  <td>TS24</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>On the basis of Performance in ASAT</td>
                  <td>TS31</td>
                  <td>upto 90%</td>
                </tr>
                <tr>
                  <td>Scholarship in TALLENTEX-2020 (Result declared in November 2019)</td>
                  <td>TS32</td>
                  <td>upto 90%</td>
                </tr>
              </tbody>
            </table>
            <ol>
              <li>Scholarship is in the form of Concession in Total Fee (#), student has to claim this by applying in prescribed Scholarship Application Form for Academic Session 2020-21 after admission.</li>
              <li>Scholarships TS01, TS02, TS04, TS06 are applicable for Board Result in current session(2020) only.</li>
              <li>For scholarship rules : <a href="../scholarship-rules.asp" class="color-blue">Click Here</a></li>
            </ol>
            <p style="text-align:center;"><strong>A student is eligible for only one scholarship at a time, No two criteria can be clubbed to avail deduction in fee at ALLEN.</strong></p>
          </div>
          <div class="cover_box" id="ASAT_details">
            <h3>ASAT Details</h3>
            <p> ALLEN Kota is equipped with the team of top most faculties for preparation of JEE (Main+Advanced) who are known for producing best results year after year. Our meticulously planned courses and well-timed completion of the syllabus renders sufficient time to the ngineering aspirants for self-studies and thorough revision.
              Our subject experts explain the basics in a simple manner using illustrations which helps students to get well acquainted with the topics.</p>
            <p>Our IIT JEE courses are elite in their perfectionism & proficiency and they lead the students to the peak of their preparation while simultaneously covering the school syllabus (CBSE & other Boards). The curriculum is revised frequently to keep pace with the fast hanging competitive environment. The faculty is a blend of rich academic experience and vast knowledge. The series of periodic tests are identical to the pattern of various competitive engineering examinations and give ample practice to the aspirants for the same.</p>
            <p>Getting a first-hand feel of studying in a rigorously competitive environment, our students further develop their ability of problem solving skills and demonstrate superior performance. Every test attempted by the students gives them a clear idea of their understanding of the topic, strengths and weaknesses, ranking amongst the aspirants from across India. By being a part of the on-going year round curriculum, they adapt themselves well to the pattern of paper and are successful in the examination with ease. Besides delivering knowledge we encourage and motivate our students to make most of their abilities by boosting their confidence.</p>
            <p> ALLEN is wholly committed to imparting career based education and students have the benefit of our expertise and knowledge every day throughout the year. From our core curriculum of preparatory studies to the detailed subject analysis through tests, our students have an access to all that is required to be successful in IIT JEE (Main+Advanced). </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End  content Section --> 
  
  <!--Get Assistance --> 
  <!-- #Include virtual="common/get_assistance.asp" --> 
  <!--/Get Assistance--> 
  
</section>

<!--Footer--> 
<!-- #Include virtual="/kota/include/footer.asp" --> 
      <script type="text/javascript" language="javascript">  
    var versionUpdate = (new Date()).getTime();  
    var script = document.createElement("script");  
    script.type = "text/javascript";  
    script.src = "/assets/js/course-2020-21/kota-course.js?v=" + versionUpdate;  
    //    document.getElementById("course-js").appendChild(script);
    document.body.appendChild(script);  
        //document.getElementById("course-js").innerHTML+= 'script';
    //console.log(script)
</script>
        
<script src="/assets/js/course-2020-21/course.js" type="text/javascript"></script>
<!--/Footer--> 

<script>
	$('#datatable-course').DataTable( {
		"order": [[ 1, "desc" ]], //or asc 
		paging: false,
		searching: true,
		"info": false,
		"columnDefs": [	
		{ "orderable": false, "targets": 0 }, 
		{ "orderable": false, "targets": 2 },
		{ "orderable": false, "targets": 3 },
		{ "orderable": false, "targets": 4 },
		{ "orderable": false, "targets": 5 },
		{ "orderable": false, "targets": 6 },
		{ "orderable": false, "targets": 7 },
		{ "orderable": false, "targets": 8 }
		]
	});
	
</script> 