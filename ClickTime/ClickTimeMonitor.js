// ==UserScript==
// @name         Clicktime Monitor
// @namespace    gist.github.com/smugzombie/13d5f60899d7aa0ee33bf9614ebb8520
// @version      0.1
// @description  Monitors Your Login Status Within Clicktime to prevent filling out a days worth of time and it not saving
// @author       Ron Egli
// @match        https://app.clicktime.com/App/DayView/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function checkLogin(){
        var request = new XMLHttpRequest();
        request.open('GET', '/App/DayView/?', true);
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                // All is well, try again in another 5 seconds
                setTimeout(function(){ checkLogin(); }, 5000);
            } else {
                // We reached our target server, but it returned an error
                console.log("Failure");
                setTimeout(function(){ checkLogin(); }, 5000);
            }
        };

        request.onerror = function() {
            // There was a connection error of some sort
            console.log("Not Logged In!");
            // Refresh the page..
            window.location.reload();
        };
        request.send();
    }
    // Start watching on page load.
    setTimeout(function(){ checkLogin(); }, 3000);
})();
