// JavaScript Document

function gallerySlider(photos, $) {
	for (var i = 0; i < photos.length; i++) {
		$('<div class="carousel-item">' + photos[i] + '</div>').appendTo('#Gallery .carousel-inner');
	}
	$('.carousel-item').first().addClass('active');
	$('.carousel-indicators > li').first().addClass('active');
	$('#Gallery').carousel();
}





/*====== Add Slide show only in Kota Main (XI to XII th Pass) =================*/

kota = [    
	
	'<a href="https://www.allen.ac.in/imagegallery/gs/embed.aspx?u=Indore&amp;aid=506"><img src="https://www.allen.ac.in/imagegallery/gs/handler/getmedia.ashx?moid=7892&amp;dt=3&amp;g=2" class="img-fluid" alt=""></a>',
	
	'<a href="https://www.allen.ac.in/imagegallery/gs/embed.aspx?u=Indore&amp;aid=506"><img src="https://www.allen.ac.in/imagegallery/gs/handler/getmedia.ashx?moid=7892&amp;dt=3&amp;g=2" class="img-fluid" alt=""></a>'
       
	
];

/*====== Add Slide show only in Kota PNCF (VI to Xth) =========================*/

pncf_kota = [
	
	'<a href="https://www.allen.ac.in/imagegallery/gs/embed.aspx?u=Indore&amp;aid=506"><img src="https://www.allen.ac.in/imagegallery/gs/handler/getmedia.ashx?moid=7892&amp;dt=3&amp;g=2" class="img-fluid" alt=""></a>',
	
	'<a href="https://www.allen.ac.in/imagegallery/gs/embed.aspx?u=Indore&amp;aid=506"><img src="https://www.allen.ac.in/imagegallery/gs/handler/getmedia.ashx?moid=7892&amp;dt=3&amp;g=2" class="img-fluid" alt=""></a>',
       
	'<a href="https://www.allen.ac.in/imagegallery/gs/embed.aspx?u=Indore&amp;aid=506"><img src="https://www.allen.ac.in/imagegallery/gs/handler/getmedia.ashx?moid=7892&amp;dt=3&amp;g=2" class="img-fluid" alt=""></a>',
	
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
	
    '<a href="/results/jee-main-2019-result.asp" ><img src="/slider/images/jee-main2019-result.jpg" alt="JEE Main 2019 Result"></a>',
	
]



/*====== Add Slide show only in kochi Main (XI to XII th Pass) =================*/

kochi = [
   
	
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



