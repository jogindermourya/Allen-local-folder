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
    
    strmsg=""
    
    If (StrComp(UCase(b),UCase("ALLEN Info")) = 0) Then
    	strmsg="Now access every update and info from ALLEN as per your convenience with ALLEN Info and Admission app. To download, click here: https://tinyurl.com/ycjyazs8" 
    ElseIf  (StrComp(UCase(b),UCase("ALLEN GK")) = 0) Then
       	strmsg="Enhance GK and prepare for competitive exams by excelling in general knowledge with the ALLEN GK app. To download, click here: https://tinyurl.com/y7dosmt5"
    ElseIf  (StrComp(UCase(b),UCase("ALLEN GSP")) = 0) Then
    	strmsg="Learn while playing & earn exciting prizes with Gyan Se Pehchan app, your gateway to unlimited knowledge. To download, click here: https://tinyurl.com/ychr8ec6"    
    ElseIf  (StrComp(UCase(b),UCase("ALLEN OLTS Test My Prep")) = 0) Then
        strmsg="Prep-up the right way by testing your performance and analyzing it on TestMyPrep. To download the iOS version, click here: https://tinyurl.com/yalk5nmr"
  	ElseIf  (StrComp(UCase(b),UCase("ALLEN OLTS Test My Prep Android")) = 0) Then
        strmsg="Complete your preparation for JEE and NEET by testing it through TestMyPrep app. To download android version, click here: https://tinyurl.com/ybjvx9qx"
 	ElseIf  (StrComp(UCase(b),UCase("ALLEN Pre-PG Test My Prep app")) = 0) Then
        strmsg="Give yours Pre-PG preparation with the efficiency of ALLEN Pre-PG Test My Prep app. To download, click here: https://tinyurl.com/ybxbmyns"
    ElseIf  (StrComp(UCase(b),UCase("ALLEN GATE Test My Prep app")) = 0) Then
        strmsg="Practice consistently and secure an edge in your GATE preparation with ALLEN GATE Test My Prep app. To download, click here: https://tinyurl.com/y8bt7tue" 
    ElseIf  (StrComp(UCase(b),UCase("ALLEN CSAT")) = 0) Then
        strmsg="Follow your performance, test results and every important closely with the ALLEN C-Sat app. To download, click here: https://tinyurl.com/y9gfot4v"
 	ElseIf  (StrComp(UCase(b),UCase("ALLEN DSAT")) = 0) Then
        strmsg="From score card, to question report, and many other major details, access every info on ALLEN D-SAT app. To get app, click here: https://tinyurl.com/y8v664ct"              
    End If
    
    IF len(strmsg) = 0 Then
    	Response.Write("There is some problem please try again or later")
        response.end
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