
function centerUpdates(centerUpdate, $) {
	for (var i = 0; i < centerUpdate.length; i++) {
		$('<li class="list-item">' + centerUpdate[i] + '</li>').appendTo('#centerUpdates .list-outer-up');
	}
}

function importantNotifications(importantUpdate, $) {
	for (var i = 0; i < importantUpdate.length; i++) {
		$('<li class="list-item">' + importantUpdate[i] + '</li>').appendTo('#importantNotifications .list-outer-in');
	}
}

function resultNotifications(resultUpdate, $) {
	for (var i = 0; i < resultUpdate.length; i++) {
		$('<li class="list-item">' + resultUpdate[i] + '</li>').appendTo('#resultNotifications .list-outer-rs');
	}
}


/*====== Gateway Notification=====*/

gateway_notification  = [

    '<a href="https://www.allen.ac.in/answer-keys/neet-answer-key-paper-solutions.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">NEET 2020 Answer Key &amp; Solutions prepared by ALLEN Subject Experts are available now<span class="color-blue" > Click Here</span></div></div></a>',
    
    '<a href="https://www.allen.ac.in/NIT-OP-CL-2019.pdf"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">Opening and Closing Rank Of NITs, IIITs &amp; GFTIs in 2019 JoSAA Counselling <span class="color-blue" > Click Here</span></div></div></a>',
    
	'<a href="https://dlp.allen.ac.in/"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">ALLEN Distance Learning Programme Courses announced for Session (2020-21) <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://www.allen.ac.in/about-online-asat-syllabus-and-pattern.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">Open Book Online ALLEN Scholarship Admission Test (ASAT) on 20th September <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://dlp.allen.ac.in/2019-20/jee-advanced-mts.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">ALL INDIA OPEN MAJOR TEST SERIES FOR JEE (Advanced) - 2020 <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://www.allen.ac.in/overseas/refresher-course/online-classes.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">Online NEET(UG) Refresher Course for NRI students of Bahrain | Oman | Kuwait | Saudi Arabia <span class="color-blue" > Click Here</span></div></div></a>',
	
	'<a href="https://apps.apple.com/in/app/allen-test-my-prep/id1438110578"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">Download ALLEN Online Test Series iOS App <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://play.google.com/store/apps/details?id=series.test.online.com.onlinetestseries&hl=en"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">Download ALLEN Online Test Series Android App<br><span class="color-blue" >Click Here</span></div></div></a>',
	
];

/*====== ADD LATEAST SLIDER show in  Both MAIN & PNCF Sites at the TOP=====*/

gateway_results  = [

    '<a href="https://www.allen.ac.in/results/pre-nurture/Rajasthan-NTSE-Stage-1-Result.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" > Click Here</span></div></div></a>',
    
	'<a href="https://www.allen.ac.in/results/jee-main-2020-result.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">JEE Main 2020 (January Attempt) Result | 3 ALLEN Students score 100 Percentile <span class="color-blue" > Click Here</span></div></div></a>',
	
	'<a href="https://www.allen.ac.in/results/ocsc-result-olympiad-stage-II-2020.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <br> <span class="color-blue" > Click Here</span></div></div></a>',
    
	'<a href="https://www.allen.ac.in/results/pre-nurture/nmtc-2019-final-result.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <span class="color-blue" >Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/pre-nurture/nse-olympiad-2019-stage-1-result.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result <span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/kvpy-2019-stage-1-result.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">670 ALLEN Students Selected for KVPY Stage-2 | KVPY 2019 Result <span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/pre-nurture/IJSO-2019-result.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">All 6 GOLD Medal bagged by ALLEN Classroom Students in IJSO 2019 Result <span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/pre-nurture/rmo-result-2019.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text"> 128 students selected for INMO, ALLENs RMO Result 2019   <span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/ioi/zio-2019-result.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">26 ALLEN Students selected for INOI <br>(ZIO 2019 Result) <span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/dhruv/3-allen-students-selected-in-dhruv-by-mhrd.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text"> 3 ALLEN Classroom Students selected in DHRUV programme by MHRD  <span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/pre-nurture/prmo-result-2019.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">  PRMO 2019 Result: 985 ALLEN Students Qualified in PRMO 2019   <span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/pre-nurture/IESO-2019-result.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text"> IESO 2019 Result: 2 ALLEN Classroom Students bagged Silver Medals   <span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/pre-nurture/ntse-2019-final-result.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text"> NTSE 2019 Final Result: Total 505 Students got Selected  <span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/international-chemistry-olympiads-icho-2019.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text"> IChO 2019 Result: 3 Classroom Students of ALLEN, bagged 2 Gold &amp; 1 Silver Medal  <span class="color-blue" > Click Here</span></div></div></a>',
    
];

/*====== Add Slide show only in Kota Main (XI to XII th Pass) =================*/

kota_updates = [    
	
	
];

