// JavaScript Document

function Coaching1(JeeMainCoaching, $) {
	for (var i = 0; i < JeeMainCoaching.length; i++) {
		$('<div class="item">' + JeeMainCoaching[i] + '</div>').appendTo('#JeeMainCoaching .inner-content');
	}
}
function Coaching2(JeeAdvCoaching, $) {
	for (var i = 0; i < JeeAdvCoaching.length; i++) {
		$('<div class="item">' + JeeAdvCoaching[i] + '</div>').appendTo('#JeeAdvCoaching .inner-content');
	}
}
function Coaching3(medicalCoaching, $) {
	for (var i = 0; i < medicalCoaching.length; i++) {
		$('<div class="item">' + medicalCoaching[i] + '</div>').appendTo('#medicalCoaching .inner-content');
	}
}
function Coaching4(pncfCoaching, $) {
	for (var i = 0; i < pncfCoaching.length; i++) {
		$('<div class="item">' + pncfCoaching[i] + '</div>').appendTo('#pncfCoaching .inner-content');
	}
}

//function resultsLists(results, $) {
//	for (var i = 0; i < results.length; i++) {
//		$('<li class="list-item">' + results[i] + '</li>').appendTo('#resultsLists .list-result-inner');
//	}
//}
//
//function eventsLists(events, $) {
//	for (var i = 0; i < events.length; i++) {
//		$('<li class="list-item">' + events[i] + '</li>').appendTo('#eventsLists .list-event-inner');
//	}
//}


/*====== ADD LATEAST SLIDER show in  Both MAIN & PNCF Sites at the TOP=====*/

Latest  = [

	'<a href="#">PAWAN RATHORE</a>',    

];


/*====== Slide is Universal Show in Both MAIN & PNCF Sites at the TOP =====*/
All = [
	
	'<a href="#">PAWAN RATHORE</a>',    
	
];


/*====== Want to Show only in ALL Main Site Center =================*/

MAIN = [

	'<a href="#">PAWAN RATHORE</a>',    
  
];

/*====== Want to Show only in ALL PNCF Centers =================*/

PNCF = [
    
  
];


/*====== Add Slide show only in Kota Main (XI to XII th Pass) =================*/

kota_MAIN = [    
	//----JEE Main Coaching------------------------------------------------
       
	'<div class="item"><div class="row"><div class="col-md-6"><h2>JEE (Main) Coaching</h2></div><div class="col-md-6"><div class="btn-group float-right" role="group" aria-label="Basic example"><a type="button" class="btn btn-info">Teaching Methodology</a><a type="button" class="btn btn-info">Couse Details</a></div></div></div><div class="row mt-5"><div class="col-md-12"><p>ALLEN Career Institute is the best coaching institute for JEE Main in Mumbai. ALLEN provides a learning environment which is overtly designed for ease of understanding and enabling students to prepare and practice for JEE Main in the same pattern as the main exam. Our aim is to make sure that all students undergo rigorous training for all the exams. At ALLEN Mumbai center, we have a team of the best faculties with years of experience in the teaching/training domain. </p><p>Our Academic Team  plan a series of practice test to offer the students a systematic approach for testing of their preparation towards the prestigious Joint Entrance Examination (JEE). In addition, students can compare their performance on our scientifically developed Test Analysis Platform known as CSAT, with the other students, which would help them understand their actual preparation level and determine how much more effort is required from their end.</p><p>Our approach towards preparing students for JEE Main revolves around shaping their complete thinking aptitude - developing their expertise towards the field of engineering. We are the leading JEE Main coaching in Mumbai provides study material, always aligned with the changing patterns of the exam, is developed by our team of subject experts and is a great complement to the classroom sessions. A precise session plan, with reference to all the relevant topics, prepared at the outset, allows a well thought-out approach towards the whole syllabus.  Here, each and every topic is taught right from the basics to the requisite level. Also, focus on practicing questions/problems typical to the JEE to help students get in the problem-solving approach and identify their strengths and weaknesses.</p><p>Our classroom program for JEE Main is a rigorous program with main focus on JEE Main as well as board curriculum, thus ensuring that the students perform remarkably well in their school exams as well.</p><p>Moreover, ALLEN will provide full support to students for Board exam also along with JEE Main coaching.</p></div></div>',

	
];

