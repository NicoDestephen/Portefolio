document.addEventListener('DOMContentLoaded', function() {
    var projectCarousels = document.querySelectorAll('.splide#project-carousel');
    
    projectCarousels.forEach(function(projectCarousel) {
        var growButtons = projectCarousel.querySelectorAll('.grow-button');
        
        growButtons.forEach(function(growButton) {
            growButton.addEventListener('click', function() {
                var projectField = growButton.closest('.project-field');
                var description = projectField.querySelector('.description');
                var projectPageContact = projectCarousel.closest('#project-page').querySelector('#project-page-contact');
                var thumbnail = projectField.querySelector('.thumbnail-carousel');
                
                projectField.classList.toggle('grow');
                growButton.classList.toggle('clic');
                description.classList.toggle('hidden');
                thumbnail.classList.toggle('hidden');

                if (projectField.classList.contains('grow')) {
                    projectPageContact.classList.add('grow');
                } else {
                    projectPageContact.classList.remove('grow');
                }
            });
        });
    });
});
