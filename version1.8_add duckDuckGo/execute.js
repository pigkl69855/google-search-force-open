
const openAll_google = () => {

  var i = 0
  while (true) {
    window.open(document.getElementsByClassName("yuRUbf")[i].childNodes[0].href);
    i++
    if (i == document.getElementsByClassName("yuRUbf").length) {
      break
    }
  }
}


const openAll_forum_gamer = () => {

  var i = 0
  var urlList = []
  while (true) {
    if (document.getElementsByClassName("gs-title")[i].href != undefined && document.getElementsByClassName("gs-title")[i].href != "" && document.getElementsByClassName("gs-title")[i].tagName == "A") {
      if (urlList.includes(document.getElementsByClassName("gs-title")[i].href)) {
      } else {
        urlList.push(document.getElementsByClassName("gs-title")[i].href)
      }
    }

    i++
    if (i == document.getElementsByClassName("gs-title").length) {
      break
    }
  }

  var i = 0
  while (true) {
    window.open(urlList[i]);
    i++
    if (i == urlList.length) {
      break
    }
  }
}

const openAll_duckDuckGo = () => {

  var i = 0
  while (true) {

    window.open(document.getElementsByClassName("eVNpHGjtxRBq_gLOfGDr")[i].href);

    i++
    if (i == document.getElementsByClassName("gs-title").length) {
      break
    }
  }
}


const onMessage = (message) => {
  switch (message.action) {
    case 'OPENALL_GOOGLE':
      openAll_google()
      break;
    case 'OPENALL_FORUM_GAMER':
      openAll_forum_gamer()
      break;
    case 'OPENALL_DUCK_DUCK_GO':
      openAll_duckDuckGo()
      break;
    default:
      break;
  }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  onMessage(request)
  sendResponse({})
  return true
});