kota_importantNotification = [
    '<a href="https://www.allen.ac.in/answer-keys/neet-answer-key-paper-solutions.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">NEET 2020 Answer Key &amp; Solutions prepared by ALLEN Subject Experts are available now<span class="color-blue" > Click Here</span></div></div></a>',
    
    '<a href="https://www.allen.ac.in/NIT-OP-CL-2019.pdf"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">Opening and Closing Rank Of NITs, IIITs &amp; GFTIs in 2019 JoSAA Counselling <br><span class="color-blue" > Click Here</span></div></div></a>',
    
	'<a href="https://dlp.allen.ac.in/"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">ALLEN Distance Learning Programme Courses announced for Session (2020-21) <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://www.allen.ac.in/about-online-asat-syllabus-and-pattern.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">Open Book Online ALLEN Scholarship Admission Test (ASAT) on 20th September <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://dlp.allen.ac.in/2019-20/jee-advanced-mts.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">ALL INDIA OPEN MAJOR TEST SERIES FOR JEE (Advanced) - 2020 <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://www.allen.ac.in/overseas/refresher-course/online-classes.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">Online NEET(UG) Refresher Course for NRI students of Bahrain | Oman | Kuwait | Saudi Arabia <span class="color-blue" > Click Here</span></div></div></a>',
	
	'<a href="https://apps.apple.com/in/app/allen-test-my-prep/id1438110578"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">Download ALLEN Online Test Series iOS App <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://play.google.com/store/apps/details?id=series.test.online.com.onlinetestseries&hl=en"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">Download ALLEN Online Test Series Android App<br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://www.allen.ac.in/admission/admission-faq-lockdown.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">Admission FAQ during Lockdown <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://www.onlinetestseries.in/allenkota/"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">Free Online Drill Test Series for JEE (Main+Adv) &amp; NEET UG 2020, Enroll Now <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://www.allen.ac.in/bfl.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text"> Educational courses on Easy EMI from Bajaj Finserv Ltd. <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://www.allen.ac.in/campus-dunia.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility,  <span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

kota_resultNotification = [
    '<a href="https://www.allen.ac.in/results/pre-nurture/Rajasthan-NTSE-Stage-1-Result.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" > Click Here</span></div></div></a>',
    
	'<a href="https://www.allen.ac.in/results/jee-main-2020-result.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">JEE Main 2020 (January Attempt) Result | 3 ALLEN Students score 100 Percentile <span class="color-blue" > Click Here</span></div></div></a>',
	
	'<a href="https://www.allen.ac.in/results/ocsc-result-olympiad-stage-II-2020.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <br> <span class="color-blue" > Click Here</span></div></div></a>',
    
	'<a href="https://www.allen.ac.in/results/pre-nurture/nmtc-2019-final-result.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <br><span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/pre-nurture/nse-olympiad-2019-stage-1-result.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result <span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/kvpy-2019-stage-1-result.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">670 ALLEN Students Selected for KVPY Stage-2 | KVPY 2019 Result <br><span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/pre-nurture/IJSO-2019-result.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">All 6 GOLD Medal bagged by ALLEN Classroom Students in IJSO 2019 Result <br><span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/pre-nurture/rmo-result-2019.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text"> 128 students selected for INMO, ALLENs RMO Result 2019   <br><span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/ioi/zio-2019-result.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">26 ALLEN Students selected for INOI <br>(ZIO 2019 Result) <span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/dhruv/3-allen-students-selected-in-dhruv-by-mhrd.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text"> 3 ALLEN Classroom Students selected in DHRUV programme by MHRD  <br><span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/pre-nurture/prmo-result-2019.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">  PRMO 2019 Result: 985 ALLEN Students Qualified in PRMO 2019   <br><span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/pre-nurture/IESO-2019-result.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text"> IESO 2019 Result: 2 ALLEN Classroom Students bagged Silver Medals   <br><span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/pre-nurture/ntse-2019-final-result.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text"> NTSE 2019 Final Result: Total 505 Students got Selected   <br><span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/international-chemistry-olympiads-icho-2019.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text"> IChO 2019 Result: 3 Classroom Students of ALLEN, bagged 2 Gold &amp; 1 Silver Medal  <span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/international-mathematical-olympiad-imo-2019.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text"> IMO 2019 Result: ALLEN student OJAS MITTAL bagged Silver Medal  <br><span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/international-biology-olympiad-ibo-2019.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text"> IBO 2019 Result : 3 Classroom students of ALLEN, bagged 2 Silver Medals   <br><span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/international-physics-olympiad-ipho-2019.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text"> IPhO 2019 Result : 2 Classroom students of ALLEN, bagged 1 Gold &amp; 1 Silver Medal  <span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/jee-advanced-2019-results-all-india-toppers.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text"> JEE Advanced 2019 Result: ALLEN Classroom Student secures AIR-1 <br><span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/aiims-2019-result-all-india-toppers.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text"> AIIMS (MBBS) 2019 Result: 9 ALLEN students in Top 10 AIR  <br><span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/jipmer-2019-result-all-india-toppers.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text"> JIPMER 2019 Result: 9 out of 10 All India Ranks Secured by ALLEN Students   <br><span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/neet-ug-2019-result-all-india-toppers.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text"> NEET-UG 2019 Result: ALLEN Classroom Student secures AIR -1  <br><span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/pre-nurture/IESO-2019-result.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text"> Olympiad Result : 2 ALLEN students selected in National Team of 4 for IESO 2019  <br><span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/international-chemistry-olympiads-icho-2019.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text"> Olympiad Result : 3 ALLEN Students Selected in Indian Team of 4 for IChO 2019   <span class="color-blue" > Click Here</span></div></div></a>',
	
    '<a href="https://www.allen.ac.in/results/international-chemistry-olympiads-icho-2019.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text"> Indian National Olympiad 2019 Results  <br><span class="color-blue" > Click Here</span></div></div></a>',


];

/*====== End Kota  =========================*/

/*====== Add Slide show only in Kota PNCF (VI to Xth) =========================*/

kota_pncf_updates = [
];

kota_pncf_importantNotification = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">All 6 GOLD Medal bagged by ALLEN Classroom Students in IJSO 2019 Result <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">128 students selected for INMO, ALLENs RMO Result 2019 <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">3 ALLEN Classroom Students selected in DHRUV programme by MHRD <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">PRMO 2019 Result: 985 ALLEN Students Qualified in PRMO 2019 <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">IESO 2019 Result: 2 ALLEN Classroom Students bagged Silver Medals <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">NTSE 2019 Final Result: Total 505 Students got Selected <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">IChO 2019 Result 3 Classroom Students of ALLEN bagged 2 Gold 1 Silver Medal <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">IMO 2019 Result: ALLEN student OJAS MITTAL bagged Silver Medal <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">IBO 2019 Result : 3 Classroom students of ALLEN, bagged 2 Silver Medals <br><span class="color-blue" >Click Here</span></div></div></a>', 
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text">IPhO 2019 Result : 2 Classroom students of ALLEN, bagged 1 Gold & 1 Silver Medal <span class="color-blue" >Click Here</span></div></div></a>',

];

kota_pncf_resultNotification = [
	'<a href="#"><div class="notification"><div class="date-box"><img src="/assets/img/notification/ico1.svg" class="" ></div><div class="notification-text"><h5 class="pt-2">NO EVENTS RIGHT NOW!</h5></div></div></a>',

];

/*====== End Kota PNCF (VI to Xth) =========================*/


