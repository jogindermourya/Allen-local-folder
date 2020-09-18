
<%@LANGUAGE="VBSCRIPT" CODEPAGE="1252"%>
<!--#include file="Connections/conn.asp" -->
<%

	strE = SQLInject2(Request.QueryString("id"))
	id = SQLInject2(Request.QueryString("id"))
	
	if id="" Then
		id="1"
		strE="1"
	End If
	'Response.write id
	'Response.end
	Set rsRemarks = Server.CreateObject("ADODB.Recordset")
	rsRemarks.ActiveConnection = MM_Conn_STRING
	
	
	set Conn = Server.CreateObject("ADODB.Connection")
	Conn.Open MM_Conn_STRING
	
	rsRemarks.open "{Call usp_getdata(13,'" & strE & "','','')}", Conn, adOpenStatic	
	
	While Not rsRemarks.EOF
		rsRemarks_numRows = rsRemarks_numRows + 1
		rsRemarks.MoveNext
	WEnd
	If rsRemarks_numRows > 0 Then
		rsRemarks.MoveFirst
	End If
	If rsRemarks_numRows > 0 Then
		strPageHead = " " & rsRemarks("examtitle")
		
	End If		
	rsRemarks.close()	
	rsRemarks_numRows=0
	
	
	rsRemarks.open "{Call usp_getdata(10,'" & strE & "','','')}", Conn, adOpenStatic
	If rsRemarks_numRows > 0 Then
		rsRemarks.MoveFirst
	End If
	
%>

<!-- #Include virtual="include/header.asp" -->

<script Language="JavaScript">
     var xmlHttpAjax
    function getlevel(exam)
    {
        document.getElementById("divExamCategory").style.display="none";
               
        if( exam=="" || exam=="[PLEASE SELECT]")
        { document.getElementById("level").options.length = 0	
            return;
        }
            
        if (window.XMLHttpRequest)
          {// code for IE7+, Firefox, Chrome, Opera, Safari
              xmlHttpAjax=new XMLHttpRequest();	
          }
        else
        {// code for IE6, IE5
            xmlHttpAjax=new ActiveXObject("Microsoft.XMLHTTP");
            
        }		
        var url="loadlevel.asp";
        url +="?c1=" + exam;
        xmlHttpAjax.onreadystatechange = stateChangelevel;
        xmlHttpAjax.open("GET", url, true);
        xmlHttpAjax.send();
    }
    
    function stateChangelevel()
    {   	
        if (xmlHttpAjax.readyState==4 || xmlHttpAjax.readyState=="complete")
        {  	
            data = xmlHttpAjax.responseText.split ( "[BRK]" );
              document.getElementById("divlevel").innerHTML = data[0];
            var flag=data[1];
            if (flag=="0")
            {getYear("0"); }
            
            if (data[2]!="")
            { document.getElementById("divExamCategory").innerHTML=data[2];
            document.getElementById("divExamCategory").style.display="block";
            }                  
    
        } 
    }
        
    function getYear(level)
    {
        if (level=="Not Applicable")
        { level="0"; }
        exam=document.getElementById("subexam").value;
         if( exam=="" || exam=="[PLEASE SELECT]")
        { document.getElementById("year").options.length = 0	
            return;
        }
          
        if (window.XMLHttpRequest)
          {// code for IE7+, Firefox, Chrome, Opera, Safari
              xmlHttpAjax=new XMLHttpRequest();	
          }
        else
        {// code for IE6, IE5
            xmlHttpAjax=new ActiveXObject("Microsoft.XMLHTTP");
            
        }		
        var url="loadyear.asp";
        url +="?c1=" + exam;
        url +="&c2=" + level;
        xmlHttpAjax.onreadystatechange = stateChange;
        xmlHttpAjax.open("GET", url, true);
        xmlHttpAjax.send();
    }
        
    function stateChange()
    {   	
        if (xmlHttpAjax.readyState==4 || xmlHttpAjax.readyState=="complete")
        { 
            document.getElementById("divyear").innerHTML =  xmlHttpAjax.responseText;		
        } 
    }
       
    function getexamdata(year)
    {   
        exam=document.getElementById("subexam").value;
        level=document.getElementById("level").value;
        if( exam=="" || exam=="[PLEASE SELECT]")
        {
            document.getElementById("year").options.length = 0	
            return;
        }
        if( year=="" || year=="[PLEASE SELECT]")
        {
            return;
        }
        document.getElementById("divexamdata").innerHTML="";
               
        if (window.XMLHttpRequest)
          {// code for IE7+, Firefox, Chrome, Opera, Safari
              xmlHttpAjax=new XMLHttpRequest();	
          }
        else
        {// code for IE6, IE5
            xmlHttpAjax=new ActiveXObject("Microsoft.XMLHTTP");
        }		
        var url="loadexamdata.asp";
        url +="?c1=" + exam;
        url +="&c2=" + year;
        url +="&c3=" + level;
        
        //alert(url);
        xmlHttpAjax.onreadystatechange = stateChangeexamdata;
        xmlHttpAjax.open("GET", url, true);
        xmlHttpAjax.send();
    }
    
    
    function stateChangeexamdata()
    {   	
        if (xmlHttpAjax.readyState==4 || xmlHttpAjax.readyState=="complete")
        {  document.getElementById("divexamdata").innerHTML =  xmlHttpAjax.responseText;
            var scrollPos = $("#divexamdata").offset().top;
                            $(window).scrollTop(scrollPos);
    
        } 
    }
     </script>
