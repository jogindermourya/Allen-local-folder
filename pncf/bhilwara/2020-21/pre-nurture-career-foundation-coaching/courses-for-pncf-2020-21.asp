<!--#include virtual="/pncf/bhilwara/include/header.asp"-->


<!--Result Header-->
<!-- #Include virtual="/pncf/common/courses-headers/result-header4.asp" -->
<!--#include virtual="/date-condition-fee.asp"-->

<!--/Result Header-->


<section class="coursebg">

    <!-- Navigation bar -->
    <section class="menu_course_wrp">
        <div class="container">
            <div class="row">
                <div class="navbar">
                    <ul class="d-flex justify-content-between" >
                        <li class="active"><a href="#course_details" class="scroll"><i class="fa fa-fw fa-book"></i>Course Details</a>
                        </li>
                        <li><a href="#fee_structure"  class="scroll"><i class="fa fa-fw fa-inr"></i>Fee Structure</a></li>
                        <li><a href="#scholarship"  class="scroll"><i class="fa fa-fw fa-graduation-cap"></i>Scholarship</a></li>
                        <li><a href="#ASAT_details"  class="scroll"><i class="fa fa-fw fa-universal-access"></i>ASAT Details</a></li>
                        <li><a href="#get_assistance"  class="scroll"><i class="fa fa-fw fa-headphones"></i>Get Assistance</a></li>
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
                        <li><a href="/pncf/bhilwara/pre-nurture-and-career-foundation-coaching.asp">Pre-Nurture And Career Foundation Coaching</a></li>
                        <li>Courses for PNCF 2020-21</li>
                    </ul>
                </div>
                <div class="col-lg-2 col-sm-3 ">
                    <a href="/pncf/bhilwara/pre-nurture-and-career-foundation-coaching.asp" class=" blue_btn btn_hover d-inline-block"><i
                            class="fa fa-angle-left f_size_20 mr-1"></i> Back</a>
                </div>
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
    <section class="cours_content_wrp" ng-app="myApp" ng-controller="bhil" ng-cloak>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">



          <div class="cover_box" id="course_details">
            <h3>Course Details</h3>
			<div class="table-responsive">
				<table class="table table-bordered table-striped coursetbl">
					<tbody>
						<tr>
							<th width="15%">Admission Mode</th>
							<td>Direct/ Tallentex (Phase-I, II, III) | ASAT (Phase-IV)</td>
							<td width="13%"><a href="/pncf/bhilwara/2020-21/about-allen-scholarship-admission-test.asp"
									class="onlineenqury_btn btn_hover" role="button">ASAT Details</a>
							</td>
						</tr>
						<tr>
							<th>Medium of Study</th>
							<td colspan="2">English</td>
						</tr>
						<tr>
							<th>Eligibility</th>
							<td colspan="2"> Students Studying in CBSE affiliated schools</td>
						</tr>
						<tr>
							<th>Course Duration</th>
							<td colspan="2">Upto February / March 2021</td>
						</tr>
						<tr>
							<th>Syllabus Covered</th>
							<td colspan="2" valign="middle">Science, Maths, English, SST (as per NCERT Syllabus) & Mental Ability.</td>
						</tr>
						<tr>
							<th>Class Venue</th>
							<td colspan="2" valign="middle"> PNCF Courses are running at Multiple
								Centers. For Classroom Center Code related query, please contact at
								Admission Counseling Desk. </td>
						</tr>
					</tbody>
				</table>
			</div>
			  
            
			<h4 class="color-green "><strong>PRE-NURTURE : </strong></h4>
            <div class="table-responsive">            
			   <table class="table table-bordered dt-responsive table-hover customtbl cetnble " width="100%">
				<thead>
					<tr>
					  <th>Class<br>
						</th>
					  <th>Phases</th>
					  <th>Commencement<br>
						Date</th>
					  <th>Course Code </th>
					  <th align="center" valign="middle"  >Date of <br>
						1st Instllment / Lumpsum</th>
					  <th align="center" valign="middle" >Date of <br>
						2nd Instllment</th>
					  <th align="center" valign="middle"  >Date of <br>
						First Refund</th>
					  <th align="center" valign="middle"  >Date of <br>
						Last Refund</th>
					</tr>
				</thead>
				<tbody ng-repeat="data in pncfpn" >
					<tr>
						<td rowspan="{{data.Courses.length}}"><span>{{ data.class }}</span></td>
						<td align="center"><span>{{data.Courses[0].phase}}</span></td>
						<td align="center"><span>{{data.Courses[0].commdate | date : 'dd/MM/yyyy' }}</span></td>
						<td align="center"><span>{{data.Courses[0].ccode}}</span></td>
						<td align="center"><span>{{data.Courses[0].Istinst  | date : 'dd/MM/yyyy'}}</span></td>
						<td align="center"><span>{{data.Courses[0].IIndinst  | date : 'dd/MM/yyyy'}}</span></td>
						<td align="center"><span>{{data.Courses[0].Iref | date : 'dd/MM/yyyy'}}</span></td>
						<td align="center"><span>{{data.Courses[0].Lastref | date : 'dd/MM/yyyy'}}</span></td>
					</tr>
					<tr align="center" ng-repeat="item in data.Courses| orderBy:'commdate'" ng-if="$index > 0" ng-class="{active: datehighlight(item.commdate)}">
						<td><span>{{item.phase}}</span></td>
						<td><span>{{item.commdate | date : 'dd/MM/yyyy' }}</span></td>
						<td><span>{{item.ccode}}</span></td>
						<td><span>{{item.Istinst  | date : 'dd/MM/yyyy'}}</span></td>
						<td><span>{{item.IIndinst  | date : 'dd/MM/yyyy'}}</span></td>
						<td><span>{{item.Iref | date : 'dd/MM/yyyy'}}</span></td>
						<td><span>{{item.Lastref | date : 'dd/MM/yyyy'}}</span></td>
					</tr>
				</tbody>
			</table>
            </div>
              <!-- Accordion v1 -->
			<h4 class="color-green "><strong>CAREER FOUNDATION : </strong></h4>
            <div class="table-responsive">            
			   <table class="table table-bordered dt-responsive table-hover customtbl cetnble " width="100%">
				<thead>
					<tr>
					  <th>Class<br>
						</th>
					  <th>Phases</th>
					  <th>Commencement<br>
						Date</th>
					  <th>Course Code </th>
					  <th align="center" valign="middle"  >Date of <br>
						1st Instllment / Lumpsum</th>
					  <th align="center" valign="middle" >Date of <br>
						2nd Instllment</th>
					  <th align="center" valign="middle"  >Date of <br>
						First Refund</th>
					  <th align="center" valign="middle"  >Date of <br>
						Last Refund</th>
					</tr>
				</thead>
				<tbody ng-repeat="data in pncfcf" >
					<tr>
						<td rowspan="{{data.Courses.length}}"><span>{{ data.class }}</span></td>
						<td align="center"><span>{{data.Courses[0].phase}}</span></td>
						<td align="center"><span>{{data.Courses[0].commdate | date : 'dd/MM/yyyy' }}</span></td>
						<td align="center"><span>{{data.Courses[0].ccode}}</span></td>
						<td align="center"><span>{{data.Courses[0].Istinst  | date : 'dd/MM/yyyy'}}</span></td>
						<td align="center"><span>{{data.Courses[0].IIndinst  | date : 'dd/MM/yyyy'}}</span></td>
						<td align="center"><span>{{data.Courses[0].Iref | date : 'dd/MM/yyyy'}}</span></td>
						<td align="center"><span>{{data.Courses[0].Lastref | date : 'dd/MM/yyyy'}}</span></td>
					</tr>
					<tr align="center" ng-repeat="item in data.Courses| orderBy:'commdate'" ng-if="$index > 0" ng-class="{active: datehighlight(item.commdate)}">
						<td><span>{{item.phase}}</span></td>
						<td><span>{{item.commdate | date : 'dd/MM/yyyy' }}</span></td>
						<td><span>{{item.ccode}}</span></td>
						<td><span>{{item.Istinst  | date : 'dd/MM/yyyy'}}</span></td>
						<td><span>{{item.IIndinst  | date : 'dd/MM/yyyy'}}</span></td>
						<td><span>{{item.Iref | date : 'dd/MM/yyyy'}}</span></td>
						<td><span>{{item.Lastref | date : 'dd/MM/yyyy'}}</span></td>
					</tr>
				</tbody>
			</table>
            </div>
              <!-- Accordion v1 -->
              <!-- Accordion v1 -->
			  <h4 class="color-green "><strong>FOR YEAR LONG COURSE BOARD : </strong></h4>
			  <div class="table-responsive">            
				 <table class="table table-bordered dt-responsive table-hover customtbl cetnble " width="100%">
				  <thead>
					  <tr>
						<th>Class<br>
						  </th>
						<th>Phases</th>
						<th>Commencement<br>
						  Date</th>
						<th>Course Code </th>
						<th align="center" valign="middle"  >Date of <br>
						  1st Instllment / Lumpsum</th>
						<th align="center" valign="middle" >Date of <br>
						  2nd Instllment</th>
						<th align="center" valign="middle"  >Date of <br>
						  First Refund</th>
						<th align="center" valign="middle"  >Date of <br>
						  Last Refund</th>
					  </tr>
				  </thead>
				  <tbody ng-repeat="data in pncfylcb" >
					  <tr>
						  <td rowspan="{{data.Courses.length}}"><span>{{ data.class }}</span></td>
						  <td align="center"><span>{{data.Courses[0].phase}}</span></td>
						  <td align="center"><span>{{data.Courses[0].commdate | date : 'dd/MM/yyyy' }}</span></td>
						  <td align="center"><span>{{data.Courses[0].ccode}}</span></td>
						  <td align="center"><span>{{data.Courses[0].Istinst  | date : 'dd/MM/yyyy'}}</span></td>
						  <td align="center"><span>{{data.Courses[0].IIndinst  | date : 'dd/MM/yyyy'}}</span></td>
						  <td align="center"><span>{{data.Courses[0].Iref | date : 'dd/MM/yyyy'}}</span></td>
						  <td align="center"><span>{{data.Courses[0].Lastref | date : 'dd/MM/yyyy'}}</span></td>
					  </tr>
					  <tr align="center" ng-repeat="item in data.Courses| orderBy:'commdate'" ng-if="$index > 0" ng-class="{active: datehighlight(item.commdate)}">
						  <td><span>{{item.phase}}</span></td>
						  <td><span>{{item.commdate | date : 'dd/MM/yyyy' }}</span></td>
						  <td><span>{{item.ccode}}</span></td>
						  <td><span>{{item.Istinst  | date : 'dd/MM/yyyy'}}</span></td>
						  <td><span>{{item.IIndinst  | date : 'dd/MM/yyyy'}}</span></td>
						  <td><span>{{item.Iref | date : 'dd/MM/yyyy'}}</span></td>
						  <td><span>{{item.Lastref | date : 'dd/MM/yyyy'}}</span></td>
					  </tr>
				  </tbody>
			  </table>
			  </div>
			<div ng-repeat="data in bhubcent" ><h5>CLASSROOM CENTERS : <br><br> {{data.centdetail}}</h5></div>
			<p><b>* Keep visiting our website for updated Class Commencement Dates, same will also be informed on student's registered Mobile Numbers at least 7 days in advance.</b></p> 
          </div>
			<div class="cover_box" id="fee_structure">
                        <h3>Fee Structure</h3>
						<div class="table-responsive">
		  <% If date <= bhubfeedate1  Then %>
			<table class="table-bordered dt-responsive table-hover customtbl cetnble" width="100%"  >
				<thead>
					<tr>
						<th width="20%" rowspan="2" align="center" class="text-center">Course Name</th>
						<th width="20%" rowspan="2" align="center" class="text-center">Phase</th>
						<th colspan="3" align="center" class="text-center"  >Final Fee (Fee valid after <%=bhubfeedate2%>)</th>
						<th colspan="3" align="center" class="text-center">Fee valid till <%=adifeedate2%>  </th>
						<th colspan="3" align="center" class="text-center">Fee valid till <%=bhubfeedate1%> </th>
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
						<th colspan="2" align="center" class="text-center">2nd Installment**</th>
					</tr>
				</thead>
				<tbody ng-repeat="data in pncffee">
					<tr>
						<td rowspan="{{data.Courses.length}}"><span>{{data.feecname}}</span></td>
						<td ><span>{{data.Courses[0].phasefee}}</span></td>
						<td align="right" class=" color-red"><span>{{ data.Courses[0].totamt | currency:'&#8377;&nbsp;' }}   </span></td>
						<td align="right"><span>{{ data.Courses[0].istamt | currency:'&#8377;&nbsp;' }}</span></td>
						<td align="right"><span>{{ data.Courses[0].iiamt | currency:'&#8377;&nbsp;' }}</span></td>
						<td align="right"  class=" color-red" >{{data.Courses[0].totamt1 | currency:'&#8377;&nbsp;'}}</td>
						<td align="right" >{{ data.Courses[0].istamt1 | currency:'&#8377;&nbsp;' }} </td>
						<td align="right">{{data.Courses[0].iiamt1 | currency:'&#8377;&nbsp;' }}</td>
						<td align="right" class="color-red">{{data.Courses[0].totamt2 | currency:'&#8377;&nbsp;'}}</td>
						<td align="right" >{{data.Courses[0].istamt2 | currency:'&#8377;&nbsp;'}} </td>
						<td align="right">{{data.Courses[0].iiamt2 | currency:'&#8377;&nbsp;'}}</td>
					</tr>
					<tr ng-repeat="item in data.Courses " ng-if="$index > 0" >
						<td><span>{{item.phasefee}}</span></td>
						<td align="right" class=" color-red"><span>{{item.totamt | currency:'&#8377;&nbsp;' }}</span></td>
						<td align="right"><span>{{item.istamt | currency:'&#8377;&nbsp;'}}</span></td>
						<td align="right"><span>{{item.iiamt | currency:'&#8377;&nbsp;'}}</span></td>
						<td align="right" class=" color-red"><span>{{item.totamt1 | currency:'&#8377;&nbsp;' }}</span></td>
						<td align="right"><span>{{item.istamt1 | currency:'&#8377;&nbsp;'}}</span></td>
						<td align="right"><span>{{item.iiamt1 | currency:'&#8377;&nbsp;'}}</span></td>
						<td align="right" class=" color-red"><span>{{item.totamt2 | currency:'&#8377;&nbsp;' }}</span></td>
						<td align="right"><span>{{item.istamt2 | currency:'&#8377;&nbsp;'}}</span></td>
						<td align="right"><span>{{item.iiamt2 | currency:'&#8377;&nbsp;'}}</span></td>
					</tr>
				</tbody>
			</table>
                        
                                
		<% ElseIf date <= bhubfeedate2  Then %>
			<table class="table table-bordered table-striped customtbl table-hover myTable" width="100%"  >
				<thead>
					<tr>
						<th width="20%" rowspan="2" align="center" class="text-center">Course Name</th>
						<th width="20%" rowspan="2" align="center" class="text-center">Phase</th>
						<th colspan="3" align="center" class="text-center"  >Final Fee (Fee valid after <%=bhubfeedate2%>)</th>
						<th colspan="3" align="center" class="text-center">Fee valid till <%=bhubfeedate2%>  </th>
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
				<tbody ng-repeat="data in pncffee">
					<tr>
						<td rowspan="{{data.Courses.length}}"><span>{{data.feecname}}</span></td>
						<td ><span>{{data.Courses[0].phasefee}}</span></td>
						<td align="right" class=" color-red"><span>{{ data.Courses[0].totamt | currency:'&#8377;&nbsp;' }}   </span></td>
						<td align="right"><span>{{ data.Courses[0].istamt | currency:'&#8377;&nbsp;' }}</span></td>
						<td align="right"><span>{{ data.Courses[0].iiamt | currency:'&#8377;&nbsp;' }}</span></td>
						<td align="right"  class=" color-red" >{{data.Courses[0].totamt1 | currency:'&#8377;&nbsp;'}}</td>
						<td align="right" >{{ data.Courses[0].istamt1 | currency:'&#8377;&nbsp;' }} </td>
						<td align="right">{{data.Courses[0].iiamt1 | currency:'&#8377;&nbsp;' }}</td>
					</tr>
					<tr ng-repeat="item in data.Courses " ng-if="$index > 0" >
						<td><span>{{item.phasefee}}</span></td>
						<td align="right" class=" color-red"><span>{{item.totamt | currency:'&#8377;&nbsp;' }}</span></td>
						<td align="right"><span>{{item.istamt | currency:'&#8377;&nbsp;'}}</span></td>
						<td align="right"><span>{{item.iiamt | currency:'&#8377;&nbsp;'}}</span></td>
						<td align="right" class=" color-red"><span>{{item.totamt1 | currency:'&#8377;&nbsp;' }}</span></td>
						<td align="right"><span>{{item.istamt1 | currency:'&#8377;&nbsp;'}}</span></td>
						<td align="right"><span>{{item.iiamt1 | currency:'&#8377;&nbsp;'}}</span></td>
					</tr>
				</tbody>
			  </table>
		<%Else%>
                                        
                
                                        
                                        
                                        
					<table class="table-bordered dt-responsive table-hover customtbl cetnble " width="100%">
						<thead>
							<tr>
							  <th>Course Name</th>
							  <th>Phase</th>
							  <th align="right" class="text-center">Total Amount*</th>
							  <th align="right" class="text-center">1st Installment</th>
							  <th align="right" class="text-center">2nd Installment**</th>                  
							</tr>
						</thead>
						<tbody ng-repeat="data in pncffee" >
							<tr >

							   <td rowspan="{{data.Courses.length}}"><span>{{data.feecname}}</span></td>
								<td ><span>{{data.Courses[0].phasefee}}</span></td>
								<td align="right" class=" color-red"><span>{{ data.Courses[0].totamt | currency:'&#8377;&nbsp;' }}    </span></td>
								<td align="right"><span>{{ data.Courses[0].istamt | currency:'&#8377;&nbsp;' }}</span></td>
								<td align="right"><span>{{ data.Courses[0].iiamt | currency:'&#8377;&nbsp;' }}</span></td>
							  </tr>
							<tr  ng-repeat="item in data.Courses " ng-if="$index > 0" >
								 <td><span>{{item.phasefee}}</span></td>
								<td align="right" class=" color-red"><span>{{item.totamt | currency:'&#8377;&nbsp;' }}</span></td>
								<td align="right"><span>{{item.istamt | currency:'&#8377;&nbsp;'}}</span></td>
								<td align="right"><span>{{item.iiamt | currency:'&#8377;&nbsp;'}}</span></td>
							  </tr>
						</tbody>
											</table>



						<%End If%>
                        </div>
						<p><b>Important Points :</b></p>
                        <ol>
                            <li>If Total Amount Paid in Lump-sum (one time) : For Class VI, VII & VIII Rebate of  2000/- & For Class IX & X Rebate of  3000/- will be given.</li>
                            <li>Total Deductable Amount in Refund Cases : First Refund : <i class="fa fa-inr"></i> 6000/- & Last Refund : <i class="fa fa-inr"></i> 9000/- ( <a href="/bhilwara/2020-21/refund-rules.asp" class="color-blue">Click here for Refund Rules</a> )</li>
                            <li>Total Deductable Amount <b>Refund Cases for Class X (Year Long Board) :</b> First Refund : <i class="fa fa-inr"></i> 5000/- & Last Refund : <i class="fa fa-inr"></i> 10000/- ( <a href="/bhilwara/2020-21/refund-rules.asp" class="color-blue">Click here for Refund Rules</a> )</li>
							<li>In case of installment payment option, student have to deposit PDC (Post Dated Cheque) of balance amount at the time of first installment deposit.</li>
							<li>Total Amount is inclusive of GST 18% (Present Rate). Fee can be changed, if there is levy/change in taxes by the Central/State Govt.</li>
                        </ol>
                    </div>


			<div class="cover_box" id="scholarship">
				<h3>Scholarship</h3>
				<div class="table-responsive">
					<table class="table-bordered dt-responsive table-hover customtbl cetnble">
						<tbody>
							<tr>
								<th>Eligibility</th>
								<th style="width: 1%">Code</th>
								<th><strong>[%] #</strong></th>
							</tr>
							<tr>
								<td>For Top 3 Rank holders in any Maths / Science Olympiad in previous Std. at National &amp; International Level </td>
								<td style="width: 1%">PS03 </td>
								<td>50%</td>
							</tr>
							<tr>
								<td>For Top 3 State Rank Holder or Top 100 National / International Rank Holder in any Maths / Science Olympiad in Previous Std. </td>
								<td style="width: 1%">PS06</td>
								<td>20%</td>
							</tr>
							<tr>
								<td>For Pre RMO qualified students</td>
								<td style="width: 1%">PS36</td>
								<td valign="middle">25%</td>
							</tr>
							<tr>
								<td>For HBCSE Olympiad Stage NSEP/C/B/A/JS or RMO qualified Students </td>
								<td style="width: 1%">PS08</td>
								<td valign="middle">60%</td>
							</tr>
							<tr>
								<td>For HBCSE Olympiad Stage INPhO/ChO/BO/AO/JSO or INMO qualified students</td>
								<td style="width: 1%">PS09</td>
								<td valign="middle">80%</td>
							</tr>
							<tr>
								<td>For HBCSE Olympiad OCSC Stage Physics/Chemistry/Biology/Astronomy/Jr. Science/Mathematics Qualified Students &amp; Medalist </td>
								<td style="width: 1%">PS35</td>
								<td valign="middle">90%</td>
							</tr>
							<tr>
								<td>Any two or more siblings (Real Brother / Sister ) studying in ALLEN (Same Session) </td>
								<td style="width: 1%">PS10</td>
								<td valign="middle">10%</td>
							</tr>
							<tr>
								<td>On the basis of Performance in ASAT<span  style="color:#ff0000; font-weight:bold;"> *</span></td>
								<td style="width: 1%">PS31</td>
								<td valign="middle">upto 90%</td>
							</tr>
							<tr>
								<td>On the basis of Performance in Tallentex-2020 (Result declared in November 2019)</td>
								<td style="width: 1%">PS32</td>
								<td valign="middle">upto 90%</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div class="listingwrp">
					<ol>
						<li>Scholarship is in the form of Concession in Total Fee, student has to claim this by applying in prescribed Scholarship Application Form for Academic Session 2020-21 after admission.</li>
						<li>For scholarship rules : <a href="/pncf/bhilwara/2020-21/scholarship-rules.asp">Click Here</a></li>
					</ol>
					<p>* Scholarship awarded in an ASAT can be availed only till one day prior to the next ASAT. </p>

					<div class="text-center">
						<p class="text-center bg_txt m-auto"><strong>A student is eligible for only one scholarship at a time, No two criteria can be clubbed to avail deduction in fee at ALLEN.</strong></p>
					</div>
				</div>
			</div>

			<div class="cover_box" id="ASAT_details">
				<h3>ASAT Details</h3>
				<p> ALLEN bhilwara is equipped with the team of top most faculties for preparation of JEE (Main+Advanced) who are known for producing best results year after year. Our meticulously planned courses and well-timed completion of the syllabus renders sufficient time to the ngineering aspirants for self-studies and thorough revision. Our subject experts explain the basics in a simple manner using illustrations which helps students to get well acquainted with the topics.</p>
				<p>Our IIT JEE courses are elite in their perfectionism & proficiency and they lead the students to the peak of their preparation while simultaneously covering the school syllabus (CBSE & other Boards).The curriculum is revised frequently to keep pace with the fast hanging competitive environment. The faculty is a blend of rich academic experience and vast knowledge. The series of periodic tests are identical to the pattern of various competitive engineering examinations and give ample practice to the aspirants for the same.</p>

				<p>Getting a first-hand feel of studying in a rigorously competitive environment, our students further develop their ability of problem solving skills and demonstrate superior performance. Every test attempted by the students gives them a clear idea of their understanding of the topic, strengths and weaknesses, ranking amongst the aspirants from across India. By being a part of the on-going year round curriculum, they adapt themselves well to the pattern of paper and are successful in the examination with ease. Besides delivering knowledge we encourage and motivate our students to make most of their abilities by boosting their confidence.</p>
				<p> ALLEN is wholly committed to imparting career based education and students have the benefit of our expertise and knowledge every day throughout the year. From our core curriculum of preparatory studies to the detailed subject analysis through tests, our students have an access to all that is required to be successful in IIT JEE (Main+Advanced). <a href="/pncf/bhilwara/2020-21/about-allen-scholarship-admission-test.asp">View Details</a>
				</p>
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
<!--#include virtual="/pncf/bhilwara/include/footer.asp"-->
<!--/Footer-->
<script src="/assets/js/angular.min.js" ></script>
<script type="text/javascript" language="javascript">  
    var versionUpdate = (new Date()).getTime();  
    var script = document.createElement("script");  
    script.type = "text/javascript";  
    script.src = "/assets/js/course-2020-21/course1.js?v=" + versionUpdate;  
    document.body.appendChild(script);  
</script>
        
<script src="/assets/js/course-2020-21/course1.js" type="text/javascript"></script>
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