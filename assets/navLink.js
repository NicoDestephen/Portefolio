// var homeLink = document.querySelector('.home-link');
// var aboutLink = document.querySelector('.about-link');
// var projectLink = document.querySelector('.project-link');

// var homePage = document.getElementById('home-page-body');
// var aboutPage = document.getElementById('about-page');
// var projectPage = document.getElementById('project-page');

// var homeClicked = false;
// var aboutClicked = false;
// var projectClicked = false;

// var userHistory = [];

// function updateUserHistory(page) {
//     userHistory.push(page);
// }

// function resetUserHistory() {
//     userHistory = [];
// }

// function resetCSS() {
//     navbar.classList.remove('homeLink-clicked', 'aboutLink-clicked', 'projectLink-clicked');
//     homePage.classList.remove('hidden', 'slide-down', 'slide-up');
//     aboutPage.classList.remove('hidden', 'slide-down', 'slide-down2', 'slide-up', 'slide-up2');
//     projectPage.classList.remove('hidden', 'slide-down', 'slide-down2', 'slide-down3', 'slide-up', 'slide-up2', 'slide-up3');
// }

// if (homeLink) {
//     homeLink.addEventListener('click', function(home) {
//         home.preventDefault();
//         updateUserHistory('home');
//         resetCSS();

//         var clickedAbout = userHistory[userHistory.length - 2] === 'about';
//         var clickedProject = userHistory[userHistory.length - 2] === 'project';

//         if (clickedAbout) {
//             console.log('je clique sur home après avoir cliqué sur about');
//             homePage.classList.remove('hidden');
//             homePage.classList.add('slide-down');
//             aboutPage.classList.add('slide-down');
//             projectPage.classList.add('slide-down');
//             projectPage.classList.remove('slide-down3');
//             setTimeout(function() {
//                 aboutPage.classList.add('hidden');
//                 projectPage.classList.add('hidden');
//                 navbar.classList.add('homeLink-clicked');
//             }, 1000);
//         } else if (clickedProject) {
//             console.log('je clique sur home après avoir cliqué sur project');
//             homePage.classList.remove('hidden');
//             aboutPage.classList.add('hidden');
//             homePage.classList.add('slide-down');
//             projectPage.classList.add('slide-down');
//             setTimeout(function() {
//                 document.title = 'Portefolio DESTEPHEN - Home';
//                 setTimeout(function() {
//                     setTimeout(function() {
//                         projectPage.classList.add('hidden');
//                         homePage.classList.remove('slide-down');
//                         projectPage.classList.remove('slide-down');
//                         navbar.classList.add('homeLink-clicked');
//                     }, 1000);                
//                 }, 1000);                         
//             }, 3);    
//         } else {
//             console.log('je clique sur home directement');
//             homePage.classList.remove('hidden');
//             aboutPage.classList.add('hidden');
//             projectPage.classList.add('hidden');
//             navbar.classList.add('homeLink-clicked');
//         }

//         console.log(userHistory);
//     });
// }

// if (aboutLink) {
//     aboutLink.addEventListener('click', function(about) {
//         about.preventDefault();
//         updateUserHistory('about');
//         resetCSS();

//         var clickedHome = userHistory[userHistory.length - 2] === 'home';
//         var clickedProject = userHistory[userHistory.length - 2] === 'project';

//         if (clickedHome) {
//             console.log('je clique sur about après avoir cliqué sur home');
//             homePage.classList.add('slide-up');

//             setTimeout(function() {
//                 aboutPage.classList.add('slide-up'); 
//                 projectPage.classList.add('hidden');
//                 document.title = 'Portefolio DESTEPHEN - A propos';
//                 navbar.classList.add('aboutLink-clicked');
//             }, 3);
//         } else if (clickedProject) {
//             console.log('je clique sur about après avoir cliqué sur project');
//             projectPage.classList.remove('slide-up3');
//             projectPage.classList.remove('hidden');
//             projectPage.classList.add('slide-down3');
//             homePage.classList.add('hidden');
//             homePage.classList.add('slide-up');
//             aboutPage.classList.add('slide-up2');
//             setTimeout(function() {
//                 aboutPage.classList.add('slide-down2');
//                 document.title = 'Portefolio DESTEPHEN - A propos';
//                 setTimeout(function() {
//                     aboutPage.classList.remove('hidden');
//                     aboutPage.classList.remove('slide-up2');
//                     projectPage.classList.add('hidden');
//                     navbar.classList.add('aboutLink-clicked');
//                     projectPage.classList.remove('slide-down3');
//                 }, 1000);                   
//             }, 3);
//         } else {
//             console.log('je clique sur about directement');
//             projectPage.classList.add('hidden');
//             homePage.classList.add('slide-up');
//             setTimeout(function() {
//                 aboutPage.classList.add('slide-up');
//                 navbar.classList.add('aboutLink-clicked');
//             }, 3);
//         }

//         console.log(userHistory);
//     });
// }

// if (projectLink) {
//     projectLink.addEventListener('click', function(project) {
//         project.preventDefault();
//         updateUserHistory('project');
//         resetCSS();

//         var clickedAbout = userHistory[userHistory.length - 2] === 'about';
//         var clickedHome = userHistory[userHistory.length - 2] === 'home';

//         if (clickedAbout) {
//             console.log('je clique sur project après avoir cliqué sur about');
//             aboutPage.classList.add('slide-up2');
//             homePage.classList.add('slide-up');
//             aboutPage.classList.remove('hidden');

//             projectPage.classList.remove('slide-up3');
//             projectPage.classList.remove('hidden');
//             navbar.classList.add('projectLink-clicked');
//             setTimeout(function() {
                
//                 projectPage.classList.add('slide-up');
//                 setTimeout(function() {
//                     aboutPage.classList.add('hidden');
//                     aboutPage.classList.remove('slide-up2');
//                 }, 1000);
//             }, 3);
//         } else if (clickedHome) {
//             console.log('je clique sur project après avoir cliqué sur home');
//             aboutPage.classList.add('slide-up');
//             homePage.classList.add('slide-up');
//             aboutPage.classList.add('hidden');

//             projectPage.classList.remove('slide-up3');
//             projectPage.classList.remove('hidden');
//             navbar.classList.add('projectLink-clicked');
//             setTimeout(function() {
//                 projectPage.classList.add('slide-up');
//             }, 3);
//         } else {
//             console.log('je clique sur project directement');
//             aboutPage.classList.add('slide-up');
//             homePage.classList.add('slide-up');
//             aboutPage.classList.add('hidden');

//             projectPage.classList.remove('slide-up3');
//             projectPage.classList.remove('hidden');
//             navbar.classList.add('projectLink-clicked');
//             setTimeout(function() {
//                 projectPage.classList.add('slide-up');
//             }, 3);
//         }

//         console.log(userHistory);
//     });
// }