/*====== Add Slide show only in Kota PNCF (VI to Xth) =========================*/

kota_ADV = [
	
	//----JEE Advanced Coaching------------------------------------------------
	'<div class="item"><div class="row"><div class="col-md-6"><h2>JEE advanced Coaching</h2></div><div class="col-md-6"><div class="btn-group float-right" role="group" aria-label="Basic example"><a type="button" class="btn btn-info">Teaching Methodology</a><a type="button" class="btn btn-info">Couse Details</a></div></div></div><div class="row mt-5"><div class="col-md-12"><p>ALLEN Career Institute is the best coaching institute for JEE Main in Mumbai. ALLEN provides a learning environment which is overtly designed for ease of understanding and enabling students to prepare and practice for JEE Main in the same pattern as the main exam. Our aim is to make sure that all students undergo rigorous training for all the exams. At ALLEN Mumbai center, we have a team of the best faculties with years of experience in the teaching/training domain. </p><p>Our Academic Team  plan a series of practice test to offer the students a systematic approach for testing of their preparation towards the prestigious Joint Entrance Examination (JEE). In addition, students can compare their performance on our scientifically developed Test Analysis Platform known as CSAT, with the other students, which would help them understand their actual preparation level and determine how much more effort is required from their end.</p><p>Our approach towards preparing students for JEE Main revolves around shaping their complete thinking aptitude - developing their expertise towards the field of engineering. We are the leading JEE Main coaching in Mumbai provides study material, always aligned with the changing patterns of the exam, is developed by our team of subject experts and is a great complement to the classroom sessions. A precise session plan, with reference to all the relevant topics, prepared at the outset, allows a well thought-out approach towards the whole syllabus.  Here, each and every topic is taught right from the basics to the requisite level. Also, focus on practicing questions/problems typical to the JEE to help students get in the problem-solving approach and identify their strengths and weaknesses.</p><p>Our classroom program for JEE Main is a rigorous program with main focus on JEE Main as well as board curriculum, thus ensuring that the students perform remarkably well in their school exams as well.</p><p>Moreover, ALLEN will provide full support to students for Board exam also along with JEE Main coaching.</p></div></div>'
	
];



kota_results = [
	'<a href="#">PAWAN RATHORE</a>',    
];






kota_pncf_result = [];


kota_events = [
	'<a href="#">Ravindra singh from Kota</a>',    
];

kota_pncf_events = [];

/*====== Add Slide show only in Ahmedabad Main (XI to XII th Pass) =================*/

ahmedabad = [ 
    
    '<a href="/jee-main-2019/jee-main-2019-Answer-Key-Paper-Solutions.asp"><img src="/slider/images/jee-main-2019-april-exam.jpg" alt="Jee Main 2019 April Exam"></a>',

];

/*====== Add Slide show only in Ahmedabad PNCF (VI to Xth) =========================*/

pncf_ahmedabad = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
];


ahmedabad_results = [
	'<a href="#">PAWAN RATHORE</a>',    
];

ahmedabad_pncf_result = [];


ahmedabad_events = [
	'<a href="#">Ravindra singh from Kota</a>',    
];

ahmedabad_pncf_events = [];


/*====== Add Slide show only in Bengaluru Main (XI to XII th Pass) =================*/

bengaluru = [    
    
    '<a href="/jee-main-2019/jee-main-2019-Answer-Key-Paper-Solutions.asp"><img src="/slider/images/jee-main-2019-april-exam.jpg" alt="Jee Main 2019 April Exam"></a>',

];

/*====== Add Slide show only in Ahmedabad PNCF (VI to Xth) =========================*/

pncf_bengaluru = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
];

bengaluru_results = [];
bengaluru_pncf_result = [];
bengaluru_events = [];
bengaluru_pncf_events = [];


/*====== Add Slide show only in Bhilwara Main (XI to XII th Pass) =================*/
bhilwara = [ 
        
    '<a href="/jee-main-2019/jee-main-2019-Answer-Key-Paper-Solutions.asp"><img src="/slider/images/jee-main-2019-april-exam.jpg" alt="Jee Main 2019 April Exam"></a>',
	
];

