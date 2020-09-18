<!--#include virtual="include/gateway-header.asp"-->
<!-- Slider Section -->
<!-- for url -->
<%
   dim center   
   center=Request.querystring("center")
   session("center")=center
%>
<section class="slider_area topmr bg-gateway">
    <div class="gateway-wraper wow fadeInRight" id="homeSlider">
        <div class="gatewaySlider owl-carousel">
        </div>
     </div>
</section>
<!-- End Slider Section -->


<!--Gateway Notification Section -->
<section class="gateway_notification sec_pad">
    <div class="container">
        <div class="row">
           

            <div class="col-lg-12">
                <div class="row">
                    <div class="col-md-12 text-center hdmrb">
                        <h2 class="f_p f_size_30 l_height50 f_700 mainhd-section">
                            <span class="circle"></span>
                            <span class="position-relative">Select Your Dream Course</span>
                        </h2>
                    </div>
                </div>
                
                <%If center="kota" Then%>
                
                <div class="row min-ht">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/kota/" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/1.png" alt=""></div>
                            <h5 class="col-lg-12">For Class XI, XII & XII Passed <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/pncf/kota/default.asp" target="_blank" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/2.png" alt=""></div>
                            <h5 class="col-lg-12">For PNCF Class VI to X <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="https://www.theintellibrain.com/" target="_blank" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/4.png" alt=""></div>
                            <h5 class="col-lg-12">Intellibrain <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="https://www.allen.ac.in/globalstudies/" target="_blank" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/7.png" alt=""></div>
                            <h5 class="col-lg-12">AGSD <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                </div>

                
                
                <%End If%>
                    
                
                 <%If center="ahmedabad" Then%>
                
                 <div class="row min-ht">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/ahmedabad" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/1.png" alt=""></div>
                            <h5 class="col-lg-12">For Class XI, XII & XII Passed <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/pncf/ahmedabad/" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/2.png" alt=""></div>
                            <h5 class="col-lg-12">For PNCF Class VI to X <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                </div>
                
                <%End If%>
                    
                <%If center="bengaluru" Then%>
                
                <div class="row min-ht">
                   <div class="col-lg-3 col-md-6 col-sm-6">
                       <a href="/bengaluru" class="item_course">
                           <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/1.png" alt=""></div>
                           <h5 class="col-lg-12">For Class XI, XII & XII Passed <span class="subtitle">VISIT WEBSITE </span></h5>
                       </a>
                   </div>
                   <div class="col-lg-3 col-md-6 col-sm-6">
                       <a href="/pncf/bengaluru" class="item_course">
                           <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/2.png" alt=""></div>
                           <h5 class="col-lg-12">For PNCF Class VI to X <span class="subtitle">VISIT WEBSITE </span></h5>
                       </a>
                   </div>
               </div>
               
               <%End If%>

                 <%If center="bhilwara" Then%>
                
                 <div class="row min-ht">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/bhilwara" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/1.png" alt=""></div>
                            <h5 class="col-lg-12">For Class XI, XII & XII Passed <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/pncf/bhilwara" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/2.png" alt=""></div>
                            <h5 class="col-lg-12">For PNCF Class VI to X <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                </div>
                
                <%End If%>

                 <%If center="bhubaneswar" Then%>
                
                 <div class="row min-ht">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/bhubaneswar" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/1.png" alt=""></div>
                            <h5 class="col-lg-12">For Class XI, XII & XII Passed <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/pncf/bhubaneswar" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/2.png" alt=""></div>
                            <h5 class="col-lg-12">For PNCF Class VI to X <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                </div>
                
                <%End If%>

                 <%If center="chennai" Then%>
                
                 <div class="row min-ht">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/chennai" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/1.png" alt=""></div>
                            <h5 class="col-lg-12">For Class XI, XII & XII Passed <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/pncf/chennai" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/2.png" alt=""></div>
                            <h5 class="col-lg-12">For PNCF Class VI to X <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                </div>
                
                <%End If%>

                 <%If center="chandigarh" Then%>
                
                 <div class="row min-ht">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/chandigarh" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/1.png" alt=""></div>
                            <h5 class="col-lg-12">For Class XI, XII & XII Passed <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/pncf/chandigarh" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/2.png" alt=""></div>
                            <h5 class="col-lg-12">For PNCF Class VI to X <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                </div>
                
                <%End If%>

                 <%If center="guwahati" Then%>
                
                 <div class="row min-ht">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/guwahati" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/1.png" alt=""></div>
                            <h5 class="col-lg-12">For Class XI, XII & XII Passed <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/pncf/guwahati" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/2.png" alt=""></div>
                            <h5 class="col-lg-12">For PNCF Class VI to X <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                </div>
                
                <%End If%>
					
                 <%If center="mysuru" Then%>
                
                 <div class="row min-ht">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/mysuru" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/1.png" alt=""></div>
                            <h5 class="col-lg-12">For Class XI, XII & XII Passed <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/pncf/mysuru" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/2.png" alt=""></div>
                            <h5 class="col-lg-12">For PNCF Class VIII to X <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                </div>
                
                <%End If%>
					
                 <%If center="indore" Then%>
                
                 <div class="row min-ht">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/indore" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/1.png" alt=""></div>
                            <h5 class="col-lg-12">For Class XI, XII & XII Passed <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/pncf/indore" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/2.png" alt=""></div>
                            <h5 class="col-lg-12">For PNCF Class VI to X <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                </div>
                
                <%End If%>
					
                 <%If center="kochi" Then%>
                
                 <div class="row min-ht">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/kochi" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/1.png" alt=""></div>
                            <h5 class="col-lg-12">For Class XI, XII & XII Passed <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/pncf/kochi" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/2.png" alt=""></div>
                            <h5 class="col-lg-12">For PNCF Class VIII to X <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                </div>
                
                <%End If%>
					
                 <%If center="mumbai" Then%>
                
                 <div class="row min-ht">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/mumbai" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/1.png" alt=""></div>
                            <h5 class="col-lg-12">For Class XI, XII & XII Passed <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/pncf/mumbai" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/2.png" alt=""></div>
                            <h5 class="col-lg-12">For PNCF Class VI to X <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                </div>
                
                <%End If%>
					
                 <%If center="nagpur" Then%>
                
                 <div class="row min-ht">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/nagpur" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/1.png" alt=""></div>
                            <h5 class="col-lg-12">For Class XI, XII & XII Passed <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/pncf/nagpur" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/2.png" alt=""></div>
                            <h5 class="col-lg-12">For PNCF Class VIII to X <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                </div>
                
                <%End If%>
					
                 <%If center="pune" Then%>
                
                 <div class="row min-ht">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/pune" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/1.png" alt=""></div>
                            <h5 class="col-lg-12">For Class XI, XII & XII Passed <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/pncf/pune" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/2.png" alt=""></div>
                            <h5 class="col-lg-12">For PNCF Class VII to X <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                </div>
                
                <%End If%>
					
                 <%If center="rajkot" Then%>
                
                 <div class="row min-ht">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/rajkot" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/1.png" alt=""></div>
                            <h5 class="col-lg-12">For Class XI, XII & XII Passed <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/pncf/rajkot" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/2.png" alt=""></div>
                            <h5 class="col-lg-12">For PNCF Class VI to X <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                </div>
                
                <%End If%>
					
                 <%If center="ranchi" Then%>
                
                 <div class="row min-ht">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/pncf/ranchi/" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/2.png" alt=""></div>
                            <h5 class="col-lg-12">For PNCF Class VI to X <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                </div>
                
                <%End If%>
					
                 <%If center="rawatbhata" Then%>
                
                 <div class="row min-ht">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/pncf/rawatbhata" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/2.png" alt=""></div>
                            <h5 class="col-lg-12">For PNCF Class VI to X <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                </div>
                
                <%End If%>
					
                 <%If center="sikar" Then%>
                
                 <div class="row min-ht">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/sikar" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/1.png" alt=""></div>
                            <h5 class="col-lg-12">For Class XI, XII & XII Passed <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/pncf/sikar" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/2.png" alt=""></div>
                            <h5 class="col-lg-12">For PNCF Class VI to X <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                </div>
                
                <%End If%>
					
                 <%If center="surat" Then%>
                
                 <div class="row min-ht">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/surat" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/1.png" alt=""></div>
                            <h5 class="col-lg-12">For Class XI, XII & XII Passed <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/pncf/surat" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/2.png" alt=""></div>
                            <h5 class="col-lg-12">For PNCF Class VI to X <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                </div>
                
                <%End If%>
					
                 <%If center="ujjain" Then%>
                
                 <div class="row min-ht">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/ujjain" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/1.png" alt=""></div>
                            <h5 class="col-lg-12">For Class XI, XII & XII Passed <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/pncf/ujjain" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/2.png" alt=""></div>
                            <h5 class="col-lg-12">For PNCF Class VI to X <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                </div>
                
                <%End If%>
					
                 <%If center="vadodara" Then%>
                
                 <div class="row min-ht">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/vadodara" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/1.png" alt=""></div>
                            <h5 class="col-lg-12">For Class XI, XII & XII Passed <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a href="/pncf/vadodara" class="item_course">
                            <div class="col-lg-12 mb-3"><img src="/assets/img/otherprogram/2.png" alt=""></div>
                            <h5 class="col-lg-12">For PNCF Class VI to X <span class="subtitle">VISIT WEBSITE </span></h5>
                        </a>
                    </div>
                </div>
                
                <%End If%>

                <div class="row">
                    <div class="col-lg-12"><a href="/" class="backbtn btn btn_hover mt-3">
                        <i class="fa fa-angle-left f_size_20 mr-1"></i> Back</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
<!--End Courses  Section -->

<!--#include virtual="common/other_program.asp"-->

<!--#include virtual="include/footer.asp"-->


<!-- Slider pass var -->
<script>
    var center = "common";
 </script>
<script type="text/javascript">
	$(document).ready(function () {
		var importantUpdate = gateway_notification;
		importantNotifications(importantUpdate, $);

		var resultUpdate = gateway_results;
		resultNotifications(resultUpdate, $);

	});	
</script>
					 