var homeLink = document.querySelector('.home-link');
var aboutLink = document.querySelector('.about-link');
var projectLink = document.querySelector('.project-link');

var homePageBody = document.getElementById('home-page-body');
var aboutPage = document.getElementById('about-page');
var projectPage = document.getElementById('project-page');

var homeClicked = false;
var aboutClicked = false;
var projectClicked = false;

function homeResetCSS() {
    navbar.classList.remove('homeLink-clicked');
    navbar.classList.remove('aboutLink-clicked');
    navbar.classList.remove('projectLink-clicked');

    homePageBody.classList.remove('hidden');
    homePageBody.classList.remove('slide-down');
    homePageBody.classList.remove('slide-up');

    aboutPage.classList.remove('hidden');
    aboutPage.classList.remove('slide-down');
    aboutPage.classList.remove('slide-down2');
    aboutPage.classList.remove('slide-up');
    aboutPage.classList.remove('slide-up2');


    projectPage.classList.remove('hidden');
    projectPage.classList.remove('slide-down');
    projectPage.classList.remove('slide-down2');
    projectPage.classList.remove('slide-down3');
    projectPage.classList.remove('slide-up');
    projectPage.classList.remove('slide-up2');
}

function aboutResetCSS() {
    navbar.classList.remove('homeLink-clicked');
    navbar.classList.remove('aboutLink-clicked');
    navbar.classList.remove('projectLink-clicked');

    homePageBody.classList.remove('hidden');
    homePageBody.classList.remove('slide-down');
    aboutPage.classList.remove('slide-down2');
    homePageBody.classList.remove('slide-up');
    aboutPage.classList.remove('slide-up2');

    aboutPage.classList.remove('hidden');
    aboutPage.classList.remove('slide-down');
    aboutPage.classList.remove('slide-up');

    projectPage.classList.add('hidden');
    projectPage.classList.remove('slide-down');
    projectPage.classList.remove('slide-down2');
    projectPage.classList.remove('slide-down3');
    projectPage.classList.remove('slide-up');
    projectPage.classList.remove('slide-up2');
}

function projectResetCSS() {
    navbar.classList.remove('homeLink-clicked');
    navbar.classList.remove('aboutLink-clicked');
    navbar.classList.remove('projectLink-clicked');

    homePageBody.classList.remove('hidden');
    homePageBody.classList.remove('slide-down');
    homePageBody.classList.remove('slide-up');

    aboutPage.classList.add('hidden');
    aboutPage.classList.remove('slide-down');
    aboutPage.classList.remove('slide-down2');
    aboutPage.classList.remove('slide-up');
    aboutPage.classList.remove('slide-up2');

    projectPage.classList.remove('hidden');
    projectPage.classList.remove('slide-down');
    projectPage.classList.remove('slide-down2');
    projectPage.classList.remove('slide-down3');
    projectPage.classList.remove('slide-up');
    projectPage.classList.remove('slide-up2');
}

// if (homeLink) {
//     homeLink.addEventListener('click', function(home) {
//         home.preventDefault();

//         homeResetCSS();

//         if (aboutClicked) {
//             console.log('je clique sur home apres avoir cliqué sur about');
//             homePageBody.classList.remove('hidden');
//             homePageBody.classList.add('slide-down');
//             aboutPage.classList.add('slide-down');
            
//             aboutClicked = false;

//             setTimeout(function() {
//                 document.title = 'Portefolio DESTEPHEN - Home';
//                 setTimeout(function() {
//                     aboutPage.classList.add('hidden');
//                         setTimeout(function() {
//                             homePageBody.classList.remove('slide-down');
//                             aboutPage.classList.remove('slide-down');
//                         }, 1000);                
//                 }, 1000);                         
//             }, 3);        
//         }

//         if (projectClicked) {
//             console.log('je clique sur home apres avoir cliqué sur projet');
//             homePageBody.classList.remove('hidden');
//             aboutPage.classList.add('hidden');
//             homePageBody.classList.add('slide-down');
//             projectPage.classList.add('slide-down');
 
//             projectClicked = false;

//             setTimeout(function() {
//                 document.title = 'Portefolio DESTEPHEN - Home';
//                 setTimeout(function() {
//                     setTimeout(function() {
//                         homePageBody.classList.remove('slide-down');
//                         projectPage.classList.remove('slide-down');
//                     }, 1000);                
//                 }, 1000);                         
//             }, 3);        
//         }
//         console.log('je clique sur projet directement');
//         aboutPage.classList.remove('slide-down2');
//         projectPage.classList.remove('slide-down3');
//         homePageBody.classList.add('slide-down');
//         projectPage.classList.add('slide-down');
//         aboutPage.classList.add('slide-down');

