<%@LANGUAGE="VBSCRIPT" CODEPAGE="1252"%>
<%
Dim MM_Conn_STRING, strPath
strPath = Server.MapPath("database/TopRanks.mdb")
MM_Conn_STRING = "DRIVER={Microsoft Access Driver (*.mdb)};DBQ=" & strPath & ";"

' SQL SERCER DB Connection (OFFLINE / ONLINE - Internal Server)
MM_Conn_STRING = "Provider=SQLOLEDB.1;Persist Security Info=False;User ID=allen24109lg;PWD=CarEh34Pwd;Initial Catalog=Achievements;Data Source=115.178.99.11"


%>

<%

	
'	




'	Set rsTopRanksIIT = Server.CreateObject("ADODB.Recordset")
'	rsTopRanksIIT.open "{Call usp_getdata(9,'IIT-JEE','','')}", Conn, adOpenStatic	
'	
	'rsTopRanksIIT.ActiveConnection = MM_Conn_STRING
	'rsTopRanksIIT.Source = "SELECT T.*, R.REMARKS1, R.REMARKS2 FROM TOPRANKS T, REMARKSTOPRANK R WHERE T.EXAM = 'IIT-JEE' AND T.EXAM = R.EXAM ORDER BY T.EXAM, SELYEAR DESC"
	'rsTopRanksIIT.CursorType = 0
	'rsTopRanksIIT.CursorLocation = 2
	'rsTopRanksIIT.LockType = 3
	'rsTopRanksIIT.Open()
	'rsTopRanksIIT_numRows = 0
	
	

	'Set rsTopRanksAIPMT = Server.CreateObject("ADODB.Recordset")
'	rsTopRanksAIPMT.open "{Call usp_getdata(9,'AIPMT','','')}", Conn, adOpenStatic
	'rsTopRanksAIPMT.ActiveConnection = MM_Conn_STRING
	'rsTopRanksAIPMT.Source = "SELECT T.*, R.REMARKS1, R.REMARKS2 FROM TOPRANKS T, REMARKSTOPRANK R WHERE T.EXAM = 'AIPMT' AND T.EXAM = R.EXAM ORDER BY T.EXAM, SELYEAR DESC"
	'rsTopRanksAIPMT.CursorType = 0
	'rsTopRanksAIPMT.CursorLocation = 2
	'rsTopRanksAIPMT.LockType = 3
	'rsTopRanksAIPMT.Open()
	'rsTopRanksAIPMT_numRows = 0
	
	'Set rsTopRanksBHU = Server.CreateObject("ADODB.Recordset")
'	rsTopRanksBHU.open "{Call usp_getdata(9,'BHU [MAINS]','','')}", Conn, adOpenStatic
	'rsTopRanksBHU.ActiveConnection = MM_Conn_STRING
	'rsTopRanksBHU.Source = "SELECT T.*, R.REMARKS1, R.REMARKS2 FROM TOPRANKS T, REMARKSTOPRANK R WHERE T.EXAM = 'BHU [MAINS]' AND T.EXAM = R.EXAM ORDER BY T.EXAM, SELYEAR DESC"
	'rsTopRanksBHU.CursorType = 0
	'rsTopRanksBHU.CursorLocation = 2
	'rsTopRanksBHU.LockType = 3
	'rsTopRanksBHU.Open()
	'rsTopRanksBHU_numRows = 0
'
	'Set rsTopRanksAIEEE = Server.CreateObject("ADODB.Recordset")
'	rsTopRanksAIEEE.open "{Call usp_getdata(9,'AIEEE','','')}", Conn, adOpenStatic
	'rsTopRanksAIEEE.ActiveConnection = MM_Conn_STRING
	'rsTopRanksAIEEE.Source = "SELECT T.*, R.REMARKS1, R.REMARKS2 FROM TOPRANKS T, REMARKSTOPRANK R WHERE T.EXAM = 'AIEEE' AND T.EXAM = R.EXAM ORDER BY T.EXAM, SELYEAR DESC"
	'rsTopRanksAIEEE.CursorType = 0
	'rsTopRanksAIEEE.CursorLocation = 2
	'rsTopRanksAIEEE.LockType = 3
	'rsTopRanksAIEEE.Open()
	'rsTopRanksAIEEE_numRows = 0

	'Set rsTopRanksRPMT = Server.CreateObject("ADODB.Recordset")
