"use strict";

var thisTimer;

var countInitial;
var countdownActive = false;
var inputCounter = 0.0; // in seconds
var counterTime = 0.0;
var inputMinutes = "";
var inputSeconds = "";


function updateClockDisplay() {
    var thisTime = new Date();
    var thisHours = thisTime.getHours();
    var thisMinutes = thisTime.getMinutes();
    var thisSeconds = thisTime.getSeconds();
    document.getElementById("spanHours").innerHTML = thisHours;
    document.getElementById("spanMinutes").innerHTML = thisMinutes;
    document.getElementById("spanSeconds").innerHTML = thisSeconds; 

    
}

function initCountdown() {
    if (inputMinutes) {
        inputCounter = parseFloat(inputMinutes) * 60;
        console.log("inputMinutes -  " + inputMinutes);
    }
    if (inputSeconds) {
        inputCounter = inputCounter + parseFloat(inputSeconds);
        console.log("inputSeconds -  " + inputSeconds);
    }
    
    console.log("inputCounter -  " + inputCounter);
    
    counterTime = inputCounter;
    
    countdownActive = true;
}

function resetCountdown() {
    document.getElementById("spanCountdown").innerHTML = (0);
    console.log("reset time counter");
    countdownActive = false;
}

function updateCountdown() {
    counterTime = counterTime - 1;
    if (counterTime > 0) {
        console.log("counterTime -  " + counterTime);
        var outputCounter = Math.floor(counterTime)
        document.getElementById("spanCountdown").innerHTML = (outputCounter);
    } else {
            countdownActive = false;
            document.getElementById("spanCountdown").innerHTML = "end";
        }
    
}


function onTimeEvent() {
    console.log("time interval event");
    updateClockDisplay();
    if (countdownActive) {
            updateCountdown();
    }

}
// handlers  -------------------------------------------------------------------

window.onload=function() {
    
    document.getElementById("btn_Start").addEventListener("click", function () {
        initCountdown();
    });

    document.getElementById("btn_Pause").addEventListener("click", function () {
        countdownActive = false;
    });

    document.getElementById("btn_Resume").addEventListener("click", function () {
        countdownActive = true;
    });
    
    document.getElementById("btn_Reset").addEventListener("click", function () {
        resetCountdown();
    });
    

    $(".dropdown-menu").on('click', 'li a', function(){
        var thisButton = $(this).parent().parent().siblings(".btn:first-child").attr('id');
        var thisInput = $(this).text();
        console.log("button " + thisButton + "  input " + thisInput)
        if (thisButton == "minutes") {
            inputMinutes = thisInput;
        }
        if (thisButton == "seconds") {
            inputSeconds = thisInput;
        }
        
        $(this).parent().parent().siblings(".btn:first-child").html($(this).text()+' <span class="caret"></span>');
        $(this).parent().parent().siblings(".btn:first-child").val($(this).text());
    });
}
// run these at startup  -------------------------------------------------------

thisTimer = setInterval(onTimeEvent, 1000);


//This line opens up a long-lived connection to your background page.
//var port = chrome.runtime.connect({name:"mycontentscript"});
//port.onMessage.addListener(function(message,sender){
//if(message.greeting === "hello"){
//    alert(message.greeting);
//}
//});
    