//         setTimeout(function() {
//             setTimeout(function() {
//                 homePageBody.classList.remove('hidden');
//                 aboutPage.classList.add('hidden');
//                 projectPage.classList.add('hidden');
//                 navbar.classList.add('homeLink-clicked');
//             }, 1000);
//         }, 3);

//         homeClicked = true;
//     });
// }

// if (aboutLink) {
//     aboutLink.addEventListener('click', function(about) {
//         about.preventDefault();

//         aboutResetCSS()

//         if (homeClicked) {
//             console.log('je clique sur about apres avoir cliqué sur home');
//             homePageBody.classList.add('slide-up');
            
//             homeClicked = false;

//             setTimeout(function() {
//                 document.title = 'Portefolio DESTEPHEN - A propos';
//                 setTimeout(function() {
//                     aboutPage.classList.add('slide-up');  
//                 }, 1000);
//             }, 3);
//         }

//         if (projectClicked) {
//             console.log('je clique sur about apres avoir cliqué sur projet');
//             projectPage.classList.remove('hidden');
//             projectPage.classList.add('slide-down3');
//             homePageBody.classList.add('hidden');
//             homePageBody.classList.add('slide-up');
//             aboutPage.classList.add('slide-up2');
            
//             projectClicked = false;

//             setTimeout(function() {
//                 aboutPage.classList.add('slide-down2');
//                 document.title = 'Portefolio DESTEPHEN - A propos';
//                 setTimeout(function() {
//                     aboutPage.classList.remove('hidden');
//                     aboutPage.classList.remove('slide-up2');
//                     projectPage.classList.add('hidden');

//                 }, 1000);                   
//             }, 3);
//         }
//         else {
//             console.log('je clique sur projet directement');
//             homePageBody.classList.add('slide-up');
//             setTimeout(function() {
//                 aboutPage.classList.add('slide-up');
//                 document.title = 'Portefolio DESTEPHEN - A propos';
//                 navbar.classList.add('aboutLink-clicked');
//             }, 3);
    
//             aboutClicked = true;
//         }
//     });
// }

// if (projectLink) {
//     projectLink.addEventListener('click', function(project) {
//         project.preventDefault();

//         projectResetCSS()

//         if (aboutClicked) {
//             console.log('je clique sur projet apres avoir cliqué sur about');
//             aboutPage.classList.remove('hidden');
//             projectPage.classList.remove('hidden');
//             aboutPage.classList.add('slide-up2');

//             aboutClicked = false;

//             setTimeout(function() {
//                 document.title = 'Portefolio DESTEPHEN - Mes projets';
//                 setTimeout(function() {
//                     aboutPage.classList.add('hidden');
//                     setTimeout(function() {
//                         aboutPage.classList.remove('slide-up2');
//                     }, 1000);
//                 }, 1000); 
//             }, 3);
//         }

//         if (homeClicked) {
//             console.log('je clique sur projet apres avoir cliqué sur home');

//             homeClicked = false;
//             aboutClicked = false;
//         }
//         console.log('je clique sur projet directement');
//         aboutPage.classList.add('slide-up');
//         homePageBody.classList.add('slide-up');
//         projectPage.classList.remove('hidden');
//         navbar.classList.add('projectLink-clicked');

//         setTimeout(function() {
//             projectPage.classList.add('slide-up');
//             document.title = 'Portefolio DESTEPHEN - Mes projets';
//         }, 3);

//         projectClicked = true;
//     });
// }

