function makeItSoNumberOne() {
  chrome.tabs.executeScript({
    file: 'debuggerer.js'
  }); 
}

function makeItSoNumberTwo() {
  chrome.tabs.executeScript({
    file: 'shadererer.js'
  }); 
}

document.getElementById('bordererers').addEventListener('click', makeItSoNumberOne);
document.getElementById('shadererer').addEventListener('click', makeItSoNumberTwo);