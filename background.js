// background.js
// Store the extracted fields
let extractedFields = {};

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    // Store the extracted fields
    if (message.action != 'getFields') {
        extractedFields = message.fields;
        console.log("received a message to get extracted fields");
        console.log(message);
    }
});

// Return the extracted fields when requested by the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'getFields') {
        sendResponse(extractedFields);
    }
    console.log("sent message to popup.js");
});