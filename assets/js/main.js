
(function ($) {
    "use strict";

    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/
    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll) {
                    $(".header_area").addClass("navbar_fixed");


                } else {
                    $(".header_area").removeClass("navbar_fixed");


                }
            });
        };
    };
    navbarFixed();


    function offcanvasActivator() {
        if ($('.bar_menu').length) {
            $('.bar_menu').on('click', function () {
                $('#menu').toggleClass('show-menu')
            });
            $('.close_icon').on('click', function () {
                $('#menu').removeClass('show-menu')
            })
        }
    }
    offcanvasActivator();

    $('.offcanfas_menu .dropdown').on('show.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(400);
    });
    $('.offcanfas_menu .dropdown').on('hide.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(500);
    });



	

    /*------------------------------------------------------------------------------- 
    onload Notification banner
    -----------------------------------------------------------------------------*/
    $(window).on('load', function () {
        // $('#notificationbanner').modal('show');
        $('#answerkeyspopup').modal('show');
    });

       /*------------------------------------------------------------------------------- 
  

    /*------------------------------------------------------------------------------- 
       Top of the page scrolling button
       -----------------------------------------------------------------------------*/
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        //    $('#back-to-top').tooltip('show');

    });


    /*-------------------------------------------------------------------------------
     mCustomScrollbar js
   -------------------------------------------------------------------------------*/
    $(window).on("load", function () {
        if ($('.mega_menu_two .scroll').length) {
            $(".mega_menu_two .scroll").mCustomScrollbar({
                mouseWheelPixels: 50,
                scrollInertia: 0,
            });
        }
    });

    /*-------------------------------------------------------------------------------
	  WOW js
	-------------------------------------------------------------------------------*/
    function wowAnimation() {
        new WOW({
            offset: 100,
            mobile: true
        }).init()
    }
    wowAnimation()


    // Course slider
    function courseSlider() {
        var courses_slider = $(".courses_carousel");
        if (courses_slider.length) {
            courses_slider.owlCarousel({
                loop: false,
                margin: 30,
                items: 4,
                autoplay: false,
                smartSpeed: 500,
                responsiveClass: true,
                nav: true,
                dots: false,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right "></i>'],
                responsive: {
                    0: {
                        items: 1,
                        stagePadding: 0,

                    },

                    768: {
                        items: 3,
                        stagePadding: 0,
                        margin: 15

                    },
                    992: {
                        items: 4,
                        stagePadding: 0,
                    },
                    1200: {
                        items: 4,
                    }
                },
            })
        }
    }
    courseSlider();


    /*---------------------------------------------------------------------------------- 
    App Show slider---------------------------------------------------------------------*/
    function appshowSlider() {
        var appshow_slider = $(".appshow_carousel");
        if (appshow_slider.length) {
            appshow_slider.owlCarousel({
                loop: true,
                margin: 30,
                items: 1,
                autoplay: false,
                smartSpeed: 1000,
                responsiveClass: true,
                nav: true,
                dots: false,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right "></i>'],
                responsive: {
                    0: {
                        items: 1,
                        stagePadding: 0,
                    },
                    578: {
                        items: 1,
                        stagePadding: 0,
                    },
                    992: {
                        items: 1,
                        stagePadding: 0,
                    },
                    1200: {
                        items: 1,
                    }
                },
            })
        }
    }
    appshowSlider();

    // Home slider

    function appScreenshotHomeslider() {
        var app_screenshotSlider = $(".homeslider");
        if (app_screenshotSlider.length) {
            app_screenshotSlider.owlCarousel({
                loop: true,
                margin: 10,
                items: 1,
                autoplay: true,
                slidesToScroll: 0,
                smartSpeed: 450,
                responsiveClass: true,
                nav: false,
                dots: true,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    650: {
                        items: 1,
                    },
                    776: {
                        items: 1,
                    },
                    1199: {
                        items: 1,
                    },
                },
            })
        }
    }


    appScreenshotHomeslider();


    // Gateway Home slider

    function appScreenshotGatewaySlider() {
        var app_screenshotGatewaySlider = $(".gatewaySlider");
        if (app_screenshotGatewaySlider.length) {
            app_screenshotGatewaySlider.owlCarousel({
                loop: true,
                // rtl:true,
                margin: 10,
                items: 3,
                autoplay: true,
                smartSpeed: 450,
                responsiveClass: true,
                nav: true,
                dots: false,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    650: {
                        items: 1,
                        nav: false

                    },
                    776: {
                        items: 3,
                    },
                    1199: {
                        items: 3,
                    },
                },
            })
        }
    }


    appScreenshotGatewaySlider();


    // result top slider

    function appScreenshotTopperslider() {
        var app_screenshotSlider = $(".topperslider");
        if (app_screenshotSlider.length) {
            app_screenshotSlider.owlCarousel({
                loop: true,
                margin: 10,
                items: 1,
                autoplay: true,
                slidesToScroll: 0,
                smartSpeed: 450,
                responsiveClass: true,
                nav: false,
                dots: true,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    650: {
                        items: 1,
                    },
                    776: {
                        items: 1,
                    },
                    1199: {
                        items: 1,
                    },
                },
            })
        }
    }


    appScreenshotTopperslider();



    /*---------------------------------------------------------------------------------- 
     event slider----------------------------------------------------------------*/
    function eventSlider() {
        var event_slider = $(".event_carousel");
        if (event_slider.length) {
            event_slider.owlCarousel({
                loop: false,
                margin: 5,
                items: 4,
                autoplay: false,
                smartSpeed: 1000,
                responsiveClass: true,
                nav: false,
                dots: true,
                responsive: {
                    0: {
                        items: 1,
                        stagePadding: 0,
                    },
                    578: {
                        items: 2,
                        stagePadding: 0,
                    },
                    992: {
                        items: 3,
                        stagePadding: 0,
                    },
                    1200: {
                        items: 4,
                    }
                },
            })
        }
    }
    eventSlider();


    /*-------------------------- ASWS Testimonials silder-------------------------*/

    function app_testimonialSlider() {
        var app_testimonialSlider = $(".app_testimonial_slider");
        if (app_testimonialSlider.length) {
            app_testimonialSlider.owlCarousel({
                loop: true,
                margin: 10,
                items: 1,
                autoplay: true,
                smartSpeed: 2000,
                nav: false,
                dot: true
               
            })
        }
    }
    app_testimonialSlider();



    /*-------------------------------------------------------------------------------
	  selectpickers js
	-------------------------------------------------------------------------------*/
    if ($('.selectpickers').length > 0) {
        $('.selectpickers').niceSelect();
    }






    /*-------------------------------------------------------------------------------
	  preloader js
	-------------------------------------------------------------------------------*/
    function loader() {
        $(window).on('load', function () {
            $('#ctn-preloader').addClass('loaded');
            // Una vez haya terminado el preloader aparezca el scroll

            if ($('#ctn-preloader').hasClass('loaded')) {
                // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
                $('#preloader').delay(900).queue(function () {
                    $(this).remove();
                });
            }
        });
    }
    loader();

    /*-------------------------------------------------------------------------------
	  tooltip js
	-------------------------------------------------------------------------------*/
    if ($('[data-toggle="tooltip"]').length) {
        $('[data-toggle="tooltip"]').tooltip()
    }

    /*-------------------------------------------------------------------------------
	  search js
	-------------------------------------------------------------------------------*/
    $('.search-btn').on('click', function () {
        $('body').addClass('open');
        setTimeout(function () {
            $('.search-input').focus();
        }, 500);
        return false;
    });
    $('.close_icon').on('click', function () {
        $('body').removeClass('open');
        return false;
    });

    /*-------------------------------------------------------------------------------
	  develor tab js
	-------------------------------------------------------------------------------*/
    if ($('.develor_tab li a').length > 0) {
        $(".develor_tab li a").click(function () {
            var tab_id = $(this).attr("data-tab");
            $(".tab_img").removeClass("active");
            $("#" + tab_id).addClass("active");
        });
    }

    /*-------------------------------------------------------------------------------
	  alert js
	-------------------------------------------------------------------------------*/
    $('.alert_close').on('click', function (e) {
        $(this).parent().hide();
    });


    /*-------------------------------------------------------------------------------
	  active dropdown
	-------------------------------------------------------------------------------*/
    function active_dropdown() {
        if ($(window).width() < 992) {
            $('.menu li.submenu > a').on('click', function (event) {
                event.preventDefault()
                $(this).parent().find('ul').first().toggle(700);
                $(this).parent().siblings().find('ul').hide(700);
            });
        }
    }
    active_dropdown();


    /*-------------------------------------------------------------------------------
	  hamberger menu
	-------------------------------------------------------------------------------*/
    function hamberger_menu() {
        if ($('.burger_menu').length) {
            $('.burger_menu').on('click', function () {
                $(this).toggleClass('open')
                $('body').removeClass('menu-is-closed').addClass('menu-is-opened');
            });
            $('.close, .click-capture').on('click', function () {
                $('body').removeClass('menu-is-opened').addClass('menu-is-closed');
            });
        }
    }
    hamberger_menu();

    /*-------------------------------------------------------------------------------
	  Full screen sections 
	-------------------------------------------------------------------------------*/
    if ($('.pagepiling').length > 0) {
        $('.pagepiling').pagepiling({
            scrollingSpeed: 280,
            loopBottom: true,
            navigation: {
                'position': 'right_position',
            },
        });
    };


})(jQuery)


