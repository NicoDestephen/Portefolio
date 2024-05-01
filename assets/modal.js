var modalModule = (function() {
    var modal = document.getElementById('modal');
    var span = document.getElementsByClassName("close")[0];
    var modalImage = document.getElementById('modal-image');

    span.onclick = function() {
        closeModal();
    };

    window.addEventListener('mousedown', function(event) {
        if (!modal.contains(event.target)) {
            closeModal();
        }
    });

    function openModal(imageUrl) {
        modalImage.src = imageUrl;
        modal.style.display = "flex";
    }

    function closeModal() {
        modal.style.display = "none";
    }

    function initializeThumbnails() {
        var thumbnailsContainers = document.querySelectorAll('.thumbnail-carousel');
        thumbnailsContainers.forEach(function(thumbnailsContainer) {
            var thumbnails = thumbnailsContainer.querySelectorAll('img');
            thumbnails.forEach(function(thumbnail) {
                thumbnail.addEventListener('click', function() {
                    var imageUrl = thumbnail.src;
                    openModal(imageUrl);
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
