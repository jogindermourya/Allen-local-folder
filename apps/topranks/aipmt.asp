<!--#include file="Connections/conn.asp" -->


<%
set Conn = Server.CreateObject("ADODB.Connection")
Conn.Open MM_Conn_STRING

Set rsTopRanksAIPMT = Server.CreateObject("ADODB.Recordset")
rsTopRanksAIPMT.open "{Call usp_getdata(9,'AIPMT','','')}", Conn, adOpenStatic


%>

<!-- #Include virtual="include/header.asp" -->


<!-- Breadcrumb Section -->
<section class="breadcrumb_area">
    <img class="breadcrumb_shap" src="/assets/img/aboutus/innerbghead.png" alt="">
    <div class="container">
        <div class="breadcrumb_content text-center">
            <h1 class="breadcrumb-hed">
                 AIPMT / NEET (UG)</h1>
            <ul class="list-unstyled breadcrumb-links m-0">
                <li><a href="/kota/">Home</a></li>
                <li>Top Ranks</li>
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
           
                <!--Left Part for Result Nav in folder apps-->
                <!-- #Include virtual="/apps/selection-results/yesteryears/result-left-part.asp" -->
                <!--/Left Part for Result Nav-->    
             </div>
            <div class="col-lg-9">
                <div class="innerbox">
                    <div class="result_content">
                        <div class="headinginn2">
                            <h3><% =rsTopRanksAIPMT("REMARKS1") %></h3>
                        </div>
                        <div class="table-responsive">
						  <table class="table table-bordered table-hover customtbl">
							<colgroup>
							<col class="oce-first" />
							</colgroup>
							<tr>
							  <th width="10%" > <span class="title_level1"> Year </span> </th>
							  <th><span class="title_level1"> Ranks </span> </th>
							  <th><span class="title_level1"> Total </span> </th>
							</tr>
							<% While Not rsTopRanksAIPMT.EOF %>
							<tr>
							  <td ><% =rsTopRanksAIPMT("SELYEAR") %></td>
							  <td ><% =rsTopRanksAIPMT("TOPRANKSBOYS") %></td>
							  <td><%			  
							  ArrayTemp = split(rsTopRanksAIPMT("TOPRANKSBOYS") , " ")
							  NumberOfWords = UBound(ArrayTemp) + 1			  
							  %><% =NumberOfWords %></td>
							</tr>
							<% rsTopRanksAIPMT.MoveNext %>
							<% WEnd %>
						  </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<!-- End  content Section -->

<!--Footer-->
<!-- #Include virtual="include/footer.asp" -->
<!--/Footer-->