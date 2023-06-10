// script.js

document.addEventListener("DOMContentLoaded", function() {
    const resizeForm = document.querySelector('form[action="/resize-image"]');
    const compressForm = document.querySelector('form[action="/compress-audio"]');
    const resultDiv = document.getElementById("result");

    resizeForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(resizeForm);
        sendRequest("/resize-image", formData);
    });

    compressForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(compressForm);
        sendRequest("/compress-audio", formData);
    });

    function sendRequest(url, formData) {
        resultDiv.textContent = "Processing...";

        fetch(url, {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            resultDiv.textContent = data;
        })
        .catch(error => {
            resultDiv.textContent = "An error occurred.";
            console.error(error);
        });
    }
});