/*====== Add Slide show only in Bhilwara PNCF (VI to Xth) =========================*/

pncf_bhilwara = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
];

bhilwara_results = [];
bhilwara_pncf_result = [];
bhilwara_events = [];
bhilwara_pncf_events = [];



/*====== Add Slide show only in bhubaneswar Main (XI to XII th Pass) =================*/

bhubaneswar = [
	
    '<a href="/jee-main-2019/jee-main-2019-Answer-Key-Paper-Solutions.asp"><img src="/slider/images/jee-main-2019-april-exam.jpg" alt="Jee Main 2019 April Exam"></a>',

];


/*====== Add Slide show only in bhubaneswar PNCF (VI to Xth) =========================*/

pncf_bhubaneswar = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
];

bhubaneswar_results = [];
bhubaneswar_pncf_result = [];
bhubaneswar_events = [];
bhubaneswar_pncf_events = [];




/*====== Add Slide show only in chennai Main (XI to XII th Pass) =================*/

chennai = [
	
    '<a href="/jee-main-2019/jee-main-2019-Answer-Key-Paper-Solutions.asp"><img src="/slider/images/jee-main-2019-april-exam.jpg" alt="Jee Main 2019 April Exam"></a>',
    
];

/*====== Add Slide show only in chennai PNCF (VI to Xth) =========================*/

pncf_chennai = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
];

chennai_results = [];
chennai_pncf_result = [];
chennai_events = [];
chennai_pncf_events = [];



/*====== Add Slide show only in CHANDIGARH Main (XI to XII th Pass) =================*/

chandigarh = [
    
    '<a href="/jee-main-2019/jee-main-2019-Answer-Key-Paper-Solutions.asp"><img src="/slider/images/jee-main-2019-april-exam.jpg" alt="Jee Main 2019 April Exam"></a>',

];

/*====== Add Slide show only in CHANDIGARH PNCF (VI to Xth) =========================*/

pncf_chandigarh = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]

chandigarh_results = [];
chandigarh_pncf_result = [];
chandigarh_events = [];
chandigarh_pncf_events = [];



/*====== Add Slide show only in GUWAHATI Main (XI to XII th Pass) =================*/

