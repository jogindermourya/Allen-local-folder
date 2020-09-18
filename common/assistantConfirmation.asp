<%@LANGUAGE="VBSCRIPT" CODEPAGE="1252"%> 

	<%MM_Conn_STRING1 = "Provider=SQLOLEDB.1;Persist Security Info=False;User ID=aciccpdbuser;PWD=ACICCPuser#0744;Initial Catalog=AllenDefault;Data Source=50.28.79.7"%>

<%
	Dim studentname
	Dim mobile
	Dim classname
   	Dim center
    Dim comdEnquiry
    Dim strInsertSQL
	
	studentname=Trim(request.form("name"))
	mobile=Trim(request.form("mobile"))
	classname=Trim(request.form("classname"))
   
    center=session("center")
   
    If center = "" Then
   		center="kota"
   	End If
	
	IF len(studentname) = 0 Then
		Response.Write "Please enter name"
		Response.End()
	End If
	
	IF len(classname) = 0 Then
		Response.Write "Please select class"
		Response.End()
	End If
	
	IF len(mobile) = 0 Then
		Response.Write "Please enter mobile number"
		Response.End()
	End If
	
	IF (len(mobile) > 10 and len(mobile)<10) Then
		Response.Write "Please enter valid mobile number"
		Response.End()
	End If
											 
	Set comdEnquiry = Server.CreateObject("ADODB.Command")
	comdEnquiry.ActiveConnection = MM_Conn_STRING1    
    strInsertSQL="insert into assistantEnquiry(name,classname,mobile,center) values ('" & studentname & "','" & classname & "','" & mobile & "','" & center & "')"   
    comdEnquiry.CommandText = strInsertSQL
	comdEnquiry.Execute									 
	
	Response.Write "Data Inserted Successfully"
%>