ahmedabad_updates = [    
	
	'<a href="/about-online-asat-syllabus-and-pattern.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">  Open Book Online ALLEN Scholarship Admission Test (ASAT) on 02nd &amp; 09th August <span class="color-blue" >Click Here</span></div></div></a>',
    
    '<a href="https://www.allen.ac.in/spellathon/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> ALLEN PNCF SPALLENTHON, An online Spelling Bee Competition. <br><span class="color-blue" >Click Here</span></div></div></a>',
    
	'<a href="https://dlp.allen.ac.in/2019-20/neet-ug-dlp-plus.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> NEET UG DLP<sup>+</sup> (Target 2020) <br>	<span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://www.onlinetestseries.in/allenkota/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Free Online Drill Test Series for JEE (Main+Adv) &amp; NEET UG 2020, Enroll Now <br><span class="color-blue" >Click Here</span></div></div></a>',
	'<a href="/results/pre-nurture/IJSO-2018-result.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">IJSO 2018 Result: ALLEN students Bagged 4 Gold &amp; 1 Silver medal <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

ahmedabad_importantNotification = [

	'<a href="/bfl.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"> Educational courses on Easy EMI from Bajaj Finserv Ltd. <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/campus-dunia.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility <span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

ahmedabad_resultNotification = [
	'<a href="/results/pre-nurture/Rajasthan-NTSE-Stage-1-Result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="/results/ocsc-result-olympiad-stage-II-2020.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/jee-main-2020-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">JEE Main 2020 (January Attempt) Result | 3 ALLEN Students score 100 Percentile<span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nmtc-2019-final-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nse-olympiad-2019-stage-1-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result<span class="color-blue" > Click Here</span></div></div></a>',
];

ahmedabad_pncf_updates = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, <span class="color-blue" >Click Here</span></div></div></a>',
];

ahmedabad_pncf_importantNotification = [
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"><h5 class="pt-2">No Important Notification Available Now.</h5></div></div></a>', 

];

ahmedabad_pncf_resultNotification = [

	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">All 6 GOLD Medal bagged by ALLEN Classroom Students in IJSO 2019 Result <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">128 students selected for INMO, ALLENs RMO Result 2019 <br><span class="color-blue" >Click Here</span></div></div></a>',

];



/*====== Add Slide show only in Bhuba Main (XI to XII th Pass) =================*/

bhubaneswar_updates = [    
	
    '<a href="https://www.allen.ac.in/topperstalk?utm_source=allen_web&utm_medium=notification" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Online Toppers Talk Show with IESO 2019 Topper Anuj Jain with ALLEN Kota Coaching Experts<span class="color-blue" > Click Here</span></div></div></a>',
    
    '<a href="https://www.allen.ac.in/spellathon/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">ALLEN PNCF SPALLENTHON, An online Spelling Bee Competition. <br><span class="color-blue" >Click Here</span></div></div></a>',
    
	'<a href="https://dlp.allen.ac.in/2019-20/neet-ug-dlp-plus.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> NEET UG DLP<sup>+</sup> (Target 2020) <br>	<span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/about-online-asat-syllabus-and-pattern.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Open Book Online ALLEN Scholarship Admission Test (ASAT) on 26th July <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/bhubaneswar/crash-course/crash-course-neetug.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">NEET-UG : CRASH COURSE for Class XII/XII Passed <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/bhubaneswar/crash-course/crash-course-jeemain.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">JEE Main : CRASH COURSE for Class XII/XII Passed<span class="color-blue" > <br>Click Here</span></div></div></a>',
	
	'<a href="/bhubaneswar/JMO-2019.pdf" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">JMO 2019 Paper With Solution <br> <span class="color-blue" >Click Here</span></div></div></a>',
		
];

bhubaneswar_importantNotification = [

	'<a href="/bfl.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"> Educational courses on Easy EMI from Bajaj Finserv Ltd. <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/campus-dunia.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility <span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

bhubaneswar_resultNotification = [
	'<a href="https://www.onlinetestseries.in/allenkota/" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">Free Online Drill Test Series for JEE (Main+Adv) & NEET UG 2020, Enroll Now<span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="/results/ocsc-result-olympiad-stage-II-2020.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/jee-main-2020-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">JEE Main 2020 (January Attempt) Result | 3 ALLEN Students score 100 Percentile<span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nmtc-2019-final-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest<span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nse-olympiad-2019-stage-1-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result<span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/kvpy-2019-stage-1-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">670 ALLEN Students Selected for KVPY Stage-2 | KVPY 2019 Result <span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/IJSO-2019-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">All 6 GOLD Medal bagged by ALLEN Classroom Students in IJSO 2019 Result<span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/rmo-result-2019.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"> 128 students selected for INMO, ALLENs RMO Result 2019   <span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/ioi/zio-2019-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">26 ALLEN Students selected for INOI <br>(ZIO 2019 Result) <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="/results/dhruv/3-allen-students-selected-in-dhruv-by-mhrd.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">3 ALLEN Classroom Students selected in DHRUV programme by MHRD  <span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="/results/pre-nurture/prmo-result-2019.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">PRMO 2019 Result: 985 ALLEN Students Qualified in PRMO 2019 <span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/IESO-2019-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">IESO 2019 Result: 2 ALLEN Classroom Students bagged Silver Medals<span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/ntse-2019-final-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">NTSE 2019 Final Result: Total 505 Students got Selected <span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="/results/international-chemistry-olympiads-icho-2019.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">IChO 2019 Result: 3 Classroom Students of ALLEN, bagged 2 Gold & 1 Silver Medal<span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="/results/international-mathematical-olympiad-imo-2019.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">IMO 2019 Result: ALLEN student OJAS MITTAL bagged Silver Medal<span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="/results/international-biology-olympiad-ibo-2019.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">IBO 2019 Result : 3 Classroom students of ALLEN, bagged 2 Silver Medals <span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="/results/international-physics-olympiad-ipho-2019.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">IPhO 2019 Result : 2 Classroom students of ALLEN, bagged 1 Gold & 1 Silver Medal<span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/jee-advanced-2019-results-all-india-toppers.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">JEE Advanced 2019 Result: ALLEN Classroom Student secures AIR-1<span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/aiims-2019-result-all-india-toppers.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">AIIMS (MBBS) 2019 Result: 9 ALLEN students in Top 10 AIR<span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="/results/jipmer-2019-result-all-india-toppers.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">JIPMER 2019 Result: 9 out of 10 All India Ranks Secured by ALLEN Students <span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="/results/neet-ug-2019-result-all-india-toppers.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">NEET-UG 2019 Result: ALLEN Classroom Student secures AIR -1<span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/IESO-2019-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">Olympiad Result : 2 ALLEN students selected in National Team of 4 for IESO 2019<span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="/results/international-chemistry-olympiads-icho-2019.asp " target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">Olympiad Result : 3 ALLEN Students Selected in Indian Team of 4 for IChO 2019<span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="/results/jee-main-2019-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">ALLEN Result: JEE (Main) 2019 | 7 ALLEN Classroom Students in Top 20 AIR.<span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/ocsc-result-olympiad-stage-II-2019.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">Indian National Olympiad 2019 Results<span class="color-blue" > <br>Click Here</span></div></div></a>',

	
];

/*====== End Kota  =========================*/

/*====== Add Slide show only in Kota PNCF (VI to Xth) =========================*/

bhubaneswar_pncf_updates = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, <span class="color-blue" >Click Here</span></div></div></a>',
];

bhubaneswar_pncf_importantNotification = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">All 6 GOLD Medal bagged by ALLEN Classroom Students in IJSO 2019 Result <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">128 students selected for INMO, ALLENs RMO Result 2019 <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">3 ALLEN Classroom Students selected in DHRUV programme by MHRD <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">PRMO 2019 Result: 985 ALLEN Students Qualified in PRMO 2019 <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">IESO 2019 Result: 2 ALLEN Classroom Students bagged Silver Medals <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">NTSE 2019 Final Result: Total 505 Students got Selected <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">IChO 2019 Result 3 Classroom Students of ALLEN bagged 2 Gold 1 Silver Medal <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">IMO 2019 Result: ALLEN student OJAS MITTAL bagged Silver Medal <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">IBO 2019 Result : 3 Classroom students of ALLEN, bagged 2 Silver Medals <br><span class="color-blue" >Click Here</span></div></div></a>', 
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">IPhO 2019 Result : 2 Classroom students of ALLEN, bagged 1 Gold & 1 Silver Medal <span class="color-blue" >Click Here</span></div></div></a>',

];

bhubaneswar_pncf_resultNotification = [
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"><h5 class="pt-2">NO EVENTS RIGHT NOW!</h5></div></div></a>',

];

/*====== End Kota PNCF (VI to Xth) =========================*/

bengaluru_updates = [    
	
	'<a href="https://www.allen.ac.in/topperstalk?utm_source=allen_web&utm_medium=notification" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">  Online Toppers Talk Show with IESO 2019 Topper Anuj Jain with ALLEN Kota Coaching Experts <span class="color-blue" >Click Here</span></div></div></a>',
    
    '<a href="https://www.allen.ac.in/spellathon/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">ALLEN PNCF SPALLENTHON, An online Spelling Bee Competition. <br><span class="color-blue" >Click Here</span></div></div></a>',
    
	'<a href="https://dlp.allen.ac.in/2019-20/neet-ug-dlp-plus.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> NEET UG DLP<sup>+</sup> (Target 2020) <br>	<span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/about-online-asat-syllabus-and-pattern.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Open Book Online ALLEN Scholarship Admission Test (ASAT) on 26th July <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://www.onlinetestseries.in/allenkota/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Free Online Drill Test Series for JEE (Main+Adv) &amp; NEET UG 2020, Enroll Now <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/bengaluru/crash-course/neet-ug-2019-20-crash-course.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">CRASH COURSE : NEET-UG 2020 <span class="color-blue" > <br>Click Here</span></div></div></a>',
	
	'<a href="/bengaluru/pdf/JEE-Main-2020-Notice.pdf" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">JEE Main 2020 Notice <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/campus-dunia.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility <span class="color-blue" >Click Here</span></div></div></a>',

	'<a href="/bfl.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"> Educational courses on Easy EMI from Bajaj Finserv Ltd. <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
];

