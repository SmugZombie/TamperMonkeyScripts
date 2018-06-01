// ==UserScript==
// @name         CTFd User/Team Account Generator
// @namespace    http://github.com/smugzombie/
// @version      0.1
// @description  Spams the account generation of CTFd / Used for 2018 ASU Cyber Challenge by Terra Verde
// @author       Ron Egli (SmugZombie)
// @match        https://<YOURCTFdINSTALL>/admin/teams
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("CTFd User/Team Account Generator Loaded");
    $( "body" ).append( "<div style='position: absolute; top: 70px; left: 10px; width: 150px; height: 75px; background-color: red; z-index: 1000; padding: 10px;'><button id='massCreate'>Create Accounts</button></div>" );

    function massCreate(){
        console.log("Creating Accounts...");
        var nonce = document.getElementsByName("nonce")[1].value;
        var names = ["Peregrine","Odin","Smasher","Misfit","Tefral_the_Surveyor","Captain_Savage","Madcap","Toad-In-Waiting","Scarlet_Scarab","Kilmer","Huntara","Gorilla-Man","Asbestos_Lady","Sergeant_Fury","Orphan-Maker","Black_Marvel","Mesmero","Frey","Mad_Jack","Evangeline_Whedon","Dragonwing","White_Queen","Prester_John","Blastaar","Gaea","Silver_Squire","Hood","Carrion","Lancer","Robert_da_Costa","Crimson_Commando","Grey_King","Sunstreak","Hippolyta","Battering_Ram","Winky_Man","Purge","Gorgon","Cardiac","Glob","The_Angel","Hardcore","Salvo","Crown","Eric_the_Red","Flying_Tiger","Guido_Carosella","Zarathos","NFL_Superpro","Toad","Humus_Sapien","Asmodeus","Pistol","Anais","Korg","Jumbo_Carnation","Beta_Ray_Bill","Anti-Venom","Firearm","Brother_Nature","High-Tech","Skin","Wizard","Sin","Aggamon","Karima_Shapandar","Stranger","Antonio","Orator","Trevor_Fitzroy","Toxin","Shockwave","Legion","Hildegarde","Reaper","Airborne","Her","Citizen_V","Black_Widow","Sally_Floyd","Ringer","Mister_Jip","Preview","Hellion","Hoder","Force","Iron_Maiden","Sundragon","Terminator","Silver_Dagger","Madame_Menace","Radius","Shroud","Danger","Briquette","Double_Helix","Arize","Headknocker","Frankie_and_Victoria","Chthon"];
        var passwords = ["pinkR@y56","$martWish56","(oolShip76","me$syEngine76","coldJ3wel45","whi+eZebra81","shor+Card88","lu$hCrow53","roundRob!n98","wis3Mask42","goodPag336","ultr@Llama73","mi$tyCheese74","cu+eKoala88","brownClou)77","wildC@rd31","w!ndyLion93","swi=tGame78","greenF@wn20","gi@ntPink31","wildPar+18","ultraSan)90","ivoryL3ad51","spi(yLeopard45","bentCoug@r54","darkNe$t72","=latJaguar42","jumpyO+ter66","lushSh3ep63","bes+Tree62","bestP@rk21","$caryFlag97","w@ckySpark70","wackyHors364","ro$eCrow22","fl@tLoaf23","braveFloc<91","$illyMustang88","megaW!nter95","sup3rHen70","b3ntYear56","longSpy37","weir)Water89","]ollySound41","redL!me17","swiftG@zelle97","whi+eFood67","m3gaSky93","sm@rtRiver62","brownWh@le88","weir)Boot34","wis3Food50","brownCh@in38","badW!sh48","o)dBrass14","w!seLion91","ho+Puppy34","w!ndySong95","fr3shTiger85","(oolClass66","b3stPuma85","o)dIndigo14","goodShap359","g!antBird62","emp+yPatch63","smallR!ng95","swi=tMoon27","freshJa(kal51","bumpyDus+84","goodAppl333","b!gDonkey45","slimS+ory93","m!styJoke86","ligh+Horn71","t@llHog64","ol)Hippo85","longNor+h68","hug3Corn90","wil)Smile87","b3stRoll70","goodBoo+59","gr@ySpoon54","gr@yFox56","roun)Hare44","gol)Roll88","ol)Rain73","niceB@boon75","heavyPain+48","slimySoun)67","slowH@ir11","ro$eSpace36","dizzyBe@n56","p@leHen32","jumpyMic393","$wiftFish97","fr3shShoe67","sup3rCanary46","lumpySp@rk78","mushySt@mp29","b3stTiger77"];
        for (var i = 0; i < names.length; i++) {
            createUser(nonce, names[i], passwords[i]);
            console.log("Team " + (i+1) + " is " + names[i] + " with password: " + passwords[i]);
        }
    }

    function createUser(nonce, name, password){
        var form = new FormData();
        form.append("nonce", nonce);
        form.append("id", "new");
        form.append("name", name);
        form.append("email", name+"@cyberchallenge.asu");
        form.append("password", password);
        form.append("website", "");
        form.append("affiliation", "");
        form.append("country", "United States");

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://10.1.4.126/admin/team/new",
            "method": "POST",
            "headers": {},
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        }
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    }

    $("#massCreate").click (massCreate);
    // Your code here...
})();
