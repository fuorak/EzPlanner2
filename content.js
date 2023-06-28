// content.js
// Extract the fields from the page
console.log('ive been summoned');
const divs = document.getElementsByTagName('div');

let frameQty = 0;
let doorQty = 0;
let salesOrder = "SO-NONE";
let orderConfirmation = "THE FUTURE";
let ezShipDate = "THE FUTURE";
let programmingInitials = "T0";
let doorInitials = "NONE";
let orderNotes = "AHHH";

for (let i = 0; i < divs.length; i++) {
    //frame qty
    if (divs[i].getAttribute('class') === "uir-field-wrapper" && divs[i].getAttribute('data-searchable-id') === "custom191custom191custbody_frameqty") {
        const spans = divs[i].getElementsByTagName('span');

        for (let j = 0; j < spans.length; j++) {
            if (spans[j].getAttribute('class') === "uir-field inputreadonly") {
                frameQty = spans[j].innerHTML;
            }
        }
    }

    //door qty
    if (divs[i].getAttribute('class') === "uir-field-wrapper uir-inline-tag" && divs[i].getAttribute('data-searchable-id') === "custom191custom191custbody_doorquantity") {
        const spans = divs[i].getElementsByTagName('span');

        for (let j = 0; j < spans.length; j++) {
            if (spans[j].getAttribute('class') === "uir-field inputreadonly") {
                doorQty = spans[j].innerHTML;
            }
        }
    }

    //programming initials
    if (divs[i].getAttribute('class') === "uir-field-wrapper" && divs[i].getAttribute('data-searchable-id') === "custom191custom191custbody_programmingneeded") {
        const spans = divs[i].getElementsByTagName('span');

        for (let j = 0; j < spans.length; j++) {
            if (spans[j].getAttribute('class') === "uir-field inputreadonly") {
                programmingInitials = spans[j].innerHTML;
            }
        }
    }

    //door initials
    if (divs[i].getAttribute('class') === "uir-field-wrapper" && divs[i].getAttribute('data-searchable-id') === "custom191custom191custbody_nesting") {
        const spans = divs[i].getElementsByTagName('span');

        for (let j = 0; j < spans.length; j++) {
            if (spans[j].getAttribute('class') === "uir-field inputreadonly") {
                doorInitials = spans[j].innerHTML;
            }
        }
    }

    //Order confirmation
    if (divs[i].getAttribute('class') === "uir-field-wrapper" && divs[i].getAttribute('data-searchable-id') === "shippingshippingcustbody_ezconceptorderconfirmation") {
        const spans = divs[i].getElementsByTagName('span');

        for (let j = 0; j < spans.length; j++) {
            if (spans[j].getAttribute('class') === "uir-field inputreadonly") {
                orderConfirmation = spans[j].innerHTML;
            }
        }
    }

    //Ez ship date
    if (divs[i].getAttribute('class') === "uir-field-wrapper" && divs[i].getAttribute('data-searchable-id') === "shippingshippingcustbody_ezconceptshipdate1") {
        const spans = divs[i].getElementsByTagName('span');

        for (let j = 0; j < spans.length; j++) {
            if (spans[j].getAttribute('class') === "uir-field inputreadonly") {
                ezShipDate = spans[j].innerHTML;
            }
        }
    }

    //Order notes
    if (divs[i].getAttribute('class') === "uir-field-wrapper uir-long-text" && divs[i].getAttribute('data-searchable-id') === "custom191custom191custbody_ordernotes") {
        const spans = divs[i].getElementsByTagName('span');

        for (let j = 0; j < spans.length; j++) {
            if (spans[j].getAttribute('class') === "uir-field inputreadonly uir-resizable") {
                orderNotes = spans[j].innerHTML;
            }
        }
    }

    //sales order
    if (divs[i].getAttribute('class') === "uir-page-title-secondline") {
        const spans = divs[i].getElementsByTagName('div');

        for (let j = 0; j < spans.length; j++) {
            if (spans[j].getAttribute('class') === "uir-record-id") {
                salesOrder = spans[j].innerHTML;
            }
        }
    }
}


const fields = {
    salesOrder: salesOrder,
    orderConfirmation: orderConfirmation,
    ezShipDate: ezShipDate,
    frameQty: frameQty,
    doorQty: doorQty,
    programmingInitials: programmingInitials,
    doorInitials: doorInitials,
    orderNotes: orderNotes,
    // Add more fields as needed
};

console.log(fields);
// Send the extracted data to the background script
chrome.runtime.sendMessage({ fields });

/*
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'getFields') {
        chrome.runtime.sendMessage({ fields });
    }
    console.log("sent message to background.js");
});
*/