bengaluru_importantNotification = [

	'<a href="/bfl.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"> Educational courses on Easy EMI from Bajaj Finserv Ltd. <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/campus-dunia.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility <span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

bengaluru_resultNotification = [
	'<a href="/results/ocsc-result-olympiad-stage-II-2020.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/jee-main-2020-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">JEE Main 2020 (January Attempt) Result | 3 ALLEN Students score 100 Percentile <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nmtc-2019-final-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nse-olympiad-2019-stage-1-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/kvpy-2019-stage-1-result.asp " target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">670 ALLEN Students Selected for KVPY Stage-2 | KVPY 2019 Result<span class="color-blue" > <br>Click Here</span></div></div></a>',
	
];

bengaluru_pncf_updates = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, <span class="color-blue" >Click Here</span></div></div></a>',
];

bengaluru_pncf_importantNotification = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">All 6 GOLD Medal bagged by ALLEN Classroom Students in IJSO 2019 Result <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">128 students selected for INMO, ALLENs RMO Result 2019 <br><span class="color-blue" >Click Here</span></div></div></a>',
];

bengaluru_pncf_resultNotification = [
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"><h5 class="pt-2">NO EVENTS RIGHT NOW!</h5></div></div></a>',

];



bhilwara_updates = [    
	
	'<a href="/about-online-asat-syllabus-and-pattern.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">  Open Book Online ALLEN Scholarship Admission Test (ASAT) on 02nd &amp; 09th August <span class="color-blue" >Click Here</span></div></div></a>',
    
    '<a href="https://www.allen.ac.in/spellathon/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> ALLEN PNCF SPALLENTHON, An online Spelling Bee Competition. <br><span class="color-blue" >Click Here</span></div></div></a>',
    
	'<a href="https://dlp.allen.ac.in/2019-20/neet-ug-dlp-plus.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> NEET UG DLP<sup>+</sup> (Target 2020) <br>	<span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://www.onlinetestseries.in/allenkota/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Free Online Drill Test Series for JEE (Main+Adv) &amp; NEET UG 2020, Enroll Now <br><span class="color-blue" >Click Here</span></div></div></a>',
	'<a href="/results/pre-nurture/IJSO-2018-result.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">IJSO 2018 Result: ALLEN students Bagged 4 Gold &amp; 1 Silver medal <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

bhilwara_importantNotification = [

	'<a href="/bfl.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"> Educational courses on Easy EMI from Bajaj Finserv Ltd. <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/campus-dunia.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility <span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

bhilwara_resultNotification = [
	'<a href="/results/pre-nurture/Rajasthan-NTSE-Stage-1-Result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="/results/ocsc-result-olympiad-stage-II-2020.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/jee-main-2020-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">JEE Main 2020 (January Attempt) Result | 3 ALLEN Students score 100 Percentile<span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nmtc-2019-final-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nse-olympiad-2019-stage-1-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result<span class="color-blue" > Click Here</span></div></div></a>',
];

bhilwara_pncf_updates = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, <span class="color-blue" >Click Here</span></div></div></a>',
];

bhilwara_pncf_importantNotification = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">All 6 GOLD Medal bagged by ALLEN Classroom Students in IJSO 2019 Result <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">128 students selected for INMO, ALLENs RMO Result 2019 <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">3 ALLEN Classroom Students selected in DHRUV programme by MHRD <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">PRMO 2019 Result: 985 ALLEN Students Qualified in PRMO 2019 <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">IESO 2019 Result: 2 ALLEN Classroom Students bagged Silver Medals <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">NTSE 2019 Final Result: Total 505 Students got Selected <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">IChO 2019 Result 3 Classroom Students of ALLEN bagged 2 Gold 1 Silver Medal <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">IMO 2019 Result: ALLEN student OJAS MITTAL bagged Silver Medal <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">IBO 2019 Result : 3 Classroom students of ALLEN, bagged 2 Silver Medals <br><span class="color-blue" >Click Here</span></div></div></a>', 
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">IPhO 2019 Result : 2 Classroom students of ALLEN, bagged 1 Gold & 1 Silver Medal <span class="color-blue" >Click Here</span></div></div></a>',

];

bhilwara_pncf_resultNotification = [
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"><h5 class="pt-2">NO EVENTS RIGHT NOW!</h5></div></div></a>',

];



chennai_updates = [    
	
    
    '<a href="https://www.allen.ac.in/spellathon/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> ALLEN PNCF SPALLENTHON, An online Spelling Bee Competition. <br><span class="color-blue" >Click Here</span></div></div></a>',
    
	'<a href="https://dlp.allen.ac.in/2019-20/neet-ug-dlp-plus.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> NEET UG DLP<sup>+</sup> (Target 2020) <br>	<span class="color-blue" >Click Here</span></div></div></a>',
	'<a href="/about-online-asat-syllabus-and-pattern.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">  Open Book Online ALLEN Scholarship Admission Test (ASAT) on 02nd &amp; 09th August <span class="color-blue" >Click Here</span></div></div></a>',
	'<a href="https://www.onlinetestseries.in/allenkota/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Free Online Drill Test Series for JEE (Main+Adv) &amp; NEET UG 2020, Enroll Now <br><span class="color-blue" >Click Here</span></div></div></a>',
	'<a href="/results/pre-nurture/IJSO-2018-result.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">IJSO 2018 Result: ALLEN students Bagged 4 Gold &amp; 1 Silver medal <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

chennai_importantNotification = [

	'<a href="/bfl.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"> Educational courses on Easy EMI from Bajaj Finserv Ltd. <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/campus-dunia.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility <span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

chennai_resultNotification = [
	'<a href="/results/pre-nurture/Rajasthan-NTSE-Stage-1-Result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="/results/ocsc-result-olympiad-stage-II-2020.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/jee-main-2020-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">JEE Main 2020 (January Attempt) Result | 3 ALLEN Students score 100 Percentile<span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nmtc-2019-final-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nse-olympiad-2019-stage-1-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result<span class="color-blue" > Click Here</span></div></div></a>',
];

chennai_pncf_updates = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, <span class="color-blue" >Click Here</span></div></div></a>',
];

chennai_pncf_importantNotification = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">All 6 GOLD Medal bagged by ALLEN Classroom Students in IJSO 2019 Result <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">128 students selected for INMO, ALLENs RMO Result 2019 <br><span class="color-blue" >Click Here</span></div></div></a>',
];

chennai_pncf_resultNotification = [
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"><h5 class="pt-2">NO EVENTS RIGHT NOW!</h5></div></div></a>',

];

