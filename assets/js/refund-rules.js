function refundProcess(refund, $) {
	for (var i = 0; i < refund.length; i++) {
		$('<li>' + refund[i] + '</li>').appendTo('#refundProcess');
	}
}

function specialRefund(sprefund, $) {
	for (var i = 0; i < sprefund.length; i++) {
		$('<li>' + sprefund[i] + '</li>').appendTo('#specialRefund');
	}
}

function importantPoints(important, $) {
	for (var i = 0; i < important.length; i++) {
		$('<li>' + important[i] + '</li>').appendTo('#importantPoints');
	}
}

function refundRules(rules, $) {
	for (var i = 0; i < rules.length; i++) {
		$('<tr>' + rules[i] + '</tr>').appendTo('#refundRules .rules');
	}
}

function changes(service, $) {
	for (var i = 0; i < service.length; i++) {
		$('<tr>' + service[i] + '</tr>').appendTo('#changes .service');
	}
}



// PNCF Site Ahmedabad


kota_refundProcess = [
	'Last Date to Apply for First Refund and Last Refund is mentioned on relevant Course Page of the Course Booklet and in your Fee Challan Fee Receipt. Amount Deductable in First Refund Case and Last Refund Case <span class="color-blue">(towards Administrative & Academic Expenses)</span> are also mentioned in the relevant Course Page of this Course Booklet / our website and Fee Challan cum Fee Receipt.',
	'Prescribed Refund Application Form can be obtained from our Office or you can also Apply Online.<a href="https://www.allen.ac.in/appsmvc2021/formstatus/Login" class="color-blue" target="_blank"> Click Here</a>.',
	'Refund request made verbally or through phone/email/fax shall not be entertained in any case.',
	'Refund Application in the prescribed format will be accepted along with Original Fee Receipt, ALLEN Identity Card & Attendance Card. No refund will be made after the Last Refund Date, except special cases as below.',
	'Refund will be credited in Father / Mother / Student Bank Account through NEFT / RTGS mode only. For this you have to submit Cancelled Cheque or Bank Passbook first page copy along with Refund Form.',
	'Refund rules are SAME even : <ol type="a" class="pncf-list-in"><li>If a student joins class after commencement date or</li><li>If a student doesnt join or attend even a single class at all or</li><li>If a student apply for refund before commencement of the class.</li></ol>'
];

kota_specialRefund = [
	'If a Student get Admission in any Medical / Engineering College located in India for MBBS / BDS / B.Tech. / B.E. / B.Arch. only through any Competitive Examination, refund will be made after deducting amount equivalent to Last Refund amount out of Fee Paid. Refund shall not be payable if amount paid is less than amount equivalent to Last Refund amount.',
	'Refund of fee will be applicable only for the aforesaid courses. Refund will not be made for B.Pharma / B.YNS / B. Physiotherapy / B.VSc, B.Sc. and other Courses.',
	'Last date for such special case refund is <b>30/09/2020</b>.',
	'For this following documents must be submitted along with prescribed Refund Application Form. <ol type="a" class="pncf-list-in"> <li>Original Fee Receipt of ALLEN.</li> <li>Identity Card of ALLEN.</li><li>Attendance Card of ALLEN.</li><li>Photo Copy of College Call Letter / Counseling Letter.</li><li>Fee Receipt of College Admission.</li></ol>',
	'Refund application on the ground of severe disease may be considered by the management committee, after passing Last Refund date on submission of Medical Prescription / Report.'
];

