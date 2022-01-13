chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.command === "activate")
            sendResponse({ msg: "Activation signal recieved!" });
    }
);