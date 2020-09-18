            '<%
' dim utm_source
' If (Request.QueryString("utm_source")<>"") Then
' 	utm_source=Request.QueryString("utm_source")
' Else
' 	utm_source=""
' End If
' 
' 
' 
' 
' dim utm_medium
' If (Request.QueryString("utm_medium")<>"") Then
' 	utm_medium=Request.QueryString("utm_medium")
' Else
' 	utm_medium=""
' End If
' 
' dim utm_campaign
' If (Request.QueryString("utm_campaign")<>"") Then
' 	utm_campaign=Request.QueryString("utm_campaign")
' Else
' 	utm_campaign=""
' End If
' 
' 
' dim utm_adgroup
' If (Request.QueryString("utm_adgroup")<>"") Then
' 	utm_adgroup=Request.QueryString("utm_adgroup")
' Else
' 	utm_adgroup=""
' End If
' 
' 
' dim utm_term
' If (Request.QueryString("utm_term")<>"") Then
' 	utm_term=Request.QueryString("utm_term")
' Else
' 	utm_term=""
' End If
' 
' 
'%>



<section class="get_asstance_wrper" id="get_assistance">
    <div class="container">

        <div class="row text-center">
            <div class="col-lg-12">
                <h2 class="f_p f_size_35 l_height30 f_600 w_color susbtxt ">Get Assistance
                    <span class="f_400 f_size_15 w_color mt-2 d-block">Get Expert Advice to Shape Your Path to
                        Success</span>
                </h2>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-11 offset-lg-1 text-center">

                <div class="bd-example">
                    <form class="form-inline  justify-content-center row needs-validation" novalidate >
                        <div class="form-group  mb-2 col-lg-3 col-md-3">
                        
                       <!-- <input name="utm_source" id="utm_source" type="hidden" value="<%=utm_source%>">   
                    
                       <input name="utm_medium" id="utm_medium" type="hidden" value="<%=utm_medium%>">
                       
                        <input name="utm_campaign" id="utm_campaign" type="hidden" value="<%=utm_campaign%>"> 
                         <input name="utm_adgroup" id="utm_adgroup" type="hidden" value="<%=utm_adgroup%>"> 
                          <input name="utm_term" id="utm_term" type="hidden" value="<%=utm_term%>"> -->
                          
                            <input type="text" class="form-control w-100" id="name" name="name" placeholder="Enter Your Name" required>
                         </div>
                        <div class="form-group  mb-2 col-lg-3 col-md-3">
                            <select class="custom-select f_size_15 w-100" required id="classname" name="classname">
                                <option selected="selected" value="">Please Select Class</option>
                                <option value="6">V to VI Moving</option>
                                <option value="7">VI to VII Moving</option>
                                <option value="8">VII to VIII Moving</option>
                                <option value="9">VIII to IX Moving</option>
                                <option value="10">IX to X Moving</option>
                                <option value="11">X to XI Moving</option>
                                <option value="12">XI to XII Moving</option>
                                <option value="13">XII Passed</option>
                            </select>
                          
                        </div>
                        <div class="form-group mb-2 col-lg-3 col-md-3">
                            <input type="text" maxlength="10" class="form-control w-100" id="mobile" name="mobile" placeholder="Enter your Mobile No." required>
                        </div>
                        <div class="form-group mb-2 col-lg-3 col-md-3">
                            <button type="button" id='btngetassistant' name='btngetassistant' class="onlineenqury_btn btn_hover mb-2">Submit Now!</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>