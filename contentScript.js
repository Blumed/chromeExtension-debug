//Badge
// function removeClass() {
//   chrome.tabs.executeScript({
//     file: 'windowWidth.js'
//   }); 
// }

//Adds debuggerer class
chrome.runtime.sendMessage({ fn: "getSelectors" }, function(response) {
    console.log(response);
    $(response).addClass('debuggerer');
});