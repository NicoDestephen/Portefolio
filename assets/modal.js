var modal = document.getElementById('modal');

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
};

function openModal(imageUrl) {
    var modalImage = document.getElementById('modal-image');
    modalImage.src = imageUrl;
    modal.style.display = "block";
}

window.addEventListener('mousedown', function(event) {
    if (!modal.contains(event.target)) {
        modal.style.display = "none";
    }
});

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
