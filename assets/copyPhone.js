const phoneNumberElement = document.getElementById('phone-number');
const phoneIcon = document.getElementById('phone-logo');
const customAlert = document.getElementById('custom-alert');
const alertMessage = document.getElementById('alert-message');

function copyPhoneNumber() {
    const phoneNumber = phoneNumberElement.textContent.trim();
    navigator.clipboard.writeText(phoneNumber)
        .then(function() {
            alertMessage.textContent = 'Numéro copié dans le presse-papier';
            customAlert.classList.add('show');
            setTimeout(function() {
                customAlert.classList.remove('show');
            }, 2000);
        })
        .catch(function(error) {
            alertMessage.textContent = 'Erreur lors de la copie du numéro de téléphone : ' + error;
            customAlert.classList.add('show');
        });
}

phoneIcon.addEventListener('click', copyPhoneNumber);
phoneNumberElement.addEventListener('click', copyPhoneNumber);