<script type="text/javascript">
    jQuery(document).ready(function($){
             $('a[href="/apps/selection-results/yesteryears/achievements-iitjee.asp"]').parent().addClass('active');
		
    });
</script>

<!-- Breadcrumb Section -->
<section class="breadcrumb_area">
    <img class="breadcrumb_shap" src="/assets/img/aboutus/innerbghead.png" alt="">
    <div class="container">
        <div class="breadcrumb_content text-center">
            <h1 class="breadcrumb-hed">
                Olympiad, NTSE, KVPY, Scholarship etc</h1>
            <ul class="list-unstyled breadcrumb-links m-0">
                <li><a href="/kota/">Home</a></li>
                <li>PNCF</li>
            </ul>
        </div>
    </div>
</section>
<!-- End Breadcrumb Section -->

<!--  content Section -->

<section class="faq_area bg_color sec_pad">
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <!--Left Part for Result Nav-->
                <!-- #Include virtual="/apps/selection-results/yesteryears/result-left-part2.asp" -->
                <!--/Left Part for Result Nav-->
            </div>

            <div class="col-lg-9">
                <div class="innerbox light-bg">
                    <div class="headinginn">
                        <h3><%=strPageHead%></h3>
                    </div>

                    <form>
                        <div class="form-row formresult">
                            <div class="form-group col-lg-5 col-md-4">
                                <label for="examcate">Exam Category</label>
                                <select  name="subexam" id="subexam" class="form-control custom-select"  onChange="getlevel(this.value);" required >
                                    <option value=""> [PLEASE SELECT] </option>
                                    <% If Not rsRemarks.EOF or Not rsRemarks.BOF Then %>
                                    <% rsRemarks.MoveFirst %>
                                    <% While Not rsRemarks.EOF %>
                                    <option value="<% =rsRemarks("subexamid") %>"  >
                                    <% =rsRemarks("subexamtitle") %>
                                    </option>
                                    <% rsRemarks.MoveNext %>
                                    <% WEnd %>
                                    <% End If %>
                                  </select>
                              
                            </div>
                            <div class="form-group col-lg-4  col-md-4">
                                <label for="examlevel">Exam Level</label>
                                <div  id="divlevel">
                                <select  name="level" id="level" class="form-control custom-select" onChange="getYear(this.value);" >
                                </select>
                            </div>
                            </div>
                            <div class="form-group col-lg-3  col-md-4">
                                <label for="examyear">Exam Year</label>
                                <div id="divyear">
                                    <select  name="year" id="year" class="form-control custom-select" onChange="getexamdata(this.value);" >
                                    </select>
                                  </div>
                            </div>
                        </div>

                    </form>
                </div>

                <div class="innerbox">
                    <div class="result_content">
                        <div class="p2 pt-0 pb-0 l_height25" id="divExamCategory"> </div>
                    </div>
                </div>

                <div class="innerbox">
                    <div class="result_show_img" id="divexamdata"></div>
                </div>

            </div>
        </div>
    </div>
</section>


<!-- End  content Section -->

<!--Footer-->
<!-- #Include virtual="include/footer.asp" -->
<!--/Footer-->

<%
rsRemarks.close()
set rsRemarks=Nothing
%>