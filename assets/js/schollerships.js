
function scholarshipRule(scholarship, $) {
	for (var i = 0; i < scholarship.length; i++) {
		$('<li>' + scholarship[i] + '</li>').appendTo('#scholarshipRule');
	}
}

function importantInformation(information, $) {
	for (var i = 0; i < information.length; i++) {
		$('<li>' + information[i] + '</li>').appendTo('#importantInformation');
	}
}

function documentRequired(doc, $) {
	for (var i = 0; i < doc.length; i++) {
		$('<tr>' + doc[i] + '</tr>').appendTo('#documentRequired .documents');
	}
}


// KOTA


kota_schollership = [
	'Scholarship Eligibility Criteria are mentioned in the relevant Course Page of the Course Booklet and on our website.',
	'Prescribed Scholarship Application Form can be obtained from our Admission Office.',
	'Scholarship request made verbally or through phone / email / fax shall not be entertained in any case.',
	'To avail the scholarship, student has to produce required Documents in Original for Verification &amp; submit Photocopy (as mentioned below) along with the Scholarship Application form at the earliest at our Corporate Office (KOTA) / Admission Office.',
	'Last date to submit Scholarship Application Form is<strong> 30/09/2020</strong>. No application for scholarship there after shall be accepted in any case.'
];

kota_information = [
	'Students of whom Result of X Board / XII Board / NEET (UG) 2020 / JEE (Main) 2020 / JEE Advanced 2020 is awaited at the time of Admission can also Apply for Scholarship at later stage (before last date) with the below mentioned documents, if eligible.',
	'In case of Applying for Scholarship after taking Admission you can avail scholarship either : <ol type="a"> <li>At the time of paying Second Installment, or</li> <li>By applying for Scholarship Disbursement.</li></ol>',
	'Disbursement of Scholarship will be credited in Father / Mother / Student Bank Account by September 2020 or 1 month from the date of Application (whichever is later) through NEFT / RTGS only. For this you have to submit cancelled cheque or bank passbook first page copy along with scholarship form.',
	'Scholarship provided on the basis of Class X / Class XII (result declared in 2020) will be provided in Current Academic Session (2020-21) only.',
	'Scholarship provided on the basis of CBSE XII Board / ICSE XII Board (TS04, TS06, MS04,MS06, ES04, ES06) will be counted on the basis of aggregate of all subjects as mentioned in Marksheet.',
	'Scholarship provided on the basis of NEET (UG) 2020 / JEE (Main) 2020 / JEE (Advanced) 2020 will be provided only in Current Academic Session (2020-21) only.',
	'Scholarship awarded in ASAT will be on the basis of students performance.',
	'The Scholarship amount will be calculated on either: (a) Total amount in case of installment payment, OR (b) Lump sum amount in one-time payment.',
	'Scholarship for siblings will be available only for real brother / sister (s).'
];

