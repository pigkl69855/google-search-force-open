var getSelectedTab = (tab) => {
  var tabId = tab.id;
  var sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);
  document.getElementById('openAll').addEventListener('click', () => sendMessage({ action: 'OPENALL' }))

}
chrome.tabs.getSelected(null, getSelectedTab);