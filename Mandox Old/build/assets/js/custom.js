/*
 * Template Name : Traveling Blog
 * Version : 1.0.0
 * Created by : Traveling Blog
 * File: Main jQuery 
 */

/*
====================================
[ jQuery TABLE CONTENT ]
------------------------------------
    1.0  - header fix
    2.0  - tooltip
    3.0  - dropdown menu
    4.0  - home slider
    5.0  - feature blog slider
    6.0  - instagram slider
    8.0  - about slide slider
    9.0  - carousel slider
    10.0 - blog search
    11.0 - masonry grid
    12.0 - scroll top
-------------------------------------
[ END jQuery TABLE CONTENT ]
=====================================
*/
/* =============================================
                Theme Reset jQuery
============================================= */
/* tooltip */
/* header fix */
$(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
        $('.header-main').addClass('fixed-header');
        // $('#change-logo').attr('src','assets/images/logo.png');
    } else {
        $('.header-main').removeClass('fixed-header');
        // $('#change-logo').attr('src','assets/images/logo-white.png');
    }
});
window.onload = function () {
    var themeClr = $.cookie('theme-color');
    if (themeClr !== undefined && themeClr != '') {
        $('body').removeClass(themeClr);
    }
    $('body').removeClass('theme-defalt');
    $('body').addClass(themeClr);
};
$(window).on('load', function () { // makes sure the whole site is loaded 
    // $('.theme-preloader').fadeOut(); // will first fade out the loading animation 
    $('.theme-preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({
        'overflow': 'visible'
    });
});
/* header fix */
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip()
    var load_class = $.cookie('load-class');
    if (load_class == 1) {
        $("body").addClass('shadow-dark');
    }
    $(".switch-button").click(function () {
        $(".switched-styles").addClass("show");
        $(".switch-button").addClass("hide");
    });
    $(".hide-button").click(function () {
        $(".switched-styles").removeClass("show");
        $(".switch-button").removeClass("hide");
    });
    $('.list-unstyled li').click(function () {
        var c = $.cookie('theme-color');
        if (c !== undefined && c != '') {
            $('body').removeClass(c);
        }
        $('body').removeClass('theme-defalt');
        var clr = $(this).attr('class');
        $('body').addClass(clr);
        $.cookie('theme-color', clr);
    });
    $(".single-menu > a").click(function () {
        $(".single-menu .dropdown-box").toggle();
    });
    $(".wallet-close-btn").click(function () {
        $(".wallet-detected-box").toggleClass("wallet-detected-remove");
    });
    if(localStorage.getItem("mytime") == 'theme-rtl'){
        alert('dd')
        $('.promotion-sreact-slider').owlCarousel({
            autoplay: false,
            center: false,
            rtl: true,
            items: 3,
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: false
                }
            }
        });
    }else{
        $('.promotion-sreact-slider').owlCarousel({
            autoplay: false,
            center: false,
            rtl: false,
            items: 3,
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: false
                }
            }
        });
    }
    $('.hot-collection-slider').owlCarousel({
        autoplay: true,
        center: false,
        items: 3,
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        responsive: {
            600: {
                items: 3
            }
        }
    });
    $(".owl-prev").html('<i class="fas fa-long-arrow-alt-left"></i>');
    $(".owl-next").html('<i class="fas fa-long-arrow-alt-right"></i>');
    //  $('a[href^="#"]').on('click', function(e) {
    //     e.preventDefault();

    //     var target = this.hash;
    //     var $target = $(target);

    //     $('html, body').stop().animate({
    //         'scrollTop': $target.offset().top
    //     }, 900, 'swing', function() {
    //         window.location.hash = target;
    //     });
    // });
    $('#btn-check').change(function () {
        if ($(this).is(":checked")) { // check if the radio is checked
            $('.easy-box').show();
            $('.advanced-box').hide();
        } else {
            $('.easy-box').hide();
            $('.advanced-box').show();
        }
    });
    $('#traditional-check').change(function () {
        if ($(this).is(":checked")) { // check if the radio is checked
            $('.traditional-easy-box').show();
            $('.traditional-advanced-box').hide();
        } else {
            $('.traditional-easy-box').hide();
            $('.traditional-advanced-box').show();
        }
    });
    $(".search-btn").click(function () {
        $("body").addClass("search-active");
    });
    $(".search-close").click(function () {
        $("body").removeClass("search-active");
    });

    $('#theme-icon').click(function () {
        $('.theme-preloader').show();
        setTimeout(function () {
            $('.theme-preloader').delay(350).fadeOut('slow');
        }, 1200);
        if ($("body").hasClass("shadow-dark")) {
            $("body").removeClass("shadow-dark");
            $.cookie('load-class', 0);
        } else {
            $("body").addClass("shadow-dark");
            $.cookie('load-class', 1);
        }
    });
    $(".dropdown-select-custom").click(function(){
      $(".dropdown-menu-custom").toggle();
    });
});
$("#site_rtl").click(function () {
    $('#site_rtl').addClass('active');
    $('#site_ltr').removeClass('active');
    $("body").removeClass("theme-rtl");
    $('body').addClass("theme-rtl");
    localStorage.mytime = "theme-rtl";
    location.reload();
});
$(document).ready(function () {
    SetClass();
});
function SetClass() {

    if (localStorage.getItem("mytime") == 'theme-rtl') {
        $("body").addClass(localStorage.getItem("mytime"));
        $('#site_rtl').addClass('active');
        $('#site_ltr').removeClass('active');
        addrtl();
    } else {
        $('#site_rtl').removeClass('active');
        $('#site_ltr').addClass('active');
    }
}
$("#site_ltr").click(function () {
    localStorage.removeItem("mytime");
    $('#site_rtl').removeClass('active');
    $('#site_ltr').addClass('active');
    $("body").removeClass('theme-rtl');
    location.reload();
});
function addrtl() {

    $('.promotion-sreact-slider').owlCarousel({
        rtl: true,
        autoplay: false,
        center: true,
        items: 3,
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });
}


var btn = $('#page-up');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});
jQuery(document).mouseup(function (e) {
    var container = jQuery('.nav-item .dropdown-box');
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        jQuery('.nav-item .dropdown-box').fadeOut();
    }
});
//-----JS for Price Range slider-----