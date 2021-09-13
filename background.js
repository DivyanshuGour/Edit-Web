chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.insertCSS(tab.id, { file: "content.css" });
    chrome.tabs.executeScript(null, { file: "jquery.js" });
    chrome.tabs.executeScript(null, { file: "content.js" });
});