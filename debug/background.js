
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
    },

    // removeSelectors: function(request, sender, sendResponse) {
    //     sendResponse(this.selector);
    // }
}


background.init();