kota_importantPoints = [
	'Admission in a particular course at a particular location is subjected to availability of seats.',
	'Keep your fee receipt safely, in many cases it will work as an authentic proof of your registration at ALLEN.',
	'After fee deposition student must collect their Attendance card by showing the original fee receipt.',
	'After completing the Admission process students Batch & Building details will be sent to him/her by SMS on Father’s / Mother’s Mobile number, 2 days before class commencement. After that he/she has to report in the Institute / Class Venue along with his/her Attendance Card, on the date & time as specified in SMS.',
	// Please Don't Change Below Points it is same everywhere----------------------------
	'After Fee Deposition Course/Phase/Stream/Study Center Change is permissible (subject to availability of seat and performance of the student) on payment of prescribed fee as per list given below along with the difference of Course Fee :<div class="table-responsive mt-3">	<table class="table table-bordered table-hover customtbl cetnble" id="refundRules"><tbody class="rules"><tr><th colspan="4" class="maintblhd-bg">Pre-Medical / JEE (Main+Advanced) / JEE (Main)</th></tr><tr><th>Particulars</th><th>Upto 15 Days*</th><th>16-30 Days*</th><th>31-45 Days*</th></tr><tr><td>Course Change</td><td><i class="fa fa-inr"></i> 1500/-</td><td><i class="fa fa-inr"></i> 6000/-</td><td><i class="fa fa-inr"></i> 10000/-</td></tr><tr><td>Phase Change</td><td><i class="fa fa-inr"></i> 1500/-</td><td><i class="fa fa-inr"></i> 6000/-</td><td><i class="fa fa-inr"></i> 10000/-</td></tr><tr><td>Stream Change</td><td><i class="fa fa-inr"></i> 1500/-</td><td><i class="fa fa-inr"></i> 6000/-</td><td><i class="fa fa-inr"></i> 10000/-</td></tr><tr><td>Study Center Change</td><td><i class="fa fa-inr"></i> 1500/-</td><td><i class="fa fa-inr"></i> 6000/-</td><td><i class="fa fa-inr"></i> 10000/-</td></tr><tr><th colspan="4" class="maintblhd-bg">Pre-Nurture &amp; Career Foundation (PNCF)</th></tr><tr><th>Particulars</th><th>Upto 30 Days*</th><th colspan="2">After 30 Days*</th></tr></tbody></table></div><b>* Phase change Not applicable after 45 days.</b>',

	'After deposition of the fee, following charges are applicable for : <div class="table-responsive mt-3">	<table class="table table-bordered table-hover customtbl cetnble" id="changes"><tbody class="service"><tr><th colspan="2" class="maintblhd-bg" style="width:20%;">Pre-Medical / JEE (Main+Advanced) / JEE (Main) / Pre-Nurture &amp; Career Foundation (PNCF)</th></tr><tr><th>Particulars</th><th>Charges</th></tr></tbody></table></div>',

	'If a student fails to deposit 2nd Installment on or before the Last Date mentioned in course booklet, late fee <i class="fa fa-inr"></i> 50/- per day will be charged (in addition to 	Fee) upto 30 days. After this the admission shall be treated cancelled without any prior information & refund of fee. <br><b>*Days will be counted from class commencement date.</b>'
];

kota_refundRules = [
	'<td>Course Change</td><td><i class="fa fa-inr"></i> 1500/-</td><td colspan="2"><i class="fa fa-inr"></i> 3000/-</td>', 
	'<td>Phase Change</td><td><i class="fa fa-inr"></i> 1500/-</td><td colspan="2"><i class="fa fa-inr"></i> 3000/-</td>', 
	'<td>Study Center Change</td><td><i class="fa fa-inr"></i> 1500/-</td><td colspan="2"><i class="fa fa-inr"></i> 3000/-</td>', 
];

kota_changes = [
	'<td>Batch Change</td><td><i class="fa fa-inr"></i> 500/-</td>', 
	'<td>Duplicate ID Card</td><td><i class="fa fa-inr"></i> 200/-</td>', 
	'<td>Duplicate Attendance Card</td><td><i class="fa fa-inr"></i> 200/-</td>', 
	'<td>Duplicate Batch Card</td><td><i class="fa fa-inr"></i> 200/-</td>', 
	'<td>Duplicate Fee Receipt</td><td><i class="fa fa-inr"></i> 200/-</td>', 
];

// PNCF Site Bengaluru

