<%@LANGUAGE="VBSCRIPT" CODEPAGE="1252"%>
<!--#include file="Connections/conn.asp" -->
<%

	strE = SQLInject2(Request.QueryString("e"))
	strY = SQLInject2(Request.QueryString("y"))
	strC = SQLInject2(Request.QueryString("c"))

	strExamName = Trim(UCase(strE)) & " " & Trim(strY)
	Set rsRemarks = Server.CreateObject("ADODB.Recordset")
	rsRemarks.ActiveConnection = MM_Conn_STRING
	
	
	set Conn = Server.CreateObject("ADODB.Connection")
	Conn.Open MM_Conn_STRING
		
		
	If Len(Trim(strC)) = 0 Then
		'rsRemarks.Source = "SELECT * FROM REMARKS WHERE EXAM = " & "'" & strE & "'" & " AND SELYEAR = " & CDbl(strY)
		
		rsRemarks.open "{Call usp_getdata(1,'" & strE & "','" & strY & "','')}", Conn, adOpenStatic	
		
	Else
		'rsRemarks.Source = "SELECT * FROM REMARKS WHERE EXAM = " & "'" & strE & "'" & " AND CATEGORY = " & "'" & strC & "'" & " AND SELYEAR = " & CDbl(strY)
		
		rsRemarks.open "{Call usp_getdata(2,'" & strE & "','" & strY & "','" & strC & "')}", Conn, adOpenStatic	
	End If
	
	
	'rsRemarks.CursorType = 0
	'rsRemarks.CursorLocation = 2
	'rsRemarks.LockType = 3
	'rsRemarks.Open()
	'rsRemarks_numRows = 0
	
	
	
		
		
		
			
	
	While Not rsRemarks.EOF
		rsRemarks_numRows = rsRemarks_numRows + 1
		rsRemarks.MoveNext
	WEnd
	If rsRemarks_numRows > 0 Then
		rsRemarks.MoveFirst
	End If
	If rsRemarks_numRows > 0 Then
		strPageHead = " " & rsRemarks("PAGEHEAD")
		strRemarks1 = " " & rsRemarks("REMARKS1")
		strRemarks2 = " " & rsRemarks("REMARKS2")
		strRemarks3 = " " & rsRemarks("REMARKS3")
		strRemarks4 = " " & rsRemarks("REMARKS4")
		strRemarks5 = " " & rsRemarks("REMARKS5")
	Else
		strPageHead = ""
		strRemarks1 = ""
		strRemarks2 = ""
		strRemarks3 = ""
		strRemarks4 = ""
		strRemarks5 = ""
	End If
	Set rsResults = Server.CreateObject("ADODB.Recordset")
	rsResults.ActiveConnection = MM_Conn_STRING
	If Len(Trim(strC)) = 0 Then
	
	
		'rsResults.Source = "SELECT * FROM RESULTS WHERE EXAM = " & "'" & strE & "'" & " AND SELYEAR = " & CDbl(strY) & " ORDER BY SRNO"
		rsResults.open "{Call usp_getdata(3,'" & strE & "','" & strY & "','')}", Conn, adOpenStatic	
	Else
		'rsResults.Source = "SELECT * FROM RESULTS WHERE EXAM = " & "'" & strE & "'" & " AND CATEGORY = " & "'" & strC & "'" & " AND SELYEAR = " & CDbl(strY) & " ORDER BY SRNO" 
		rsResults.open "{Call usp_getdata(4,'" & strE & "','" & strY & "','" & strC & "')}", Conn, adOpenStatic	
	End If
	'rsResults.CursorType = 0
	'rsResults.CursorLocation = 2
	'rsResults.LockType = 3
	'rsResults.Open()
	'rsResults_numRows = 0
	While Not rsResults.EOF
		rsResults_numRows = rsResults_numRows + 1
		rsResults.MoveNext
	WEnd
	If rsResults_numRows > 0 Then
		rsResults.MoveFirst
		strExamLevel = UCASE(rsResults("EXAMLEVEL"))
	End If
	
	
	'response.write rsResults.Source
	'response.end
	
	
%>
<!-- #Include virtual="include/header.asp" -->



<!-- Breadcrumb Section -->
<section class="breadcrumb_area">
	

	
    <img class="breadcrumb_shap" src="/assets/img/aboutus/innerbghead.png" alt="">
    <div class="container">
        <div class="row main-banner">
<!--
            <div class="col-lg-4 col-sm-6">
                <div class="topperslider owl-carousel">
                    <div class="item"> <img src="/assets/img//result-show/air-1.png " class="img-fluid"></div>
                    <div class="item"> <img src="/assets/img//result-show/air-2.png " class="img-fluid"></div>
                    <div class="item"> <img src="/assets/img//result-show/air-3.png " class="img-fluid"></div>
                    <div class="item"> <img src="/assets/img//result-show/air-6.png " class="img-fluid"></div>
                    <div class="item"> <img src="/assets/img//result-show/air-10.png " class="img-fluid"></div>
                </div>
            </div>
