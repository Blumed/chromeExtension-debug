
//This works
chrome.browserAction.setBadgeText({"text": "1234567"});

// chrome.runtime.onMessage.addListener(function(response) {
//   // It is recommended to add a message type so your code
//   //   can be ready for more types of messages in the future

//   //alert(response.type);
// });
// Called when the user clicks on the browser action.


// $('#submitBorders').on('click', function(){
// 	var customSelectors = $('#inputBorders').val(); 
// 	chrome.runtime.sendMessage({message: customSelectors});
// 	alert(customSelectors);

// });
var background = {
    selector: "",
    init: function() {

        chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
                //listen to any messages, and route them to functions
                if(request.fn in background) {
                    background[request.fn](request, sender, sendResponse);
                }
            });
    },

    setSelectors: function(request, sender, sendResponse) {
    	//console.log('setting selectors', request.selector);
        this.selector = request.selector;
    },

    getSelectors: function(request, sender, sendResponse) {
        sendResponse(this.selector);
    }
}


background.init();

