document.addEventListener("DOMContentLoaded", function () {
    $(".carousel").slick({
        arrows: true,
        infinite: true,
        dots: false,
        slidesToShow: "1.7",
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    $(".carousel").slickLightbox({
        itemSelector: ".slick-slide img",
        src: "src",
        navigateByKeyboard: true,
        background: "rgba(0,0,0,0.8)",
    });
});
