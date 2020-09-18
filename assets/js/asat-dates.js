// JavaScript Document



function asatDates(dates, $) {
	for (var i = 0; i < dates.length; i++) {
		$('<tr>' + dates[i] + '</tr>').appendTo('#asatDates .data');
	}
}



/*====== Gateway Notification=====*/

kota_asat  = [
	'<td>JEE (Main+ Advanced) Nurture</td><td>19/01/2020, 02/02/2020, 16/02/2020, 15/03/2020, 05/04/2020, 12/04/2020</td><td>01:00 to <br>03:00 PM</td><td>Objective</td><td>NCERT Syllabus of Science &amp; Maths upto Student’s Current Class and IQ Questions</td>',
	
	'<td>JEE (Main+ Advanced) Leader</td><td>05/04/2020, 12/04/2020, 19/04/2020</td><td>01:00 PM to <br>03:00 PM</td><td>Objective</td><td>NCERT Syllabus of Science &amp; Maths upto Student’s Current Class and IQ Questions</td>',
	
];

pncf_kota_asat  = [
	'<td>-</td><td>-</td><td>-</td><td>-</td><td>-</td>',
];

ahmedabad_asat  = [
	'<td>JEE (Main+ Advanced) Nurture</td><td>19/01/2020, 02/02/2020, 16/02/2020, 15/03/2020, 05/04/2020, 12/04/2020</td><td>01:00 to <br>03:00 PM</td><td>Objective</td><td>NCERT Syllabus of Science &amp; Maths upto Student’s Current Class and IQ Questions</td>',
	
	'<td>JEE (Main+ Advanced) Leader</td><td>05/04/2020, 12/04/2020, 19/04/2020</td><td>01:00 PM to <br>03:00 PM</td><td>Objective</td><td>NCERT Syllabus of Science &amp; Maths upto Student’s Current Class and IQ Questions</td>',
	
];

pncf_ahmedabad_asat  = [
	'<td>Pre-Nurture & Career Foundation (PNCF)**</td><td>19/01/2020, 02/02/2020, 16/02/2020, 15/03/2020, 05/04/2020, 12/04/2020, 19/04/2020, 03/05/2020, 17/05/2020, 31/05/2020, 14/06/2020</td><td>01:00 PM to <br>03:00 PM</td><td>Objective</td><td>NCERT Syllabus of Science &amp; Maths upto Student’s Current Class and IQ Questions</td>',
];

bengaluru_asat  = [
	'<td>JEE (Main+ Advanced) Nurture</td><td>19/01/2020, 02/02/2020, 16/02/2020, 15/03/2020, 05/04/2020, 12/04/2020</td><td>01:00 PM to <br>03:00 PM</td><td>Objective</td><td>NCERT Syllabus of Science &amp; Maths upto Student’s Current Class and IQ Questions</td>',
	
	'<td>JEE (Main+ Advanced) Leader</td><td>05/04/2020, 12/04/2020, 19/04/2020</td><td>01:00 to <br>03:00 PM</td><td>Objective</td><td>NCERT Syllabus of Science &amp; Maths upto Student’s Current Class and IQ Questions</td>',
	
];

pncf_bengaluru_asat  = [
	'<td>Pre-Nurture & Career Foundation (PNCF)**</td><td>22/12/2019, 05/01/2020#, 19/01/2020, 02/02/2020, 16/02/2020, 01/03/2020#, 15/03/2020, 22/03/2020#, 05/04/2020, 12/04/2020, 19/04/2020, 26/04/2020#, 03/05/2020</td><td>01:00 PM to <br>03:00 PM</td><td>Objective</td><td>NCERT Syllabus of Science &amp; Maths upto Student’s Current Class and IQ Questions</td>',
];

bhilwara_asat  = [
	'<td>JEE (Main+ Advanced) Nurture</td><td>19/01/2020, 02/02/2020, 16/02/2020, 15/03/2020, 05/04/2020, 12/04/2020</td><td>01:00 PM to <br>03:00 PM</td><td>Objective</td><td>NCERT Syllabus of Science &amp; Maths upto Student’s Current Class and IQ Questions</td>',
	
	'<td>JEE (Main+ Advanced) Leader</td><td>05/04/2020, 12/04/2020, 19/04/2020</td><td>01:00 to <br>03:00 PM</td><td>Objective</td><td>NCERT Syllabus of Science &amp; Maths upto Student’s Current Class and IQ Questions</td>',
	
];

pncf_bhilwara_asat  = [
	'<td>Pre-Nurture & Career Foundation (PNCF)**</td><td>22/12/2019, 05/01/2020#, 19/01/2020, 02/02/2020, 16/02/2020, 15/03/2020, 05/04/2020, 12/04/2020, 19/04/2020, 26/04/2020#, 03/05/2020, 10/05/2020#, 17/05/2020, 31/05/2020, 14/06/2020</td><td>01:00 PM to <br>03:00 PM</td><td>Objective</td><td>NCERT Syllabus of Science &amp; Maths upto Student’s Current Class and IQ Questions</td>',
];

kota_asat  = [
	'<td>JEE (Main+ Advanced) Nurture</td><td>19/01/2020, 02/02/2020, 16/02/2020, 15/03/2020, 05/04/2020, 12/04/2020</td><td>01:00 PM to <br>03:00 PM</td><td>Objective</td><td>NCERT Syllabus of Science &amp; Maths upto Student’s Current Class and IQ Questions</td>',
	
	'<td>JEE (Main+ Advanced) Leader</td><td>05/04/2020, 12/04/2020, 19/04/2020</td><td>01:00 to <br>03:00 PM</td><td>Objective</td><td>NCERT Syllabus of Science &amp; Maths upto Student’s Current Class and IQ Questions</td>',
	
];

pncf_kota_asat  = [
	'<td>Pre-Nurture & Career Foundation (PNCF)**</td><td>22/12/2019, 05/01/2020#, 19/01/2020, 02/02/2020, 16/02/2020, 15/03/2020, 05/04/2020, 12/04/2020, 19/04/2020, 26/04/2020#, 03/05/2020, 10/05/2020#, 17/05/2020, 31/05/2020, 14/06/2020</td><td>01:00 PM to <br>03:00 PM</td><td>Objective</td><td>NCERT Syllabus of Science &amp; Maths upto Student’s Current Class and IQ Questions</td>',
];


