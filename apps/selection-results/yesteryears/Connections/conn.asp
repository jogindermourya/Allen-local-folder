<%
Dim MM_Conn_STRING, MM_Conn_STRING8910, strPath

' SQL SERCER DB Connection (OFFLINE / ONLINE - Internal Server)
MM_Conn_STRING8910 = "Provider=SQLOLEDB.1;Persist Security Info=False;User ID=allen24109lg;PWD=CarEh34Pwd;Initial Catalog=Achievements;Data Source=115.178.99.11"

MM_Conn_STRING = "Provider=SQLOLEDB.1;Persist Security Info=False;User ID=allen24109lg;PWD=CarEh34Pwd;Initial Catalog=Achievements;Data Source=115.178.99.11"



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
'newChars = replace(newChars,"&","\&", 1, -1, 1)
newChars = replace(newChars,"/","\/", 1, -1, 1)      
'newChars = replace(newChars,"[","\[", 1, -1, 1)
'newChars = replace(newChars,"]","\]", 1, -1, 1)
newChars = replace(newChars,"{","\{", 1, -1, 1)
newChars = replace(newChars,"}","\}", 1, -1, 1)
'newChars = replace(newChars,"(","\(", 1, -1, 1)
'newChars = replace(newChars,")","\)", 1, -1, 1)
newChars = replace(newChars,";","\;", 1, -1, 1)
'newChars = replace(newChars,"+","\+", 1, -1, 1)
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