<%@LANGUAGE="VBSCRIPT" CODEPAGE="1252"%> 
<!--#include file="Connections/conn.asp" -->

<%

subexamid=Trim(request.QueryString("c1"))
yearid=Trim(request.QueryString("c2"))
levelid=Trim(request.QueryString("c3"))


Set rsRemarks = Server.CreateObject("ADODB.Recordset")
rsRemarks.ActiveConnection = MM_Conn_STRING


set Conn = Server.CreateObject("ADODB.Connection")
Conn.Open MM_Conn_STRING

rsRemarks.open "{Call usp_getdata(12,'" & subexamid & "','" & yearid &  "','" & levelid & "')}", Conn, adOpenStatic
While Not rsRemarks.EOF 	

	if trim(rsRemarks("imageurl"))<>"" Then
		buffer1=buffer1 & "<div class='col-md-12'>"
		buffer1=buffer1 & "<img style='width:100%;' src='" & trim(rsRemarks("imageurl")) & "' border='0'>" 
		buffer1=buffer1 & "</div>"
	elseif trim(rsRemarks("imagepath"))<>"" Then
		buffer1=buffer1 & "<div class='col-md-12'>"
		buffer1=buffer1 & "<img style='width:100%;' src='" & trim(rsRemarks("imagepath")) & "' border='0'>" 
		buffer1=buffer1 & "</div>"	
	else trim(rsRemarks("examdata"))<>"" 
		buffer1=buffer1 & "<div class='col-md-12'>"
		buffer1=buffer1 & trim(rsRemarks("examdata")) 
		buffer1=buffer1 & "</div>"
	End If	
rsRemarks.MoveNext 
	
Wend
rsRemarks.close()
set rsRemarks=Nothing
Response.Write buffer1
%>