chandigarh_updates = [    
	
	'<a href="/about-online-asat-syllabus-and-pattern.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">  Open Book Online ALLEN Scholarship Admission Test (ASAT) on 02nd &amp; 09th August <span class="color-blue" >Click Here</span></div></div></a>',
    
    '<a href="https://www.allen.ac.in/spellathon/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> ALLEN PNCF SPALLENTHON, An online Spelling Bee Competition. <br><span class="color-blue" >Click Here</span></div></div></a>',
    
	'<a href="https://dlp.allen.ac.in/2019-20/neet-ug-dlp-plus.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> NEET UG DLP<sup>+</sup> (Target 2020) <br>	<span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://www.onlinetestseries.in/allenkota/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Free Online Drill Test Series for JEE (Main+Adv) &amp; NEET UG 2020, Enroll Now <br><span class="color-blue" >Click Here</span></div></div></a>',
	'<a href="/results/pre-nurture/IJSO-2018-result.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">IJSO 2018 Result: ALLEN students Bagged 4 Gold &amp; 1 Silver medal <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

chandigarh_importantNotification = [

	'<a href="/bfl.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"> Educational courses on Easy EMI from Bajaj Finserv Ltd. <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/campus-dunia.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility <span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

chandigarh_resultNotification = [
	'<a href="/results/pre-nurture/Rajasthan-NTSE-Stage-1-Result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="/results/ocsc-result-olympiad-stage-II-2020.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/jee-main-2020-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">JEE Main 2020 (January Attempt) Result | 3 ALLEN Students score 100 Percentile<span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nmtc-2019-final-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nse-olympiad-2019-stage-1-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result<span class="color-blue" > Click Here</span></div></div></a>',
];

chandigarh_pncf_updates = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, <span class="color-blue" >Click Here</span></div></div></a>',
];

chandigarh_pncf_importantNotification = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">All 6 GOLD Medal bagged by ALLEN Classroom Students in IJSO 2019 Result <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">128 students selected for INMO, ALLENs RMO Result 2019 <br><span class="color-blue" >Click Here</span></div></div></a>',
];

chandigarh_pncf_resultNotification = [
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"><h5 class="pt-2">NO EVENTS RIGHT NOW!</h5></div></div></a>',

];


guwahati_updates = [    
	
	'<a href="/about-online-asat-syllabus-and-pattern.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">  Open Book Online ALLEN Scholarship Admission Test (ASAT) on 02nd &amp; 09th August <span class="color-blue" >Click Here</span></div></div></a>',
    
    '<a href="https://www.allen.ac.in/spellathon/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> ALLEN PNCF SPALLENTHON, An online Spelling Bee Competition. <br><span class="color-blue" >Click Here</span></div></div></a>',
    
	'<a href="https://dlp.allen.ac.in/2019-20/neet-ug-dlp-plus.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> NEET UG DLP<sup>+</sup> (Target 2020) <br>	<span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://www.onlinetestseries.in/allenkota/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Free Online Drill Test Series for JEE (Main+Adv) &amp; NEET UG 2020, Enroll Now <br><span class="color-blue" >Click Here</span></div></div></a>',
	'<a href="/results/pre-nurture/IJSO-2018-result.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">IJSO 2018 Result: ALLEN students Bagged 4 Gold &amp; 1 Silver medal <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

guwahati_importantNotification = [

	'<a href="/bfl.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"> Educational courses on Easy EMI from Bajaj Finserv Ltd. <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/campus-dunia.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility <span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

guwahati_resultNotification = [
	'<a href="/results/pre-nurture/Rajasthan-NTSE-Stage-1-Result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="/results/ocsc-result-olympiad-stage-II-2020.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/jee-main-2020-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">JEE Main 2020 (January Attempt) Result | 3 ALLEN Students score 100 Percentile<span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nmtc-2019-final-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nse-olympiad-2019-stage-1-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result<span class="color-blue" > Click Here</span></div></div></a>',
];

guwahati_pncf_updates = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, <span class="color-blue" >Click Here</span></div></div></a>',
];

guwahati_pncf_importantNotification = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">All 6 GOLD Medal bagged by ALLEN Classroom Students in IJSO 2019 Result <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">128 students selected for INMO, ALLENs RMO Result 2019 <br><span class="color-blue" >Click Here</span></div></div></a>',
];

guwahati_pncf_resultNotification = [
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"><h5 class="pt-2">NO EVENTS RIGHT NOW!</h5></div></div></a>',

];


mysuru_updates = [    
	
	'<a href="/about-online-asat-syllabus-and-pattern.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">  Open Book Online ALLEN Scholarship Admission Test (ASAT) on 02nd &amp; 09th August <span class="color-blue" >Click Here</span></div></div></a>',
    
    '<a href="https://www.allen.ac.in/spellathon/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> ALLEN PNCF SPALLENTHON, An online Spelling Bee Competition. <br><span class="color-blue" >Click Here</span></div></div></a>',
    
	'<a href="https://dlp.allen.ac.in/2019-20/neet-ug-dlp-plus.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> NEET UG DLP<sup>+</sup> (Target 2020) <br>	<span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://www.onlinetestseries.in/allenkota/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Free Online Drill Test Series for JEE (Main+Adv) &amp; NEET UG 2020, Enroll Now <br><span class="color-blue" >Click Here</span></div></div></a>',
	'<a href="/results/pre-nurture/IJSO-2018-result.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">IJSO 2018 Result: ALLEN students Bagged 4 Gold &amp; 1 Silver medal <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

mysuru_importantNotification = [

	'<a href="/bfl.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"> Educational courses on Easy EMI from Bajaj Finserv Ltd. <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/campus-dunia.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility <span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

mysuru_resultNotification = [
	'<a href="/results/pre-nurture/Rajasthan-NTSE-Stage-1-Result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="/results/ocsc-result-olympiad-stage-II-2020.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/jee-main-2020-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">JEE Main 2020 (January Attempt) Result | 3 ALLEN Students score 100 Percentile<span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nmtc-2019-final-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nse-olympiad-2019-stage-1-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result<span class="color-blue" > Click Here</span></div></div></a>',
];

mysuru_pncf_updates = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, <span class="color-blue" >Click Here</span></div></div></a>',
];

mysuru_pncf_importantNotification = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">All 6 GOLD Medal bagged by ALLEN Classroom Students in IJSO 2019 Result <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">128 students selected for INMO, ALLENs RMO Result 2019 <br><span class="color-blue" >Click Here</span></div></div></a>',
];

mysuru_pncf_resultNotification = [
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"><h5 class="pt-2">NO EVENTS RIGHT NOW!</h5></div></div></a>',

];


