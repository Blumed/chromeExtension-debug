
var background = {
    selector: "",
    style: "",
    init: function() {

        chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
                //listen to any messages, and route them to functions
                if(request.fn in background) {
                    background[request.fn](request, sender, sendResponse);
                }
            });
    },

    setSelections: function(request, sender, sendResponse) {
    	//console.log('setting selectors', request.selector);
        //console.log('setting selectors', request.style);
        this.selector = request.selector;
        this.style = request.style;
    },

    getSelector: function(request, sender, sendResponse) {
        sendResponse({selector: this.selector, style: this.style});
    }

    // getStyle: function(request, sender, sendResponse) {
    //     sendResponse(this.style);
    // }
}


background.init();

