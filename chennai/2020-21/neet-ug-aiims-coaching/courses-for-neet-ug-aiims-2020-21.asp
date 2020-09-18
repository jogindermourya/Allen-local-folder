<!-- #Include virtual="/chennai/include/header.asp" -->

<!--Result Header-->
<!-- #Include virtual="common/courses-headers/result-header2.asp" -->
<!--#include virtual="/date-condition-fee.asp"-->
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
                   <li><a href="/chennai/neet-ug-aiims-coaching.asp">NEET-UG | AIIMS Coaching </a></li>
                   <li>NEET UG AIIMS Coaching Details</li>
               </ul>
            </div>
             <div class="col-lg-2 col-sm-3 ">
                <a href="/ahmedabad/neet-ug-aiims-coaching.asp" class=" blue_btn btn_hover d-inline-block"><i class="fa fa-angle-left f_size_20 mr-1"></i> Back</a>
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
    <section class="cours_content_wrp" ng-app="myApp" ng-controller="chen" ng-cloak >
       <div class="container">
          <div class="row">
             <div class="col-lg-12 col-md-12 col-sm-12">
                
          <div class="cover_box" id="course_details">
            <h3>Course Details</h3>
            
			  <h4 class="color-green"><strong>NURTURE (PCB): <span class="color-darker"> Two Year Course for Class XI Students (English Medium Students)</span></strong></h4>
            <div class="table-responsive">
              <table class="table table-bordered dt-responsive table-hover customtbl cetnble " width="100%">
            <thead>
                <tr>
                  <th>Phases</th>
                  <th>Commencement<br>
                    Date</th>
                  <th>Course Code </th>
                  <th>Admission<br>
                    Mode</th>
                  <th>Medium</th>
                  <th align="center" valign="middle"  >Date of <br>
                    1st Instllment / Lumpsum</th>
                  <th align="center" valign="middle" >Date of <br>
                    2nd Instllment</th>
                  <th align="center" valign="middle"  >Date of <br>
                    First Refund</th>
                  <th align="center" valign="middle"  >Date of <br>
                    Last Refund</th>
                  <!-- <th>Classroom<br>
                    Center Code</th> -->
                </tr>
            </thead>
            <tbody ng-repeat="data in mednurpcb" >
                <tr>
                    <td align="center"><span>{{data.Courses[0].phase}}</span></td>
                    <td align="center"><span>{{data.Courses[0].commdate | date : 'dd/MM/yyyy' }}</span></td>
                    <td align="center"><span>{{data.Courses[0].ccode}}</span></td>
                    <td align="center"><span>{{data.Courses[0].mode}}</span></td>
                    <td align="center"><span>{{data.Courses[0].med}}</span></td>
                    <td align="center"><span>{{data.Courses[0].Istinst  | date : 'dd/MM/yyyy'}}</span></td>
                    <td align="center"><span>{{data.Courses[0].IIndinst  | date : 'dd/MM/yyyy'}}</span></td>
                    <td align="center"><span>{{data.Courses[0].Iref | date : 'dd/MM/yyyy'}}</span></td>
                    <td align="center"><span>{{data.Courses[0].Lastref | date : 'dd/MM/yyyy'}}</span></td>
                    <!-- <td rowspan="{{data.Courses.length}}"><span>{{ data.centdetail }}</span></td> -->
                </tr>
                <tr align="center" ng-repeat="item in data.Courses| orderBy:'commdate'" ng-if="$index > 0" ng-class="{active: datehighlight(item.commdate)}">
                    <td><span>{{item.phase}}</span></td>
                    <td><span>{{item.commdate | date : 'dd/MM/yyyy' }}</span></td>
                    <td><span>{{item.ccode}}</span></td>
                    <td><span>{{item.mode}}</span></td>
                    <td><span>{{item.med}}</span></td>
                    <td><span>{{item.Istinst  | date : 'dd/MM/yyyy'}}</span></td>
                    <td><span>{{item.IIndinst  | date : 'dd/MM/yyyy'}}</span></td>
                    <td><span>{{item.Iref | date : 'dd/MM/yyyy'}}</span></td>
                    <td><span>{{item.Lastref | date : 'dd/MM/yyyy'}}</span></td>
                </tr>
            </tbody>
        </table>
            </div>
              
			  <h4 class="color-green"><strong>NURTURE (PCB + MATHS): <span class="color-darker"> Two Year Course for Class XI Students (CHSE/ODISHA English Medium)</span></strong></h4>
            <div class="table-responsive">
              <table class="table table-bordered dt-responsive table-hover customtbl cetnble " width="100%">
            <thead>
                <tr>
                  <th>Phases</th>
                  <th>Commencement<br>
                    Date</th>
                  <th>Course Code </th>
                  <th>Admission<br>
                    Mode</th>
                  <th>Medium</th>
                  <th align="center" valign="middle"  >Date of <br>
                    1st Instllment / Lumpsum</th>
                  <th align="center" valign="middle" >Date of <br>
                    2nd Instllment</th>
                  <th align="center" valign="middle"  >Date of <br>
                    First Refund</th>
                  <th align="center" valign="middle"  >Date of <br>
                    Last Refund</th>
                  <!-- <th>Classroom<br>
                    Center Code</th> -->
                </tr>
            </thead>
            <tbody ng-repeat="data in mednurpcbm" >
                <tr>
                    <td align="center"><span>{{data.Courses[0].phase}}</span></td>
                    <td align="center"><span>{{data.Courses[0].commdate | date : 'dd/MM/yyyy' }}</span></td>
                    <td align="center"><span>{{data.Courses[0].ccode}}</span></td>
                    <td align="center"><span>{{data.Courses[0].mode}}</span></td>
                    <td align="center"><span>{{data.Courses[0].med}}</span></td>
                    <td align="center"><span>{{data.Courses[0].Istinst  | date : 'dd/MM/yyyy'}}</span></td>
                    <td align="center"><span>{{data.Courses[0].IIndinst  | date : 'dd/MM/yyyy'}}</span></td>
                    <td align="center"><span>{{data.Courses[0].Iref | date : 'dd/MM/yyyy'}}</span></td>
                    <td align="center"><span>{{data.Courses[0].Lastref | date : 'dd/MM/yyyy'}}</span></td>
                    <!-- <td rowspan="{{data.Courses.length}}"><span>{{ data.centdetail }}</span></td> -->
                </tr>
                <tr align="center" ng-repeat="item in data.Courses| orderBy:'commdate'" ng-if="$index > 0" ng-class="{active: datehighlight(item.commdate)}">
                    <td><span>{{item.phase}}</span></td>
                    <td><span>{{item.commdate | date : 'dd/MM/yyyy' }}</span></td>
                    <td><span>{{item.ccode}}</span></td>
                    <td><span>{{item.mode}}</span></td>
                    <td><span>{{item.med}}</span></td>
                    <td><span>{{item.Istinst  | date : 'dd/MM/yyyy'}}</span></td>
                    <td><span>{{item.IIndinst  | date : 'dd/MM/yyyy'}}</span></td>
                    <td><span>{{item.Iref | date : 'dd/MM/yyyy'}}</span></td>
                    <td><span>{{item.Lastref | date : 'dd/MM/yyyy'}}</span></td>
                </tr>
            </tbody>
        </table>
            </div>

			  
            <h4 class="color-green"><strong>ENTHUSIAST (PCB): <span class="color-darker"> One Year Course for Class XII Students (English Medium Students)</span></strong></h4>
            <div class="table-responsive">
              <table class="table table-bordered dt-responsive table-hover customtbl cetnble " width="100%">
            <thead>
                <tr>
                  <th>Phases</th>
                  <th>Commencement<br>
                    Date</th>
                  <th>Course Code </th>
                  <th>Admission<br>
                    Mode</th>
                  <th>Medium</th>
                  <th align="center" valign="middle"  >Date of <br>
                    1st Instllment / Lumpsum</th>
                  <th align="center" valign="middle" >Date of <br>
                    2nd Instllment</th>
                  <th align="center" valign="middle"  >Date of <br>
                    First Refund</th>
                  <th align="center" valign="middle"  >Date of <br>
                    Last Refund</th>
                  <!-- <th>Classroom<br>
                    Center Code</th> -->
                </tr>
            </thead>
            <tbody ng-repeat="data in medenthpcb" >
                <tr>
                    <td align="center"><span>{{data.Courses[0].phase}}</span></td>
                    <td align="center"><span>{{data.Courses[0].commdate | date : 'dd/MM/yyyy' }}</span></td>
                    <td align="center"><span>{{data.Courses[0].ccode}}</span></td>
                    <td align="center"><span>{{data.Courses[0].mode}}</span></td>
                    <td align="center"><span>{{data.Courses[0].med}}</span></td>
                    <td align="center"><span>{{data.Courses[0].Istinst  | date : 'dd/MM/yyyy'}}</span></td>
                    <td align="center"><span>{{data.Courses[0].IIndinst  | date : 'dd/MM/yyyy'}}</span></td>
                    <td align="center"><span>{{data.Courses[0].Iref | date : 'dd/MM/yyyy'}}</span></td>
                    <td align="center"><span>{{data.Courses[0].Lastref | date : 'dd/MM/yyyy'}}</span></td>
                    <!-- <td rowspan="{{data.Courses.length}}"><span>{{ data.centdetail }}</span></td> -->
                </tr>
                <tr align="center" ng-repeat="item in data.Courses| orderBy:'commdate'" ng-if="$index > 0" ng-class="{active: datehighlight(item.commdate)}">
                    <td><span>{{item.phase}}</span></td>
                    <td><span>{{item.commdate | date : 'dd/MM/yyyy' }}</span></td>
                    <td><span>{{item.ccode}}</span></td>
                    <td><span>{{item.mode}}</span></td>
                    <td><span>{{item.med}}</span></td>
                    <td><span>{{item.Istinst  | date : 'dd/MM/yyyy'}}</span></td>
                    <td><span>{{item.IIndinst  | date : 'dd/MM/yyyy'}}</span></td>
                    <td><span>{{item.Iref | date : 'dd/MM/yyyy'}}</span></td>
                    <td><span>{{item.Lastref | date : 'dd/MM/yyyy'}}</span></td>
                </tr>
            </tbody>
              </table>
            </div>
            <h4 class="color-green"><strong>ENTHUSIAST (PCB + MATHS): <span class="color-darker"> One Year Course for Class XII Students (English Medium Students)</span></strong></h4>
            <div class="table-responsive">
              <table class="table table-bordered dt-responsive table-hover customtbl cetnble " width="100%">
            <thead>
                <tr>
                  <th>Phases</th>
                  <th>Commencement<br>
                    Date</th>
                  <th>Course Code </th>
                  <th>Admission<br>
                    Mode</th>
                  <th>Medium</th>
                  <th align="center" valign="middle"  >Date of <br>
                    1st Instllment / Lumpsum</th>
                  <th align="center" valign="middle" >Date of <br>
                    2nd Instllment</th>
                  <th align="center" valign="middle"  >Date of <br>
                    First Refund</th>
                  <th align="center" valign="middle"  >Date of <br>
                    Last Refund</th>
                  <!-- <th>Classroom<br>
                    Center Code</th> -->
                </tr>
            </thead>
            <tbody ng-repeat="data in medenthpcbm" >
                <tr>
                    <td align="center"><span>{{data.Courses[0].phase}}</span></td>
                    <td align="center"><span>{{data.Courses[0].commdate | date : 'dd/MM/yyyy' }}</span></td>
                    <td align="center"><span>{{data.Courses[0].ccode}}</span></td>
                    <td align="center"><span>{{data.Courses[0].mode}}</span></td>
                    <td align="center"><span>{{data.Courses[0].med}}</span></td>
                    <td align="center"><span>{{data.Courses[0].Istinst  | date : 'dd/MM/yyyy'}}</span></td>
                    <td align="center"><span>{{data.Courses[0].IIndinst  | date : 'dd/MM/yyyy'}}</span></td>
                    <td align="center"><span>{{data.Courses[0].Iref | date : 'dd/MM/yyyy'}}</span></td>
                    <td align="center"><span>{{data.Courses[0].Lastref | date : 'dd/MM/yyyy'}}</span></td>
                    <!-- <td rowspan="{{data.Courses.length}}"><span>{{ data.centdetail }}</span></td> -->
                </tr>
                <tr align="center" ng-repeat="item in data.Courses| orderBy:'commdate'" ng-if="$index > 0" ng-class="{active: datehighlight(item.commdate)}">
                    <td><span>{{item.phase}}</span></td>
                    <td><span>{{item.commdate | date : 'dd/MM/yyyy' }}</span></td>
                    <td><span>{{item.ccode}}</span></td>
                    <td><span>{{item.mode}}</span></td>
                    <td><span>{{item.med}}</span></td>
                    <td><span>{{item.Istinst  | date : 'dd/MM/yyyy'}}</span></td>
                    <td><span>{{item.IIndinst  | date : 'dd/MM/yyyy'}}</span></td>
                    <td><span>{{item.Iref | date : 'dd/MM/yyyy'}}</span></td>
                    <td><span>{{item.Lastref | date : 'dd/MM/yyyy'}}</span></td>
                </tr>
            </tbody>
              </table>
            </div>
            <!-- Accordion v1 -->
              
				<h4 class="color-green"><strong>LEADER (PCB): <span class="color-darker">  One Year Course for Class XII Passed / Appeared Students (English Medium Students) </span></strong></h4>
              <div class="table-responsive">
                <table class="table table-bordered dt-responsive table-hover customtbl cetnble " width="100%">
            <thead>
                <tr>
                  <th>Phases</th>
                  <th>Commencement<br>
                    Date</th>
                  <th>Course Code </th>
                  <th>Admission<br>
                    Mode</th>
                  <th>Medium</th>
                  <th align="center" valign="middle"  >Date of <br>
                    1st Instllment / Lumpsum</th>
                  <th align="center" valign="middle" >Date of <br>
                    2nd Instllment</th>
                  <th align="center" valign="middle"  >Date of <br>
                    First Refund</th>
                  <th align="center" valign="middle"  >Date of <br>
                    Last Refund</th>
                  <!-- <th>Classroom<br>
                    Center Code</th> -->
                </tr>
            </thead>
            <tbody ng-repeat="data in medleadpcb" >
                <tr>
                    <td align="center"><span>{{data.Courses[0].phase}}</span></td>
                    <td align="center"><span>{{data.Courses[0].commdate | date : 'dd/MM/yyyy' }}</span></td>
                    <td align="center"><span>{{data.Courses[0].ccode}}</span></td>
                    <td align="center"><span>{{data.Courses[0].mode}}</span></td>
                    <td align="center"><span>{{data.Courses[0].med}}</span></td>
                    <td align="center"><span>{{data.Courses[0].Istinst  | date : 'dd/MM/yyyy'}}</span></td>
                    <td align="center"><span>{{data.Courses[0].IIndinst  | date : 'dd/MM/yyyy'}}</span></td>
                    <td align="center"><span>{{data.Courses[0].Iref | date : 'dd/MM/yyyy'}}</span></td>
                    <td align="center"><span>{{data.Courses[0].Lastref | date : 'dd/MM/yyyy'}}</span></td>
                    <!-- <td rowspan="{{data.Courses.length}}"><span>{{ data.centdetail }}</span></td> -->
                </tr>
                <tr align="center" ng-repeat="item in data.Courses| orderBy:'commdate'" ng-if="$index > 0" ng-class="{active: datehighlight(item.commdate)}">
                    <td><span>{{item.phase}}</span></td>
                    <td><span>{{item.commdate | date : 'dd/MM/yyyy' }}</span></td>
                    <td><span>{{item.ccode}}</span></td>
                    <td><span>{{item.mode}}</span></td>
                    <td><span>{{item.med}}</span></td>
                    <td><span>{{item.Istinst  | date : 'dd/MM/yyyy'}}</span></td>
                    <td><span>{{item.IIndinst  | date : 'dd/MM/yyyy'}}</span></td>
                    <td><span>{{item.Iref | date : 'dd/MM/yyyy'}}</span></td>
                    <td><span>{{item.Lastref | date : 'dd/MM/yyyy'}}</span></td>
                </tr>
            </tbody>
        </table>
              </div>
            <div ng-repeat="data in chencent" ><h5> CLASSROOM CENTERS : <br><br> {{data.centdetail}}</div>   
            <p>* Keep visiting our website for updated Class Commencement Dates, same will also be informed on student's registered Mobile Numbers at least 7 days in advance.</p>
          </div>
          </div>
        </div>

          <div class="cover_box" id="fee_structure">
            <h3>Fee Structure</h3>
            <div class="table-responsive">
              <% If date <= bhubfeedate1  Then %>
                <table class="table table-bordered table-striped customtbl table-hover myTable" width="100%"  >
                  <thead>
                      <tr>
                          <th width="20%" rowspan="2" align="center" class="text-center">Course Name</th>
                          <th width="20%" rowspan="2" align="center" class="text-center">Phase</th>
                          <th colspan="3" align="center" class="text-center"  >
                              Final Fee (Fee valid after <%=bhubfeedate2%>)</th>
                          <th colspan="3" align="center" class="text-center">Fee valid till <%=bhubfeedate2%>  </th>
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
                  <tbody ng-repeat="data in medfee">
                    <tr  >
                        <td rowspan="{{data.Courses.length}}"><span>{{data.feecname}}</span></td>
                        <td ><span>{{data.Courses[0].phasefee}}</span></td>
                        <td align="right" class=" color-red"><span>{{ data.Courses[0].totamt | currency:'&#8377;&nbsp;' }}    </span></td>
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
                    
                <table class="table table-bordered table-striped customtbl table-hover myTable" width="100%">
                  <thead>
                      <tr>
                          <th width="20%" rowspan="2" align="center" class="text-center">Course Name</th>
                          <th width="20%" rowspan="2" align="center" class="text-center">Phase</th>
                          <th colspan="3" align="center" class="text-center">Final Fee (Fee valid after <%=bhubfeedate2%>)</th>
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
                    <tbody ng-repeat="data in medfee">
                      <tr>
                          <td rowspan="{{data.Courses.length}}"><span>{{data.feecname}}</span></td>
                          <td ><span>{{data.Courses[0].phasefee}}</span></td>
                          <td align="right" class=" color-red"><span>{{ data.Courses[0].totamt | currency:'&#8377;&nbsp;' }}    </span></td>
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
              <table class="table table-bordered dt-responsive table-hover customtbl cetnble " width="100%">
                <thead>
                    <tr>
                      <th>Course Name</th>
                      <th>Phase</th>
                      <th align="right" class="text-center">Total Amount*</th>
                      <th align="right" class="text-center">1st Installment</th>
                      <th align="right" class="text-center">2nd Installment**</th>                  
                    </tr>
                </thead>
                <tbody ng-repeat="data in medfee" >
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

            <ol>
                <li>If Total Amount Paid in Lump-sum (one time) : For PCB Courses Rebate of <i class="fa fa-inr"></i> 6000/- and For PCB + Maths Courses Rebate of <i class="fa fa-inr"></i> 8000/- will be given..
                </li>
                <li>Total Deductable Amount in Refund Cases : First Refund : <i class="fa fa-inr"></i> 25000/- & Last Refund : <i class="fa fa-inr"></i> 50000/- ( <a href="/chennai/2020-21/refund-rules.asp" class="color-blue">Click here for Refund Rules</a> )</li>
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
                      <th class="bg-color-green" style="width: 1%">Code</th>
                      <th class="bg-color-green"><strong>[%] #</strong></th>
                    </tr>
                    <tr>
                      <td>For any State Board(X) Top 15 Merit Students / based on marks</td>
                      <td>MS01</td>
                      <td>Upto 50%</td>
                    </tr>
                    <tr>
                      <td>For any State Board(XII) Top 15 Merit Students / based on marks </td>
                      <td>MS02</td>
                      <td>Upto 50%</td>
                    </tr>
                    <tr>
                      <td>For CBSE XII Board [ >= 90% (Aggregate in all subjects) ] </td>
                      <td>MS04</td>
                      <td>10%</td>
                    </tr>
                    <tr>
                      <td>For ICSE XII Board [>= 90% (Aggregate in all subjects) ] </td>
                      <td>MS06</td>
                      <td>10%</td>
                    </tr>
                    <tr>
                      <td>For NEET-UG 2020 Based on performance [for details visit our website] ( Not Ex-ALLEN Students )</td>
                      <td >MS07</td>
                      <td >Upto 80%</td>
                    </tr>
                    <tr>
                      <td>For NEET-UG 2020 Based on Performance (For Ex-ALLEN Students of Yearlong CCP)</td>
                      <td>MS25</td>
                      <td >Upto 90%</td>
                    </tr>
                    <tr>
                      <td>For Ex-ALLEN Students of Yearlong CCP, taking admission in Leader / Achiever Course</td>
                      <td>MS09</td>
                      <td>10%</td>
                    </tr>
                    <tr>
                      <td>Overall Top 20 Students of NURTURE [ALL PHASES] taking admission in Enthusiast Course</td>
                      <td>MS11</td>
                      <td>10%-90%</td>
                    </tr>
                    <tr>
                      <td >For NTSE 1st Stage qualified Students (NCERT) for Nurture, Enthusiast, Leader &amp; Achiever Course</td>
                      <td >MS14</td>
                      <td >15% </td>
                    </tr>
                    <tr>
                      <td>For NTSE 2nd Stage qualified Students (NCERT) for Enthusiast, Leader &amp; Achiever Course</td>
                      <td>MS15</td>
                      <td>35%</td>
                    </tr>
                    <tr>
                      <td>For Pre RMO qualified students</td>
                      <td>PRERMO15</td>
                      <td>15%</td>
                    </tr>
                    <tr>
                      <td>For HBCSE Olympiad Stage NSEP/C/B/A/JS or RMO qualified Students</td>
                      <td>MS16</td>
                      <td>25%</td>
                    </tr>
                    <tr>
                      <td>For HBCSE Olympiad Stage INPhO/ChO/BO/AO/JSO or INMO qualified students</td>
                      <td>MS17</td>
                      <td>75%</td>
                    </tr>
                    <tr>
                      <td>For HBCSE Olympiad OCSC Stage Physics/Chemistry/Biology/ Astronomy/Jr. Science/Mathematics Qualified Students &amp; Medalist</td>
                      <td>MS35</td>
                      <td>90%</td>
                    </tr>
                    <tr>
                      <td>For KVPY Written Examination Qualified</td>
                      <td>MS18</td>
                      <td>25%</td>
                    </tr>
                    <tr>
                      <td>For KVPY Scholarship Qualified</td>
                      <td>MS19</td>
                      <td>50%</td>
                    </tr>
                    <tr>
                      <td>Any two or more siblings (Real Brother / Sister ) studying in ALLEN (Same Session)</td>
                      <td>MS24</td>
                      <td>10%</td>
                    </tr>
                    <tr>
                      <td height="38">Scholarship in TALLENTEX-2020 (Result declared in November 2019)</td>
                      <td>MS32</td>
                      <td>upto 90%</td>
                    </tr>
                  </tbody>
                </table>
                <ol>
                  <li>Scholarship is in the form of Concession in Total Fee (#), student has to claim this by applying in prescribed Scholarship Application Form for Academic Session 2020-21 after admission.</li>

                  <li>Scholarships MS01, MS02, MS04, MS06 are applicable for Board Result in current session(2020) only.</li>
                  <li>For scholarship rules : <a href="/ahmedabad/2020-21/scholarship-rules.asp" class="color-blue">Click Here</a></li>
                </ol>
                <p style="text-align:center;"><strong>A student is eligible for only one scholarship at a time, No two criteria can be clubbed to avail deduction in fee at ALLEN</strong></p>
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
    <!-- #Include virtual="/chennai/include/footer.asp" -->
   <script type="text/javascript" language="javascript">  
    var versionUpdate = (new Date()).getTime();  
    var script = document.createElement("script");  
    script.type = "text/javascript";  
    script.src = "/assets/js/course-2020-21/course1.js?v=" + versionUpdate;  
    document.body.appendChild(script);  
   </script>
        
<script src="/assets/js/course-2020-21/course1.js" type="text/javascript"></script>
    <!--/Footer-->