<%@LANGUAGE="VBSCRIPT" CODEPAGE="1252"%> 
<!--#include file="Connections/conn.asp" -->

<%

strE = SQLInject2(Request.QueryString("c1"))
Set rsRemarks = Server.CreateObject("ADODB.Recordset")
rsRemarks.ActiveConnection = MM_Conn_STRING


set Conn = Server.CreateObject("ADODB.Connection")
Conn.Open MM_Conn_STRING

rsRemarks.open "{Call usp_getdata(14,'" & strE & "','','')}", Conn, adOpenStatic	

If Not rsRemarks.EOF or Not rsRemarks.BOF Then

buffer1="<select  name='level' id='level'  class='form-control' onChange='getYear(this.value);'><option value=''>[PLEASE SELECT]</option>"
While Not rsRemarks.EOF 
	buffer1=buffer1 & "<option value='" & UCASE(rsRemarks.Fields("levelid")) & "'>" & UCASE(rsRemarks.Fields("leveltitle")) & " </option>"  
	rsRemarks.MoveNext 
Wend

	buffer1=buffer1 & "</select>[BRK]1 "
Else
	buffer1="<select  name='level' id='level'  class='form-control' onChange='getYear(this.value);'><option value=''>Not Applicable</option>"
	buffer1=buffer1 & "</select>[BRK]0"
End If



rsRemarks.CLOSE() 
set rsRemarks=Nothing



Set rsRemarks = Server.CreateObject("ADODB.Recordset")
rsRemarks.ActiveConnection = MM_Conn_STRING

rsRemarks.open "{Call usp_getdata(16,'" & strE & "','','')}", Conn, adOpenStatic	

If Not rsRemarks.EOF or Not rsRemarks.BOF Then
	
	buffer1=buffer1 & "[BRK]" & rsRemarks("detail")
Else
	buffer1=buffer1 & "[BRK]" 
End If

rsRemarks.CLOSE() 
set rsRemarks=Nothing


Response.Write buffer1



                      


%>