guwahati_MAIN = [
    
	//----JEE Advanced Coaching------------------------------------------------
	'<div class="item1"><div class="row"><div class="col-md-6"><h2>JEE MAIN Coaching GUwahati</h2></div><div class="col-md-6"><div class="btn-group float-right" role="group" aria-label="Basic example"><a type="button" class="btn btn-info">Teaching Methodology</a><a type="button" class="btn btn-info">Couse Details</a></div></div></div><div class="row mt-5"><div class="col-md-12"><p>ALLEN Career Institute is the best coaching institute for JEE Main in Mumbai. ALLEN provides a learning environment which is overtly designed for ease of understanding and enabling students to prepare and practice for JEE Main in the same pattern as the main exam. Our aim is to make sure that all students undergo rigorous training for all the exams. At ALLEN Mumbai center, we have a team of the best faculties with years of experience in the teaching/training domain. </p><p>Our Academic Team  plan a series of practice test to offer the students a systematic approach for testing of their preparation towards the prestigious Joint Entrance Examination (JEE). In addition, students can compare their performance on our scientifically developed Test Analysis Platform known as CSAT, with the other students, which would help them understand their actual preparation level and determine how much more effort is required from their end.</p><p>Our approach towards preparing students for JEE Main revolves around shaping their complete thinking aptitude - developing their expertise towards the field of engineering. We are the leading JEE Main coaching in Mumbai provides study material, always aligned with the changing patterns of the exam, is developed by our team of subject experts and is a great complement to the classroom sessions. A precise session plan, with reference to all the relevant topics, prepared at the outset, allows a well thought-out approach towards the whole syllabus.  Here, each and every topic is taught right from the basics to the requisite level. Also, focus on practicing questions/problems typical to the JEE to help students get in the problem-solving approach and identify their strengths and weaknesses.</p><p>Our classroom program for JEE Main is a rigorous program with main focus on JEE Main as well as board curriculum, thus ensuring that the students perform remarkably well in their school exams as well.</p><p>Moreover, ALLEN will provide full support to students for Board exam also along with JEE Main coaching.</p></div></div>'

];
guwahati_MEDICAL = [
    
	//----JEE Advanced Coaching------------------------------------------------
	'<div class="item"><div class="row"><div class="col-md-6"><h2>NEET-UG Coaching Guwahati</h2></div><div class="col-md-6"><div class="btn-group float-right" role="group" aria-label="Basic example"><a type="button" class="btn btn-info">Teaching Methodology</a><a type="button" class="btn btn-info">Couse Details</a></div></div></div><div class="row mt-5"><div class="col-md-12"><p>ALLEN Career Institute is the best coaching institute for JEE Main in Mumbai. ALLEN provides a learning environment which is overtly designed for ease of understanding and enabling students to prepare and practice for JEE Main in the same pattern as the main exam. Our aim is to make sure that all students undergo rigorous training for all the exams. At ALLEN Mumbai center, we have a team of the best faculties with years of experience in the teaching/training domain. </p><p>Our Academic Team  plan a series of practice test to offer the students a systematic approach for testing of their preparation towards the prestigious Joint Entrance Examination (JEE). In addition, students can compare their performance on our scientifically developed Test Analysis Platform known as CSAT, with the other students, which would help them understand their actual preparation level and determine how much more effort is required from their end.</p><p>Our approach towards preparing students for JEE Main revolves around shaping their complete thinking aptitude - developing their expertise towards the field of engineering. We are the leading JEE Main coaching in Mumbai provides study material, always aligned with the changing patterns of the exam, is developed by our team of subject experts and is a great complement to the classroom sessions. A precise session plan, with reference to all the relevant topics, prepared at the outset, allows a well thought-out approach towards the whole syllabus.  Here, each and every topic is taught right from the basics to the requisite level. Also, focus on practicing questions/problems typical to the JEE to help students get in the problem-solving approach and identify their strengths and weaknesses.</p><p>Our classroom program for JEE Main is a rigorous program with main focus on JEE Main as well as board curriculum, thus ensuring that the students perform remarkably well in their school exams as well.</p><p>Moreover, ALLEN will provide full support to students for Board exam also along with JEE Main coaching.</p></div></div>'

];
guwahati_ADV = [
    
	//----JEE Advanced Coaching------------------------------------------------
	'<div class="item-2"><div class="row"><div class="col-md-6"><h2>JEE advanced Coaching GUwahati</h2></div><div class="col-md-6"><div class="btn-group float-right" role="group" aria-label="Basic example"><a type="button" class="btn btn-info">Teaching Methodology</a><a type="button" class="btn btn-info">Couse Details</a></div></div></div><div class="row mt-5"><div class="col-md-12"><p>ALLEN Career Institute is the best coaching institute for JEE Main in Mumbai. ALLEN provides a learning environment which is overtly designed for ease of understanding and enabling students to prepare and practice for JEE Main in the same pattern as the main exam. Our aim is to make sure that all students undergo rigorous training for all the exams. At ALLEN Mumbai center, we have a team of the best faculties with years of experience in the teaching/training domain. </p><p>Our Academic Team  plan a series of practice test to offer the students a systematic approach for testing of their preparation towards the prestigious Joint Entrance Examination (JEE). In addition, students can compare their performance on our scientifically developed Test Analysis Platform known as CSAT, with the other students, which would help them understand their actual preparation level and determine how much more effort is required from their end.</p><p>Our approach towards preparing students for JEE Main revolves around shaping their complete thinking aptitude - developing their expertise towards the field of engineering. We are the leading JEE Main coaching in Mumbai provides study material, always aligned with the changing patterns of the exam, is developed by our team of subject experts and is a great complement to the classroom sessions. A precise session plan, with reference to all the relevant topics, prepared at the outset, allows a well thought-out approach towards the whole syllabus.  Here, each and every topic is taught right from the basics to the requisite level. Also, focus on practicing questions/problems typical to the JEE to help students get in the problem-solving approach and identify their strengths and weaknesses.</p><p>Our classroom program for JEE Main is a rigorous program with main focus on JEE Main as well as board curriculum, thus ensuring that the students perform remarkably well in their school exams as well.</p><p>Moreover, ALLEN will provide full support to students for Board exam also along with JEE Main coaching.</p></div></div>'

];
guwahati_PNCF = [
	

    
	//----JEE Advanced Coaching------------------------------------------------
	'<div class="item-2"><div class="row"><div class="col-md-6"><h2>ALLEN PNCF Coaching GUwahati</h2></div><div class="col-md-6"><div class="btn-group float-right" role="group" aria-label="Basic example"><a type="button" class="btn btn-info">Teaching Methodology</a><a type="button" class="btn btn-info">Couse Details</a></div></div></div><div class="row mt-5"><div class="col-md-12"><p>ALLEN Career Institute is the best coaching institute for JEE Main in Mumbai. ALLEN provides a learning environment which is overtly designed for ease of understanding and enabling students to prepare and practice for JEE Main in the same pattern as the main exam. Our aim is to make sure that all students undergo rigorous training for all the exams. At ALLEN Mumbai center, we have a team of the best faculties with years of experience in the teaching/training domain. </p><p>Our Academic Team  plan a series of practice test to offer the students a systematic approach for testing of their preparation towards the prestigious Joint Entrance Examination (JEE). In addition, students can compare their performance on our scientifically developed Test Analysis Platform known as CSAT, with the other students, which would help them understand their actual preparation level and determine how much more effort is required from their end.</p><p>Our approach towards preparing students for JEE Main revolves around shaping their complete thinking aptitude - developing their expertise towards the field of engineering. We are the leading JEE Main coaching in Mumbai provides study material, always aligned with the changing patterns of the exam, is developed by our team of subject experts and is a great complement to the classroom sessions. A precise session plan, with reference to all the relevant topics, prepared at the outset, allows a well thought-out approach towards the whole syllabus.  Here, each and every topic is taught right from the basics to the requisite level. Also, focus on practicing questions/problems typical to the JEE to help students get in the problem-solving approach and identify their strengths and weaknesses.</p><p>Our classroom program for JEE Main is a rigorous program with main focus on JEE Main as well as board curriculum, thus ensuring that the students perform remarkably well in their school exams as well.</p><p>Moreover, ALLEN will provide full support to students for Board exam also along with JEE Main coaching.</p></div></div>'

	
];


