// JavaScript Document

function updateLists(update, $) {
	for (var i = 0; i < update.length; i++) {
		$('<li class="list-item">' + update[i] + '</li>').appendTo('#updateLists .list-outer-up');
	}
}

function resultsLists(results, $) {
	for (var i = 0; i < results.length; i++) {
		$('<li class="list-item">' + results[i] + '</li>').appendTo('#resultsLists .list-outer-rs');
	}
}

function eventsLists(events, $) {
	for (var i = 0; i < events.length; i++) {
		$('<li class="list-item">' + events[i] + '</li>').appendTo('#eventsLists .list-outer-ev');
	}
}


/*====== ADD LATEAST SLIDER show in  Both MAIN & PNCF Sites at the TOP=====*/

Latest  = [

	'<a href="#">PAWAN RATHORE</a>',    

];


/*====== Slide is Universal Show in Both MAIN & PNCF Sites at the TOP =====*/
all_notification = [
	
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, Click Here</div></div></a>'    
	
];


/*====== Want to Show only in ALL Main Site Center =================*/

MAIN = [

  
];

/*====== Want to Show only in ALL PNCF Centers =================*/

PNCF = [
    
  
];


/*====== Add Slide show only in Kota Main (XI to XII th Pass) =================*/

kota_updates_notification = [    
	
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, Click Here</div></div></a>',
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, Click Here</div></div></a>',
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, Click Here</div></div></a>',
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, Click Here</div></div></a>',
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, Click Here</div></div></a>',
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, Click Here</div></div></a>',
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, Click Here</div></div></a>',
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, Click Here</div></div></a>',
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, Click Here</div></div></a>',
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, Click Here</div></div></a>'
	
];


kota_results_notification = [
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, Click Here</div></div></a>',
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, Click Here</div></div></a>',
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, Click Here</div></div></a>',
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, Click Here</div></div></a>',
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, Click Here</div></div></a>',
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, Click Here</div></div></a>',
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, Click Here</div></div></a>',
];


kota_events_notification = [
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, Click Here</div></div></a>',
	'<a href="#"><div class="notification"><div class="date-box"><div class="date">15</div><div class="month">May</div></div><div class="notification-text">Through EMI - You can pay fee in easy EMI through Campus Dunia at no Extra Cost. For more details and to avail EMI facility, Click Here</div></div></a>',
];

/*====== Add Slide show only in Kota PNCF (VI to Xth) =========================*/

kota_pncf_update_notification = [];
kota_pncf_result_notification = [];
kota_pncf_events_notification = [];

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

guwahati = [
    
    '<a href="/jee-main-2019/jee-main-2019-Answer-Key-Paper-Solutions.asp"><img src="/slider/images/jee-main-2019-april-exam.jpg" alt="Jee Main 2019 April Exam"></a>',

];

/*====== Add Slide show only in CHANDIGARH PNCF (VI to Xth) =========================*/

pncf_guwahati = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
];

guwahati_results = [];
guwahati_pncf_result = [];
guwahati_events = [];
guwahati_pncf_events = [];


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

pncf_pune = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]

pune_results = [];
pune_pncf_result = [];
pune_events = [];
pune_pncf_events = [];


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