indore_updates = [    
	
	'<a href="/about-online-asat-syllabus-and-pattern.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">  Open Book Online ALLEN Scholarship Admission Test (ASAT) on 02nd &amp; 09th August <span class="color-blue" >Click Here</span></div></div></a>',
    
    '<a href="https://www.allen.ac.in/spellathon/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> ALLEN PNCF SPALLENTHON, An online Spelling Bee Competition. <br><span class="color-blue" >Click Here</span></div></div></a>',
    
	'<a href="https://dlp.allen.ac.in/2019-20/neet-ug-dlp-plus.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> NEET UG DLP<sup>+</sup> (Target 2020) <br>	<span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://www.onlinetestseries.in/allenkota/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Free Online Drill Test Series for JEE (Main+Adv) &amp; NEET UG 2020, Enroll Now <br><span class="color-blue" >Click Here</span></div></div></a>',
	'<a href="/results/pre-nurture/IJSO-2018-result.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">IJSO 2018 Result: ALLEN students Bagged 4 Gold &amp; 1 Silver medal <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

indore_importantNotification = [

	'<a href="/bfl.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"> Educational courses on Easy EMI from Bajaj Finserv Ltd. <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/campus-dunia.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility <span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

indore_resultNotification = [
	'<a href="/results/pre-nurture/Rajasthan-NTSE-Stage-1-Result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="/results/ocsc-result-olympiad-stage-II-2020.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/jee-main-2020-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">JEE Main 2020 (January Attempt) Result | 3 ALLEN Students score 100 Percentile<span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nmtc-2019-final-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nse-olympiad-2019-stage-1-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result<span class="color-blue" > Click Here</span></div></div></a>',
];

indore_pncf_updates = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, <span class="color-blue" >Click Here</span></div></div></a>',
];

indore_pncf_importantNotification = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">All 6 GOLD Medal bagged by ALLEN Classroom Students in IJSO 2019 Result <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">128 students selected for INMO, ALLENs RMO Result 2019 <br><span class="color-blue" >Click Here</span></div></div></a>',
];

indore_pncf_resultNotification = [
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"><h5 class="pt-2">NO EVENTS RIGHT NOW!</h5></div></div></a>', 
];


kochi_updates = [    
	
	'<a href="/about-online-asat-syllabus-and-pattern.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">  Open Book Online ALLEN Scholarship Admission Test (ASAT) on 02nd &amp; 09th August <span class="color-blue" >Click Here</span></div></div></a>',
    
    '<a href="https://www.allen.ac.in/spellathon/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> ALLEN PNCF SPALLENTHON, An online Spelling Bee Competition. <br><span class="color-blue" >Click Here</span></div></div></a>',
    
	'<a href="https://dlp.allen.ac.in/2019-20/neet-ug-dlp-plus.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> NEET UG DLP<sup>+</sup> (Target 2020) <br>	<span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://www.onlinetestseries.in/allenkota/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Free Online Drill Test Series for JEE (Main+Adv) &amp; NEET UG 2020, Enroll Now <br><span class="color-blue" >Click Here</span></div></div></a>',
	'<a href="/results/pre-nurture/IJSO-2018-result.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">IJSO 2018 Result: ALLEN students Bagged 4 Gold &amp; 1 Silver medal <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

kochi_importantNotification = [

	'<a href="/bfl.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"> Educational courses on Easy EMI from Bajaj Finserv Ltd. <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/campus-dunia.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility <span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

kochi_resultNotification = [
	'<a href="/results/pre-nurture/Rajasthan-NTSE-Stage-1-Result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="/results/ocsc-result-olympiad-stage-II-2020.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/jee-main-2020-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">JEE Main 2020 (January Attempt) Result | 3 ALLEN Students score 100 Percentile<span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nmtc-2019-final-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nse-olympiad-2019-stage-1-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result<span class="color-blue" > Click Here</span></div></div></a>',
];

kochi_pncf_updates = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, <span class="color-blue" >Click Here</span></div></div></a>',
];

kochi_pncf_importantNotification = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">All 6 GOLD Medal bagged by ALLEN Classroom Students in IJSO 2019 Result <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">128 students selected for INMO, ALLENs RMO Result 2019 <br><span class="color-blue" >Click Here</span></div></div></a>',
];

kochi_pncf_resultNotification = [
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"><h5 class="pt-2">NO EVENTS RIGHT NOW!</h5></div></div></a>', 
];


mumbai_updates = [    
	
	'<a href="/about-online-asat-syllabus-and-pattern.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">  Open Book Online ALLEN Scholarship Admission Test (ASAT) on 02nd &amp; 09th August <span class="color-blue" >Click Here</span></div></div></a>',
    
    '<a href="https://www.allen.ac.in/spellathon/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> ALLEN PNCF SPALLENTHON, An online Spelling Bee Competition. <br><span class="color-blue" >Click Here</span></div></div></a>',
    
	'<a href="https://dlp.allen.ac.in/2019-20/neet-ug-dlp-plus.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> NEET UG DLP<sup>+</sup> (Target 2020) <br>	<span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://www.onlinetestseries.in/allenkota/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Free Online Drill Test Series for JEE (Main+Adv) &amp; NEET UG 2020, Enroll Now <br><span class="color-blue" >Click Here</span></div></div></a>',
	'<a href="/results/pre-nurture/IJSO-2018-result.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">IJSO 2018 Result: ALLEN students Bagged 4 Gold &amp; 1 Silver medal <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

mumbai_importantNotification = [

	'<a href="/bfl.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"> Educational courses on Easy EMI from Bajaj Finserv Ltd. <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/campus-dunia.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility <span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

mumbai_resultNotification = [
	'<a href="/results/pre-nurture/Rajasthan-NTSE-Stage-1-Result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="/results/ocsc-result-olympiad-stage-II-2020.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/jee-main-2020-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">JEE Main 2020 (January Attempt) Result | 3 ALLEN Students score 100 Percentile<span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nmtc-2019-final-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nse-olympiad-2019-stage-1-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result<span class="color-blue" > Click Here</span></div></div></a>',
];

mumbai_pncf_updates = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, <span class="color-blue" >Click Here</span></div></div></a>',
];

mumbai_pncf_importantNotification = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">All 6 GOLD Medal bagged by ALLEN Classroom Students in IJSO 2019 Result <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">128 students selected for INMO, ALLENs RMO Result 2019 <br><span class="color-blue" >Click Here</span></div></div></a>',
];

mumbai_pncf_resultNotification = [
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"><h5 class="pt-2">NO EVENTS RIGHT NOW!</h5></div></div></a>', 
];


nagpur_updates = [    
	
	'<a href="/about-online-asat-syllabus-and-pattern.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">  Open Book Online ALLEN Scholarship Admission Test (ASAT) on 02nd &amp; 09th August <span class="color-blue" >Click Here</span></div></div></a>',
    
    '<a href="https://www.allen.ac.in/spellathon/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> ALLEN PNCF SPALLENTHON, An online Spelling Bee Competition. <br><span class="color-blue" >Click Here</span></div></div></a>',
    
	'<a href="https://dlp.allen.ac.in/2019-20/neet-ug-dlp-plus.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> NEET UG DLP<sup>+</sup> (Target 2020) <br>	<span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://www.onlinetestseries.in/allenkota/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Free Online Drill Test Series for JEE (Main+Adv) &amp; NEET UG 2020, Enroll Now <br><span class="color-blue" >Click Here</span></div></div></a>',
	'<a href="/results/pre-nurture/IJSO-2018-result.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">IJSO 2018 Result: ALLEN students Bagged 4 Gold &amp; 1 Silver medal <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

nagpur_importantNotification = [

	'<a href="/bfl.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"> Educational courses on Easy EMI from Bajaj Finserv Ltd. <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/campus-dunia.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility <span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

nagpur_resultNotification = [
	'<a href="/results/pre-nurture/Rajasthan-NTSE-Stage-1-Result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="/results/ocsc-result-olympiad-stage-II-2020.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/jee-main-2020-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">JEE Main 2020 (January Attempt) Result | 3 ALLEN Students score 100 Percentile<span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nmtc-2019-final-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nse-olympiad-2019-stage-1-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result<span class="color-blue" > Click Here</span></div></div></a>',
];

nagpur_pncf_updates = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, <span class="color-blue" >Click Here</span></div></div></a>',
];

nagpur_pncf_importantNotification = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">All 6 GOLD Medal bagged by ALLEN Classroom Students in IJSO 2019 Result <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">128 students selected for INMO, ALLENs RMO Result 2019 <br><span class="color-blue" >Click Here</span></div></div></a>',
];