if (homeLink) {
    homeLink.addEventListener('click', function(home) {
        home.preventDefault();

        homeResetCSS();

        if (aboutClicked) {
            console.log('je clique sur home apres avoir cliqué sur about');
            homePageBody.classList.remove('hidden');
            homePageBody.classList.add('slide-down');
            aboutPage.classList.add('slide-down');
            
            aboutClicked = false;

            setTimeout(function() {
                document.title = 'Portefolio DESTEPHEN - Home';
                setTimeout(function() {
                    aboutPage.classList.add('hidden');
                    setTimeout(function() {
                        homePageBody.classList.remove('slide-down');
                        aboutPage.classList.remove('slide-down');
                    }, 1000);                
                }, 1000);                         
            }, 3);        
        } else if (projectClicked) {
            console.log('je clique sur home apres avoir cliqué sur projet');
            homePageBody.classList.remove('hidden');
            aboutPage.classList.add('hidden');
            homePageBody.classList.add('slide-down');
            projectPage.classList.add('slide-down');
 
            projectClicked = false;

            setTimeout(function() {
                document.title = 'Portefolio DESTEPHEN - Home';
                setTimeout(function() {
                    setTimeout(function() {
                        homePageBody.classList.remove('slide-down');
                        projectPage.classList.remove('slide-down');
                    }, 1000);                
                }, 1000);                         
            }, 3);        
        } else {
            console.log('je clique sur projet directement');
            aboutPage.classList.remove('slide-down2');
            projectPage.classList.remove('slide-down3');
            homePageBody.classList.add('slide-down');
            projectPage.classList.add('slide-down');
            aboutPage.classList.add('slide-down');

            setTimeout(function() {
                setTimeout(function() {
                    homePageBody.classList.remove('hidden');
                    aboutPage.classList.add('hidden');
                    projectPage.classList.add('hidden');
                    navbar.classList.add('homeLink-clicked');
                }, 1000);
            }, 3);

            homeClicked = true;
        }
    });
}

if (aboutLink) {
    aboutLink.addEventListener('click', function(about) {
        about.preventDefault();

        aboutResetCSS()

        if (homeClicked) {
            console.log('je clique sur about apres avoir cliqué sur home');
            homePageBody.classList.add('slide-up');
            
            homeClicked = false;

            setTimeout(function() {
                document.title = 'Portefolio DESTEPHEN - A propos';
                setTimeout(function() {
                    aboutPage.classList.add('slide-up');  
                }, 1000);
            }, 3);
        } else if (projectClicked) {
            console.log('je clique sur about apres avoir cliqué sur projet');
            projectPage.classList.remove('hidden');
            projectPage.classList.add('slide-down3');
            homePageBody.classList.add('hidden');
            homePageBody.classList.add('slide-up');
            aboutPage.classList.add('slide-up2');
            
            projectClicked = false;

            setTimeout(function() {
                aboutPage.classList.add('slide-down2');
                document.title = 'Portefolio DESTEPHEN - A propos';
                setTimeout(function() {
                    aboutPage.classList.remove('hidden');
                    aboutPage.classList.remove('slide-up2');
                    projectPage.classList.add('hidden');

                }, 1000);                   
            }, 3);
        } else {
            console.log('je clique sur projet directement');
            homePageBody.classList.add('slide-up');
            setTimeout(function() {
                aboutPage.classList.add('slide-up');
                document.title = 'Portefolio DESTEPHEN - A propos';
                navbar.classList.add('aboutLink-clicked');
            }, 3);
    
            aboutClicked = true;
        }
    });
}

if (projectLink) {
    projectLink.addEventListener('click', function(project) {
        project.preventDefault();

        projectResetCSS()

        if (aboutClicked) {
            console.log('je clique sur projet apres avoir cliqué sur about');
            aboutPage.classList.remove('hidden');
            projectPage.classList.remove('hidden');
            aboutPage.classList.add('slide-up2');

            aboutClicked = false;

            setTimeout(function() {
                document.title = 'Portefolio DESTEPHEN - Mes projets';
                setTimeout(function() {
                    aboutPage.classList.add('hidden');
                    setTimeout(function() {
                        aboutPage.classList.remove('slide-up2');
                    }, 1000);
                }, 1000); 
            }, 3);
        } else if (homeClicked) {
            console.log('je clique sur projet apres avoir cliqué sur home');
            aboutPage.classList.add('slide-up');
            homePageBody.classList.add('slide-up');
            projectPage.classList.remove('hidden');
            navbar.classList.add('projectLink-clicked');

            setTimeout(function() {
                projectPage.classList.add('slide-up');
                document.title = 'Portefolio DESTEPHEN - Mes projets';
            }, 3);
            homeClicked = false;
            aboutClicked = false;
        } else {
            console.log('je clique sur projet directement');
            aboutPage.classList.add('slide-up');
            homePageBody.classList.add('slide-up');
            projectPage.classList.remove('hidden');
            navbar.classList.add('projectLink-clicked');

            setTimeout(function() {
                projectPage.classList.add('slide-up');
                document.title = 'Portefolio DESTEPHEN - Mes projets';
            }, 3);

            projectClicked = true;
        }
    });
}