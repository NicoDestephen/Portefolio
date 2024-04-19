var homeLink = document.querySelector('.home-link');
var aboutLink = document.querySelector('.about-link');
var projectLink = document.querySelector('.project-link');
var contactLink = document.querySelector('.contact-link');

var reloadHome = document.getElementById('reload-home');
var homePage = document.getElementById('home-page-body');
var aboutPage = document.getElementById('about-page');
var projectPage = document.getElementById('project-page');
var contactPage = document.getElementById('contact-page');

var content = document.getElementById('content');

var userHistory = [];

function updateUserHistory(page) {
    userHistory.push(page);
}

function resetCSS() {
    content.classList.remove('slide-up-home-to-about', 'slide-up-home-to-project', 'slide-up-home-to-contact', 'slide-up-project-to-contact', 'slide-down-about-to-home', 'slide-down-contact-to-project', 'slide-down-contact-to-about')
}

function handlePageLoad() {
    if (!localStorage.getItem('visited')) {
        if (homeLink) {
            reloadHome.click();
            localStorage.setItem('visited', true);
        }
    } else {
        localStorage.removeItem('visited');
    }
}

document.addEventListener("DOMContentLoaded", handlePageLoad);

if (homeLink) {
    homeLink.addEventListener('click', function(home) {
        home.preventDefault();
        updateUserHistory('home');
        resetCSS();

        var clickedAbout = userHistory[userHistory.length - 2] === 'about';
        var clickedProject = userHistory[userHistory.length - 2] === 'project';
        var clickedContact = userHistory[userHistory.length - 2] === 'contact';

        if (clickedAbout) {
            console.log('je clique sur home après avoir cliqué sur about');
            content.classList.add('slide-down-about-to-home');
            document.title = 'Portefolio DESTEPHEN - Home';
            // navbar.classList.add('homeLink-clicked');
        } else if (clickedProject) {
            console.log('je clique sur home après avoir cliqué sur project');
            content.classList.add('slide-down-about-to-home');
            document.title = 'Portefolio DESTEPHEN - Home';
            // navbar.classList.add('homeLink-clicked');
        } else if (clickedContact) {
            console.log('je clique sur home après avoir cliqué sur contact');
            content.classList.add('slide-down-about-to-home');
            document.title = 'Portefolio DESTEPHEN - Home';
            // navbar.classList.add('homeLink-clicked');
        } else {
            console.log('je clique sur home directement');
            content.classList.add('slide-down-about-to-home');
            document.title = 'Portefolio DESTEPHEN - Home';
            // navbar.classList.add('homeLink-clicked');
        }

        console.log(userHistory);
    });
}

if (aboutLink) {
    aboutLink.addEventListener('click', function(about) {
        about.preventDefault();
        updateUserHistory('about');
        resetCSS();

        var clickedHome = userHistory[userHistory.length - 2] === 'home';
        var clickedProject = userHistory[userHistory.length - 2] === 'project';
        var clickedContact = userHistory[userHistory.length - 2] === 'contact';

        if (clickedHome) {
            console.log('je clique sur about après avoir cliqué sur home');
            content.classList.add('slide-up-home-to-about');
            document.title = 'Portefolio DESTEPHEN - A propos';
            // navbar.classList.add('aboutLink-clicked');
        } else if (clickedProject) {
            console.log('je clique sur about après avoir cliqué sur project');
            content.classList.add('slide-down-contact-to-about');
            document.title = 'Portefolio DESTEPHEN - A propos';
            // navbar.classList.add('aboutLink-clicked');
        } else if (clickedContact) {
            console.log('je clique sur about après avoir cliqué sur contact');
            content.classList.add('slide-down-contact-to-about');
            document.title = 'Portefolio DESTEPHEN - A propos';
            // navbar.classList.add('aboutLink-clicked');
        } else {
            console.log('je clique sur about directement');
            content.classList.add('slide-up-home-to-about');
            document.title = 'Portefolio DESTEPHEN - A propos';
            // navbar.classList.add('aboutLink-clicked');
        }

        console.log(userHistory);
    });
}

if (projectLink) {
    projectLink.addEventListener('click', function(project) {
        project.preventDefault();
        updateUserHistory('project');
        resetCSS();

        var clickedHome = userHistory[userHistory.length - 2] === 'home';
        var clickedAbout = userHistory[userHistory.length - 2] === 'about';
        var clickedContact = userHistory[userHistory.length - 2] === 'contact';

        if (clickedHome) {
            console.log('je clique sur project après avoir cliqué sur home');
            content.classList.add('slide-up-home-to-project');
            document.title = 'Portefolio DESTEPHEN - Mes projets';
            // navbar.classList.add('projectLink-clicked');
        } else if (clickedAbout) {
            console.log('je clique sur project après avoir cliqué sur about');
            content.classList.add('slide-down-contact-to-project');
            document.title = 'Portefolio DESTEPHEN - Mes projets';
            // navbar.classList.add('projectLink-clicked');
        } else if (clickedContact) {
            console.log('je clique sur project après avoir cliqué sur contact');
            content.classList.add('slide-down-contact-to-project');
            document.title = 'Portefolio DESTEPHEN - Mes projets';
            // navbar.classList.add('projectLink-clicked');
        }
        else {
            console.log('je clique sur project directement');
            content.classList.add('slide-up-home-to-project');
            document.title = 'Portefolio DESTEPHEN - Mes projets';
            // navbar.classList.add('projectLink-clicked');
        }

        console.log(userHistory);
    });
}

if (contactLink) {
    contactLink.addEventListener('click', function(contact) {
        contact.preventDefault();
        updateUserHistory('contact');
        resetCSS();

        var clickedHome = userHistory[userHistory.length - 2] === 'home';
        var clickedAbout = userHistory[userHistory.length - 2] === 'about';
        var clickedProject = userHistory[userHistory.length - 2] === 'project';

        if (clickedHome) {
            console.log('je clique sur contact après avoir cliqué sur home');
            content.classList.add('slide-up-home-to-contact');
            document.title = 'Portefolio DESTEPHEN - Contact';
            // navbar.classList.add('contactLink-clicked');
        } else if (clickedAbout) {
            console.log('je clique sur contact après avoir cliqué sur about');
            content.classList.add('slide-up-home-to-contact');
            document.title = 'Portefolio DESTEPHEN - Contact';
            // navbar.classList.add('contactLink-clicked');
        } else if (clickedProject) {
            console.log('je clique sur contact après avoir cliqué sur project');
            content.classList.add('slide-up-home-to-contact');
            document.title = 'Portefolio DESTEPHEN - Contact';
            // navbar.classList.add('contactLink-clicked');
        } else {
            console.log('je clique sur contact directement');
            content.classList.add('slide-up-home-to-contact');
            document.title = 'Portefolio DESTEPHEN - Contact';
            // navbar.classList.add('contactLink-clicked');
        }

        console.log(userHistory);
    });
}