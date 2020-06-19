function injectionScript(tabId, info, tab) {
  console.log("injection fire");
}

chrome.tabs.onUpdated.addListener(injectionScript);