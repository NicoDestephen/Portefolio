document.addEventListener('DOMContentLoaded', function() {
    var slideButton = document.getElementById('bouton-slide');
    var pageTitle = document.title;

    slideButton.addEventListener('click', function() {
        var homePageBody = document.getElementById('home-page-body');
        var aboutPage = document.getElementById('about-page');
        homePageBody.classList.add('slide-up');
        aboutPage.classList.remove('hidden');
        setTimeout(function() {
            aboutPage.classList.add('slide-up');
            document.title = 'Portefolio DESTEPHEN - A propos';
        }, 3);
    });
});