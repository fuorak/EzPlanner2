// popup.js
// Get the extracted fields from the background script
chrome.runtime.sendMessage({ action: 'getFields' }, function (response) {

    console.log("requesting fields");
    console.log(response);
    // Display the extracted fields in the popup
    for (const key in response) {

        if (key === "salesOrder") {
            salesOrderInput.innerHTML = response[key];
        } else if (key === "orderConfirmation") {
            orderConfirmationInput.innerHTML = response[key];
        } else if (key === "ezShipDate") {
            ezShipDateInput.innerHTML = response[key];
        } else if (key === "frameQty") {
            frameQtyInput.innerHTML = response[key];
        } else if (key === "doorQty") {
            doorQtyInput.innerHTML = response[key];
        } else if (key === "programmingInitials") {
            programmingInitialsInput.innerHTML = response[key];
        } else if (key === "doorInitials") {
            doorInitialsInput.innerHTML = response[key];
        } else if (key === "orderNotes") {
            orderNotesInput.innerHTML = response[key];
        }
    }
});