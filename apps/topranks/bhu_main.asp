<!--#include file="Connections/conn.asp" -->

<%
set Conn = Server.CreateObject("ADODB.Connection")
Conn.Open MM_Conn_STRING


Set rsTopRanksBHU = Server.CreateObject("ADODB.Recordset")
rsTopRanksBHU.open "{Call usp_getdata(9,'BHU [MAINS]','','')}", Conn, adOpenStatic
%>
<!-- #Include virtual="include/header.asp" -->


<!-- Breadcrumb Section -->
<section class="breadcrumb_area">
    <img class="breadcrumb_shap" src="/assets/img/aboutus/innerbghead.png" alt="">
    <div class="container">
        <div class="breadcrumb_content text-center">
            <h1 class="breadcrumb-hed">
                BHU Mains</h1>
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
                            <h3><% =rsTopRanksBHU("REMARKS1") %></h3>
                        </div>
                        <div class="table-responsive">
							  <table class="table table-bordered table-hover customtbl" >
								<colgroup>
								<col class="oce-first" />
								</colgroup>
								<tr>
								  <th width="10%" > <span class="title_level1"> Year </span> </th>
								  <th> <span class="title_level1"> Ranks </span> </th>
								  <th> <span class="title_level1"> Total </span> </th>
								</tr>
								<% While Not rsTopRanksBHU.EOF %>
								<tr>
								  <td ><% =rsTopRanksBHU("SELYEAR") %></td>
								  <td ><% =rsTopRanksBHU("TOPRANKSBOYS") %></td>
								  <td><%			  
								  ArrayTemp = split(rsTopRanksBHU("TOPRANKSBOYS") , " ")
								  NumberOfWords = UBound(ArrayTemp) + 1			  
								  %> <% =NumberOfWords %></td>
								</tr>
								<% rsTopRanksBHU.MoveNext %>
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