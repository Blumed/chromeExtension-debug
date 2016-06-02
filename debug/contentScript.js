//Badge
var windowWidth = $(window).width();
console.log(windowWidth);

var data = windowWidth

function sendMessage(data) {
    if (data) {
        chrome.runtime.sendMessage({ type: data }); // false here can be replaced with
    } // a function. Explanation below (1).
}


// var customSelectors = document.getElementById('inputBorders'),
//     customSelectorsInput = document.getElementById('submitBorders');

chrome.runtime.sendMessage({ fn: "getSelectors" }, function(response) {
    console.log(response);
    $(response).addClass('debuggerer');
});





// content.js
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if( request.message === "clicked_browser_action" ) {
//       var firstHref = $("a[href^='http']").eq(0).attr("href");

//       console.log(firstHref);
//     }
//   }
// );
