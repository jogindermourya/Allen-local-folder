<!DOCTYPE html>
<!-- saved from url=(0050)https://www.allen.ac.in/appsmvc2021/appforms/Login -->
<html style=""
   class=" js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Login - ALLEN Career Institute</title>
      <link rel="shortcut icon" href="/appsmvc2021/favicon.ico" />
      <link href="https://www.allen.ac.in//appsmvc2021/Content/assets/plugins/font-awesome/css/font-awesome.min.css"
         rel="stylesheet" />
      <link href="https://www.allen.ac.in//appsmvc2021/Content/assets/css/style.css" rel="stylesheet" />
      <link href="https://www.allen.ac.in//appsmvc2021/Content/assets/plugins/scrollbar/css/jquery.mCustomScrollbar.css"
         rel="stylesheet" />
      <link rel="stylesheet"
         href="https://www.allen.ac.in//appsmvc2021/Content/assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css">
      <link rel="stylesheet"
         href="https://www.allen.ac.in//appsmvc2021/Content/assets/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css">
      <link type="text/css" rel="stylesheet" href="https://www.allen.ac.in/assets/css/footers/footer-v3.css" />
      <link href="https://www.allen.ac.in//appsmvc2021/Content/assets/css/app.css" rel="stylesheet" />
      <link href="https://www.allen.ac.in//appsmvc2021/Content/assets/plugins/bootstrap/css/bootstrap.min.css"
         rel="stylesheet" />
      <!-- CSS Implementing Plugins -->
      <link rel="stylesheet" href="https://www.allen.ac.in//appsmvc2021/Content/assets/plugins/animate.css">
      <link rel="stylesheet" href="https://www.allen.ac.in//appsmvc2021/Content/assets/plugins/line-icons/line-icons.css">
      <link rel="stylesheet"
         href="https://www.allen.ac.in//appsmvc2021/Content/assets/plugins/ladda-buttons/css/custom-lada-btn.css">
      <link rel="stylesheet"
         href="https://www.allen.ac.in//appsmvc2021/Content/assets/plugins/hover-effects/css/custom-hover-effects.css">
      <link href="https://www.allen.ac.in//appsmvc2021/Content/assets/plugins/ladda-buttons/css/ladda.min.css"
         rel="stylesheet" />
      <link rel="stylesheet" href="https://www.allen.ac.in//appsmvc2021/Content/assets/css/theme-colors/default.css"
         id="style_color">
      <link rel="stylesheet" href="https://www.allen.ac.in//appsmvc2021/Content/assets/css/theme-skins/dark.css">
      <link rel="stylesheet"
         href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600&amp;subset=cyrillic,latin">
      <script src="https://www.allen.ac.in//appsmvc2021/Scripts/jquery-1.10.2.js"></script>
      <script src="https://www.allen.ac.in//appsmvc2021/Scripts/jquery.unobtrusive-ajax.js"></script>
      <script src="https://www.allen.ac.in//appsmvc2021/Scripts/jquery-ui.js"></script>
      <link href="https://www.allen.ac.in//appsmvc2021/Content/jquery-ui.css" rel="stylesheet" />
      <link href="https://www.allen.ac.in//appsmvc2021/Content/bootstrap.css" rel="stylesheet" />
      <link href="https://www.allen.ac.in//appsmvc2021/Content/site.css" rel="stylesheet" />
      <link href="https://www.allen.ac.in//appsmvc2021/Content/style.css" rel="stylesheet" />
      <link href="https://www.allen.ac.in//appsmvc2021/Content/menu.css" rel="stylesheet" />
      <link href="https://www.allen.ac.in//appsmvc2021/Content/messagebox.css" rel="stylesheet" />
      <script src="https://www.allen.ac.in//appsmvc2021/Scripts/modernizr-2.6.2.js"></script>
      <script src="https://www.allen.ac.in//appsmvc2021/Scripts/mb.min.js"></script>
      <link href="https://www.allen.ac.in//appsmvc2021/Content/assets/css/pages/profile.css" rel="stylesheet" />
      <link href="https://www.allen.ac.in//appsmvc2021/Content/assets/css/pages/shortcode_timeline2.css"
         rel="stylesheet" />
      <style>
         /* centered columns styles */
         .row-centered {
         text-align: center;
         }
         .col-centered {
         display: inline-block;
         float: none;
         /* reset the text-align */
         text-align: left;
         /* inline-block space fix */
         margin-right: -4px;
         }
         col-fixed {
         /* custom width */
         width: 320px;
         }
         .col-min {
         /* custom min width */
         min-width: 320px;
         }
         .col-max {
         /* custom max width */
         max-width: 420px;
         }
         .spinner {
         display: inline-block;
         opacity: 0;
         width: 0;
         -webkit-transition: opacity 0.25s, width 0.25s;
         -moz-transition: opacity 0.25s, width 0.25s;
         -o-transition: opacity 0.25s, width 0.25s;
         transition: opacity 0.25s, width 0.25s;
         }
         .has-spinner.active {
         cursor: progress;
         }
         .has-spinner.active .spinner {
         opacity: 1;
         width: auto;
         /* This doesn't work, just fix for unkown width elements */
         }
         .has-spinner.btn-mini.active .spinner {
         width: 10px;
         }
         .has-spinner.btn-small.active .spinner {
         width: 13px;
         }
         .has-spinner.btn.active .spinner {
         width: 16px;
         }
         .has-spinner.btn-large.active .spinner {
         width: 19px;
         }
         .loader {
         position: fixed;
         left: 0px;
         top: 0px;
         width: 100%;
         height: 100%;
         z-index: 9999;
         background: url('../Content/images/Preloader_21.gif') 50% 50% no-repeat rgb(249, 249, 249);
         }
      </style>
      <!--[if lt IE 9]>
      <script src="assets/plugins/respond.js"></script>
      <script src="assets/plugins/html5shiv.js"></script>
      <script src="assets/plugins/placeholder-IE-fixes.js"></script>
      <![endif]-->
      <script type="text/javascript">
         $(function () {
             $("[data-role=submit]").click(function () {
                 $(this).closest("form").submit();
             });
         });
         
         
         $('.btn').on('click', function () {
             var $this = $(this);
             $this.button('loading');
             setTimeout(function () {
                 $this.button('reset');
             }, 8000);
         });
         
         
         $(function () {
             $('a, button').click(function () {
                 $(this).toggleClass('active');
             });
         });
         
         
         $(document).on('invalid-form.validate', 'form', function () {
             var button = $(this).find('input[type="submit"]');
             setTimeout(function () {
                 button.removeAttr('disabled');
             }, 1);
         });
         $(document).on('submit', 'form', function () {
             var button = $(this).find('input[type="submit"]');
             setTimeout(function () {
                 button.attr('disabled', 'disabled');
             }, 0);
         
         
             $(this).find('input[type="submit"]').text('Wait...');
             $(this).find('input[type="submit"]').css("cursor", "wait");
         
         });
      </script>
      <script type="text/javascript">
         $(document).ready(function () {
             $("form[action*='New/']").submit(function () {
                 var firstError = $(this).children(":first has('.input-validation-error')");
         
                 if (firstError != null) {
                     firstError.focus();
         
                     return false; // no form posting
                 }
             });
         });
      </script>
      <script type="text/javascript" language="javascript">
         var isIE = document.all ? true : false;
         var isNS = document.layers ? true : false;
         function onlyDigits(e) {
             var key = (isIE) ? window.event.keyCode : e.which;
             var obj = (isIE) ? event.srcElement : e.target;
             var isNum = (key > 47 && key < 58) ? true : false;
         
             if (key < 32)
                 return true;
             return (isNum);
         }
      </script>
      <style type="text/css">
         .capitalize {
         text-transform: capitalize;
         }
      </style>
      <script type="text/javascript" language="javascript">
         $(function () {
             $('a.wait').on("click", function (e) {
                 $("a.wait").text('Wait...');
                 $('a.wait').css("cursor", "wait");
                 e.preventDefault();
             });
         });
         
         
         
         
         
      </script>
      <script src="https://www.allen.ac.in//appsmvc2021/Scripts/jquery-ui.js.download"></script>
      <script type="text/javascript">
         var $j = jQuery.noConflict();
         function EventCall() {
             $j(".datepicker").datepicker({
                 dateFormat: 'dd/mm/yy',
                 changeMonth: true,
                 changeYear: true,
                 minDate: "-25Y", maxDate: "-5Y",
                 yearRange: "-25:-5"
             });
         }
         
         window.addEventListener("load", function (event) {
             EventCall();
         }, false);
      </script>
      <script src="https://www.allen.ac.in//appsmvc2021/Scripts//bootbox.min.js.download"></script>
      <script src="https://www.allen.ac.in//appsmvc2021/Scripts//Jquery.js.download"></script>
      <script type="text/javascript">
         $(window).load(function () {
             $(".loader").fadeOut("slow");
         })
      </script>
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async="" src="./index_files/js"></script>
      <script>
         window.dataLayer = window.dataLayer || [];
         function gtag() { dataLayer.push(arguments); }
         gtag('js', new Date());
         
         gtag('config', 'UA-8355855-1');
      </script>
      <!-- Global site tag (gtag.js) - Google Ads: 1004862963 -->
      <script async="" src="./index_files/js(1)"></script>
      <script>
         window.dataLayer = window.dataLayer || [];
         function gtag() { dataLayer.push(arguments); }
         gtag('js', new Date());
         
         gtag('config', 'AW-1004862963');
      </script>
      <!-- Facebook Pixel Code -->
      <script>
         !function (f, b, e, v, n, t, s) {
             if (f.fbq) return; n = f.fbq = function () {
                 n.callMethod ?
                     n.callMethod.apply(n, arguments) : n.queue.push(arguments)
             };
             if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
             n.queue = []; t = b.createElement(e); t.async = !0;
             t.src = v; s = b.getElementsByTagName(e)[0];
             s.parentNode.insertBefore(t, s)
         }(window, document, 'script',
             'https://connect.facebook.net/en_US/fbevents.js');
         fbq('init', '606462622817108');
         fbq('track', 'PageView');
      </script>
      <noscript>
         <img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=606462622817108&ev=PageView&noscript=1" />
      </noscript>
      <!-- End Facebook Pixel Code -->
      <script>
         (function () {
             var _fbq = window._fbq || (window._fbq = []);
             if (!_fbq.loaded) {
                 var fbds = document.createElement('script');
                 fbds.async = true;
                 fbds.src = '//connect.facebook.net/en_US/fbds.js';
                 var s = document.getElementsByTagName('script')[0];
                 s.parentNode.insertBefore(fbds, s);
                 _fbq.loaded = true;
             }
         })();
         window._fbq = window._fbq || [];
         window._fbq.push(['track', '6024412174413', { 'value': '0.00', 'currency': 'USD' }]);
      </script>
      <noscript>
         <img height="1" width="1" alt="" style="display: none"
            src="https://www.facebook.com/tr?ev=6024412174413&amp;cd[value]=0.00&amp;cd[currency]=USD&amp;noscript=1" />
      </noscript>
      <noscript>
         <img height="1" width="1" alt="" style="display: none"
            src="https://www.facebook.com/tr?id=606462622817108&amp;ev=PixelInitialized" />
      </noscript>
      <script src="./index_files/f(1).txt"></script>



      <!-- My custome css for header and footer-->
      <link rel="stylesheet" href="/appfolder/css/application-css.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">



   </head>

   <body>
    <div class="navbar navbar-inverse navbar-fixed-top appheader">
        <div class="container">
            <div class="navbar-header">
                <a href="/">
                    <img alt="ALLEN Career Institute, Kota" src="http://192.168.222.233:8093/assets/img/logo.png">
                </a>
         </div>
           
        </div>
    </div>