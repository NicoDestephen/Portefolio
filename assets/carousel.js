document.addEventListener('DOMContentLoaded', function () {
    const projectCarousel = new Splide('#project-carousel', {
        type       : 'slide',
        rewind     : true,
        pagination : true,
        arrows     : true,
        gap        : '0rem',
        autoplay   : false,
        interval   : 3000,
        drag       : true,
        width      : '100%',
        perPage    : 1,
        perMove    : 1,
    }).mount();

    const thumbnails = new Splide('#thumbnail-carousel', {
        type       : 'carousel',
        rewind     : true,
        pagination : false,
        arrows     : true,
        gap        : 0,
        autoplay   : true,
        interval   : 3000,
        drag       : false,
        width      : '75%',
        perPage    : 5,
        perMove    : 1,
    }).mount();
});
