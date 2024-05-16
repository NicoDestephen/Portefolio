var modalModule = (function() {
    var modal = document.getElementById('modal');
    var span = document.getElementsByClassName("close")[0];
    var modalImage = document.getElementById('modal-image');
    var prevButton = document.getElementById('prev');
    var nextButton = document.getElementById('next');
    var currentIndex = 0;
    var currentThumbnails = [];

    span.onclick = function() {
        closeModal();
    };

    window.addEventListener('mousedown', function(event) {
        if (!modal.contains(event.target)) {
            closeModal();
        }
    });

    prevButton.addEventListener('click', function() {
        showPreviousImage();
    });

    nextButton.addEventListener('click', function() {
        showNextImage();
    });

    function openModal(index, thumbnails) {
        currentIndex = index;
        currentThumbnails = thumbnails;
        modalImage.src = currentThumbnails[currentIndex].src;
        modal.style.display = "flex";
    }

    function closeModal() {
        modal.style.display = "none";
    }

    function showPreviousImage() {
        currentIndex = (currentIndex - 1 + currentThumbnails.length) % currentThumbnails.length;
        modalImage.src = currentThumbnails[currentIndex].src;
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % currentThumbnails.length;
        modalImage.src = currentThumbnails[currentIndex].src;
    }

    function initializeThumbnails() {
        var thumbnailsContainers = document.querySelectorAll('.thumbnail-carousel');
        thumbnailsContainers.forEach(function(thumbnailsContainer) {
            var thumbnails = Array.from(thumbnailsContainer.querySelectorAll('img'));
            thumbnails.forEach(function(thumbnail, index) {
                thumbnail.addEventListener('click', function() {
                    openModal(index, thumbnails);
                });
            });
        });
    }

    return {
        initializeThumbnails: initializeThumbnails,
        closeModal: closeModal,
        openModal: openModal
    };
})();

modalModule.initializeThumbnails();