kota_documents = [
	'<td>TS01, TS02,TS04, TS06, MS01, MS02, MS04, MS06, ES01, ES02, ES04, ES06</td><td>Original Marksheet of X / XII (Session 2020 Only) along with photo copy & Board Certificates.</td>', 
	'<td>TS14, TS15, MS14, MS15, ES14, ES15</td><td>Letter of Acceptance by NTSE& Certificate issued by NTSE.</td>', 
	'<td>TS07, ES07</td><td>Photocopy of JEE(Advanced) 2020 Admit Card along with Original Admit Card for verification. Printout of JEE(Advanced) 2020 Result published on website.</td>', 
	'<td>TS08, ES25</td><td>Photocopy of JEE(Main) 2020 Admit Card along with Original Admit Card for verification. Printout of JEE(Main) 2020 Result published on website.</td>', 
	'<td>MS07, MS25</td><td>Photocopy of NEET(UG) 2020 Admit Card with original & Internet printout of NEET(UG) 2020 Result. In case of MS25 ALLENI-Card (previous year) is also required along with Original for verification.</td>', 
	'<td>TS09, MS09, ES09</td><td>Photo copy of ALLEN I-Card (previous years) of year long class room course along with Original for verification.</td>', 
	'<td>TS11, MS11</td><td>No Document is required. This scholarship will be awarded on the basis of student’s cumulative performance, conduct, attendance & discipline during the first year (Nurture Course).</td>', 
	'<td>TS16,TS17,TS18,TS19,TS35,MS16,MS17,MS18, MS19,MS35,ES16, ES17, ES18, ES19,ES35,PS03,PS06,PS08,PS09,PS35,PS36,PRERMO15</td><td>Letter or Certificate issued by HBCSE, KVPY & Olympiad Foundations. Applicable for one time only.</td>', 
	'<td>TS24,MS24, ES24, PS10</td><td>Any of the following for verifying the parent name: Birth Certificate / Aadhaar Card / School Marksheet / X / XII Class Marksheet.</td>', 
	'<td>TS31, PS31</td><td>No Documents required.</td>', 
	'<td>TS32,MS32, ES32, PS32</td><td>Photocopy of TALLENTEX-2020 (Held in 2019) Result published on website.</td>', 
];

// Bengaluru Center Details

bengaluru_pncf_schollership = [
	'Scholarship Eligibility Criteria are mentioned in the relevant Course Page of the Course Booklet and on our website.',
	'Prescribed Scholarship Application Form can be obtained from our Admission Office.',
	'Scholarship request made verbally or through phone / email / fax shall not be entertained in any case.',
	'To avail the scholarship, student has to produce required Documents in Original for Verification & submit Photocopy (as mentioned below) along with the Scholarship Application form at the earliest at our Corporate Office (KOTA) / Admission Office.',
	'Last date to submit Scholarship Application Form is<strong> 30/09/2020</strong>. No application for scholarship there after shall be accepted in any case.'
];

bengaluru_pncf_information = [
	'In case of Applying for Scholarship after taking Admission you can avail scholarship either : <ol type="a"> <li>At the time of paying Second Installment, or</li> <li>By applying for Scholarship Disbursement.</li></ol>',
	'Disbursement of Scholarship will be credited in Father / Mother / Student Bank Account by September 2020 or 1 month from the date of Application (whichever is later) through NEFT / RTGS only. For this you have to submit cancelled cheque or bank passbook first page copy along with scholarship form.',
	'Scholarship provided on the basis of Class X / Class XII (result declared in 2020) will be provided in Current Academic Session (2020-21) only.',
	'Scholarship awarded in ASAT will be on the basis of students performance.',
	'The Scholarship amount will be calculated on either: (a) Total amount in case of installment payment, OR (b) Lump sum amount in one-time payment.',
	'Scholarship for siblings will be available only for real brother / sister (s).'
];

bengaluru_pncf_documents = [
	'<td>PS03, PS06, PS08, PS09, PS35, PS36</td><td>Letter or Certificate issued by HBCSE, KVPY & Olympiad Foundations. Applicable for one time only.</td>', 
	'<td>PS10</td><td>Any of the following for verifying the parent name: Birth Certificate / Aadhaar Card / School Marksheet / X/ XII Class Marksheet.</td>', 
	'<td>PS31</td><td>No Documents required.</td>', 
	'<td>PS32</td><td>Photocopy of TALLENTEX-2020 (Held in 2019) Result published on website.</td>', 
];


// Bhilwara Center Details

bhilwara_pncf_schollership = [
	'Scholarship Eligibility Criteria are mentioned in the relevant Course Page of the Course Booklet and on our website.',
	'Prescribed Scholarship Application Form can be obtained from our Admission Office.',
	'Scholarship request made verbally or through phone / email / fax shall not be entertained in any case.',
	'To avail the scholarship, student has to produce required Documents in Original for Verification & submit Photocopy (as mentioned below) along with the Scholarship Application form at the earliest at our Corporate Office (KOTA) / Admission Office.',
	'Last date to submit Scholarship Application Form is<strong> 30/09/2020</strong>. No application for scholarship there after shall be accepted in any case.'
];

