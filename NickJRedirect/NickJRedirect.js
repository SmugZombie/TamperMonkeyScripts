// ==UserScript==
// @name         NickJRedirector
// @namespace    http://github.com/smugzombie/
// @version      0.1
// @description  Auto redirect to kid friendly iframe version
// @author       Ron Egli
// @match        http://www.nickjr.com/nick-jr-originals/games/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var redirect_base = "http://www.nickjr.com/game-frame/";
    var redirect_replace = "http://www.nickjr.com/nick-jr-originals/games/";
    var redirect = window.location.href.replace(redirect_replace, redirect_base);
    console.log(redirect);
    window.location.href = redirect;
})();
