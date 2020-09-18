<%@LANGUAGE="VBSCRIPT" CODEPAGE="1252"%> 

<%MM_Conn_STRING1 = "Provider=SQLOLEDB.1;Persist Security Info=False;User ID=aciccpdbuser;PWD=ACICCPuser#0744;Initial Catalog=AllenDefault;Data Source=50.28.79.7"%>

<%   
    Dim a
    Dim b
    Dim comdEnquiry
    Dim strInsertSQL 
    Dim strmsg
    Dim strURL  
    
    a=Trim(request.form("mobile"))
    b=Trim(request.form("type"))
    
    
    
    If (StrComp(UCase(b),UCase("ALLEN_Info")) = 0) Then
    	strmsg="Now access every update and info from ALLEN as per your convenience with ALLEN Info and Admission app. To download, click here: https://tinyurl.com/ycjyazs8" 
    ElseIf  (StrComp(UCase(b),UCase("ALLEN_GK")) = 0) Then
       	strmsg="Enhance GK and prepare for competitive exams by excelling in general knowledge with the ALLEN GK app. To download, click here: https://tinyurl.com/y7dosmt5"
    ElseIf  (StrComp(UCase(b),UCase("ALLEN_GSP")) = 0) Then
    	strmsg="Learn while playing & earn exciting prizes with Gyan Se Pehchan app, your gateway to unlimited knowledge. To download, click here: https://tinyurl.com/ychr8ec6"    
    End If
   
    If len(a) = 10   Then
    
    Set objWinHttp = CreateObject("WinHttp.WinHttpRequest.5.1")				
	
    
    
	strURL="http://www.smsjust.com/sms/user/urlsms.php?username=allenweb&pass=allen@web@aci&senderid=ALLENN&dest_mobileno=" & a & "&msgtype=txt&message=" & strmsg & "&response=Y"


	objWinHttp.Open "GET", strURL, false
	objWinHttp.Send				
	Set objWinHttp = Nothing	
    
    
	Set comdEnquiry = Server.CreateObject("ADODB.Command")
	comdEnquiry.ActiveConnection = MM_Conn_STRING1    
    strInsertSQL="insert into MobileAppSms(mobile,apptype) values ('" & a & "','" & b & "')"    
    comdEnquiry.CommandText = strInsertSQL
	comdEnquiry.Execute
    
	Response.Write("Link send on your mobile number")
    
    Else
    
    Response.Write("Invalid Mobile Number")
    
    End If
    
%>