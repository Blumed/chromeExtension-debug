var console = chrome.extension.getBackgroundPage().console;

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

function contentScript() {
  chrome.tabs.executeScript({
    file: 'contentScript.js'
  }); 
}

function removeClass() {
  chrome.tabs.executeScript({
    file: 'remove.js'
  }); 
}

document.getElementById('bordererers').addEventListener('click', makeItSoNumberOne);
document.getElementById('shadererer').addEventListener('click', makeItSoNumberTwo);
document.getElementById('clear').addEventListener('click', removeClass);

$(function() {
    var app = {
        init: function() {
          //Cache elements
            var customSelectors = document.getElementById('inputBorders'),
                customSelectorsInput = document.getElementById('submitBorders');

            chrome.runtime.sendMessage({ fn: "getSelectors" }, function(response) {
                //console.log("got response", response);
                customSelectors.value = response;
            });
            customSelectorsInput.addEventListener('click', function() {
                //console.log('button click' + ' ' + customSelectors.value);
                chrome.runtime.sendMessage({ fn: "setSelectors", selector: customSelectors.value });

                //Runs contentscript so background respnonse will activate selectors on current page
                contentScript();
            });
        }
    }
    app.init();
});

