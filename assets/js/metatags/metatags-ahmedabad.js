

//Meta tags for all pages

// "use strict"; 

$(document).ready(function () {
    loc_url = window.location.pathname;
    switch (loc_url) {       
			case "/about/about-allen.asp":
	            TITLE = '';
	            META_DESC = '';
	            META_KEYWORD = '';
	            META_AUTHOR = '';
	            META_OGTITLE = '';
				META_OGDESC = '';
				META_OGURL = '';
                META_OGIMG = '';
                META_CANONICAL = 'https://allen.ac.in/about/about-allen.asp';	
               		
            break;
		
        default :
            TITLE = 'ALLEN Career Institute, Kota: Best Coaching for IIT-JEE, JEE Main & Advanced, AIPMT (NEET-UG), AIIMS, NTSE';
            META_DESC = 'Allen Description';
            META_KEYWORD = 'Allen Keyword ';
            META_AUTHOR = 'Allen Author';
            META_OGTITLE = 'OG Title';
			META_OGDESC = 'OG Desscription';
			META_OGURL = 'OG https://www.allen.ac.in';
            META_OGIMG = 'OG images';
			META_CANONICAL = 'https://www.allen.ac.in';	
			
			// META_T_SUMMAY = 'META_T_SUMMAY';
			// META_T_URL = 'META_T_SUMMAY';
			// META_T_CREATOR = 'META_T_SUMMAY';
			// META_T_TITLE = 'META_T_SUMMAY';




            break;
    }
			document.querySelector('title').innerHTML = TITLE;
			document.querySelector('meta[name="description"]').setAttribute("content", META_DESC);
			document.querySelector('meta[name="keywords"]').setAttribute("content", META_KEYWORD);
			document.querySelector('meta[name="author"]').setAttribute("content", META_AUTHOR);
			document.querySelector('link[rel="canonical"]').setAttribute("href", META_CANONICAL);
			document.querySelector('meta[property="og:title"]').setAttribute("content", META_OGTITLE);
			document.querySelector('meta[property="og:description"]').setAttribute("content", META_OGDESC);
			document.querySelector('meta[property="og:url"]').setAttribute("content", META_OGURL);
			document.querySelector('meta[property="og:image"]').setAttribute("content", META_OGIMG);

			// document.querySelector('meta[name="twitter:card"]').setAttribute("content", META_T_SUMMEAY);
			// document.querySelector('meta[name="twitter:url"]').setAttribute("content", META_T_URL);
			// document.querySelector('meta[name="twitter:creator"]').setAttribute("content", META_T_CREATOR);
			// document.querySelector('meta[name="twitter:title"]').setAttribute("content", META_T_TITLE);
});



