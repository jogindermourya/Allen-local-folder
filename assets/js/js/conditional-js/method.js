// JavaScript Document

//function allenslider(images, $) {
//	for (var i = 0; i < images.length; i++) {
//		$('<div class="owl-stage" style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 1680px;"><div class="owl-item" style="width: 270px; margin-right: 10px;">' + images[i] + '</div></div>').appendTo('#homeSlider .home-slider .owl-stage-outer');
//	}
//	$('.owl-item').first().addClass('active');
//}
//







/*====== ADD LATEAST SLIDER show in  Both MAIN & PNCF Sites at the TOP=====*/

latest_slider  = [

'<div class="item"><div class="screenshot_img"><a href="allen.ac.in" target="_blank"><img src="/assets/img/homeslide/1.jpg" class="img-fluid" alt=""></a></div></div>'
	
];



/*====== Want to Show only in ALL Main Site Center =================*/

latest_slider_main = [

	'<a href="allen.ac.in" target="_blank"><img src="img/homeslide/1.jpg" class="img-fluid" alt=""></a>',    
  
];

/*====== Want to Show only in ALL PNCF Centers =================*/

latest_slider_pncf = [
    
  
];


/*====== Add Slide show only in Kota Main (XI to XII th Pass) =================*/

kota_main_slider = [    
       
	'<div class="item"><div class="screenshot_img"><a href="allen.ac.in" target="_blank"><img src="/assets/img/homeslide/1.jpg" class="img-fluid" alt=""></a></div></div>'
	
];

/*====== Add Slide show only in Kota PNCF (VI to Xth) =========================*/

pncf_kota = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]


/*====== Add Slide show only in Ahmedabad Main (XI to XII th Pass) =================*/

ahmedabad = [ 
    
    '<a href="/jee-main-2019/jee-main-2019-Answer-Key-Paper-Solutions.asp"><img src="/slider/images/jee-main-2019-april-exam.jpg" alt="Jee Main 2019 April Exam"></a>',

];

/*====== Add Slide show only in Ahmedabad PNCF (VI to Xth) =========================*/

pncf_ahmedabad = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]


/*====== Add Slide show only in Bengaluru Main (XI to XII th Pass) =================*/

bengaluru = [    
    
    '<a href="/jee-main-2019/jee-main-2019-Answer-Key-Paper-Solutions.asp"><img src="/slider/images/jee-main-2019-april-exam.jpg" alt="Jee Main 2019 April Exam"></a>',

];

/*====== Add Slide show only in Ahmedabad PNCF (VI to Xth) =========================*/

pncf_bengaluru = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]




/*====== Add Slide show only in Bhilwara Main (XI to XII th Pass) =================*/
bhilwara = [ 
        
    '<a href="/jee-main-2019/jee-main-2019-Answer-Key-Paper-Solutions.asp"><img src="/slider/images/jee-main-2019-april-exam.jpg" alt="Jee Main 2019 April Exam"></a>',
	
];

/*====== Add Slide show only in Bhilwara PNCF (VI to Xth) =========================*/

pncf_bhilwara = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]



/*====== Add Slide show only in bhubaneswar Main (XI to XII th Pass) =================*/

bhubaneswar = [
	
    '<a href="/jee-main-2019/jee-main-2019-Answer-Key-Paper-Solutions.asp"><img src="/slider/images/jee-main-2019-april-exam.jpg" alt="Jee Main 2019 April Exam"></a>',

];


/*====== Add Slide show only in bhubaneswar PNCF (VI to Xth) =========================*/

pncf_bhubaneswar = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]



/*====== Add Slide show only in chennai Main (XI to XII th Pass) =================*/

chennai = [
	
    '<a href="/jee-main-2019/jee-main-2019-Answer-Key-Paper-Solutions.asp"><img src="/slider/images/jee-main-2019-april-exam.jpg" alt="Jee Main 2019 April Exam"></a>',
    
];

/*====== Add Slide show only in chennai PNCF (VI to Xth) =========================*/

pncf_chennai = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]



/*====== Add Slide show only in CHANDIGARH Main (XI to XII th Pass) =================*/

chandigarh = [
    
    '<a href="/jee-main-2019/jee-main-2019-Answer-Key-Paper-Solutions.asp"><img src="/slider/images/jee-main-2019-april-exam.jpg" alt="Jee Main 2019 April Exam"></a>',

];

/*====== Add Slide show only in CHANDIGARH PNCF (VI to Xth) =========================*/

pncf_chandigarh = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]



/*====== Add Slide show only in GUWAHATI Main (XI to XII th Pass) =================*/

guwahati = [
    
    '<a href="/jee-main-2019/jee-main-2019-Answer-Key-Paper-Solutions.asp"><img src="/slider/images/jee-main-2019-april-exam.jpg" alt="Jee Main 2019 April Exam"></a>',

];

/*====== Add Slide show only in CHANDIGARH PNCF (VI to Xth) =========================*/

