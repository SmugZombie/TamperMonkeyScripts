// ==UserScript==
// @name         Alienvault Alert on New Alarms
// @namespace    https://github.com/smugzombie
// @version      0.1
// @description  Allows a user configurable alarm (noise) on new alarms
// @author       Ron Egli
// @match        https://<YourAlienvaultIP>/ossim/alarm/alarm_console.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Define Variables
    var tamper_alarmcount = 0;
    var old_alarm_count = 0;
    var audio = new Audio('//dev.egli.me/avalert/unconvinced.mp3');

    // The magic function. Gathers the current alarm count base on the page and
    // compares it to what the script saw the last time it was loaded.
    function getAlarmCount(){
        window.old_alarm_count = getLocalStorage("tamper_alarmcount");
        window.tamper_alarmcount = count_of_all_alarm;
        console.log("Alarms Found: "+count_of_all_alarm);
        if(window.old_alarm_count < window.tamper_alarmcount || old_alarm_count == null){
            //alert("New Alarm");
            console.log("Alert!")
            setLocalStorage("tamper_alarmcount", window.tamper_alarmcount);
            audio.play();
        }else{
            console.log("Old Count: " + old_alarm_count);
        }
    }

    // Execute on page load - Essentially only run if count_of_all_alarm is defined
    if (typeof count_of_all_alarm !== 'undefined') {
        // We wait because the page needs to be fully initiated. Howver 3 seconds isn't long..
        setTimeout(function(){ getAlarmCount(); }, 3000);
    }

    // Required functions to set and get local storage.
    function getLocalStorage(name){
    var now = parseInt(new Date() / 1000);
    var expires = localStorage.getItem(name+"_expire");
    if(!expires){ return localStorage.getItem(name); }
    else if(now >= expires){ localStorage.removeItem(name+"_expire"); localStorage.removeItem(name); return ""; }
    else{ return localStorage.getItem(name); }
    }

    function setLocalStorage(name, value, minutes){
        if(minutes == null){ localStorage.setItem(name, value); localStorage.removeItem(name+"_expire"); return true} // No set expiration
        else if(minutes == 0){ localStorage.removeItem(name); localStorage.removeItem(name+"_expire"); return true} // Setting to 0 kills the localStorage Item any any expiration
        else{
            var epochExpire = parseInt(new Date() / 1000 + (minutes * 60));
            localStorage.setItem(name, value); localStorage.setItem(name+"_expire", epochExpire);
            return true
        }
        return false
    }

})();
