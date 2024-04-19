var slideButton = document.getElementById('bouton-slide');

var homePageBody = document.getElementById('home-page-body');
var aboutPage = document.getElementById('about-page');
var projectPage = document.getElementById('project-page');

var projectContainer = document.getElementById('project-container');
var contactContainer = document.getElementById('contact-field');

var content = document.getElementById('content');

document.addEventListener('DOMContentLoaded', function() {
    slideButton.addEventListener('click', function() {
        isTransitioning = true;
        content.classList.add('slide-up-home-to-about');
        content.classList.remove('slide-down-about-to-home');
        setTimeout(function() {
            document.title = 'Portefolio DESTEPHEN - A propos';
            isTransitioning = false;
        }, 3);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    if (projectContainer) {
        projectContainer.addEventListener('click', function(slide) {
            if (slide.target && slide.target.matches('#bouton-slide')) {
                content.classList.add('slide-down-contact-to-project');
                content.classList.remove('slide-down-contact-to-about');
                document.title = 'Portefolio DESTEPHEN - Mes projets';
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if (contactContainer) {
        contactContainer.addEventListener('click', function(slide) {
            if (slide.target && slide.target.matches('#bouton-slide')) {
                content.classList.add('slide-up-home-to-contact');
                content.classList.remove('slide-down-contact-to-project');
                document.title = 'Portefolio DESTEPHEN - Contact';
            }
        });
    }
});