nagpur_pncf_resultNotification = [
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"><h5 class="pt-2">NO EVENTS RIGHT NOW!</h5></div></div></a>', 
];


pune_updates = [    
	
	'<a href="/about-online-asat-syllabus-and-pattern.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">  Open Book Online ALLEN Scholarship Admission Test (ASAT) on 02nd &amp; 09th August <span class="color-blue" >Click Here</span></div></div></a>',
    
    '<a href="https://www.allen.ac.in/spellathon/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> ALLEN PNCF SPALLENTHON, An online Spelling Bee Competition. <br><span class="color-blue" >Click Here</span></div></div></a>',
    
	'<a href="https://dlp.allen.ac.in/2019-20/neet-ug-dlp-plus.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> NEET UG DLP<sup>+</sup> (Target 2020) <br>	<span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://www.onlinetestseries.in/allenkota/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Free Online Drill Test Series for JEE (Main+Adv) &amp; NEET UG 2020, Enroll Now <br><span class="color-blue" >Click Here</span></div></div></a>',
	'<a href="/results/pre-nurture/IJSO-2018-result.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">IJSO 2018 Result: ALLEN students Bagged 4 Gold &amp; 1 Silver medal <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

pune_importantNotification = [

	'<a href="/bfl.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"> Educational courses on Easy EMI from Bajaj Finserv Ltd. <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/campus-dunia.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility <span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

pune_resultNotification = [
	'<a href="/results/pre-nurture/Rajasthan-NTSE-Stage-1-Result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="/results/ocsc-result-olympiad-stage-II-2020.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/jee-main-2020-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">JEE Main 2020 (January Attempt) Result | 3 ALLEN Students score 100 Percentile<span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nmtc-2019-final-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nse-olympiad-2019-stage-1-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result<span class="color-blue" > Click Here</span></div></div></a>',
];

pune_pncf_updates = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, <span class="color-blue" >Click Here</span></div></div></a>',
];

pune_pncf_importantNotification = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">All 6 GOLD Medal bagged by ALLEN Classroom Students in IJSO 2019 Result <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">128 students selected for INMO, ALLENs RMO Result 2019 <br><span class="color-blue" >Click Here</span></div></div></a>',
];

pune_pncf_resultNotification = [
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"><h5 class="pt-2">NO EVENTS RIGHT NOW!</h5></div></div></a>', 
];


rajkot_updates = [    
	
	'<a href="/about-online-asat-syllabus-and-pattern.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">  Open Book Online ALLEN Scholarship Admission Test (ASAT) on 02nd &amp; 09th August <span class="color-blue" >Click Here</span></div></div></a>',
    
    '<a href="https://www.allen.ac.in/spellathon/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> ALLEN PNCF SPALLENTHON, An online Spelling Bee Competition. <br><span class="color-blue" >Click Here</span></div></div></a>',
    
	'<a href="https://dlp.allen.ac.in/2019-20/neet-ug-dlp-plus.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> NEET UG DLP<sup>+</sup> (Target 2020) <br>	<span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://www.onlinetestseries.in/allenkota/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Free Online Drill Test Series for JEE (Main+Adv) &amp; NEET UG 2020, Enroll Now <br><span class="color-blue" >Click Here</span></div></div></a>',
	'<a href="/results/pre-nurture/IJSO-2018-result.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">IJSO 2018 Result: ALLEN students Bagged 4 Gold &amp; 1 Silver medal <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

rajkot_importantNotification = [

	'<a href="/bfl.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"> Educational courses on Easy EMI from Bajaj Finserv Ltd. <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/campus-dunia.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility <span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

rajkot_resultNotification = [
	'<a href="/results/pre-nurture/Rajasthan-NTSE-Stage-1-Result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="/results/ocsc-result-olympiad-stage-II-2020.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/jee-main-2020-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">JEE Main 2020 (January Attempt) Result | 3 ALLEN Students score 100 Percentile<span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nmtc-2019-final-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nse-olympiad-2019-stage-1-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result<span class="color-blue" > Click Here</span></div></div></a>',
];

rajkot_pncf_updates = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, <span class="color-blue" >Click Here</span></div></div></a>',
];

rajkot_pncf_importantNotification = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">All 6 GOLD Medal bagged by ALLEN Classroom Students in IJSO 2019 Result <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">128 students selected for INMO, ALLENs RMO Result 2019 <br><span class="color-blue" >Click Here</span></div></div></a>',
];

rajkot_pncf_resultNotification = [
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"><h5 class="pt-2">NO EVENTS RIGHT NOW!</h5></div></div></a>', 
];


sikar_updates = [    
	
	'<a href="/about-online-asat-syllabus-and-pattern.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">  Open Book Online ALLEN Scholarship Admission Test (ASAT) on 02nd &amp; 09th August <span class="color-blue" >Click Here</span></div></div></a>',
    
    '<a href="https://www.allen.ac.in/spellathon/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> ALLEN PNCF SPALLENTHON, An online Spelling Bee Competition. <br><span class="color-blue" >Click Here</span></div></div></a>',
    
	'<a href="https://dlp.allen.ac.in/2019-20/neet-ug-dlp-plus.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> NEET UG DLP<sup>+</sup> (Target 2020) <br>	<span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://www.onlinetestseries.in/allenkota/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Free Online Drill Test Series for JEE (Main+Adv) &amp; NEET UG 2020, Enroll Now <br><span class="color-blue" >Click Here</span></div></div></a>',
	'<a href="/results/pre-nurture/IJSO-2018-result.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">IJSO 2018 Result: ALLEN students Bagged 4 Gold &amp; 1 Silver medal <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

sikar_importantNotification = [

	'<a href="/bfl.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"> Educational courses on Easy EMI from Bajaj Finserv Ltd. <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/campus-dunia.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility <span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

sikar_resultNotification = [
	'<a href="/results/pre-nurture/Rajasthan-NTSE-Stage-1-Result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="/results/ocsc-result-olympiad-stage-II-2020.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/jee-main-2020-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">JEE Main 2020 (January Attempt) Result | 3 ALLEN Students score 100 Percentile<span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nmtc-2019-final-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nse-olympiad-2019-stage-1-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result<span class="color-blue" > Click Here</span></div></div></a>',
];

sikar_pncf_updates = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, <span class="color-blue" >Click Here</span></div></div></a>',
];

sikar_pncf_importantNotification = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">All 6 GOLD Medal bagged by ALLEN Classroom Students in IJSO 2019 Result <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">128 students selected for INMO, ALLENs RMO Result 2019 <br><span class="color-blue" >Click Here</span></div></div></a>',
];

sikar_pncf_resultNotification = [
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"><h5 class="pt-2">NO EVENTS RIGHT NOW!</h5></div></div></a>', 
];


