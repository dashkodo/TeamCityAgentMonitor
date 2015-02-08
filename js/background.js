var openTab = function(url) {
		chrome.tabs.create({
      url: url + "/monitor"
    });
    chrome.tabs.insertCSS(null, {file: "css/main.css"});
    chrome.tabs.executeScript(null, {file: "vendor/jquery-1.11.1.min.js"});
	  chrome.tabs.executeScript(null, {code: "var tcUrl = \"" + url + "\";"});
	  chrome.tabs.executeScript(null, {file: "js/helpers.js"});
	  chrome.tabs.executeScript(null, {file: "js/time-interval.js"});
	  chrome.tabs.executeScript(null, {file: "js/teamcity-date.js"});
	  chrome.tabs.executeScript(null, {file: "js/agent-updates.js"});
	  chrome.tabs.executeScript(null, {file: "js/drawing.js"});
	  chrome.tabs.executeScript(null, {file: "js/build-updates.js"});
	  chrome.tabs.executeScript(null, {file: "js/queue-updates.js"});
		chrome.tabs.executeScript(null, {file: "js/storage.js"});
	  chrome.tabs.executeScript(null, {file: "js/main.js"});
}