<div class="col-lg-12 mb-lg-4">
    <h3 class="subhed-in mt-2 mb-4">ASAT Test Centers</h3>
    <div class="table-responsive">
<%
Dim MM_Conn_STRING, strPath

' SQL SERCER DB Connection (OFFLINE)
'MM_Conn_STRING1 = "Provider=SQLOLEDB.1;Persist Security Info=False;User ID=allen24109lg;PWD=CarEh34Pwd;Initial Catalog=allen24109_500db;Data Source=WINSERVER"

' SQL SERVER DB Connection (ONLINE)
'MM_Conn_STRING1 = "Provider=SQLOLEDB.1;Persist Security Info=False;User ID=allen24109lg;PWD=CarEh34Pwd;Initial Catalog=allen24109_500db;Data Source=66.201.66.194"
'MM_Conn_STRING1="Provider=SQLOLEDB;Persist Security Info=False;User ID=allen24109;PWD=Acin67Yt#;Initial Catalog=allen24109_500db;Data Source=216.15.231.200"


MM_Conn_STRING1="Provider=SQLOLEDB;Persist Security Info=False;User ID=acidbuser;PWD=ACIDBUser#744;Initial Catalog=ACI2020-2021;Data Source=115.178.99.11"
%>
<%
'response.end

Set rsTestCenter = Server.CreateObject("ADODB.Recordset")

rsTestCenter.ActiveConnection = MM_Conn_STRING1
'rsTestCenter.Source = "SELECT * FROM TESTCENTRESA1415 WHERE STATUS = 'Y' AND ISENTRANCE='Y' AND CITY <> 'POSTAL' ORDER BY CITY"

'response.end
rsTestCenter.Source = "SELECT * FROM MASTTC WHERE ISDELETED=0 AND ISENTRANCE=1 AND ISACTIVE=1 AND CENTER<>99 and isonlinedisplayentrance=1 and isdummy=0 ORDER BY CENTNAME"
rsTestCenter.Open()
rsTestCenter_numRows = 0



%>		
       <table id="datatable" width="100%" class="table table-bordered dt-responsive nowrap table-hover customtbl cetnble" data-page-length='25'>
          <thead>
             <tr>
                <th onclick="sortTable(0)"> Center</th>
                <th onclick="sortTable(1)"> State</th>
                <th data-defaultsort="disabled" style="width: 300px !important;"> Center Address</th>
                <th> Center Code</th>
                <th data-defaultsort="disabled">location</th>
             </tr>
          </thead>
        <% Dim lngSNo %>
        <% lngSNo = 1 %>
          <tbody>
        <% While Not rsTestCenter.EOF %>
             <tr>
                <td>
					<% =Trim(rsTestCenter("CITY")) %>
					<% If Trim(rsTestCenter("STAR")) ="*" Then %>
					<%End If%>
				</td>
                <td>
					<% =Trim(rsTestCenter("STATE_NAME")) %>
				</td>
                <td>
					<% =Trim(rsTestCenter("ADD1")) %><br>  
					<% =Trim(rsTestCenter("ADD2")) %>
				</td>
                <td class="text-center">
                   <% If Len(Trim(rsTestCenter("CENTER"))) > 1 Then %>
					<% =Trim(rsTestCenter("CENTER")) %>
					<%Else%>
					<% = "0" & Trim(rsTestCenter("CENTER")) %>
					<%End If%>
                </td>
				<td>
					<% If rsTestCenter("isgooglelocationset") =True Then %>
					<button type="button" class="btn btn-success map_button" orilat="<% =Trim(rsTestCenter("orilat")) %>" orilan="<% =Trim(rsTestCenter("orilan")) %>" deslat="<% =Trim(rsTestCenter("desla")) %>" deslan="<% =Trim(rsTestCenter("deslan")) %>" placeQuery="<% =Trim(rsTestCenter("placeQuery")) %>" data-toggle="modal" data-target="#myModal" ><i class="fa fa-map-marker"></i></button>
					<%End If%>
				</td>	
             </tr>
          <% lngSNo = lngSNo + 1 %>
          <% rsTestCenter.MoveNext %>
          <% WEnd %>
          </tbody>
       </table>
     
    </div>
    <p class="pt-3 f_size_13"><em>*On these centers ASAT will be Held for Admission in Pre-Nurture & Career Foundation courses only.</em></p>
 </div>
						
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBiAmQJIJRxoEuRS1XymcGVLa_bBQUDWQA&callback=dvMap&libraries=places"></script>
