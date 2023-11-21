document.addEventListener('DOMContentLoaded', function () {
    var emailInput = document.getElementById('email');
    var subscribeBtn = document.getElementById('subscribeBtn');
    var errorContainer = document.getElementById('error-container');

    subscribeBtn.addEventListener('click', function () {
        var emailValue = emailInput.value.trim();

        if (!isValidEmail(emailValue)) {
            displayErrorMessage('A valid email is required!');
        } else {
            // Email valid, tampilkan pesan sukses
            displaySuccessMessage('Thanks for subscribing!');
        }
    });

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function displayErrorMessage(message) {
        errorContainer.textContent = message;
        errorContainer.style.color = 'red';
    }

    function displaySuccessMessage(message) {
        errorContainer.textContent = message;
        errorContainer.style.color = 'green';
        // Tambahan: Redirect ke halaman sukses setelah beberapa detik
        setTimeout(function () {
            window.location.href = 'success.html';
        }, 2000);
    }
});