-->

            <div class="col-lg-12 col-sm-6 content text-center">
              	<h2>ALLEN  <% =(strExamName &  strPageHead) %> RESULT</h2>
                <ul class="list-unstyled score">
					<% If Len(Trim(strRemarks1)) > 0 Then %>
					<li><% =strRemarks1 %></li>
					<% End If %>
					<% If rsResults_numRows > 0 Then %>
                    <% If Len(Trim(strRemarks2)) > 0 Or Len(Trim(strRemarks3)) > 0 Then %>
					<% If Len(Trim(strRemarks2)) > 0 And Len(Trim(strRemarks3)) > 0 Then %>
					<li><% =strRemarks2 %></li>
					<li><% =strRemarks3 %></li>
					<% ElseIf Len(Trim(strRemarks2)) > 0 And Len(Trim(strRemarks3)) = 0 Then %>	<% =strRemarks2 %>							                    
                
				<% End If %>
				<% End If %>
				<% If Len(Trim(strRemarks4)) > 0 Or Len(Trim(strRemarks5)) > 0 Then %>	
				<% If Len(Trim(strRemarks4)) > 0 And Len(Trim(strRemarks5)) > 0 Then %>	
				<li><% =strRemarks4 %></li>
				<li><% =strRemarks5 %></li>
				<% ElseIf Len(Trim(strRemarks4)) > 0 And Len(Trim(strRemarks5)) = 0 Then %>	
				 <li><% =strRemarks4 %></li>
				<% End If %>
				<% End If %>
				</ul>	
            </div>
        </div>
    </div>
</section>
<!-- End Breadcrumb Section -->
<!--  content Section -->
<section class="faq_area bg_color sec_pad">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 studentview">
                <div class="row team-boxed">
			<% While Not rsResults.EOF %>
			  <% For I = 1 to 4 %>
                    <!-- box-1 -->
                      <% If Not IsNull(rsResults("RANK")) Then %>
                        <% If CDbl(rsResults("RANK")) > 0 Then %>
                        <% If strExamName <> "AIIMS 2010" Then %>
                         <% If rsResults("EXAMLEVEL") = "N" Then %>
                              
                              <% ElseIf rsResults("EXAMLEVEL") = "S" Then %>
                              
                              <% End If %>
                              <% End If %>
                              <% End If %>
                      <% End If %>
                    <div class="col-sm-6 col-lg-3 col-md-4 item">
                        <div class="box">
							
                            <img class="rounded-circle" title="<% =TRIM(rsResults("NAME")) & " AF No.: " & rsResults("FNO") & " [" & rsResults("BATCH") & "]"%>" src=images/<% =rsResults("FNO") & ".jpg" %>>
                            <h3 class="name"><% If strExamName <> "AIIMS 2012" Then %>
                              <% If rsResults("EXAMLEVEL") = "N" and Not IsNull(rsResults("RANK")) Then %>  AIR<br> <% =rsResults("RANK") %>
								<% End If %>
                              <% End If %>
                             <% If  Not IsNull(rsResults("ORANK"))  Then %>
								 <% If rsResults("ORANK")>0  Then %><br><span class="d-block f_size_13">Overall</span> <span class="d-block f_size_13" style="line-height: 5px;">Rank:
                              	<% =rsResults("ORANK") %></span>
                                 	 
								<%End If%>
                              <%End If%>
							</h3>
                            <p class="title">
								<% If Len(Trim(rsResults("CATEGORY"))) > 0 AND strE <> "RPMT" Then %>
                              <% If UCASE(rsResults("CATEGORY")) = "GEN" Then %>
                              <b>
                              <% =rsResults("NAME") %>
                              </b><br>
                              AF. No.:
                              <% =rsResults("FNO") %>
                              [
                              <% =rsResults("BATCH") %>
                              ]<br>
                              (Category: General)
                              <% Else %>
                              <b>
                              <% =rsResults("NAME") %>
                              </b><br>
                              AF No.:
                              <% =rsResults("FNO") %>
                              [
                              <% =rsResults("BATCH") %>
                              ]<br>
                              (Category:
                              <% =rsResults("CATEGORY") %>
                              )
                              <% End If %>
                              <% Else %>								
								
								<% =rsResults("NAME") %></p>
                            <p class="description">AF No.: <% =rsResults("FNO") %> [ <% =rsResults("BATCH") %> ] </p>
								<% End If %>
                        </div>
                    </div>
                      <% rsResults.Movenext %>
                      <% If rsResults.EOF Then %>
                      <% Exit For %>
                      <% End If %>
                      <% Next %>
					<% WEnd %>
			  <% End If %>
					</div>	
                    <!-- /box-1 -->




                </div>
            </div>
        </div>
</section>
<!-- End  content Section -->






<!--Footer-->
<!-- #Include virtual="include/footer.asp" -->
<!--/Footer-->