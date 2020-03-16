(function () {

    // Whole-script strict mode syntax
    'use strict';

    var borbibi_banner__carousel = $('.borbibi_banner__carousel');
    if (borbibi_banner__carousel.length > 0) {
        borbibi_banner__carousel.slick({
            dots: true,
            dotsClass: 'borbibi_dots',
            infinite: true,
            speed: 4000,
            arrows: false,
            fade: true,
            autoplay: false,
            pauseOnHover: false,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            cssEase: 'ease-in-out',
        });
    }
    new WOW().init();

    var borbibi_highlighted_profile__carousel = $('.borbibi_highlighted_profile__carousel');
    if (borbibi_highlighted_profile__carousel.length > 0) {
        borbibi_highlighted_profile__carousel.slick({
            dots: true,
            dotsClass: 'borbibi_dots',
            infinite: true,
            speed: 500,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    }

    $(window).on('load', function () {

        // isotop initialize
        var grid = $('.borbibi_success_grid');
        if (grid.length > 0) {
            grid.each(function (index, el) {
                $('.borbibi_success_grid').isotope({
                    layoutMode: 'packery',
                    itemSelector: '.borbibi_success_item'

                });

                // $('.pl_portfolio__filter li').on('click', function() {
                //     $(this).addClass('active').siblings().removeClass('active');
                //     var filterValue = $(this).attr('data-filter');
                //     $('.pl_portfolio_item_grid').isotope({
                //         filter: filterValue
                //     });
                // });

            });
        }

    });

    $(window).on('scroll', function () {
        var documentHeight = $(document).height();
        var scrollableHeight = documentHeight / 1.70;
        var Content = $('.borbibi_scrolltop');
        if (Content.length > 0) {
            $('.borbibi_scrolltop').hide();
            if ($(this).scrollTop() > scrollableHeight) {
                $('.borbibi_scrolltop').show();
            } else {
                $('.borbibi_scrolltop').hide()
            }
        }
    });

    $('.borbibi_scrolltop').on('click', function (e) {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });

    $(document).ready(function () {
        jQuery.fn.hasAttr = function (name) {
            return this.attr(name) !== undefined && this.attr(name) !== '';
        };
        function BorBibiSelection(){
            var borbibi_awesome_select, selectlabel;
            borbibi_awesome_select = $('.borbibi_awesome_select');
            if (borbibi_awesome_select.length > 0) {
                borbibi_awesome_select.each(function () {
                    if (jQuery(this).hasAttr('data-select-label')) {
                        selectlabel = jQuery(this).attr('data-select-label');
                    }
                    $(this).select2({
                        placeholder: selectlabel ? selectlabel : '',
                        allowClear: true
                    });
                });
            }
        }
        BorBibiSelection();

        var borbibi_parallax = $('.borbibi_parallax');
        if (borbibi_parallax.length > 0) {
            borbibi_parallax.each(function () {
                if (jQuery(this).hasAttr('data-image-src')) {
                    var imageSrc = jQuery(this).attr('data-image-src');
                    borbibi_parallax.parallax({ imageSrc: imageSrc });
                }
            });
        }

        jQuery(window).trigger('resize').trigger('scroll');
        $(document).on('click', '.borbibi_eye', function () {

            $(this).toggleClass("fa-eye fa-eye-slash");

            var input = $(this).siblings(".borbibi_passfield");
            input.attr('type') === 'password' ? input.attr('type', 'text') : input.attr('type', 'password')
        });

        $('.borbibi_set_bg').each(function () {
            var thesrc = jQuery(this).attr('data-bg');
            if (thesrc) {
                jQuery(this).css("background-image", "url(" + thesrc + ")");
                jQuery(this).css("background-position", "center");
                jQuery(this).css("background-size", "cover");
                jQuery(this).css("background-repeat", "no-repeat");
                jQuery(this).removeAttr('data-bg');
            }
        })

        $(".borbibi_typing").each(function () {
            if ($(this).text()) {
                let bannerText = $(this).text();
                $(this).typed({
                    strings: [bannerText],
                    typeSpeed: 110,
                    backDelay: 500,
                    loop: true,
                });
            }
        });

        // borbibi signup form js


    });

 
    var form = $("#example-advanced-form").show();
    form.steps({
        headerTag: "h3",
        bodyTag: "fieldset",
        transitionEffect: "slideLeft",
        startIndex: 0,
        onStepChanging: function (event, currentIndex, newIndex) { 
            return true
            
        },
        onStepChanged: function (event, currentIndex, priorIndex) { 
            if(priorIndex>currentIndex){
                console.log(currentIndex,priorIndex);
                $("#example-advanced-form .steps").find( "li" ).eq(priorIndex).removeClass( "done" );
                $("#example-advanced-form .steps").find( "li" ).eq(priorIndex).addClass( "disabled" );
            }
         }, 
        onFinished: function (event, currentIndex) { return true },
       onInit: function(event){
            //$("#example-advanced-form .actions").find('li').first().hide();
       }
    });

    $('.borbibi_add_more').each(function(){
        $(this).on('click',function(){
            var borbibi_add_more_content =  $(this).siblings('.borbibi_add_more_content').clone().removeClass('d-none');
            $(this).parents('.borbibi_add_more_content_parent').find('.borbibi_add_more_container').removeClass('d-none');
            
            $(this).parents('.borbibi_add_more_content_parent').find('.borbibi_add_more_container').append(borbibi_add_more_content);
            // $(this).parents('.borbibi_add_more_content_parent').find('select').addClass('.borbibi_awesome_select');
            // $(this).parents('.borbibi_add_more_content_parent').find('select').select2();
           
           
        });
    });
    $(document).on('click','.borbibi_remove_add_more',function(e){
        e.preventDefault(); 
        var parentChild = $(this).parents('.borbibi_add_more_container').find('.borbibi_add_more_content').length,
        parentChild = parentChild -1
        console.log(parentChild);
        if(parentChild < 1){
            $(this).parents('.borbibi_add_more_container').addClass('d-none');
        }
        $(this).parents('.borbibi_add_more_content').remove();
        
    });

})()