//  Counter site 
$('.counter-count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


//CENTERS SEARCH OPTION

function search_animal() {
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('centers');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "block";
        }
    }
}


// LightBox
$(document).ready(function () {
    $('#lightgallery').lightGallery();
    $('.lightgallery').lightGallery();

});

/*------------------------------------------------------------------------------- 
  Data Table for ASAT
   -----------------------------------------------------------------------------*/
$(document).ready(function () {
    $('#datatable').DataTable();
    $('#datatable-info-centers').DataTable();
});

/*------------------------------------------------------------------------------- 
  Menu Active
   -----------------------------------------------------------------------------*/
jQuery(document).ready(function ($) {
    $('a[href="' + this.location.pathname + '"]').parents('li,ul').addClass('active');
    $('ul.navbar-nav li a[href="' + this.location.pathname + '"]').parent().siblings().removeClass('active').end().addClass('active', 'dropdown-menu');
});


/*------------------------------------------------------------------------------- 
   Toast 
   -----------------------------------------------------------------------------*/
$(document).ready(function () {
    $('.trm, .close').click(function () {
        $(".toast").toggleClass("toast-show");
    });

});


/*------------------------------------------------------------------------------- 
   form validation 
   -----------------------------------------------------------------------------*/
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();



/*----courseNav fixed class add with scrolling function---------*/

function navbarcrsFixed() {
    if ($('.menu_course_wrp').length) {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 496) {
                $(".menu_course_wrp").addClass("fixed");
            } else {
                $(".menu_course_wrp").removeClass("fixed");
            }
        });
    };
};
navbarcrsFixed();

$(document).ready(function () {
    $('#navscrolling').onePageNav({
        currentClass: 'active',
        changeHash: true,
        scrollSpeed: 800,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {
            //Hack so you can click other menu items after the initial click
            // $('.bricurm').css({'margin-top': '20px'}); 
  
        },
        end: function () {
            // $('.bricurm').css({'margin-top': '0px'}); 
        },
        scrollChange: function ($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });
});

/*---------------------------------------END----------------------------------------*/