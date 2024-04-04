document.addEventListener('DOMContentLoaded', function() {
    var slideButton = document.getElementById('bouton-slide');

    slideButton.addEventListener('click', function() {
        var homePageBody = document.getElementById('home-page-body');
        var aboutPage = document.getElementById('about-page');

        isTransitioning = true;
        
        homePageBody.classList.add('slide-up');
        homePageBody.classList.remove('slide-down');

        aboutPage.classList.remove('slide-down');
        aboutPage.classList.remove('hidden');

        navbar.classList.add('slideButton-clicked');
        
        setTimeout(function() {
            aboutPage.classList.add('slide-up');
            document.title = 'Portefolio DESTEPHEN - A propos';
            isTransitioning = false;
        }, 3);
    });
});