pncf_guwahati = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]




/*====== Add Slide show only in indore Main (XI to XII th Pass) =================*/

indore = [
    
    '<a href="/jee-main-2019/jee-main-2019-Answer-Key-Paper-Solutions.asp"><img src="/slider/images/jee-main-2019-april-exam.jpg" alt="Jee Main 2019 April Exam"></a>',

];

/*====== Add Slide show only in Indore PNCF (VI to Xth) =========================*/

pncf_indore = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>'
	
]



/*====== Add Slide show only in kochi Main (XI to XII th Pass) =================*/

kochi = [
	'<div class="screenshot_img"><a href="allen.ac.in" target="_blank"><img src="img/homeslide/1.jpg" class="img-fluid" alt=""></a></div>',    

]

/*====== Add Slide show only in kochi PNCF (VI to Xth) =========================*/

pncf_kochi = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]




/*====== Add Slide show only in mumbai Main (XI to XII th Pass) =================*/

mumbai = [
    
    '<a href="/jee-main-2019/jee-main-2019-Answer-Key-Paper-Solutions.asp"><img src="/slider/images/jee-main-2019-april-exam.jpg" alt="Jee Main 2019 April Exam"></a>',

]

/*====== Add Slide show only in mumbai PNCF (VI to Xth) =========================*/

pncf_mumbai = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]

/*====== Add Slide show only in mysuru Main (XI to XII th Pass) =================*/

mysuru = [

    '<a href="/jee-main-2019/jee-main-2019-Answer-Key-Paper-Solutions.asp"><img src="/slider/images/jee-main-2019-april-exam.jpg" alt="Jee Main 2019 April Exam"></a>',
	
]

/*====== Add Slide show only in mysuru PNCF (VI to Xth) =========================*/

pncf_mysuru = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]

/*====== Add Slide show only in nagpur Main (XI to XII th Pass) =================*/

nagpur = [
	
    '<a href="/jee-main-2019/jee-main-2019-Answer-Key-Paper-Solutions.asp"><img src="/slider/images/jee-main-2019-april-exam.jpg" alt="Jee Main 2019 April Exam"></a>',

]

/*====== Add Slide show only in nagpur PNCF (VI to Xth) =========================*/

pncf_nagpur = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]



/*====== Add Slide show only in pune Main (XI to XII th Pass) =================*/

pune = [
	
    '<a href="/jee-main-2019/jee-main-2019-Answer-Key-Paper-Solutions.asp"><img src="/slider/images/jee-main-2019-april-exam.jpg" alt="Jee Main 2019 April Exam"></a>',
	
]

/*====== Add Slide show only in pune PNCF (VI to Xth) =========================*/

pncf_pune = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]



/*====== Add Slide show only in rajkot Main (XI to XII th Pass) =================*/

rajkot = [ 
    
    '<a href="https://www.allen.ac.in/results/pre-nurture/nse-olympiad-2019-stage-1-result.asp"><img src="/slider/images/inso-result-2019.jpg" alt="INSO Result 2019"></a>',

]

/*====== Add Slide show only in rajkot PNCF (VI to Xth) =========================*/

pncf_rajkot = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]


/*====== Add Slide show only in Sikar Main (XI to XII th Pass) =================*/

sikar = [
    
    '<a href="https://www.allen.ac.in/results/kvpy-2019-stage-1-result.asp"><img src="/slider/images/kvpy-stage-1-2019-result.jpg" alt="KVPY Stage-I Result 2019"></a>',

]

/*====== Add Slide show only in Sikar Main (XI to XII th Pass) =================*/

pncf_sikar = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]


/*====== Add Slide show only in surat Main (XI to XII th Pass) =================*/

surat = [ 
    
    '<a href="https://www.allen.ac.in/results/pre-nurture/nse-olympiad-2019-stage-1-result.asp"><img src="/slider/images/inso-result-2019.jpg" alt="INSO Result 2019"></a>',
	
]

/*====== Add Slide show only in surat Main (XI to XII th Pass) =================*/

pncf_surat = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]



/*====== Add Slide show only in ujjain Main (XI to XII th Pass) =================*/

ujjain = [
    
    '<a href="/jee-main-2019/jee-main-2019-Answer-Key-Paper-Solutions.asp"><img src="/slider/images/jee-main-2019-april-exam.jpg" alt="Jee Main 2019 April Exam"></a>',
    
]

/*====== Add Slide show only in ujjain Main (XI to XII th Pass) =================*/

pncf_ujjain = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]



/*====== Add Slide show only in vadodara Main (XI to XII th Pass) =================*/

vadodara = [
    
    '<a href="https://www.allen.ac.in/results/pre-nurture/nse-olympiad-2019-stage-1-result.asp"><img src="/slider/images/inso-result-2019.jpg" alt="INSO Result 2019"></a>',

]

/*====== Add Slide show only in vadodara Main (XI to XII th Pass) =================*/

pncf_vadodara = [
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]