/*====== Add Slide show only in indore Main (XI to XII th Pass) =================*/

indore = [
    
    '<a href="/jee-main-2019/jee-main-2019-Answer-Key-Paper-Solutions.asp"><img src="/slider/images/jee-main-2019-april-exam.jpg" alt="Jee Main 2019 April Exam"></a>',

];

/*====== Add Slide show only in Indore PNCF (VI to Xth) =========================*/

pncf_indore = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
];

indore_results = [];
indore_pncf_result = [];
indore_events = [];
indore_pncf_events = [];



/*====== Add Slide show only in kochi Main (XI to XII th Pass) =================*/

kochi = [
   
	
];

/*====== Add Slide show only in kochi PNCF (VI to Xth) =========================*/

pncf_kochi = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
];

kochi_results = [];
kochi_pncf_result = [];
kochi_events = [];
kochi_pncf_events = [];




/*====== Add Slide show only in mumbai Main (XI to XII th Pass) =================*/

mumbai = [
    
    '<a href="/jee-main-2019/jee-main-2019-Answer-Key-Paper-Solutions.asp"><img src="/slider/images/jee-main-2019-april-exam.jpg" alt="Jee Main 2019 April Exam"></a>',

];

/*====== Add Slide show only in mumbai PNCF (VI to Xth) =========================*/

pncf_mumbai = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
];

mumbai_results = [];
mumbai_pncf_result = [];
mumbai_events = [];
mumbai_pncf_events = [];


/*====== Add Slide show only in mysuru Main (XI to XII th Pass) =================*/

mysuru = [

    '<a href="/jee-main-2019/jee-main-2019-Answer-Key-Paper-Solutions.asp"><img src="/slider/images/jee-main-2019-april-exam.jpg" alt="Jee Main 2019 April Exam"></a>',
	
];

/*====== Add Slide show only in mysuru PNCF (VI to Xth) =========================*/

pncf_mysuru = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
];

mysuru_results = [];
mysuru_pncf_result = [];
mysuru_events = [];
mysuru_pncf_events = [];


