// ==UserScript==
// @name         Alienvault Alert on Any Alarms in Queue
// @namespace    https://github.com/smugzombie
// @version      0.1.1
// @description  Allows a user configurable alarm (noise) on new alarms
// @author       Ron Egli
// @match        https://<YourAlienvaultIP>/ossim/alarm/alarm_console.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

   // Define Variables
   var tamper_alarmcount = 0;
   var audio = new Audio('//dev.egli.me/avalert/unconvinced.mp3');

   // The magic function. Gathers the current alarm count base on the page and
   // compares it to what the script saw the last time it was loaded.
   function getAlarmCount(){
       window.tamper_alarmcount = count_of_all_alarm;
       console.log("Alarms Found: "+count_of_all_alarm);
       if(window.tamper_alarmcount > 0){
           //alert("New Alarm");
           console.log("Alert!")
           audio.play();
       }
   }
    // Watches the refresh timer to know when the page reloads
    function watchTimer(){
        //console.log(time); // Debugging Only
        if(time == 298 || time == 297){
            // Allow for 2 second margin to ensure we catch it.
            getAlarmCount();
            setTimeout(function(){ watchTimer(); }, 3000);
            // Change to 3 seconds so we don't fire twice immediately.
        }else{
            setTimeout(function(){ watchTimer(); }, 1000);
        }
    }

   // Execute on page load - Essentially only run if count_of_all_alarm is defined
   if (typeof count_of_all_alarm !== 'undefined') {
       // We wait because the page needs to be fully initiated. Then we watch the timer on the page.
       setTimeout(function(){ watchTimer(); }, 1000);
   }


})();
