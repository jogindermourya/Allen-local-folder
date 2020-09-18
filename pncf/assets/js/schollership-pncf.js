
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


/*====== Ahmeddabad Notification=====*/


// Main Site


ahmedabad_pncf_schollership = [
	'Scholarship Eligibility Criteria are mentioned in the relevant Course Page of the Course Booklet and on our website.',
	'Prescribed Scholarship Application Form can be obtained from our Admission Office.',
	'Scholarship request made verbally or through phone / email / fax shall not be entertained in any case.',
	'To avail the scholarship, student has to produce required Documents in Original for Verification &amp; submit Photocopy (as mentioned below) along with the Scholarship Application form at the earliest at our Corporate Office (KOTA) / Admission Office.',
	'Last date to submit Scholarship Application Form is<strong> 30/09/2020</strong>. No application for scholarship there after shall be accepted in any case.'
];

ahmedabad_pncf_information = [
	'In case of Applying for Scholarship after taking Admission you can avail scholarship either : <ol type="a"> <li>At the time of paying Second Installment, or</li> <li>By applying for Scholarship Disbursement.</li></ol>',
	'Disbursement of Scholarship will be credited in Father / Mother / Student Bank Account by September 2020 or 1 month from the date of Application (whichever is later) through NEFT / RTGS only. For this you have to submit cancelled cheque or bank passbook first page copy along with scholarship form.',
	'Scholarship provided on the basis of Class X / Class XII (result declared in 2020) will be provided in Current Academic Session (2020-21) only.',
	'Scholarship awarded in ASAT will be on the basis of students performance.',
	'The Scholarship amount will be calculated on either: (a) Total amount in case of installment payment, OR (b) Lump sum amount in one-time payment.',
	'Scholarship for siblings will be available only for real brother / sister (s).'
];

ahmedabad_pncf_documents = [
	'<td>PS03, PS06, PS08, PS09, PS35, PS36</td><td>Letter or Certificate issued by HBCSE, KVPY & Olympiad Foundations. Applicable for one time only.</td>', 
	'<td>PS10</td><td>Any of the following for verifying the parent name: Birth Certificate / Aadhaar Card / School Marksheet / X/ XII Class Marksheet.</td>', 
	'<td>PS31</td><td>No Documents required.</td>', 
	'<td>PS32</td><td>Photocopy of TALLENTEX-2020 (Held in 2019) Result published on website.</td>', 
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


