var aboutLink = document.querySelector('.about-link');
var homeLink = document.querySelector('.home-link');

if (aboutLink) {
    aboutLink.addEventListener('click', function(about) {
        about.preventDefault();
        var homePageBody = document.getElementById('home-page-body');
        var aboutPage = document.getElementById('about-page');
        homePageBody.classList.add('slide-up');
        aboutPage.classList.remove('hidden');
        setTimeout(function() {
            aboutPage.classList.add('slide-up');
            document.title = 'Portefolio DESTEPHEN - A propos';
        }, 3);
    });
}

if (homeLink) {
    homeLink.addEventListener('click', function(home) {
        home.preventDefault();
        var homePageBody = document.getElementById('home-page-body');
        var aboutPage = document.getElementById('about-page');
        aboutPage.classList.add('slide-down');
        // aboutPage.classList.add('hidden');
        homePageBody.classList.remove('hidden');
        setTimeout(function() {
            homePageBody.classList.add('slide-down');
            document.title = 'Portefolio DESTEPHEN - Home';
        }, 3);
    });
}