surat_updates = [    
	
	'<a href="/about-online-asat-syllabus-and-pattern.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">  Open Book Online ALLEN Scholarship Admission Test (ASAT) on 02nd &amp; 09th August <span class="color-blue" >Click Here</span></div></div></a>',
    
    '<a href="https://www.allen.ac.in/spellathon/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> ALLEN PNCF SPALLENTHON, An online Spelling Bee Competition. <br><span class="color-blue" >Click Here</span></div></div></a>',
    
	'<a href="https://dlp.allen.ac.in/2019-20/neet-ug-dlp-plus.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> NEET UG DLP<sup>+</sup> (Target 2020) <br>	<span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://www.onlinetestseries.in/allenkota/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Free Online Drill Test Series for JEE (Main+Adv) &amp; NEET UG 2020, Enroll Now <br><span class="color-blue" >Click Here</span></div></div></a>',
	'<a href="/results/pre-nurture/IJSO-2018-result.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">IJSO 2018 Result: ALLEN students Bagged 4 Gold &amp; 1 Silver medal <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

surat_importantNotification = [

	'<a href="/bfl.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"> Educational courses on Easy EMI from Bajaj Finserv Ltd. <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/campus-dunia.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility <span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

surat_resultNotification = [
	'<a href="/results/pre-nurture/Rajasthan-NTSE-Stage-1-Result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="/results/ocsc-result-olympiad-stage-II-2020.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/jee-main-2020-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">JEE Main 2020 (January Attempt) Result | 3 ALLEN Students score 100 Percentile<span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nmtc-2019-final-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nse-olympiad-2019-stage-1-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result<span class="color-blue" > Click Here</span></div></div></a>',
];

surat_pncf_updates = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, <span class="color-blue" >Click Here</span></div></div></a>',
];

surat_pncf_importantNotification = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">All 6 GOLD Medal bagged by ALLEN Classroom Students in IJSO 2019 Result <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">128 students selected for INMO, ALLENs RMO Result 2019 <br><span class="color-blue" >Click Here</span></div></div></a>',
];

surat_pncf_resultNotification = [
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"><h5 class="pt-2">NO EVENTS RIGHT NOW!</h5></div></div></a>', 
];


ujjain_updates = [    
	
	'<a href="/about-online-asat-syllabus-and-pattern.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">  Open Book Online ALLEN Scholarship Admission Test (ASAT) on 02nd &amp; 09th August <span class="color-blue" >Click Here</span></div></div></a>',
    
    '<a href="https://www.allen.ac.in/spellathon/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> ALLEN PNCF SPALLENTHON, An online Spelling Bee Competition. <br><span class="color-blue" >Click Here</span></div></div></a>',
    
	'<a href="https://dlp.allen.ac.in/2019-20/neet-ug-dlp-plus.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> NEET UG DLP<sup>+</sup> (Target 2020) <br>	<span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://www.onlinetestseries.in/allenkota/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Free Online Drill Test Series for JEE (Main+Adv) &amp; NEET UG 2020, Enroll Now <br><span class="color-blue" >Click Here</span></div></div></a>',
	'<a href="/results/pre-nurture/IJSO-2018-result.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">IJSO 2018 Result: ALLEN students Bagged 4 Gold &amp; 1 Silver medal <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

ujjain_importantNotification = [

	'<a href="/bfl.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"> Educational courses on Easy EMI from Bajaj Finserv Ltd. <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/campus-dunia.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility <span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

ujjain_resultNotification = [
	'<a href="/results/pre-nurture/Rajasthan-NTSE-Stage-1-Result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="/results/ocsc-result-olympiad-stage-II-2020.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/jee-main-2020-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">JEE Main 2020 (January Attempt) Result | 3 ALLEN Students score 100 Percentile<span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nmtc-2019-final-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nse-olympiad-2019-stage-1-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result<span class="color-blue" > Click Here</span></div></div></a>',
];

ujjain_pncf_updates = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, <span class="color-blue" >Click Here</span></div></div></a>',
];

ujjain_pncf_importantNotification = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">All 6 GOLD Medal bagged by ALLEN Classroom Students in IJSO 2019 Result <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">128 students selected for INMO, ALLENs RMO Result 2019 <br><span class="color-blue" >Click Here</span></div></div></a>',
];

ujjain_pncf_resultNotification = [
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"><h5 class="pt-2">NO EVENTS RIGHT NOW!</h5></div></div></a>', 
];


vadodara_updates = [    
	
	'<a href="/about-online-asat-syllabus-and-pattern.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">  Open Book Online ALLEN Scholarship Admission Test (ASAT) on 02nd &amp; 09th August <span class="color-blue" >Click Here</span></div></div></a>',
    
    '<a href="https://www.allen.ac.in/spellathon/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> ALLEN PNCF SPALLENTHON, An online Spelling Bee Competition. <br><span class="color-blue" >Click Here</span></div></div></a>',
    
	'<a href="https://dlp.allen.ac.in/2019-20/neet-ug-dlp-plus.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text"> NEET UG DLP<sup>+</sup> (Target 2020) <br>	<span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="https://www.onlinetestseries.in/allenkota/" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Free Online Drill Test Series for JEE (Main+Adv) &amp; NEET UG 2020, Enroll Now <br><span class="color-blue" >Click Here</span></div></div></a>',
	'<a href="/results/pre-nurture/IJSO-2018-result.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">IJSO 2018 Result: ALLEN students Bagged 4 Gold &amp; 1 Silver medal <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

vadodara_importantNotification = [

	'<a href="/bfl.asp" target="_blank" title="Bajaj Finser Ltd." ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"> Educational courses on Easy EMI from Bajaj Finserv Ltd. <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/campus-dunia.asp" target="_blank"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility <span class="color-blue" >Click Here</span></div></div></a>',
	
	
];

vadodara_resultNotification = [
	'<a href="/results/pre-nurture/Rajasthan-NTSE-Stage-1-Result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="/results/ocsc-result-olympiad-stage-II-2020.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/jee-main-2020-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">JEE Main 2020 (January Attempt) Result | 3 ALLEN Students score 100 Percentile<span class="color-blue" > Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nmtc-2019-final-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <span class="color-blue" > <br>Click Here</span></div></div></a>',
	'<a href="https://www.allen.ac.in/results/pre-nurture/nse-olympiad-2019-stage-1-result.asp" target="_blank" ><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result<span class="color-blue" > Click Here</span></div></div></a>',
];

vadodara_pncf_updates = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, <span class="color-blue" >Click Here</span></div></div></a>',
];

vadodara_pncf_importantNotification = [
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Rajasthan NTSE Stage-1 Result 2020. Total 212 ALLEN Classroom Students qualified for Stage-2 <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">ALLEN Result: 94 Students selected for OCSC 2020 <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">52 ALLEN Students Selected in 51st National Mathematics Talent Contest <br> <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">411 ALLEN Students Selected for Indian National Olympiad Stage-2 | NSE 2019 Result <span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">All 6 GOLD Medal bagged by ALLEN Classroom Students in IJSO 2019 Result <br><span class="color-blue" >Click Here</span></div></div></a>',
	
	'<a href="/under-construction.asp"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">128 students selected for INMO, ALLENs RMO Result 2019 <br><span class="color-blue" >Click Here</span></div></div></a>',
];

vadodara_pncf_resultNotification = [
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">00</div><div class="month">-</div></div><div class="notification-text"><h5 class="pt-2">NO EVENTS RIGHT NOW!</h5></div></div></a>', 
];