'	rsTopRanksRPMT.open "{Call usp_getdata(9,'RPMT','','')}", Conn, adOpenStatic
	'rsTopRanksRPMT.ActiveConnection = MM_Conn_STRING
	'rsTopRanksRPMT.Source = "SELECT T.*, R.REMARKS1, R.REMARKS2 FROM TOPRANKS T, REMARKSTOPRANK R WHERE T.EXAM = 'RPMT' AND T.EXAM = R.EXAM ORDER BY T.EXAM, SELYEAR DESC"
	'rsTopRanksRPMT.CursorType = 0
	'rsTopRanksRPMT.CursorLocation = 2
	'rsTopRanksRPMT.LockType = 3
	'rsTopRanksRPMT.Open()
	'rsTopRanksRPMT_numRows = 0

	'Set rsTopRanksMPPMT = Server.CreateObject("ADODB.Recordset")
'	rsTopRanksMPPMT.open "{Call usp_getdata(9,'RPMT','','')}", Conn, adOpenStatic
	'rsTopRanksMPPMT.ActiveConnection = MM_Conn_STRING
	'rsTopRanksMPPMT.Source = "SELECT T.*, R.REMARKS1, R.REMARKS2 FROM TOPRANKS T, REMARKSTOPRANK R WHERE T.EXAM = 'MP-PMT' AND T.EXAM = R.EXAM ORDER BY T.EXAM, SELYEAR DESC"
	'rsTopRanksMPPMT.CursorType = 0
	'rsTopRanksMPPMT.CursorLocation = 2
	'rsTopRanksMPPMT.LockType = 3
	'rsTopRanksMPPMT.Open()
	'rsTopRanksMPPMT_numRows = 0

	'Set rsTopRanksCGPMT = Server.CreateObject("ADODB.Recordset")
'	rsTopRanksCGPMT.open "{Call usp_getdata(9,'CG-PMT','','')}", Conn, adOpenStatic
	'rsTopRanksCGPMT.ActiveConnection = MM_Conn_STRING
	'rsTopRanksCGPMT.Source = "SELECT T.*, R.REMARKS1, R.REMARKS2 FROM TOPRANKS T, REMARKSTOPRANK R WHERE T.EXAM = 'CG-PMT' AND T.EXAM = R.EXAM ORDER BY T.EXAM, SELYEAR DESC"
	'rsTopRanksCGPMT.CursorType = 0
	'rsTopRanksCGPMT.CursorLocation = 2
	'rsTopRanksCGPMT.LockType = 3
	'rsTopRanksCGPMT.Open()
	'rsTopRanksCGPMT_numRows = 0
	
	
	
	
	'Set rsTopRanksAIIMS = Server.CreateObject("ADODB.Recordset")
'	rsTopRanksAIIMS.open "{Call usp_getdata(9,'AIIMS','','')}", Conn, adOpenStatic
	'rsTopRanksAIIMS.ActiveConnection = MM_Conn_STRING
	'rsTopRanksAIIMS.Source = "SELECT T.*, R.REMARKS1, R.REMARKS2 FROM TOPRANKS T, REMARKSTOPRANK R WHERE T.EXAM = 'AIIMS' AND T.EXAM = R.EXAM ORDER BY T.EXAM, SELYEAR DESC"
	'rsTopRanksAIIMS.CursorType = 0
	'rsTopRanksAIIMS.CursorLocation = 2
	'rsTopRanksAIIMS.LockType = 3
	'rsTopRanksAIIMS.Open()
	'rsTopRanksAIIMS_numRows = 0
	
	
	
	