/*====== Add Slide show only in nagpur Main (XI to XII th Pass) =================*/

nagpur = [
	
    '<a href="/jee-main-2019/jee-main-2019-Answer-Key-Paper-Solutions.asp"><img src="/slider/images/jee-main-2019-april-exam.jpg" alt="Jee Main 2019 April Exam"></a>',

];

/*====== Add Slide show only in nagpur PNCF (VI to Xth) =========================*/

pncf_nagpur = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
];

nagpur_results = [];
nagpur_pncf_result = [];
nagpur_events = [];
nagpur_pncf_events = [];




/*====== Add Slide show only in pune Main (XI to XII th Pass) =================*/

pune = [
	
    '<a href="/jee-main-2019/jee-main-2019-Answer-Key-Paper-Solutions.asp"><img src="/slider/images/jee-main-2019-april-exam.jpg" alt="Jee Main 2019 April Exam"></a>',
	
]

/*====== Add Slide show only in pune PNCF (VI to Xth) =========================*/

pune_MAIN = [
    
	//----JEE Advanced Coaching------------------------------------------------
	'<div class="item"><div class="row"><div class="col-md-6"><h2>PUNE JEE MAIN Coaching</h2></div><div class="col-md-6"><div class="btn-group float-right" role="group" aria-label="Basic example"><a type="button" class="btn btn-info">Teaching Methodology</a><a type="button" class="btn btn-info">Couse Details</a></div></div></div><div class="row mt-5"><div class="col-md-12"><p>ALLEN Career Institute is the best coaching institute for JEE Main in Mumbai. ALLEN provides a learning environment which is overtly designed for ease of understanding and enabling students to prepare and practice for JEE Main in the same pattern as the main exam. Our aim is to make sure that all students undergo rigorous training for all the exams. At ALLEN Mumbai center, we have a team of the best faculties with years of experience in the teaching/training domain. </p><p>Our Academic Team  plan a series of practice test to offer the students a systematic approach for testing of their preparation towards the prestigious Joint Entrance Examination (JEE). In addition, students can compare their performance on our scientifically developed Test Analysis Platform known as CSAT, with the other students, which would help them understand their actual preparation level and determine how much more effort is required from their end.</p><p>Our approach towards preparing students for JEE Main revolves around shaping their complete thinking aptitude - developing their expertise towards the field of engineering. We are the leading JEE Main coaching in Mumbai provides study material, always aligned with the changing patterns of the exam, is developed by our team of subject experts and is a great complement to the classroom sessions. A precise session plan, with reference to all the relevant topics, prepared at the outset, allows a well thought-out approach towards the whole syllabus.  Here, each and every topic is taught right from the basics to the requisite level. Also, focus on practicing questions/problems typical to the JEE to help students get in the problem-solving approach and identify their strengths and weaknesses.</p><p>Our classroom program for JEE Main is a rigorous program with main focus on JEE Main as well as board curriculum, thus ensuring that the students perform remarkably well in their school exams as well.</p><p>Moreover, ALLEN will provide full support to students for Board exam also along with JEE Main coaching.</p></div></div>'

];
pune_MEDICAL = [
    
	//----JEE Advanced Coaching------------------------------------------------
	'<div class="item"><div class="row"><div class="col-md-6"><h2>PUNE NEET-UG Coaching</h2></div><div class="col-md-6"><div class="btn-group float-right" role="group" aria-label="Basic example"><a type="button" class="btn btn-info">Teaching Methodology</a><a type="button" class="btn btn-info">Couse Details</a></div></div></div><div class="row mt-5"><div class="col-md-12"><p>ALLEN Career Institute is the best coaching institute for JEE Main in Mumbai. ALLEN provides a learning environment which is overtly designed for ease of understanding and enabling students to prepare and practice for JEE Main in the same pattern as the main exam. Our aim is to make sure that all students undergo rigorous training for all the exams. At ALLEN Mumbai center, we have a team of the best faculties with years of experience in the teaching/training domain. </p><p>Our Academic Team  plan a series of practice test to offer the students a systematic approach for testing of their preparation towards the prestigious Joint Entrance Examination (JEE). In addition, students can compare their performance on our scientifically developed Test Analysis Platform known as CSAT, with the other students, which would help them understand their actual preparation level and determine how much more effort is required from their end.</p><p>Our approach towards preparing students for JEE Main revolves around shaping their complete thinking aptitude - developing their expertise towards the field of engineering. We are the leading JEE Main coaching in Mumbai provides study material, always aligned with the changing patterns of the exam, is developed by our team of subject experts and is a great complement to the classroom sessions. A precise session plan, with reference to all the relevant topics, prepared at the outset, allows a well thought-out approach towards the whole syllabus.  Here, each and every topic is taught right from the basics to the requisite level. Also, focus on practicing questions/problems typical to the JEE to help students get in the problem-solving approach and identify their strengths and weaknesses.</p><p>Our classroom program for JEE Main is a rigorous program with main focus on JEE Main as well as board curriculum, thus ensuring that the students perform remarkably well in their school exams as well.</p><p>Moreover, ALLEN will provide full support to students for Board exam also along with JEE Main coaching.</p></div></div>'

];
pune_ADV = [
    
	//----JEE Advanced Coaching------------------------------------------------
	'<div class="item-2"><div class="row"><div class="col-md-6"><h2>PUNE JEE advanced Coaching</h2></div><div class="col-md-6"><div class="btn-group float-right" role="group" aria-label="Basic example"><a type="button" class="btn btn-info">Teaching Methodology</a><a type="button" class="btn btn-info">Couse Details</a></div></div></div><div class="row mt-5"><div class="col-md-12"><p>ALLEN Career Institute is the best coaching institute for JEE Main in Mumbai. ALLEN provides a learning environment which is overtly designed for ease of understanding and enabling students to prepare and practice for JEE Main in the same pattern as the main exam. Our aim is to make sure that all students undergo rigorous training for all the exams. At ALLEN Mumbai center, we have a team of the best faculties with years of experience in the teaching/training domain. </p><p>Our Academic Team  plan a series of practice test to offer the students a systematic approach for testing of their preparation towards the prestigious Joint Entrance Examination (JEE). In addition, students can compare their performance on our scientifically developed Test Analysis Platform known as CSAT, with the other students, which would help them understand their actual preparation level and determine how much more effort is required from their end.</p><p>Our approach towards preparing students for JEE Main revolves around shaping their complete thinking aptitude - developing their expertise towards the field of engineering. We are the leading JEE Main coaching in Mumbai provides study material, always aligned with the changing patterns of the exam, is developed by our team of subject experts and is a great complement to the classroom sessions. A precise session plan, with reference to all the relevant topics, prepared at the outset, allows a well thought-out approach towards the whole syllabus.  Here, each and every topic is taught right from the basics to the requisite level. Also, focus on practicing questions/problems typical to the JEE to help students get in the problem-solving approach and identify their strengths and weaknesses.</p><p>Our classroom program for JEE Main is a rigorous program with main focus on JEE Main as well as board curriculum, thus ensuring that the students perform remarkably well in their school exams as well.</p><p>Moreover, ALLEN will provide full support to students for Board exam also along with JEE Main coaching.</p></div></div>'

];
pune_PNCF = [
	//----JEE Advanced Coaching------------------------------------------------
	'<div class="item-2"><div class="row"><div class="col-md-6"><h2>PUNE ALLEN PNCF Coaching</h2></div><div class="col-md-6"><div class="btn-group float-right" role="group" aria-label="Basic example"><a type="button" class="btn btn-info">Teaching Methodology</a><a type="button" class="btn btn-info">Couse Details</a></div></div></div><div class="row mt-5"><div class="col-md-12"><p>ALLEN Career Institute is the best coaching institute for JEE Main in Mumbai. ALLEN provides a learning environment which is overtly designed for ease of understanding and enabling students to prepare and practice for JEE Main in the same pattern as the main exam. Our aim is to make sure that all students undergo rigorous training for all the exams. At ALLEN Mumbai center, we have a team of the best faculties with years of experience in the teaching/training domain. </p><p>Our Academic Team  plan a series of practice test to offer the students a systematic approach for testing of their preparation towards the prestigious Joint Entrance Examination (JEE). In addition, students can compare their performance on our scientifically developed Test Analysis Platform known as CSAT, with the other students, which would help them understand their actual preparation level and determine how much more effort is required from their end.</p><p>Our approach towards preparing students for JEE Main revolves around shaping their complete thinking aptitude - developing their expertise towards the field of engineering. We are the leading JEE Main coaching in Mumbai provides study material, always aligned with the changing patterns of the exam, is developed by our team of subject experts and is a great complement to the classroom sessions. A precise session plan, with reference to all the relevant topics, prepared at the outset, allows a well thought-out approach towards the whole syllabus.  Here, each and every topic is taught right from the basics to the requisite level. Also, focus on practicing questions/problems typical to the JEE to help students get in the problem-solving approach and identify their strengths and weaknesses.</p><p>Our classroom program for JEE Main is a rigorous program with main focus on JEE Main as well as board curriculum, thus ensuring that the students perform remarkably well in their school exams as well.</p><p>Moreover, ALLEN will provide full support to students for Board exam also along with JEE Main coaching.</p></div></div>'

	
];

