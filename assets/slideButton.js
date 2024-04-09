var slideButton = document.getElementById('bouton-slide');

var homePageBody = document.getElementById('home-page-body');
var aboutPage = document.getElementById('about-page');
var projectPage = document.getElementById('project-page');

var projectContainer = document.getElementById('project-container');

document.addEventListener('DOMContentLoaded', function() {
    slideButton.addEventListener('click', function() {
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

document.addEventListener('DOMContentLoaded', function() {
    if (projectContainer) {
        projectContainer.addEventListener('click', function(slide) {
            if (slide.target && slide.target.matches('#bouton-slide')) {
                aboutPage.classList.add('slide-up2');

                projectPage.classList.remove('hidden');

                setTimeout(function() {
                    projectPage.classList.add('slide-up2');
                    document.title = 'Portefolio DESTEPHEN - Mes projets';
                }, 3);
            }
        });
    }
});