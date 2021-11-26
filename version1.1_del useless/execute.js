
const openAll = () => {
  window.open(document.getElementsByClassName("yuRUbf")[0].childNodes[0].href);
  var i = 0
  while (true) {
    window.open(document.getElementsByClassName("yuRUbf")[i].childNodes[0].href);
    i++
    if (i == document.getElementsByClassName("yuRUbf").length) {
      break
    }
  }
}

const onMessage = (message) => {
  switch (message.action) {
    case 'OPENALL':
      openAll()
      break;
    default:
      break;
  }
}

chrome.runtime.onMessage.addListener(onMessage);
