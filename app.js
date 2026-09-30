const BACKEND_BASE_URL =
    "https://zorplay-backend.onrender.com";


const subscribeBtn =
    document.getElementById("subscribeBtn");

const message =
    document.getElementById("message");


const confirmationModal =
    document.getElementById("confirmationModal");

const cancelSubscribeBtn =
    document.getElementById("cancelSubscribeBtn");

const confirmSubscribeBtn =
    document.getElementById("confirmSubscribeBtn");


// --------------------------------------------------
// SUBSCRIBE BUTTON
// --------------------------------------------------

subscribeBtn.addEventListener("click", function () {

    // Show confirmation popup
    confirmationModal.classList.add("show");

});


// --------------------------------------------------
// CANCEL
// --------------------------------------------------

cancelSubscribeBtn.addEventListener("click", function () {

    // Close popup
    confirmationModal.classList.remove("show");

});


// --------------------------------------------------
// CONFIRM SUBSCRIPTION
// --------------------------------------------------

confirmSubscribeBtn.addEventListener("click", function () {

    // Close popup
    confirmationModal.classList.remove("show");

    // Show message
    message.textContent =
        "Opening subscription page...";

    // Start existing Moov/DOT subscription flow
    window.location.href =
        `${BACKEND_BASE_URL}/landing`;

});