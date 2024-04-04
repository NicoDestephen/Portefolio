var aboutLink = document.querySelector('.about-link');
var homeLink = document.querySelector('.home-link');
var homePageBody = document.getElementById('home-page-body');
var aboutPage = document.getElementById('about-page');

if (homeLink) {
    homeLink.addEventListener('click', function(home) {
        home.preventDefault();

        navbar.classList.remove('slideButton-clicked');
        navbar.classList.remove('aboutLink-clicked');

        aboutPage.classList.add('slide-down');
        homePageBody.classList.remove('hidden');
        
        setTimeout(function() {
            homePageBody.classList.add('slide-down');
            aboutPage.classList.remove('slide-up');
            document.title = 'Portefolio DESTEPHEN - Home';

            setTimeout(function() {
            aboutPage.classList.add('hidden'); 
            }, 1000);

        }, 3);
    });
}

if (aboutLink) {
    aboutLink.addEventListener('click', function(about) {
        about.preventDefault();

        homePageBody.classList.add('slide-up');
        aboutPage.classList.remove('slide-down');
        aboutPage.classList.remove('hidden');
        
        navbar.classList.add('aboutLink-clicked');
        
        setTimeout(function() {
            aboutPage.classList.add('slide-up');
            homePageBody.classList.remove('slide-down');
            document.title = 'Portefolio DESTEPHEN - A propos';
        }, 3);
    });
}