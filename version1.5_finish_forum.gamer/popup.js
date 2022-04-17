var getSelectedTab = (tab) => {

  var tabId = tab.id;
  var sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);
  document.getElementById('openAll').addEventListener('click', async () => {

    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let url = tabs[0].url;
      if (url.includes("google.com")) {
        sendMessage({ action: 'OPENALL_GOOGLE' })
      }
      if (url.includes("forum.gamer.com.tw")) {
        sendMessage({ action: 'OPENALL_FORUM_GAMER' })
      }
    });
  }

  )

}
chrome.tabs.getSelected(null, getSelectedTab);