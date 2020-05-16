$(document).ready(function () {
    $('.header__carousel').slick({
        dots: true,
        speed: 3000,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    autoplay: true,
                }
            }]
    });
    $('.news__carousel').slick({
        dots: true,
        speed: 1500,
        slidesToShow: 3,
        arrows: true,
        autoplay: true,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        prevArrow: "<i class='fas fa-angle-left prev' alt='1'></i>",
        nextArrow: "<i class='fas fa-angle-right next' alt='2'></i>",
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    autoplay: true,
                }
            },
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    adaptiveHeight: true
                }
            }]
    });

    $('.gallery__more-btn').click(function () {
        $('.gallery__more').slideToggle();
    });

});