document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let activeTab = tabs[0];
        let activeTabId = activeTab.id;

        let currentURL = new URL(activeTab.url);

        if (currentURL.host.toLowerCase() == "en.wikipedia.org") {
            document.getElementById("URLView").innerText = "Yes: " + currentURL.pathname.split("/").at(-1);

            chrome.runtime.sendMessage({ command: "activate" }, function (response) {
                console.log(response.msg);
            });
        }
        else
            document.getElementById("URLView").innerText = "No";
    });
}, true);