/*====== Add Slide show only in rajkot Main (XI to XII th Pass) =================*/

rajkot = [ 
    
    '<a href="https://www.allen.ac.in/results/pre-nurture/nse-olympiad-2019-stage-1-result.asp"><img src="/slider/images/inso-result-2019.jpg" alt="INSO Result 2019"></a>',

]

/*====== Add Slide show only in rajkot PNCF (VI to Xth) =========================*/

pncf_rajkot = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]

rajkot_results = [];
rajkot_pncf_result = [];
rajkot_events = [];
rajkot_pncf_events = [];



/*====== Add Slide show only in RANCHI PNCF (VI to Xth) =========================*/

pncf_ranchi = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]

ranchi_pncf_result = [];
ranchi_pncf_events = [];


/*====== Add Slide show only in Rawatbhata PNCF (VI to Xth) =========================*/

pncf_rawatbhata = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]

rawatbhata_pncf_result = [];
rawatbhata_pncf_events = [];







/*====== Add Slide show only in Sikar Main (XI to XII th Pass) =================*/

sikar = [
    
    '<a href="https://www.allen.ac.in/results/kvpy-2019-stage-1-result.asp"><img src="/slider/images/kvpy-stage-1-2019-result.jpg" alt="KVPY Stage-I Result 2019"></a>',

]

