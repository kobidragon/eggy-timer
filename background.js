"use strict";

var thisTimer;

var countInitial;
var countdownActive = false;
var inputCountdown = 60;

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.windows.create(
        {url: "main.html", type: "popup", top:20, left: 200, width: 800, height: 600});
    
//    chrome.runtime.onConnect.addListener(function(port){
 //       port.postMessage({greeting:"hello"});
 //   });
});
                                           