function SQLInject(strWords) 
dim badChars, newChars, i
badChars = array("select", "drop", ";", "--", "insert", "delete", "xp_") 
newChars = strWords 
for i = 0 to uBound(badChars) 
newChars = replace(newChars, badChars(i), "") 
next 
newChars = newChars 
newChars= replace(newChars, "'", "''")
newChars= replace(newChars, " ", "")
newChars= replace(newChars, "'", "|")
newChars= replace(newChars, "|", "''")
newChars= replace(newChars, "\""", "|")
newChars= replace(newChars, "|", "''")
SQLInject=newChars
end function 


function SQLInject2(strWords)
dim badChars, newChars, tmpChars, regEx, i
badChars = array( _
"select(.*)(from|with|by){1}", "insert(.*)(into|values){1}", "update(.*)set", "delete(.*)(from|with){1}", _
"drop(.*)(from|aggre|role|assem|key|cert|cont|credential|data|endpoint|event|f ulltext|function|index|login|type|schema|procedure|que|remote|role|route|sign| stat|syno|table|trigger|user|view|xml){1}", _
"alter(.*)(application|assem|key|author|cert|credential|data|endpoint|fulltext |function|index|login|type|schema|procedure|que|remote|role|route|serv|table|u ser|view|xml){1}", _
"xp_", "sp_", "restore\s", "grant\s", "revoke\s", _
"dbcc", "dump", "use\s", "set\s", "truncate\s", "backup\s", _
"load\s", "save\s", "shutdown", "cast(.*)\(", "convert(.*)\(", "execute\s", _
"updatetext", "writetext", "reconfigure", _
"/\*", "\*/", ";", "\-\-", "\[", "\]", "char(.*)\(", "nchar(.*)\(") 
newChars = strWords
for i = 0 to uBound(badChars)
Set regEx = New RegExp
regEx.Pattern = badChars(i)
regEx.IgnoreCase = True
regEx.Global = True
newChars = regEx.Replace(newChars, "")
Set regEx = nothing
next
newChars = replace(newChars, "'", "''")




newChars = Trim(newChars)

'Remove malisous charcters from sql\
newChars = replace(newChars,"-shutdown","", 1, -1, 1)
newChars = replace(newChars,"\","\\", 1, -1, 1)
newChars = replace(newChars,"=","\=", 1, -1, 1)
newChars = replace(newChars,",","\,", 1, -1, 1)
newChars = replace(newChars,"`","\`", 1, -1, 1)
newChars = replace(newChars,"&","\&", 1, -1, 1)
newChars = replace(newChars,"/","\/", 1, -1, 1)      
newChars = replace(newChars,"[","\[", 1, -1, 1)
newChars = replace(newChars,"]","\]", 1, -1, 1)
newChars = replace(newChars,"{","\{", 1, -1, 1)
newChars = replace(newChars,"}","\}", 1, -1, 1)
newChars = replace(newChars,"(","\(", 1, -1, 1)
newChars = replace(newChars,")","\)", 1, -1, 1)
newChars = replace(newChars,";","\;", 1, -1, 1)
newChars = replace(newChars,"+","\+", 1, -1, 1)
newChars = replace(newChars,"<","\<", 1, -1, 1)
newChars = replace(newChars,">","\>", 1, -1, 1)
newChars = replace(newChars,"^","\^", 1, -1, 1)
newChars = replace(newChars,"@","\@", 1, -1, 1)
newChars = replace(newChars,"$","\$", 1, -1, 1)
newChars = replace(newChars,"%","\%", 1, -1, 1)
newChars = replace(newChars,"!","\!", 1, -1, 1)
newChars = replace(newChars,"*","\*", 1, -1, 1)
newChars = replace(newChars,"~","\~", 1, -1, 1)
newChars = replace(newChars,"#","\#", 1, -1, 1)
newChars = replace(newChars,"?","\?", 1, -1, 1)
newChars = replace(newChars,"'","\'", 1, -1, 1)
newChars = replace(newChars,"""","\""", 1, -1, 1)
newChars = replace(newChars,"select","\select", 1, -1, 1)
newChars = replace(newChars,"insert","\insert", 1, -1, 1)
newChars = replace(newChars,"update","\update", 1, -1, 1)
newChars = replace(newChars,"delete","\delete", 1, -1, 1)
newChars = replace(newChars," or "," \or ", 1, -1, 1)
newChars = replace(newChars," and "," \and ", 1, -1, 1)
newChars = replace(newChars,"drop","\drop", 1, -1, 1)
newChars = replace(newChars,"union","\union", 1, -1, 1)
newChars = replace(newChars,"into","\into", 1, -1, 1)




SqlInject2 = newChars
end function


%>