/*====== Add Slide show only in Sikar Main (XI to XII th Pass) =================*/

pncf_sikar = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]

sikar_results = [];
sikar_pncf_result = [];
sikar_events = [];
sikar_pncf_events = [];




/*====== Add Slide show only in surat Main (XI to XII th Pass) =================*/

surat = [ 
    
    '<a href="https://www.allen.ac.in/results/pre-nurture/nse-olympiad-2019-stage-1-result.asp"><img src="/slider/images/inso-result-2019.jpg" alt="INSO Result 2019"></a>',
	
]

/*====== Add Slide show only in surat Main (XI to XII th Pass) =================*/

pncf_surat = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]

surat_results = [];
surat_pncf_result = [];
surat_events = [];
surat_pncf_events = [];


/*====== Add Slide show only in ujjain Main (XI to XII th Pass) =================*/

ujjain = [
    
    '<a href="/jee-main-2019/jee-main-2019-Answer-Key-Paper-Solutions.asp"><img src="/slider/images/jee-main-2019-april-exam.jpg" alt="Jee Main 2019 April Exam"></a>',
    
]

/*====== Add Slide show only in ujjain Main (XI to XII th Pass) =================*/

pncf_ujjain = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]

ujjain_results = [];
ujjain_pncf_result = [];
ujjain_events = [];
ujjain_pncf_events = [];




/*====== Add Slide show only in vadodara Main (XI to XII th Pass) =================*/

vadodara = [
    
    '<a href="https://www.allen.ac.in/results/pre-nurture/nse-olympiad-2019-stage-1-result.asp"><img src="/slider/images/inso-result-2019.jpg" alt="INSO Result 2019"></a>',

]

/*====== Add Slide show only in vadodara Main (XI to XII th Pass) =================*/

pncf_vadodara = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]


vadodara_results = [];
vadodara_pncf_result = [];
vadodara_events = [];
vadodara_pncf_events = [];




