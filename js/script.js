$(document).ready(function() {
    $('.slider').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "60px",
        dots: true,

        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]


    });

    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(res =>console.log(res))
});