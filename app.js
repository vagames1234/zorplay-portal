const BACKEND_BASE_URL = "https://zorplay-backend.onrender.com";

const subscribeBtn = document.getElementById("subscribeBtn");
//const unsubscribeBtn = document.getElementById("unsubscribeBtn");
const message = document.getElementById("message");


// --------------------------------------------------
// SUBSCRIBE
// --------------------------------------------------

subscribeBtn.addEventListener("click", function () {

    message.textContent = "Opening subscription page...";

    // Start the existing Moov/DOT subscription flow
    window.location.href = `${BACKEND_BASE_URL}/landing`;

});


// --------------------------------------------------
// UNSUBSCRIBE
// --------------------------------------------------

// --------------------------------------------------
// UNSUBSCRIBE
// --------------------------------------------------

// unsubscribeBtn.addEventListener("click", async function () {

//     const msisdnInput =
//         document.getElementById("msisdnInput");

//     const msisdn =
//         msisdnInput.value.trim();

//     if (!msisdn) {

//         message.textContent =
//             "Please enter your Moov Gabon mobile number.";

//         return;
//     }


//     message.textContent =
//         "Processing unsubscribe request...";

//     unsubscribeBtn.disabled = true;


//     try {

//         const response = await fetch(
//             `${BACKEND_BASE_URL}/unsubscribe`,
//             {
//                 method: "POST",

//                 headers: {
//                     "Content-Type": "application/json"
//                 },

//                 body: JSON.stringify({
//                     msisdn: msisdn
//                 })
//             }
//         );


//         const data = await response.json();

//         console.log(
//             "Unsubscribe response:",
//             data
//         );


//         if (response.ok) {

//             message.textContent =
//                 "Unsubscribe request processed successfully.";

//             msisdnInput.value = "";

//         } else {

//            message.textContent =
//     data.response?.errorDesc ||
//     data.response?.errorDesc ||
//     data.message ||
//     data.error ||
//     "Unable to process the unsubscribe request.";

//         }

//     } catch (error) {

//         console.error(
//             "Unsubscribe error:",
//             error
//         );

//         message.textContent =
//             "Unable to connect to the server. Please try again.";

//     } finally {

//         unsubscribeBtn.disabled = false;

//     }

// });