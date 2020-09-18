<%@LANGUAGE="VBSCRIPT" CODEPAGE="1252"%> 
<!--#include file="Connections/conn.asp" -->

<%

strE = SQLInject2(Request.QueryString("c1"))
strL = SQLInject2(Request.QueryString("c2"))
Set rsRemarks = Server.CreateObject("ADODB.Recordset")
rsRemarks.ActiveConnection = MM_Conn_STRING


set Conn = Server.CreateObject("ADODB.Connection")
Conn.Open MM_Conn_STRING

rsRemarks.open "{Call usp_getdata(11,'" & strE & "','','" & strL & "')}", Conn, adOpenStatic	
 

buffer1="<select  name='year' id='year'  class='form-control' onChange='getexamdata(this.value);'><option value=''>[PLEASE SELECT]</option>"
While Not rsRemarks.EOF 
	buffer1=buffer1 & "<option value='" & UCASE(rsRemarks.Fields("yearid")) & "'>" & UCASE(rsRemarks.Fields("yeartitle")) & " </option>"  
	rsRemarks.MoveNext 
Wend


buffer1=buffer1 & "</select> "


rsRemarks.CLOSE() 
set rsRemarks=Nothing


Response.Write buffer1



                      


%>