bhilwara_pncf_information = [
	'In case of Applying for Scholarship after taking Admission you can avail scholarship either : <ol type="a"> <li>At the time of paying Second Installment, or</li> <li>By applying for Scholarship Disbursement.</li></ol>',
	'Disbursement of Scholarship will be credited in Father / Mother / Student Bank Account by September 2020 or 1 month from the date of Application (whichever is later) through NEFT / RTGS only. For this you have to submit cancelled cheque or bank passbook first page copy along with scholarship form.',
	'Scholarship provided on the basis of Class X / Class XII (result declared in 2020) will be provided in Current Academic Session (2020-21) only.',
	'Scholarship awarded in ASAT will be on the basis of students performance.',
	'The Scholarship amount will be calculated on either: (a) Total amount in case of installment payment, OR (b) Lump sum amount in one-time payment.',
	'Scholarship for siblings will be available only for real brother / sister (s).'
];

bhilwara_pncf_documents = [
	'<td>PS03, PS06, PS08, PS09, PS35, PS36</td><td>Letter or Certificate issued by HBCSE, KVPY & Olympiad Foundations. Applicable for one time only.</td>', 
	'<td>PS10</td><td>Any of the following for verifying the parent name: Birth Certificate / Aadhaar Card / School Marksheet / X/ XII Class Marksheet.</td>', 
	'<td>PS31</td><td>No Documents required.</td>', 
	'<td>PS32</td><td>Photocopy of TALLENTEX-2020 (Held in 2019) Result published on website.</td>', 
];


// KOTA Center Details

kota_pncf_schollership = [
	'Scholarship Eligibility Criteria are mentioned in the relevant Course Page of the Course Booklet and on our website.',
	'Prescribed Scholarship Application Form can be obtained from our Admission Office.',
	'Scholarship request made verbally or through phone / email / fax shall not be entertained in any case.',
	'To avail the scholarship, student has to produce required Documents in Original for Verification & submit Photocopy (as mentioned below) along with the Scholarship Application form at the earliest at our Corporate Office (KOTA) / Admission Office.',
	'Last date to submit Scholarship Application Form is<strong> 30/09/2020</strong>. No application for scholarship there after shall be accepted in any case.'
];

kota_pncf_information = [
	'In case of Applying for Scholarship after taking Admission you can avail scholarship either : <ol type="a"> <li>At the time of paying Second Installment, or</li> <li>By applying for Scholarship Disbursement.</li></ol>',
	'Disbursement of Scholarship will be credited in Father / Mother / Student Bank Account by September 2020 or 1 month from the date of Application (whichever is later) through NEFT / RTGS only. For this you have to submit cancelled cheque or bank passbook first page copy along with scholarship form.',
	'Scholarship provided on the basis of Class X / Class XII (result declared in 2020) will be provided in Current Academic Session (2020-21) only.',
	'Scholarship awarded in ASAT will be on the basis of students performance.',
	'The Scholarship amount will be calculated on either: (a) Total amount in case of installment payment, OR (b) Lump sum amount in one-time payment.',
	'Scholarship for siblings will be available only for real brother / sister (s).'
];

kota_pncf_documents = [
	'<td>PS03, PS06, PS08, PS09, PS35, PS36</td><td>Letter or Certificate issued by HBCSE, KVPY & Olympiad Foundations. Applicable for one time only.</td>', 
	'<td>PS10</td><td>Any of the following for verifying the parent name: Birth Certificate / Aadhaar Card / School Marksheet / X/ XII Class Marksheet.</td>', 
	'<td>PS31</td><td>No Documents required.</td>', 
	'<td>PS32</td><td>Photocopy of TALLENTEX-2020 (Held in 2019) Result published on website.</td>', 
];


