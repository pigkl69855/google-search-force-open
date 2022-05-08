var getSelectedTab = (tab) => {

  var tab = tab[0];
  var sendMessage = (messageObj) => chrome.tabs.sendMessage(tab.id, messageObj);
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
chrome.tabs.query({active: true, currentWindow: true}, getSelectedTab);