document.addEventListener('DOMContentLoaded', function () {
    const projectConfig = {
        type       : 'slide',
        rewind     : true,
        pagination : true,
        arrows     : true,
        gap        : 0,
        autoplay   : false,
        interval   : 3000,
        drag       : true,
        width      : '100%',
        perPage    : 1,
        perMove    : 1,
    };

    const projectCarousels = document.querySelectorAll('.splide#project-carousel');

    projectCarousels.forEach(function(projectCarousel) {
        new Splide(projectCarousel, projectConfig).mount();
        
        const thumbnails = projectCarousel.querySelectorAll('.thumbnail-carousel');

        thumbnails.forEach(function(thumbnailCarousel) {
            const thumbnailConfig = {
                type       : 'carousel',
                rewind     : true,
                pagination : false,
                arrows     : true,
                gap        : 5,
                autoplay   : false,
                drag       : false,
                width      : '100%',
                perPage    : 5,
                perMove    : 1,
            };

            new Splide(thumbnailCarousel, thumbnailConfig).mount();
        });
    });
});
