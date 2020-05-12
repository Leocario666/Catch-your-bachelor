//===================================================================================

//HES SO

//Catch your Bachelor

//Linked to index.html

//===================================================================================

//initialisation of the canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//===================================================================================
//initialisation of the pictures 
//===================================================================================

//bouton Hall of fame
var hofRdy = false;
var hofImg = new Image();
hofImg.onload = function () {
    hofRdy = true;
};
hofImg.src = "images/HallOfFameButton.PNG";

//===================================
//img bg1 accueil
//===================================

//image Debons
var debonsRdy = false;
var debonsImg = new Image();
debonsImg.onload = function () {
    debonsRdy = true;
};
debonsImg.src = "images/IronDebons.png";

//image FlagIT
var itRdy = false;
var itImg = new Image();
itImg.onload = function () {
    itRdy = true;
};
itImg.src = "images/ITFlag.png";

//image FlagSocial
var socialRdy = false;
var socialImg = new Image();
socialImg.onload = function () {
    socialRdy = true;   
};
socialImg.src = "images/SocialFlag.png";

//image FlagTourism
var tourismRdy = false;
var tourismImg = new Image();
tourismImg.onload = function () {
    tourismRdy = true;
};
tourismImg.src = "images/TourismFlag.png";

//===================================
// img bg2/3 (filière tourisme)
//===================================

//image bg touriste
var bgTouristRdy = false;
var bgTouristImg = new Image();
bgTouristImg.onload = function () {
    bgTouristRdy = true;
}
bgTouristImg.src = "images/bgTourism.jpg";

//image point
var pointRdy = false;
var pointImg = new Image();
pointImg.onload = function () {
    pointRdy = true;
}
pointImg.src = "images/point.png";

//image diplome touriste
var diplomeTouristRdy = false;
var diplomeTouristImg = new Image();
diplomeTouristImg.onload = function () {
    diplomeTouristRdy = true;
}
diplomeTouristImg.src = "images/diplomeTourism.jpg";

//===================================
// img bg4 (filière sociale)
//===================================

//image bg sociale
var bgSocialRdy = false;
var bgSocialImg = new Image();
bgSocialImg.onload = function () {
    bgSocialRdy = true;
}
bgSocialImg.src = "images/gameSocial.jpg";

//===================================
// img bg50/51 (final boss)
//===================================

//image background
var bossbgRdy = false;
var bossbgImg = new Image();
bossbgImg.onload = function () {
    bossbgRdy = true;
}
bossbgImg.src = "images/BgBoss.jpg";

//image black
var blackRdy = false;
var blackImg = new Image();
blackImg.onload = function () {
    blackRdy = true;
}
blackImg.src = "images/black.jpg";

//image boss dragon
var drakebossRdy = false;
var drakebossImg = new Image();
drakebossImg.onload = new function () {
    drakebossRdy = true;
}
drakebossImg.src = "images/finalboss.png";

//image ship
var shipRdy = false;
var shipImg = new Image();
shipImg.onload = function () {
    shipRdy = true;
}
shipImg.src = "images/ship.png";
    
//image HP
var hpRdy = false;
var hpImg = new Image();
hpImg.onload = function () {
    hpRdy = true;
}
hpImg.src = "images/hp.png";

//===================================
// img explosion
//===================================  

var boum1Rdy = false;
var boum1Img = new Image();
boum1Img.onload = function () {
    boum1Rdy = true;
}
boum1Img.src = "images/boum1.png";
    
var boum2Rdy = false;
var boum2Img = new Image();
boum2Img.onload = function () {
    boum2Rdy = true;
}
boum2Img.src = "images/boum2.png";
    
var boum3Rdy = false;
var boum3Img = new Image();
boum3Img.onload = function () {
    boum3Rdy = true;
}
boum3Img.src = "images/boum3.png";
    
var boum4Rdy = false;
var boum4Img = new Image();
boum4Img.onload = function () {
    boum4Rdy = true;
}
boum4Img.src = "images/boum4.png";
    
var boum5Rdy = false;
var boum5Img = new Image();
boum5Img.onload = function () {
    boum5Rdy = true;
}
boum5Img.src = "images/boum5.png";
    
var boum6Rdy = false;
var boum6Img = new Image();
boum6Img.onload = function () {
    boum6Rdy = true;
}
boum6Img.src = "images/boum6.png";
    
var boum7Rdy = false;
var boum7Img = new Image();
boum7Img.onload = function () {
    boum7Rdy = true;
}
boum7Img.src = "images/boum7.png";
    
var boum8Rdy = false;
var boum8Img = new Image();
boum8Img.onload = function () {
    boum8Rdy = true;
}
boum8Img.src = "images/boum8.png";
    
var boum9Rdy = false;
var boum9Img = new Image();
boum9Img.onload = function () {
    boum9Rdy = true;
}
boum9Img.src = "images/boum9.png";
    
var boum10Rdy = false;
var boum10Img = new Image();
boum10Img.onload = function () {
    boum10Rdy = true;
}
boum10Img.src = "images/boum10.png";
    
//===================================
// img loose
//===================================

var rButtonRdy = false;
var rButtonImg = new Image();
rButtonImg.onload = function () {
    rButtonRdy = true;
}
rButtonImg.src = "images/Rbutton.png";
    
//===================================
// img win IT
//===================================

var diplomeItRdy = false;
var diplomeItImg = new Image();
diplomeItImg.onload = function () {
    diplomeItRdy = true;
}
diplomeItImg.src = "images/diplomeIt.jpg";

//===================================
// img teacher 
//===================================

//image teacher Werner
var wernerRdy = false;
var wernerimg = new Image();
wernerimg.onload = function(){
    wernerRdy = true;
};
wernerimg.src = "images/BossWerner.png";

//image teacher Studer
var studerRdy = false;
var studerimg = new Image();
studerimg.onload = function(){
    studerRdy = true;
};
studerimg.src = "images/BossStuder.png";
 
//image teacher Lamon
var lamonRdy = false;
var lamonimg = new Image();
lamonimg.onload = function(){
    lamonRdy = true;
};
lamonimg.src = "images/BossLamon.png";

//image teacher Bax
var baxRdy = false;
var baximg = new Image();
baximg.onload = function(){
    baxRdy = true;
};
baximg.src = "images/BossBax.png";

//image teacher Widmer & Russo
var wrRdy = false;
var wrimg = new Image();
wrimg.onload = function(){
    wrRdy = true;
};
wrimg.src = "images/BossWR.png"

//===================================
// img bg teacher 
//===================================

//image background teacher Bax
var baxbgRdy = false;
var baxbgimg = new Image();
baxbgimg.onload = function(){
    baxbgRdy = true;
};
baxbgimg.src = "images/bgbax.jpg";

//image background teacher Werner
var wernerbgRdy = false;
var wernerbgimg = new Image();
wernerbgimg.onload = function(){
    wernerbgRdy = true;
};
wernerbgimg.src = "images/bgwerner.jpg";

//image background teacher Studer
var studerbgRdy = false;
var studerbgimg = new Image();
studerbgimg.onload = function(){
    studerbgRdy = true;
};
studerbgimg.src = "images/bgstuder.jpg";

//image background teacher lamon
var lamonbgRdy = false;
var lamonbgimg = new Image();
lamonbgimg.onload = function(){
    lamonbgRdy = true;
};
lamonbgimg.src = "images/bglamon.jpg";

//image background teacher Russo and Widmer
var wrbgRdy = false;
var wrbgimg = new Image();
wrbgimg.onload = function(){
    wrbgRdy = true;
};
wrbgimg.src = "images/bgWR.jpg";

//===================================
// img bg challenge 
//===================================

//image background challenge bax - Werner - Studer
var starsRdy = false;
var starsimg = new Image();
starsimg.onload = function(){
    starsRdy = true;
};
starsimg.src = "images/stars.jpg";

//image background challenge lamon
var groundRdy = false;
var groundimg = new Image();
groundimg.onload = function(){
    groundRdy = true;
};
groundimg.src = "images/skyGround.jpg";


//===================================================================================
// initialisation of variables
//===================================================================================

//music
var shipDeadMusic;
var continueMusic;
var gameMusicBax;
var gameMusicWerner;
var gameMusicLamon;
var gameMusicStuder;
var gameMusicRW;
var bossMusic;
var winMusic;
var musicPlaying = false;

//Background
var backgroundCode; //this variable will say where we are in the game
var backgroundCodeStock = 0; //Stock the background code for the remediation
var points; //the final score
var pointsTemp; //the score during a challenge

//for HoF
var country;
var nickname;

//compteur
var cpt = 0;
var cptship = 0;
var cptjson = 1;
var cptend = 0;

//variables for text
var actual_texte = 0;
var actual_texte1 = 0;
var actual_texte2 = 0;
var actual_texte3 = 0;

//win ?
var ennemyDestroyed;
var orbsCollected;

//variables for final fight
var dragonleft = false;
var dragonhoriz = true;
var dragonzero = true;

//management of ship, laser, meteor and ennemy
var laserTimer = 0;
var fireTimer = 0;
var ennemyTimer = 0;
var orbTimer = 0;
var meteorTimer = 0;

//pool pattern
var laserPool = [];
var firePool = [];
var bulletPool = [];
var ennemyPool = [];
var meteorPool = [];

//boolean
var shipDestroyed = false;
var shipImmortal = false;
var remediation = false;
var groundHit;

//timers
var timerBase;
var timerCompare;

var ship = { speed: 3500, hp:3};
var dragon = { hp: 700};
var orb = new orbObject();


// Handle keyboard controls
var keysDown = {};

// == LISTENERS == //
addEventListener("keydown", function (e) { keysDown[e.keyCode] = true;}, false);
addEventListener("keyup", function (e){ delete keysDown[e.keyCode];}, false);

//===================================================================================
//Geolocalisation
//===================================================================================

function onSuccess(position){
        var latitude= position.coords.latitude;
        var longitude= position.coords.longitude;

        //Is the player in switzerland
        if ((latitude>=45.828465) && (latitude<=48.96667) && (longitude>=5.971636) && (longitude<=10.492014)){ 
            country = "SUI" 
            
        } else  country = "EXT"; //Exterior
    }
            
function onError(error) { 
    country = "UKN";
} // Unknown            

//===================================================================================
//Reset 
//===================================================================================

var reset = function() {
    
    backgroundCode = 1; //back to welcome
    
    //reset ship position
    ship.x = 375;
    ship.y = 510;
    ship.hp = 3;
    
    //reset timer
    cpt = 0;
    cptjson = 1;
    
    //reset dragon position
    dragon.x = 200;
    dragon.y = 0;
    dragon.hp = 700;
    
    //reset remediation
    remediation = false;    

    //reset variables for challenge
    points = 0;
    pointsTemp = 1000;
    ennemyDestroyed = 0;
    orbsCollected = 0;
    orbTimer = 0;
    orb.alive = false;
    groundHit = 3;
    meteorTimer = 0;
    
    //reset the fire 
    for(let n = 0; n < 100; n++) {
        firePool[n].alive = false;
    }
                
    //reset the player shoot and the ennemy shoot
    for(let p = 0; p < 50; p++) {
        laserPool[p].alive = false;
        bulletPool[p].alive = false;
    }
                
    //reset the ennemy
    for(let n = 0; n < 20; n++) {
        ennemyPool[n].alive = false;
    }
    
    //reset the music
    shipDeadMusic = new Audio("music/wallhit.mp3");
    continueMusic = new Audio("music/directedby.mp3");
    gameMusicBax= new Audio("music/gameMusicBax.mp3");
    gameMusicWerner = new Audio("music/gameMusicWerner.mp3");
    gameMusicLamon = new Audio("music/gameMusicLamon.mp3");
    gameMusicStuder = new Audio("music/gameMusicStuder.mp3");
    gameMusicRW = new Audio("music/gameMusicRW.mp3");
    bossMusic = new Audio("music/beuchat.mp3");
    winMusic = new Audio("music/win.mp3");
    
}; 

//===================================================================================
//Update (listeners)
//===================================================================================

var update = function(modifier) {
    
    //get the nickname
    nickname = getQueryVariable('pseudo'); // Call the getQueryVariable to have the pseudo
    
    if(nickname == null || nickname == false) {
        nickname = "ghost";
    }
    
    //welcome
    if(backgroundCode == 1) {
        
        //hide the drag and drop div
        $("#dragdropzone").hide();
        
        cpt = 0;
        
        canvas.addEventListener("click", function(event){
             let x = event.pageX - canvas.offsetLeft,
                 y = event.pageY - canvas.offsetTop;
            
             if(y > 150 && y < 250 && x > 500 && x < 750) {
                 backgroundCode = 5;
                 this.removeEventListener("click", arguments.callee, false);
             }
                
             if(y > 300 && y < 400 && x > 500 && x < 750) {
                 backgroundCode = 2;
                 this.removeEventListener("click", arguments.callee, false);
             }
                    
             if(y > 450 && y < 550 && x > 500 && x < 750) {
                 backgroundCode = 4;
                 this.removeEventListener("click", arguments.callee, false);
             }
        });   
        
    }
    
    //game tourism
    if(backgroundCode == 2) {
        
        cpt++;
        
        if (cpt > 140){
            points = 100;
            backgroundCode = 3;
            cpt = 0;
        }
    }
    
    //win tourism
    if(backgroundCode == 3) {  
        
        canvas.addEventListener("mouseup", function(event){
            let x = event.pageX - canvas.offsetLeft,
                y = event.pageY - canvas.offsetTop;
            
            if(y > 370 && y < 436 && x > 63 && x < 328) {
                backgroundCode = 100     //hall of fame
                ctx.clearRect(0, 0, canvas.width, canvas.height); //tout effacer
                this.removeEventListener("mouseup", arguments.callee, false);//virer l'event listener
            }
        });  
    }    
    
    //game social
    if(backgroundCode == 4) {
        
        cpt++;
        
        canvas.addEventListener("click", function(event){
            let x = event.pageX - canvas.offsetLeft,
                y = event.pageY - canvas.offsetTop;
            
            if(y > 433 && y < 473 && x > 262 && x < 542 && cpt >= 180) {
                backgroundCode = 1;
                actual_texte1 = 0;
                actual_texte = 0;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                this.removeEventListener("click", arguments.callee, false);
            }
        });       
    }
           
    //Bax accueil
    if(backgroundCode == 5) {
        
        //move to the bax challenge
        canvas.addEventListener("click", function(){
            backgroundCode = 6; //the bax challenge
            pointsTemp = 1000;
            this.removeEventListener("click", arguments.callee, false);
        });  
    }
    
    //Bax challenge
    if(backgroundCode == 6) {
        
        //play the music
        if(!musicPlaying){
            musicPlaying = true;
            gameMusicBax.play();
            gameMusicBax.loop = true;
        }
        
        //KeyListener for the moves and the shoot for the player 
        if(!shipDestroyed) {
            //ship moves
            if (87 in keysDown) { // Player holding up (w)
                if(ship.y >= 55) // Limitation because of the border
				ship.y -= ship.speed * modifier;
		    }
            if (83 in keysDown) { // Player holding down (s)
                if(ship.y <= canvas.height-67) // Limitation because of the border
				ship.y += ship.speed * modifier;
		    }
            if (65 in keysDown) { // Player holding left (a)
                if(ship.x >= 5) // Limitation because of the border
				ship.x -= ship.speed * modifier;
            }
            if (68 in keysDown) { // Player holding right (d)
                if(ship.x <= canvas.width-55) // Limitation because of the border
				ship.x += ship.speed * modifier;
            }
        
            //ship shoot
            if (106 in keysDown) { // Player shoot (*)
                if(ship.hp > 0){
                    shoot();
                }
            }
        }
        
        //If the player is dead
        if(shipImmortal) {
            cptship++;
            
            //ship dead sound
            if(cptship == 1){
                shipDeadMusic.play();
            }
            
            //points managment
            if(cptship == 1 && remediation == false && ship.hp > 0) {
                if(pointsTemp - 50 >= 0) {
                    pointsTemp -= 50;
                } else {
                    pointsTemp = 0;   
                }
            }
            
            if(cptship == 40) {
                ship.x = 375;
                ship.y = 510;
                shipDestroyed = false;
            }
            
            if(cptship >= 80) {
                cptship = 0;
                shipImmortal = false;
                if(ship.hp <= 0){
                    if(remediation == false) {
                        
                        remediation = true
                        backgroundCodeStock = backgroundCode;
                        backgroundCode = 54; //remediation
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        
                        
                    } else {
                        backgroundCode = 52; //loose
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        
                        //pause + reset the music
                        gameMusicBax.pause();
                        gameMusicBax= new Audio("music/gameMusic.mp3");
                        musicPlaying = false;
                    }
                }
            }
        }
        
        //ennemy apprears
        ennemyTrySpawn();
        
        //ennemy move
        for(let j = 0; j < 20; j++) {
            let ennemyTest = ennemyPool[j];
            if(ennemyTest.alive == true) {
                ennemyTest.y += 2; //number = speed
                if(ennemyTest.y > 600) {
                    ennemyTest.alive = false;
                    if(pointsTemp - 10 >= 0) {
                        pointsTemp -= 10;
                    }
                }
            }
        }
        
        //ennemy shoot
        ennemyShoot();
        
        //update the player shoot
        for(let j = 0; j < 50; j++) {
            let laserTest = laserPool[j];
            if(laserTest.alive == true) {
                laserTest.y -= 15; //number = speed
                if(laserTest.y < -25) {
                    laserTest.alive = false;
                }
            }
        }
        
        //update ennemy shoot
        for(let j = 0; j < 50; j++) {
            let bulletTest = bulletPool[j];
            if(bulletTest.alive == true) {
                bulletTest.y += 10; //number = speed
                if(bulletTest.y > 615) {
                    bulletTest.alive = false;
                }
            }
        }
        
        //collisions with the player (bullet)
        for(let j = 0; j < 50; j++) {
            let bulletTest = bulletPool[j];
            if(bulletTest.alive == true) {
                
                let testx = bulletTest.x + 5; //the center of the bullet
                let testy = bulletTest.y + 5; //the center of the bullet
                
                if(testx >= ship.x && testx <= ship.x+50 && testy >= ship.y && testy <= ship.y+65){
                    
                    bulletTest.alive = false;
                    
                    if(!shipImmortal){
                        ship.hp--;
                        shipDestroyed = true;
                        shipImmortal = true;
                    }
                    
                }
                
            }
        }
        
        //collision with the player (ship)
        for(let j = 0; j < 20; j++) {
            let ennemyTest = ennemyPool[j];
            if(ennemyTest.alive == true) {
                
                if(ennemyTest.x >= ship.x-45 && ennemyTest.x <= ship.x+50 && ennemyTest.y >= ship.y-40 && ennemyTest.y <= ship.y+60){
                    
                    ennemyTest.alive = false;
                    ennemyDestroyed++;
                    
                    if(!shipImmortal){
                        ship.hp--;
                        shipDestroyed = true;
                        shipImmortal = true;
                    }
                }
            }
        }
        
        //ennemy hit ?
        //I try each laser alive with each ennemy alive
        for(let j = 0; j < 50; j++) {
            
            let laserTest = laserPool[j];
            if(laserTest.alive == true) {
                
                for(let j = 0; j < 20; j++) {
                    let ennemyTest = ennemyPool[j];
                    if(ennemyTest.alive == true) {   
                        
                        //collision
                        if(laserTest.x >= ennemyTest.x-4 && laserTest.x <= ennemyTest.x +55 && laserTest.y >= ennemyTest.y-22 && laserTest.y <= ennemyTest.y+51){
                            laserTest.alive = false;
                            ennemyTest.life--;
                            
                            if(ennemyTest.life == 0) {
                                ennemyTest.alive = false;
                                ennemyDestroyed++;
                            }
                        }
                        
                    }
                }
                
            }
        }
        
        
        //win the challenge
        if(ennemyDestroyed == 25) {
            
            cptend++;
            
            //errase all ennemys
            for(let j = 0; j < 20; j++) {
                ennemyPool[j].alive = false;
            }
            
            //errase all bullet
            for(let j = 0; j < 50; j++) {
                bulletPool[j].alive = false;
            }
        
            if(cptend >= 70){
                cptend = 0;
                
                //errase all laser
                for(let j = 0; j < 50; j++) {
                    laserPool[j].alive = false;
                }
                
                ship.x = 375;
                ship.y = 510;
                ship.hp = 3;
                
                ennemyDestroyed = 0;
                backgroundCode = 10; //win intermediate for bax           
             
                //stock and reset the pointsTemp
                points += pointsTemp;
                pointsTemp = 1000;
             
                remediation = false;
            
                //pause + reset the music
                gameMusicBax.pause();
                gameMusicBax = new Audio("music/gameMusic.mp3");
                musicPlaying = false;
            }
        }
        
    }
    
    //intermediate for bax
    if(backgroundCode == 10) {
        //move to werner welcome
        canvas.addEventListener("click", function(){
            backgroundCode = 15; //the werner welcome
            this.removeEventListener("click", arguments.callee, false);
        });  
    }
    
    //werner welcome
    if(backgroundCode == 15) {
        
        //move the the werner challenge
        canvas.addEventListener("click", function(){
                 backgroundCode = 16; //the werner challenge
                 this.removeEventListener("click", arguments.callee, false);
        });  
    }
    
    //werner challenge
    if(backgroundCode == 16) {
        
        //play the music
        if(!musicPlaying){
            musicPlaying = true;
            gameMusicWerner.play();
            gameMusicWerner.loop = true;
        }
        
         //KeyListener for the moves and the shoot for the player 
        if(!shipDestroyed) {
            //ship moves
            if (87 in keysDown) { // Player holding up (w)
                if(ship.y >= 55) // Limitation because of the border
				ship.y -= ship.speed * modifier;
		    }
            if (83 in keysDown) { // Player holding down (s)
                if(ship.y <= canvas.height-67) // Limitation because of the border
				ship.y += ship.speed * modifier;
		    }
            if (65 in keysDown) { // Player holding left (a)
                if(ship.x >= 5) // Limitation because of the border
				ship.x -= ship.speed * modifier;
            }
            if (68 in keysDown) { // Player holding right (d)
                if(ship.x <= canvas.width-55) // Limitation because of the border
				ship.x += ship.speed * modifier;
            }
        
            //ship shoot
            if (106 in keysDown) { // Player shoot (*)
                if(ship.hp > 0){
                    shoot();
                }
            }
        }
        
        //If the player is dead
        if(shipImmortal) {
            cptship++;
            
            //ship dead sound
            if(cptship == 1) {
                shipDeadMusic.play();
            }
            
            if(cptship == 40) {
                ship.x = 375;
                ship.y = 510;
                shipDestroyed = false;
            }
            
            if(cptship >= 80) {
                cptship = 0;
                shipImmortal = false;
                if(ship.hp <= 0){
                    if(remediation == false) {
                        
                        remediation = true
                        backgroundCodeStock = backgroundCode;
                        backgroundCode = 54; //remediation
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        
                    } else {
                        backgroundCode = 52;
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        
                        //pause + reset the music
                        gameMusicWerner.pause();
                        gameMusicWerner = new Audio("music/gameMusic.mp3");
                        musicPlaying = false;
                    }
                }
            }
        }
        
        //spawn orb 
        orbTrySpawn();
        
        //orb move
        if(orb.alive == true) {
            orb.y +=5;
            if(orb.y >= 626) {
                orb.alive = false;
                if(pointsTemp - 50 >= 0) {
                    pointsTemp -= 50;
                }
            }
        }
        
        //ennemy apprears
        ennemyTrySpawn();
        
        //ennemy move
        for(let j = 0; j < 20; j++) {
            let ennemyTest = ennemyPool[j];
            if(ennemyTest.alive == true) {
                ennemyTest.y += 2; //number = speed
                if(ennemyTest.y > 660) {
                    ennemyTest.alive = false;
                }
            }
        }
        
        //ennemy shoot
        ennemyShoot();
        
        //update the player shoot
        for(let j = 0; j < 50; j++) {
            let laserTest = laserPool[j];
            if(laserTest.alive == true) {
                laserTest.y -= 15; //number = speed
                if(laserTest.y < -25) {
                    laserTest.alive = false;
                }
            }
        }
        
        //update ennemy shoot
        for(let j = 0; j < 50; j++) {
            let bulletTest = bulletPool[j];
            if(bulletTest.alive == true) {
                bulletTest.y += 10; //number = speed
                if(bulletTest.y > 615) {
                    bulletTest.alive = false;
                }
            }
        }
        
        //collisions with the player (bullet)
        for(let j = 0; j < 50; j++) {
            let bulletTest = bulletPool[j];
            if(bulletTest.alive == true) {
                
                let testx = bulletTest.x + 5; //the center of the bullet
                let testy = bulletTest.y + 5; //the center of the bullet
                
                if(testx >= ship.x && testx <= ship.x+50 && testy >= ship.y && testy <= ship.y+65){
                    
                    bulletTest.alive = false;
                    
                    if(!shipImmortal){
                        ship.hp--;
                        shipDestroyed = true;
                        shipImmortal = true;
                    }
                    
                }
                
            }
        }
        
        //collision with the player (ship)
        for(let j = 0; j < 20; j++) {
            let ennemyTest = ennemyPool[j];
            if(ennemyTest.alive == true) {
                
                if(ennemyTest.x >= ship.x-45 && ennemyTest.x <= ship.x+50 && ennemyTest.y >= ship.y-40 && ennemyTest.y <= ship.y+60){
                    
                    ennemyTest.alive = false;
                    
                    if(!shipImmortal){
                        ship.hp--;
                        shipDestroyed = true;
                        shipImmortal = true;
                    }
                }
            }
        }
        
        //ennemy hit ?
        //I try each laser alive with each ennemy alive
        for(let j = 0; j < 50; j++) {
            
            let laserTest = laserPool[j];
            if(laserTest.alive == true) {
                
                for(let j = 0; j < 20; j++) {
                    let ennemyTest = ennemyPool[j];
                    if(ennemyTest.alive == true) {   
                        
                        if(laserTest.x >= ennemyTest.x-4 && laserTest.x <= ennemyTest.x +55 && laserTest.y >= ennemyTest.y-22 && laserTest.y <= ennemyTest.y+51){
                            laserTest.alive = false;
                            ennemyTest.life--;
                            
                            if(ennemyTest.life == 0) {
                                ennemyTest.alive = false;
                            }
                        }
                        
                    }
                }
                
            }
        }
        
        //the orb is catch ?
        if(ship.x >= orb.x-50 && ship.x <= orb.x+25 && ship.y >= orb.y-65 && ship.y <= orb.y+25){
            if(orb.alive == true){
                orb.alive = false;
                orbsCollected++;
            }
        }
        
        
        //win
        if(orbsCollected == 10){
            cptend++;
            
            //errase all enemys
            for(let j = 0; j < 20; j++) {
                ennemyPool[j].alive = false;
            }
        
            
            //errase all bullet
            for(let j = 0; j < 50; j++) {
                bulletPool[j].alive = false;
            }
            
            orb.alive = false;
            
            if(cptend > 70){
                cptend = 0;
                
                //errase all laser
                for(let j = 0; j < 50; j++) {
                    laserPool[j].alive = false;
                }

                ship.x = 375;
                ship.y = 510;
                ship.hp = 3;
        
            
                orbsCollected = 0;
                backgroundCode = 20; //win intermediate for werner
            
                //stock and reset points
                points += pointsTemp;
                pointsTemp = 1000;
                
                remediation = false;
            
                //pause + reset the music
                gameMusicWerner.pause();
                gameMusicWerner = new Audio("music/gameMusic.mp3");
                musicPlaying = false;
            }
        }
    }
    
    //win intermediate for werner
    if(backgroundCode == 20) {
        //move to Studer welcome
        canvas.addEventListener("click", function(){
            backgroundCode = 25; //the Studer welcome
            this.removeEventListener("click", arguments.callee, false);
        });  
    }
    
    //Studer welcome
    if(backgroundCode == 25) {
        
        //move the the Studer challenge
        canvas.addEventListener("click", function(){
            backgroundCode = 26; //the Studer challenge
            timerBase = Date.now();
            this.removeEventListener("click", arguments.callee, false);
        });
    }
    
    //Studer challenge
    if(backgroundCode == 26) {
        
        //play the music
        if(!musicPlaying){
            musicPlaying = true;
            gameMusicStuder.play();
            gameMusicStuder.loop = true;
        }
        
        //timer managment
        timerCompare = Date.now();
        
        //KeyListener for the moves and the shoot for the player 
        if(!shipDestroyed) {
            //ship moves
            if (87 in keysDown) { // Player holding up (w)
                if(ship.y >= 55) // Limitation because of the border
				ship.y -= ship.speed * modifier;
		    }
            if (83 in keysDown) { // Player holding down (s)
                if(ship.y <= canvas.height-67) // Limitation because of the border
				ship.y += ship.speed * modifier;
		    }
            if (65 in keysDown) { // Player holding left (a)
                if(ship.x >= 5) // Limitation because of the border
				ship.x -= ship.speed * modifier;
            }
            if (68 in keysDown) { // Player holding right (d)
                if(ship.x <= canvas.width-55) // Limitation because of the border
				ship.x += ship.speed * modifier;
            }
        
            //ship shoot
            if (106 in keysDown) { // Player shoot (*)
                if(ship.hp > 0){
                    shoot();
                }
            }
        }
        
        //If the player is dead
        if(shipImmortal) {
            cptship++;
            
            //ship dead sound
            if(cptship == 1){
                shipDeadMusic.play();
            }
            
            //points managment
            if(cptship == 1 && remediation == false && ship.hp > 0){
                if(pointsTemp - 50 >= 0){
                    pointsTemp -= 50;
                }
            }
            
            if(cptship == 40) {
                ship.x = 375;
                ship.y = 510;
                shipDestroyed = false;
            }
            
            if(cptship >= 80) {
                cptship = 0;
                shipImmortal = false;
                if(ship.hp <= 0){
                    if(remediation == false) {
                        
                        remediation = true
                        backgroundCodeStock = backgroundCode;
                        backgroundCode = 54; //remediation
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        
                    } else {
                        backgroundCode = 52;
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        
                        //pause + reset the music
                        gameMusicStuder.pause();
                        gameMusicStuder = new Audio("music/gameMusic.mp3");
                        musicPlaying = false;
                    }
                }
            }
        }
        
        //ennemy apprears
        ennemyTrySpawn();
        
        //ennemy move
        for(let j = 0; j < 20; j++) {
            let ennemyTest = ennemyPool[j];
            if(ennemyTest.alive == true) {
                ennemyTest.y += 2; //number = speed
                if(ennemyTest.y > 660) {
                    ennemyTest.alive = false;
                    if(pointsTemp - 1 >= 0){
                        pointsTemp -= 2;
                    }
                }
            }
        }
        
        //ennemy shoot
        ennemyShoot();
        
        //update the player shoot
        for(let j = 0; j < 50; j++) {
            let laserTest = laserPool[j];
            if(laserTest.alive == true) {
                laserTest.y -= 15; //number = speed
                if(laserTest.y < -25) {
                    laserTest.alive = false;
                }
            }
        }
        
        //update ennemy shoot
        for(let j = 0; j < 50; j++) {
            let bulletTest = bulletPool[j];
            if(bulletTest.alive == true) {
                bulletTest.y += 10; //number = speed
                if(bulletTest.y > 615) {
                    bulletTest.alive = false;
                }
            }
        }
        
        //collisions with the player (bullet)
        for(let j = 0; j < 50; j++) {
            let bulletTest = bulletPool[j];
            if(bulletTest.alive == true) {
                
                let testx = bulletTest.x + 5; //the center of the bullet
                let testy = bulletTest.y + 5; //the center of the bullet
                
                if(testx >= ship.x && testx <= ship.x+50 && testy >= ship.y && testy <= ship.y+65){
                    
                    bulletTest.alive = false;
                    
                    if(!shipImmortal){
                        ship.hp--;
                        shipDestroyed = true;
                        shipImmortal = true;
                    }
                    
                }
                
            }
        }
        
        //collision with the player (ship)
        for(let j = 0; j < 20; j++) {
            let ennemyTest = ennemyPool[j];
            if(ennemyTest.alive == true) {
                
                if(ennemyTest.x >= ship.x-45 && ennemyTest.x <= ship.x+50 && ennemyTest.y >= ship.y-40 && ennemyTest.y <= ship.y+60){
                    
                    ennemyTest.alive = false;
                    
                    if(!shipImmortal){
                        ship.hp--;
                        shipDestroyed = true;
                        shipImmortal = true;
                    }
                }
            }
        }
        
        //ennemy hit ?
        //I try each laser alive with each ennemy alive
        for(let j = 0; j < 50; j++) {
            
            let laserTest = laserPool[j];
            if(laserTest.alive == true) {
                
                for(let j = 0; j < 20; j++) {
                    let ennemyTest = ennemyPool[j];
                    if(ennemyTest.alive == true) {   
                        
                        if(laserTest.x >= ennemyTest.x-4 && laserTest.x <= ennemyTest.x +55 && laserTest.y >= ennemyTest.y-22 && laserTest.y <= ennemyTest.y+51){
                            laserTest.alive = false;
                            ennemyTest.life-=2;
                            
                            if(ennemyTest.life == 0) {
                                ennemyTest.alive = false;
                            }
                        }
                        
                    }
                }
                
            }
        }
        
        //win the challenge (120 secondes)
        if(parseInt((timerCompare-timerBase)/1000) >= 120) {
            cptend++;
            
            //errase all ennemys
            for(let j = 0; j < 20; j++) {
                ennemyPool[j].alive = false;
            }
        
            
            //errase all bullet
            for(let j = 0; j < 50; j++) {
                bulletPool[j].alive = false;
                
            }
        
            if(cptend > 70) {
                cptend = 0;
                
                //errase all laser
                for(let j = 0; j < 50; j++) {
                    laserPool[j].alive = false;
                
                }            
                
                backgroundCode = 30; //win intermediate for Studer
            
                ship.x = 375;
                ship.y = 480;
                ship.hp = 3;
            
                //stock and reset the pointsTemp
                points += pointsTemp;
                pointsTemp = 1000;
            
                remediation = false;
            
                //pause + reset the music
                gameMusicStuder.pause();
                gameMusicStuder = new Audio("music/gameMusic.mp3");
                musicPlaying = false;
            } 
        }
    }
    
    //win intermediate for Studer
    if(backgroundCode == 30) {
        //move to Lamon welcome
        canvas.addEventListener("click", function(){
            backgroundCode = 35; //the Lamon welcome
            this.removeEventListener("click", arguments.callee, false);
        });  
    }
    
    //lamon accueil
    if(backgroundCode == 35) {
        
        //move the the lamon challenge
        canvas.addEventListener("click", function(){
            backgroundCode = 36; //the lamon challenge
            timerBase = Date.now();
            this.removeEventListener("click", arguments.callee, false);
        }); 
    }
    
    //lamon challenge
    if(backgroundCode == 36) {
       
        //play the music
        if(!musicPlaying){
            musicPlaying = true;
            gameMusicLamon.play();
            gameMusicLamon.loop = true;
        }
        
        //timer managment
        timerCompare = Date.now();
        
        //KeyListener for the moves and the shoot for the player 
        if(!shipDestroyed) {
            //ship moves
            if (87 in keysDown) { // Player holding up (w)
                if(ship.y >= 55) // Limitation because of the border
				ship.y -= ship.speed * modifier;
		    }
            if (83 in keysDown) { // Player holding down (s)
                if(ship.y <= canvas.height-125) // Limitation because of the border
				ship.y += ship.speed * modifier;
		    }
            if (65 in keysDown) { // Player holding left (a)
                if(ship.x >= 5) // Limitation because of the border
				ship.x -= ship.speed * modifier;
            }
            if (68 in keysDown) { // Player holding right (d)
                if(ship.x <= canvas.width-55) // Limitation because of the border
				ship.x += ship.speed * modifier;
            }
        
            //ship shoot
            if (106 in keysDown) { // Player shoot (*)
                if(ship.hp > 0){
                    shoot();
                }
            }
        }
        
        //If the player is dead
        if(shipImmortal) {
            cptship++;
            
            //ship dead sound
            if(cptship == 1){
                shipDeadMusic.play();
            }
            
            if(cptship == 1 && remediation == false && ship.hp > 0){
                if(pointsTemp - 100 >= 0){
                    pointsTemp -= 100;
                }
            }
            
            if(cptship == 40) {
                ship.x = 375;
                ship.y = 482;
                shipDestroyed = false;
            }
            
            if(cptship >= 80) {
                cptship = 0;
                shipImmortal = false;
                if(ship.hp <= 0){
                    if(remediation == false) {
                        
                        remediation = true
                        backgroundCodeStock = backgroundCode;
                        backgroundCode = 54; //remediation
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        
                    } else {
                        backgroundCode = 52;
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        
                        //pause + reset the music
                        gameMusicLamon.pause();
                        gameMusicLamon = new Audio("music/gameMusic.mp3");
                        musicPlaying = false;
                    }
                }
            }
        }
        
        //meteorite apprears
        meteorTrySpawn();
        
        //meteorite move + hit the ground ?
        for(let j = 0; j < 20; j++) {
            let meteorTest = meteorPool[j];
            if(meteorTest.alive == true) {
                meteorTest.y += 3; //number = speed
                if(meteorTest.y > 470) {
                    meteorTest.alive = false;
                    groundHit--;
                    pointsTemp -= 150;
                    
                }
            }
        }
        
        //update the player shoot
        for(let j = 0; j < 50; j++) {
            let laserTest = laserPool[j];
            if(laserTest.alive == true) {
                laserTest.y -= 15; //number = speed
                if(laserTest.y < -25) {
                    laserTest.alive = false;
                }
            }
        }
        
        //collisions with the player (meteorite)
        for(let j = 0; j < 20; j++) {
            let meteorTest = meteorPool[j];
            if(meteorTest.alive == true) {
                
                if(meteorTest.x >= ship.x-45 && meteorTest.x <= ship.x+35 && meteorTest.y >= ship.y-70 && meteorTest.y <= ship.y+40){
                    
                    meteorTest.alive = false;
                    
                    if(!shipImmortal){
                        ship.hp--;
                        shipDestroyed = true;
                        shipImmortal = true;
                    }
                    
                }
                
            }
        }
        
        //collision laser with meteor (try each laser with each meteor)
        for(let j = 0; j < 50; j++) {
            
            let laserTest = laserPool[j];
            if(laserTest.alive == true) {
                
                for(let j = 0; j < 20; j++) {
                    let meteorTest = meteorPool[j];
                    if(meteorTest.alive == true) {   
                        
                        if(laserTest.x >= meteorTest.x-4 && laserTest.x <= meteorTest.x +55 && laserTest.y >= meteorTest.y-22 && laserTest.y <= meteorTest.y+51){
                            laserTest.alive = false;
                            meteorTest.life--;
                            
                            if(meteorTest.life == 0) {
                                meteorTest.alive = false;
                            }
                        }
                    }
                }
            }
        }
        
        //loose the challenge (3 meteor hit the ground)
        if(groundHit == 0) {
            if(!remediation){
                remediation = true
                backgroundCodeStock = backgroundCode;
                backgroundCode = 54; //remediation
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            } else {
                backgroundCode = 52;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        }
        
        //win the challenge
        if(parseInt((timerCompare-timerBase)/1000) >= 120) {
            cptend++;
            
            //errase all meteor
            for(let j = 0; j < 20; j++) {
                meteorPool[j].alive = false;
            }
        
            if(cptend > 70){
                cptend = 0;
                
                //errase all laser
                for(let j = 0; j < 50; j++) {
                    laserPool[j].alive = false;
                }
                
                groundHit = 3
                backgroundCode = 40; //win intermediate for lamon
            
                ship.x = 375;
                ship.y = 480;
                ship.hp = 3;
            
                //stock and reset the pointsTemp
                points += pointsTemp;
                pointsTemp = 1000;
            
                remediation = false;
                  
                //pause + reset the music
                gameMusicLamon.pause();
                gameMusicLamon = new Audio("music/gameMusic.mp3");
                musicPlaying = false;   
            }
        }
    }
    
    //win intermediate for lamon
    if(backgroundCode == 40) {
        
        //move to Russo and widmer welcome
        canvas.addEventListener("click", function(){
            backgroundCode = 45; //the Russo and widmer welcome
            this.removeEventListener("click", arguments.callee, false);
        }); 
    }
    
    //russo widmer accueil
    if(backgroundCode == 45) {
     
        //move the the russo widmer challenge
        canvas.addEventListener("click", function(){
                 backgroundCode = 46; //the russo widmer challenge
                 this.removeEventListener("click", arguments.callee, false);
        }); 
    }
    
    //russo widmer challenge
    if(backgroundCode == 46) {
        
        //play the music
        if(!musicPlaying){
            musicPlaying = true;
            gameMusicRW.play();
            gameMusicRW.loop = true;
        }
        
        //KeyListener for the moves and the shoot for the player 
        if(!shipDestroyed) {
            //ship moves
            if (87 in keysDown) { // Player holding up (w)
                if(ship.y >= 55) // Limitation because of the border
				ship.y -= ship.speed * modifier;
		    }
            if (83 in keysDown) { // Player holding down (s)
                if(ship.y <= canvas.height-67) // Limitation because of the border
				ship.y += ship.speed * modifier;
		    }
            if (65 in keysDown) { // Player holding left (a)
                if(ship.x >= 5) // Limitation because of the border
				ship.x -= ship.speed * modifier;
            }
            if (68 in keysDown) { // Player holding right (d)
                if(ship.x <= canvas.width-55) // Limitation because of the border
				ship.x += ship.speed * modifier;
            }
        
            //ship shoot
            if (106 in keysDown) { // Player shoot (*)
                if(ship.hp > 0){
                    shoot();
                }
            }
        }
        
        //If the player is dead
        if(shipImmortal) {
            cptship++;
            
            //ship dead sound
            if(cptship == 1){
                shipDeadMusic.play();
            }
            
            //point managment
            if(cptship == 1 && remediation == false && ship.hp > 0) {
                if(pointsTemp - 50 >= 0) {
                    pointsTemp -= 50;
                } else {
                    pointsTemp = 0;   
                }
            }
            
            if(cptship == 40) {
                ship.x = 375;
                ship.y = 510;
                shipDestroyed = false;
            }
            
            if(cptship >= 80) {
                cptship = 0;
                shipImmortal = false;
                if(ship.hp <= 0){
                    if(remediation == false) {
                        
                        remediation = true
                        backgroundCodeStock = backgroundCode;
                        backgroundCode = 54; //remediation
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        
                    } else {
                        backgroundCode = 52;
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        
                        //pause + reset the music
                        gameMusicRW.pause();
                        gameMusicRW = new Audio("music/gameMusic.mp3");
                        musicPlaying = false;
                    }
                }
            }
        }
        
        //ennemy apprears
        ennemyTryWRSpawn();
        
        //ennemy move
        for(let j = 0; j < 20; j++) {
            let ennemyTest = ennemyPool[j];
            if(ennemyTest.alive == true) {
                ennemyTest.y += 2; //number = speed
                if(ennemyTest.y > 660) {
                    ennemyTest.alive = false;
                    if(pointsTemp - 10 >= 0) {
                        pointsTemp -= 10;
                    }
                }
            }
        }
        
        //ennemy shoot
        ennemyShoot();
        
        //update the player shoot
        for(let j = 0; j < 50; j++) {
            let laserTest = laserPool[j];
            if(laserTest.alive == true) {
                laserTest.y -= 15; //number = speed
                if(laserTest.y < -25) {
                    laserTest.alive = false;
                }
            }
        }
        
        //update ennemy shoot
        for(let j = 0; j < 50; j++) {
            let bulletTest = bulletPool[j];
            if(bulletTest.alive == true) {
                bulletTest.y += 10; //number = speed
                if(bulletTest.y > 615) {
                    bulletTest.alive = false;
                }
            }
        }
        
        //collisions with the player (bullet)
        for(let j = 0; j < 50; j++) {
            let bulletTest = bulletPool[j];
            if(bulletTest.alive == true) {
                
                let testx = bulletTest.x + 5; //the center of the bullet
                let testy = bulletTest.y + 5; //the center of the bullet
                
                if(testx >= ship.x && testx <= ship.x+50 && testy >= ship.y && testy <= ship.y+65){
                    
                    bulletTest.alive = false;
                    
                    if(!shipImmortal){
                        ship.hp--;
                        shipDestroyed = true;
                        shipImmortal = true;
                    }
                    
                }
                
            }
        }
        
        //collision with the player (ship)
        for(let j = 0; j < 20; j++) {
            let ennemyTest = ennemyPool[j];
            if(ennemyTest.alive == true) {
                
                if(ennemyTest.x >= ship.x-45 && ennemyTest.x <= ship.x+50 && ennemyTest.y >= ship.y-40 && ennemyTest.y <= ship.y+60){
                    
                    ennemyTest.alive = false;
                    ennemyDestroyed++;
                    
                    if(!shipImmortal){
                        ship.hp--;
                        shipDestroyed = true;
                        shipImmortal = true;
                    }
                }
            }
        }
        
        //ennemy hit ?
        //I try each laser alive with each ennemy alive
        for(let j = 0; j < 50; j++) {
            
            let laserTest = laserPool[j];
            if(laserTest.alive == true) {
                
                for(let j = 0; j < 20; j++) {
                    let ennemyTest = ennemyPool[j];
                    if(ennemyTest.alive == true) {   
                        
                        if(laserTest.x >= ennemyTest.x-4 && laserTest.x <= ennemyTest.x +55 && laserTest.y >= ennemyTest.y-22 && laserTest.y <= ennemyTest.y+51){
                            laserTest.alive = false;
                            ennemyTest.life--;
                            
                            if(ennemyTest.life == 0) {
                                ennemyTest.alive = false;
                                ennemyDestroyed++;
                            }
                        }
                        
                    }
                }
                
            }
        }
        
        
        //win the challenge
        if(ennemyDestroyed == 30) {
            cptend++;
            
            //errase all ennemys
            for(let j = 0; j < 20; j++) {
                ennemyPool[j].alive = false;
            }
        
            
            //errase all bullet
            for(let j = 0; j < 50; j++) {
                bulletPool[j].alive = false;
            }
            
            if(cptend > 70) {
                cptend = 0;
                
                //errase all laser
                for(let j = 0; j < 50; j++) {
                    laserPool[j].alive = false;
                }
                
                ennemyDestroyed = 0;
                backgroundCode = 49; //win intermediate for Russo and Widmer
            
                ship.x = 375;
                ship.y = 510;
                ship.hp = 3;            
            
                //stock and reset the pointsTemp
                points += pointsTemp;
                pointsTemp = 1000;
                
                remediation = false;
            
                //pause + reset the music
                gameMusicRW.pause();
                gameMusicRW = new Audio("music/gameMusic.mp3");
                musicPlaying = false;
            }
        }
    }
    
    //win intermediate for Russo and Widmer
    if(backgroundCode == 49) {
        
        //show the drag and drop div
            $("#dragdropzone").show();
    }
    
    //final boss welcome
    if(backgroundCode == 50) {
        
        //play the music
        if(!musicPlaying){
            musicPlaying = true;
            bossMusic.play();
            bossMusic.loop = true;
        }
        
        //hide the drag and drop div
        $("#dragdropzone").hide();
        
        canvas.addEventListener("click", function(){
            
            if(cpt > 240) {
                backgroundCode = 51;
                actual_texte3 = 0;
                actual_texte2 = 0;
                actual_texte1 = 0;
                actual_texte = 0;
                cpt = 0;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                this.removeEventListener("click", arguments.callee, false);
            }
        });       
    }
    
    //final boss
    if(backgroundCode == 51) {
        
        //KeyListener for the moves and the shoot for the player 
        if(!shipDestroyed) {
            //ship moves
            if (87 in keysDown) { // Player holding up (w)
                if(ship.y >= 0) // Limitation because of the walls
				ship.y -= ship.speed * modifier;
		    }
            if (83 in keysDown) { // Player holding down (s)
                if(ship.y <= canvas.height-67) // Limitation because of the wall
				ship.y += ship.speed * modifier;
		    }
            if (65 in keysDown) { // Player holding left (a)
                if(ship.x >= 5) // Limitation because of the wall
				ship.x -= ship.speed * modifier;
            }
            if (68 in keysDown) { // Player holding right (d)
                if(ship.x <= canvas.width-55) // Limitation because of the wall
				ship.x += ship.speed * modifier;
            }
        
            //ship shoot
            if (106 in keysDown) { // Player shoot (*)
                if(ship.hp > 0){
                    shoot();
                }
            }
        }
        
        //If the player is dead
        if(shipImmortal) {
            cptship++;
            
            //ship dead sound
            if(cptship == 1){
                shipDeadMusic.play();
            }
            
            //points managment
            if(cptship == 1 && remediation == false && ship.hp > 0) {
                pointsTemp -= 200;
            }
            
            if(cptship == 40) {
                ship.x = 375;
                ship.y = 510;
                shipDestroyed = false;
            }
            
            if(cptship >= 80) {
                cptship = 0;
                shipImmortal = false;
                if(ship.hp <= 0){
                    if(!remediation) {
                        
                        remediation = true;
                        backgroundCodeStock = backgroundCode;
                        backgroundCode = 54; //remediation
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        
                    } else {
                        backgroundCode = 52;
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        
                        //pause + reset the music
                        bossMusic.pause();
                        bossMusic = new Audio("music/beuchat.mp3");
                        musicPlaying = false;
                    }
                }
            }
        }
        
        //If the dragon is alive, move and shoot
        if(dragon.hp > 0){
            //move boss
            dragonmove();
        
            //the dragon shoot
            fireShoot();
        }
        
        //If the dragon is dead => victory
        if(dragon.hp == 0){
            
            cpt++;
            
            if(cpt > 70) {
                cpt = 0;
                backgroundCode = 53; //victory IT
                points += pointsTemp;
                
                //pause + reset the music
                bossMusic.pause();
                bossMusic = new Audio("music/beuchat.mp3");
                musicPlaying = false;
            }
        }
        
        //update the player shoot
        for(let j = 0; j < 50; j++) {
            let laserTest = laserPool[j];
            if(laserTest.alive == true) {
                laserTest.y -= 15; //number = speed
                if(laserTest.y < -25) {
                    laserTest.alive = false;
                }
            }
        }
        
        //update the dragon shoot
        for(let n = 0; n < 100; n++) {
            let fireTest = firePool[n];
            if(fireTest.alive == true) {
                fireTest.x += 8 * fireTest.vx; //number = speed
                fireTest.y += 8 * fireTest.vy; //number = speed
                if(fireTest.y < -25 || fireTest.y > 605 || fireTest.x < -25 || fireTest.x > 805) {
                    fireTest.alive = false;
                }
            }
        }
        
        //collision check (with fire) (ship destroy ?)
        for(let n = 0; n < 100; n++) {
            let fireTest = firePool[n];
            let testx = fireTest.x + 10; //the center of the fire
            let testy = fireTest.y + 10; //the center of the fire
            if(fireTest.alive == true){
                if(testy >= ship.y+5 && testy <= ship.y + 60 && testx >= ship.x+5 && testx <= ship.x + 45) {
                    fireTest.alive = false;
                    if(!shipImmortal){
                        ship.hp--;
                        shipDestroyed = true;
                        shipImmortal = true;
                    }
                }
            }
        }
        
        //collision check (with the dragon) (ship destroy ?)
        if(dragon.hp > 0) {
            
            //hit the wings of the dragon
            if(ship.x >= dragon.x-10 && ship.x <= dragon.x+356 && ship.y >= dragon.y+23 && ship.y <= dragon.y+185){
                
                if(!shipImmortal){
                        ship.hp--;
                        shipDestroyed = true;
                        shipImmortal = true;
                    }
            }
            
            //hit the head or the tail of the dragon
            if(ship.x >= dragon.x+139 && ship.x <= dragon.x+209 && ship.y >= dragon.y-60 && ship.y <= dragon.y+227){
                
                if(!shipImmortal){
                        ship.hp--;
                        shipDestroyed = true;
                        shipImmortal = true;
                    }
            }
            
        }
        
        //collision check (boss hit ?)
        if(dragon.hp > 0) {
            for(let j = 0; j < 50; j++) {
                let laserTest = laserPool[j];
                if(laserTest.alive == true){
                    if(laserTest.y >= dragon.y + 93 && laserTest.y <= dragon.y + 208 && laserTest.x >= dragon.x && laserTest.x <= dragon.x + 400) {
                        dragon.hp-=2;
                        laserTest.alive = false;
                    }
                }   
            }
        }    
    }
    
    //loose screen
    if(backgroundCode == 52){ 
        
        //play music 
        if(cpt == 0) {
            continueMusic.play();
            cpt++;
        }
        
        if (82 in keysDown) { // Press R
            ctx.clearRect(0, 0, canvas.width, canvas.height);  
            continueMusic.pause();
            continueMusic = new Audio("music/directedby.mp3");
            reset();
		}
    }
    
    //victory IT
    if(backgroundCode == 53) {
        
        cpt ++;
        if(cpt == 1) {
            //set the geolocalisation
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
        
        
        canvas.addEventListener("mouseup", function(event){
            let x = event.pageX - canvas.offsetLeft,
                y = event.pageY - canvas.offsetTop;
            
            if(y > 370 && y < 436 && x > 63 && x < 328) {
                backgroundCode = 100;
                cpt = 0;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                this.removeEventListener("mouseup", arguments.callee, false);
            }
        });
        
        if(!musicPlaying){
            //play music
            musicPlaying = true;
            winMusic.play();
        }
    }
    
    //remediation screen
    if(backgroundCode == 54){ 
        
        if (82 in keysDown) { // Press R
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            //reset the fire 
			for(let n = 0; n < 100; n++) {
                firePool[n].alive = false;
            }
            
            //reset the player shoot and the ennemy shoot
            for(let p = 0; p < 50; p++) {
                laserPool[p].alive = false;
                bulletPool[p].alive = false;
            }
            
            //reset the ennemy and the meteor
            for(let n = 0; n < 20; n++) {
                ennemyPool[n].alive = false;
                meteorPool[n].alive = false;
            }
            
            //reset the ship position
            ship.x = 375;
            ship.y = 510;
            ship.hp = 3;
        
            //if we are in the Lamon's challenge, the ship is higher cause of the ground
            if(backgroundCodeStock == 36) {
                ship.y = 480;
            }
            
            //reset the dragon position
            dragon.x = 200;
            dragon.y = 0;
            dragon.hp = 700;
            
            //set the counters to origin
            ennemyDestroyed = 0;
            orbsCollected = 0;
            orbTimer = 0;
            orb.alive = false;
            groundHit = 3;
            meteorTimer = 0;
            
            
            pointsTemp = 850;
            
            //if we are at the Lamon's challenge, remediation cost 300 points
            if(backgroundCodeStock == 36) {
                pointsTemp = 700;
            }
            
            //If we are in the final fight, remediation cost 600 pts
            if(backgroundCodeStock == 51) {
                pointsTemp = 400;
            }
            
            //set the timer for ther challenge of Studer and Lamon
            timerBase = Date.now();
            
            //go back to the correct challenge
            backgroundCode = backgroundCodeStock;
            
		}
    }
    
    //Hall of fame
    if(backgroundCode == 100) {
        
        if(cptjson==1){
            let hoftemp = {
                "name": nickname,
                "score": points,
                "country": country
            } 
            myHighscore.push(hoftemp);
            myHighscore.sort(function(a,b){
            return b.score - a.score;
            })
            myHighscore.pop();
            cptjson++;
        }
        
        if (82 in keysDown) { // Press R
            
            //stop and reload music
            musicPlaying = false;
            winMusic.pause();
            winMusic = new Audio("music/win.mp3");
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            reset();
        
        }
    }
                
};
//===================================================================================
//Render 
//===================================================================================

var render = function() {
    
    //accueil
    if(backgroundCode == 1) {
        cpt = 0;
        
        if (debonsRdy) {
        ctx.drawImage(debonsImg, 50, 0);
        }

        if (itRdy) {
            ctx.drawImage(itImg, 500, 150);
        }
    
        if (tourismRdy) {
            ctx.drawImage(tourismImg, 500, 300);
        }
      
        if (socialRdy) {
            ctx.drawImage(socialImg, 500, 450);
        }
        
    }
     
    //game touriste
    if(backgroundCode == 2) {
        
        if (bgTouristRdy) {
            ctx.drawImage(bgTouristImg, 0, 0);
        }
        
        if (cpt > 35){
            if (pointRdy) {
            ctx.drawImage(pointImg, 162.5, 200);
            }  
        }
        
        if (cpt > 70){
            if (pointRdy) {
            ctx.drawImage(pointImg, 375, 200);
            }
        }
        
        if (cpt > 105){
            if (pointRdy) {
            ctx.drawImage(pointImg, 588, 200);
            }
        }
    }
    
    //Win touriste
    if(backgroundCode == 3) {
        if(diplomeTouristRdy) {
            ctx.drawImage(diplomeTouristImg, 0, 0);
        }
        
        if(hofRdy) {
            ctx.drawImage(hofImg, 63, 370);
        }
    
    }
    
    //game social
    if(backgroundCode == 4) {
       
        let text1 = "The idea of putting goats in the garden does not seem enjoyable to me, no more";
        let text2 = "than the idea of sitting around and talking about useless things while clapping.";
        if(bgSocialRdy) {
            ctx.drawImage(bgSocialImg, 0,0);
        }
        
        if(cpt >= 1) {
            drawText(text1, 15, 38);
        }
              
        if(cpt >= 87) {
            drawText1(text2, 20, 575);
        }
       
        if(cpt >= 180) {
            ctx.fillStyle = "#000";
            ctx.fillRect(262, 433, 280, 40);
            ctx.font = '24px serif';
            ctx.fillStyle = "#FFF";
            ctx.fillText("Return to a useful section", 280, 460);
        }
       
    }
    
    //Bax accueil
    if(backgroundCode == 5) {
        if(baxbgRdy){
            ctx.drawImage(baxbgimg, 0,0);
        }
        
        if(baxRdy){
            ctx.drawImage(baximg, 510, 200);
        }
        
        ctx.fillStyle = "#FFF";
        ctx.font = 'bold 18px serif';
        ctx.fillText("Welcome to the IT section.", 40, 120);
        ctx.fillText("I am Doctor Bax.", 40, 150);
        ctx.fillText("You will have 5 challenges and 1 final exam to have your bachelor. ", 40, 200);
        ctx.fillText("The first challenge is with me.", 40, 230);
        ctx.fillText("During this game, move with W A S D and shoot with *.", 40, 280);
        ctx.fillText("you have to hit an enemy 4 times to kill him.", 40, 310);
        ctx.fillText("To pass my challenge, you need to kill 25 enemy ships.", 40, 360);
        ctx.fillText("Each ship not destroyed will cost you points.", 40, 390);
        ctx.fillText("Each life lost will cost you points.", 40, 420);
        ctx.fillText("Good luck !", 40, 470);
        ctx.fillText("Click to start.", 40, 500);
        
    }
    
    //Bax challenge
    if(backgroundCode == 6) {
        
        //draw the background
        if(starsRdy){
            ctx.drawImage(starsimg, 0,0);
        }
        
        //draw the ship
        if(!shipDestroyed && ship.hp > 0){
            if(shipRdy){
                ctx.drawImage(shipImg, ship.x, ship.y);
            }
        }
        
        //draw the ship shoot
        for(let j = 0; j < 50; j++) {
            let laserTest = laserPool[j];
            if(laserTest.alive == true){
                ctx.drawImage(laserTest.img, laserTest.x, laserTest.y); //try to write imgs
            }
        }
        
        //draw ennemy
        for(let j = 0; j < 20; j++) {
            let ennemyTest = ennemyPool[j];
            if(ennemyTest.alive == true){
                ctx.drawImage(ennemyTest.img, ennemyTest.x, ennemyTest.y); //try to write imgs
            }
        }
        
        //draw ennemy bullet
        for(let j = 0; j < 50; j++) {
            let bulletTest = bulletPool[j];
            if(bulletTest.alive == true){
                ctx.drawImage(bulletTest.img, bulletTest.x, bulletTest.y); //try to write imgs
            }
        }
        
        //display life points
        if(ship.hp == 3) {
            if(hpRdy){
                ctx.drawImage(hpImg, 10, 567);
                ctx.drawImage(hpImg, 44, 567);
                ctx.drawImage(hpImg, 78, 567);
            }
        }
        if(ship.hp == 2) {
            if(hpRdy){
                ctx.drawImage(hpImg, 10, 567);
                ctx.drawImage(hpImg, 44, 567);
            }
                
        }
        if(ship.hp == 1) {
            if(hpRdy){
                ctx.drawImage(hpImg, 10, 567);
            }
        }
        
        //the explosion
        if(shipImmortal) {
                    
            //animation crash
            if(cptship <= 10){
                ctx.drawImage(boum10Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 9){
                ctx.drawImage(boum9Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 8){
                ctx.drawImage(boum8Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 7){
                ctx.drawImage(boum7Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 6){
                ctx.drawImage(boum6Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 5){
                ctx.drawImage(boum5Img, ship.x-3, ship.y);
            } 
            
            if(cptship <= 4){
                ctx.drawImage(boum4Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 3){
                ctx.drawImage(boum3Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 2){
                ctx.drawImage(boum2Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 1){
                ctx.drawImage(boum1Img, ship.x-3, ship.y);
            }
            
        }
        
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, 800, 50);
        ctx.font = '24px serif';
        ctx.fillStyle = "#FFF";
        ctx.fillText("Ennemy ship destroyed : " + ennemyDestroyed + " / 25", 50, 33);
        ctx.fillText("Your points : " + pointsTemp, 550, 33);
        
    }
    
    //win intermediate for Bax
    if(backgroundCode == 10) {
     
        if(baxbgRdy){
        ctx.drawImage(baxbgimg, 0,0);
        }
            
        if(baxRdy){
            ctx.drawImage(baximg, 510, 200);
        }
        
        ctx.font = '24px serif';
        ctx.fillStyle = "#FFF";
        ctx.fillText("Congratulation, you won this challenge !", 40, 250);
        ctx.fillText("At this time, you have " + points + " points.", 40, 280);
        ctx.fillText("Click to continue.", 40, 430);
        
    }
    
    //werner accueil
    if(backgroundCode == 15) {
        if(wernerbgRdy){
            ctx.drawImage(wernerbgimg, 0,0);
        }
        
        if(wernerRdy){
            ctx.drawImage(wernerimg, 550, 210);
        }
        
        ctx.fillStyle = "#FFF";
        ctx.font = 'bold 19px serif';
        ctx.fillText("Welcome to the second challenge.", 40, 350);
        ctx.fillText("I am the archimage Werner.", 40, 380);
        ctx.fillText("To pass my challenge, you need to catch 10 orbs.", 40, 430);
        ctx.fillText("Each orb not caught will cost you points.", 40, 460);
        ctx.fillText("Good Luck !", 40, 510);
        ctx.fillText("Click to start.", 40, 540);
    }
    
    //werner challenge
    if(backgroundCode == 16) {
        
        //draw the background
        if(starsRdy){
            ctx.drawImage(starsimg, 0,0);
        }
        
        //draw the ship
        if(!shipDestroyed && ship.hp > 0){
            if(shipRdy){
                ctx.drawImage(shipImg, ship.x, ship.y);
            }
        }
        
        //draw the orbs
        if(orb.alive == true) {
            
            ctx.drawImage(orb.img, orb.x, orb.y);
        }
        
        //draw the ship shoot
        for(let j = 0; j < 50; j++) {
            let laserTest = laserPool[j];
            if(laserTest.alive == true){
                ctx.drawImage(laserTest.img, laserTest.x, laserTest.y); //try to write imgs
            }
        }
        
        //draw ennemy
        for(let j = 0; j < 20; j++) {
            let ennemyTest = ennemyPool[j];
            if(ennemyTest.alive == true){
                ctx.drawImage(ennemyTest.img, ennemyTest.x, ennemyTest.y); //try to write imgs
            }
        }
        
        //draw ennemy bullet
        for(let j = 0; j < 50; j++) {
            let bulletTest = bulletPool[j];
            if(bulletTest.alive == true){
                ctx.drawImage(bulletTest.img, bulletTest.x, bulletTest.y); //try to write imgs
            }
        }
        
        //display life points
        if(ship.hp == 3) {
            if(hpRdy){
                ctx.drawImage(hpImg, 10, 567);
                ctx.drawImage(hpImg, 44, 567);
                ctx.drawImage(hpImg, 78, 567);
            }
        }
        if(ship.hp == 2) {
            if(hpRdy){
                ctx.drawImage(hpImg, 10, 567);
                ctx.drawImage(hpImg, 44, 567);
            }
                
        }
        if(ship.hp == 1) {
            if(hpRdy){
                ctx.drawImage(hpImg, 10, 567);
            }
        }
        
        //the explosion
        if(shipImmortal) {
                    
            //animation crash
            if(cptship <= 10){
                ctx.drawImage(boum10Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 9){
                ctx.drawImage(boum9Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 8){
                ctx.drawImage(boum8Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 7){
                ctx.drawImage(boum7Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 6){
                ctx.drawImage(boum6Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 5){
                ctx.drawImage(boum5Img, ship.x-3, ship.y);
            } 
            
            if(cptship <= 4){
                ctx.drawImage(boum4Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 3){
                ctx.drawImage(boum3Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 2){
                ctx.drawImage(boum2Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 1){
                ctx.drawImage(boum1Img, ship.x-3, ship.y);
            }
            
        }
        
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, 800, 50);
        ctx.font = '24px serif';
        ctx.fillStyle = "#FFF";
        ctx.fillText("Orbs collected : " + orbsCollected + " / 10", 50, 33);
        ctx.fillText("Your points : " + pointsTemp, 550, 33);
        
    }
    
    //win intermediate for werner
    if(backgroundCode == 20) {
          if(wernerbgRdy){
            ctx.drawImage(wernerbgimg, 0,0);
        }
        
        if(wernerRdy){
            ctx.drawImage(wernerimg, 550, 210);
        }
        
        ctx.fillStyle = "#FFF";
        ctx.font = 'bold 19px serif';
        ctx.fillText("Congratulation, you won my challenge !", 40, 400);
        ctx.fillText("At this time, you have " + points + " points.", 40, 430);
        ctx.fillText("Click to continue.", 40, 500);
    }
    
    //Studer accueil
    if(backgroundCode == 25) {
        if(studerbgRdy){
            ctx.drawImage(studerbgimg, 0,0);
        }
        
        if(studerRdy){
            ctx.drawImage(studerimg, 550, 150);
        }
        
        ctx.fillStyle = "#FFF";
        ctx.font = 'bold 19px serif';
        ctx.fillText("Welcome to the third challenge.", 40, 250);
        ctx.fillText("I am Studer the Gauss Jordan crusader.", 40, 280);
        ctx.fillText("To pass my challenge, you need to survive 2 minutes.", 40, 330);
        ctx.fillText("Each life lost will cost you points.", 40, 360);
        ctx.fillText("Each ship not killed will cost you points.", 40, 390);
        ctx.fillText("Good Luck !", 40, 440);
        ctx.fillText("Click to start.", 40, 470);
    }
    
    //Studer challenge
    if(backgroundCode == 26) {
        
        //draw the background
        if(starsRdy){
            ctx.drawImage(starsimg, 0,0);
        }
        
        //draw the ship
        if(!shipDestroyed && ship.hp > 0){
            if(shipRdy){
                ctx.drawImage(shipImg, ship.x, ship.y);
            }
        }
        
        //draw the ship shoot
        for(let j = 0; j < 50; j++) {
            let laserTest = laserPool[j];
            if(laserTest.alive == true){
                ctx.drawImage(laserTest.img, laserTest.x, laserTest.y); //try to write imgs
            }
        }
        
        //draw ennemy
        for(let j = 0; j < 20; j++) {
            let ennemyTest = ennemyPool[j];
            if(ennemyTest.alive == true){
                ctx.drawImage(ennemyTest.img, ennemyTest.x, ennemyTest.y); //try to write imgs
            }
        }
        
        //draw ennemy bullet
        for(let j = 0; j < 50; j++) {
            let bulletTest = bulletPool[j];
            if(bulletTest.alive == true){
                ctx.drawImage(bulletTest.img, bulletTest.x, bulletTest.y); //try to write imgs
            }
        }
        
        //display life points
        if(ship.hp == 3) {
            if(hpRdy){
                ctx.drawImage(hpImg, 10, 567);
                ctx.drawImage(hpImg, 44, 567);
                ctx.drawImage(hpImg, 78, 567);
            }
        }
        if(ship.hp == 2) {
            if(hpRdy){
                ctx.drawImage(hpImg, 10, 567);
                ctx.drawImage(hpImg, 44, 567);
            }
                
        }
        if(ship.hp == 1) {
            if(hpRdy){
                ctx.drawImage(hpImg, 10, 567);
            }
        }
        
        //the explosion
        if(shipImmortal) {
                    
            //animation crash
            if(cptship <= 10){
                ctx.drawImage(boum10Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 9){
                ctx.drawImage(boum9Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 8){
                ctx.drawImage(boum8Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 7){
                ctx.drawImage(boum7Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 6){
                ctx.drawImage(boum6Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 5){
                ctx.drawImage(boum5Img, ship.x-3, ship.y);
            } 
            
            if(cptship <= 4){
                ctx.drawImage(boum4Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 3){
                ctx.drawImage(boum3Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 2){
                ctx.drawImage(boum2Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 1){
                ctx.drawImage(boum1Img, ship.x-3, ship.y);
            }
            
        }
        
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, 800, 50);
        ctx.font = '24px serif';
        ctx.fillStyle = "#FFF";
        if(parseInt((timerCompare-timerBase)/1000) <= 120) {
            ctx.fillText("Timer : " + parseInt((timerCompare-timerBase)/1000) + " / 120 seconds", 50, 33);
        } else {
            ctx.fillText("Timer : 120 / 120 seconds", 50, 33);
        }
        ctx.fillText("Your points : " + pointsTemp, 550, 33);
    }
    
    //win intermediate for Studer
    if(backgroundCode == 30) {
        if(studerbgRdy){
            ctx.drawImage(studerbgimg, 0,0);
        }
        
        if(studerRdy){
            ctx.drawImage(studerimg, 550, 150);
        }
        
        ctx.fillStyle = "#FFF";
        ctx.font = 'bold 19px serif';
        ctx.fillText("Congratulation, you won my challenge !", 40, 250);
        ctx.fillText("At this time, you have " + points + " points.", 40, 280);
        ctx.fillText("Click to continue.", 40, 400);
    }
    
    //lamon accueil
    if(backgroundCode == 35) {
        if(lamonbgRdy){
            ctx.drawImage(lamonbgimg, 0,0);
        }
        
        if(lamonRdy){
            ctx.drawImage(lamonimg, 510, 200);
        }
        
        ctx.fillStyle = "#FFF";
        ctx.font = 'bold 18px serif';
        ctx.fillText("Welcome to the fourth challenge.", 40, 250);
        ctx.fillText("I am Lamon the lawyer.", 40, 280);
        ctx.fillText("To pass my challenge, you need to protect the planet.", 40, 330);
        ctx.fillText("Don't let the meteors hit the ground during 2 minutes.", 40, 360);
        ctx.fillText("Each meteor not destroyed will cost you points.", 40, 390);
        ctx.fillText("Each life lost will cost you points.", 40, 420);
        ctx.fillText("Good Luck !", 40, 470);
        ctx.fillText("Click to start.", 40, 500);
    }
    
    //lamon challenge
    if(backgroundCode == 36) {
        
        //draw the background
        if(groundRdy){
            ctx.drawImage(groundimg, 0,0);
        }
        
        //draw the ship
        if(!shipDestroyed && ship.hp > 0){
            if(shipRdy){
                ctx.drawImage(shipImg, ship.x, ship.y);
            }
        }
        
        //draw the ship shoot
        for(let j = 0; j < 50; j++) {
            let laserTest = laserPool[j];
            if(laserTest.alive == true){
                ctx.drawImage(laserTest.img, laserTest.x, laserTest.y); //try to write imgs
            }
        }
        
        //draw meteorite when alive
        for(let i = 0; i < 20; i++) {
            let meteorTest = meteorPool[i];
            if(meteorTest.alive == true) {
                ctx.drawImage(meteorTest.img, meteorTest.x, meteorTest.y); //write imgs
            }
        }
        
        //display life points
        if(ship.hp == 3) {
            if(hpRdy){
                ctx.drawImage(hpImg, 10, 567);
                ctx.drawImage(hpImg, 44, 567);
                ctx.drawImage(hpImg, 78, 567);
            }
        }
        if(ship.hp == 2) {
            if(hpRdy){
                ctx.drawImage(hpImg, 10, 567);
                ctx.drawImage(hpImg, 44, 567);
            }
                
        }
        if(ship.hp == 1) {
            if(hpRdy){
                ctx.drawImage(hpImg, 10, 567);
            }
        }
        
        //the explosion
        if(shipImmortal) {
                    
            //animation crash
            if(cptship <= 10){
                ctx.drawImage(boum10Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 9){
                ctx.drawImage(boum9Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 8){
                ctx.drawImage(boum8Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 7){
                ctx.drawImage(boum7Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 6){
                ctx.drawImage(boum6Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 5){
                ctx.drawImage(boum5Img, ship.x-3, ship.y);
            } 
            
            if(cptship <= 4){
                ctx.drawImage(boum4Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 3){
                ctx.drawImage(boum3Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 2){
                ctx.drawImage(boum2Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 1){
                ctx.drawImage(boum1Img, ship.x-3, ship.y);
            }
            
        }
        
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, 800, 50);
        ctx.font = '24px serif';
        ctx.fillStyle = "#FFF";
        if(parseInt((timerCompare-timerBase)/1000) <= 120) {
            ctx.fillText("Timer : " + parseInt((timerCompare-timerBase)/1000) + " / 120 seconds", 20, 33);
        } else {
            ctx.fillText("Timer : 120 / 120 seconds", 20, 33);
        }
        ctx.fillText("Ground durability : " + groundHit + " / 3", 540, 33);
        ctx.fillText("Your points : " + pointsTemp, 305, 33);
        
    }
    
    //win intermediate for Lamon
    if(backgroundCode == 40) {
        if(lamonbgRdy){
            ctx.drawImage(lamonbgimg, 0,0);
        }
        
        if(lamonRdy){
            ctx.drawImage(lamonimg, 510, 200);
        }
        
        ctx.fillStyle = "#FFF";
        ctx.font = 'bold 18px serif';
        ctx.fillText("Congratulation, you won my challenge !", 40, 280);
        ctx.fillText("At this time, you have " + points + " points.", 40, 310);
        ctx.fillText("Click to continue.", 40, 380);
    }
    
    //russo widmer accueil
    if(backgroundCode == 45) {
        if(wrbgRdy){
            ctx.drawImage(wrbgimg, 0,0);
        }
        
        if(wrRdy){
            ctx.drawImage(wrimg, 450, 200);
        }
        
        ctx.fillStyle = "#000";
        ctx.font = 'bold 19px serif';
        ctx.fillText("Welcome to the last challenge.", 40, 250);
        ctx.fillText("We are the tacticians Russo and Widmer.", 40, 280);
        ctx.fillText("To pass our challenge, you need to kill 30 enemy ships.", 40, 330);
        ctx.fillText("Each ship not destroyed will cost you points.", 40, 360);
        ctx.fillText("Each life lost will cost you points.", 40, 390);
        ctx.fillText("Good Luck !", 40, 440);
        ctx.fillText("Click to start.", 40, 470);
    }
    
    //russo widmer challenge
    if(backgroundCode == 46) {
        
        //draw the background
        if(starsRdy){
            ctx.drawImage(starsimg, 0,0);
        }
        
        //draw the ship
        if(!shipDestroyed && ship.hp > 0){
            if(shipRdy){
                ctx.drawImage(shipImg, ship.x, ship.y);
            }
        }
        
        //draw the ship shoot
        for(let j = 0; j < 50; j++) {
            let laserTest = laserPool[j];
            if(laserTest.alive == true){
                ctx.drawImage(laserTest.img, laserTest.x, laserTest.y); //try to write imgs
            }
        }
        
        //draw ennemy
        for(let j = 0; j < 20; j++) {
            let ennemyTest = ennemyPool[j];
            if(ennemyTest.alive == true){
                ctx.drawImage(ennemyTest.img, ennemyTest.x, ennemyTest.y); //try to write imgs
            }
        }
        
        //draw ennemy bullet
        for(let j = 0; j < 50; j++) {
            let bulletTest = bulletPool[j];
            if(bulletTest.alive == true){
                ctx.drawImage(bulletTest.img, bulletTest.x, bulletTest.y); //try to write imgs
            }
        }
        
        //display life points
        if(ship.hp == 3) {
            if(hpRdy){
                ctx.drawImage(hpImg, 10, 567);
                ctx.drawImage(hpImg, 44, 567);
                ctx.drawImage(hpImg, 78, 567);
            }
        }
        if(ship.hp == 2) {
            if(hpRdy){
                ctx.drawImage(hpImg, 10, 567);
                ctx.drawImage(hpImg, 44, 567);
            }
                
        }
        if(ship.hp == 1) {
            if(hpRdy){
                ctx.drawImage(hpImg, 10, 567);
            }
        }
        
        //the explosion
        if(shipImmortal) {
                    
            //animation crash
            if(cptship <= 10){
                ctx.drawImage(boum10Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 9){
                ctx.drawImage(boum9Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 8){
                ctx.drawImage(boum8Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 7){
                ctx.drawImage(boum7Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 6){
                ctx.drawImage(boum6Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 5){
                ctx.drawImage(boum5Img, ship.x-3, ship.y);
            } 
            
            if(cptship <= 4){
                ctx.drawImage(boum4Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 3){
                ctx.drawImage(boum3Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 2){
                ctx.drawImage(boum2Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 1){
                ctx.drawImage(boum1Img, ship.x-3, ship.y);
            }
            
        }
        
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, 800, 50);
        ctx.font = '24px serif';
        ctx.fillStyle = "#FFF";
        ctx.fillText("Ennemy ship destroyed : " + ennemyDestroyed + " / 30", 50, 33);
        ctx.fillText("Your score : " + pointsTemp, 550, 33);
    }
    
    //win intermediate for russo and widmer
    if(backgroundCode == 49) {
        if(wrbgRdy){
            ctx.drawImage(wrbgimg, 0,0);
        }
        
        if(wrRdy){
            ctx.drawImage(wrimg, 450, 200);
        }
        
        ctx.fillStyle = "#000";
        ctx.font = 'bold 19px serif';
        ctx.fillText("Congratulation, you won the 5 challenges !", 40, 250);
        ctx.fillText("At this time, you have " + points + " points.", 40, 280);
        ctx.fillText("Now you will pass the final exam.", 40, 330);
        ctx.fillText("Be careful !", 40, 380);
        ctx.fillText("Your supervisor for the exam controls the matrix !", 40, 410);
        
        ctx.fillText("Good Luck !", 40, 460);
        ctx.fillText("To continue, drag and drop the Item in the bottom.", 40, 490);
    }
    
    //final boss welcome
    if(backgroundCode == 50) {
        
        cpt++;
        
        if(cpt < 30){
            if(blackRdy){
            ctx.drawImage(blackImg, 0,0);
            }
        }
        
        if(cpt >= 30) {
            if(blackRdy){
            ctx.drawImage(blackImg, 0,0);
            }
        }
        
        if(cpt > 33) {
            if(bossbgRdy){
            ctx.drawImage(bossbgImg, 0,0);
            }
        }
        
        if(cpt > 36) {
            if(blackRdy){
            ctx.drawImage(blackImg, 0,0);
            }
        }
        
        if(cpt > 39) {
            if(bossbgRdy){
            ctx.drawImage(bossbgImg, 0,0);
            }
        }
        
        if(cpt > 42) {
            if(blackRdy){
            ctx.drawImage(blackImg, 0,0);
            }
        }
        
        if(cpt > 45) {
            if(bossbgRdy){
            ctx.drawImage(bossbgImg, 0,0);
            }
        }
        
        if(cpt > 48) {
            if(blackRdy){
            ctx.drawImage(blackImg, 0,0);
            }
        }
        
        if(cpt > 51) {
            if(bossbgRdy){
            ctx.drawImage(bossbgImg, 0,0);
            }
        }
        
        if(cpt > 80) {
            let textToDisplay = "P AFOF EJWIOYCET FSRU ZUCHP BAUY, VVSA OOOZ !";
            drawText(textToDisplay, 50,35);
        }
        
        if(cpt > 130) {
            let textToDisplay1 = "(I will supervise your final exam, good luck !)";
            drawText1(textToDisplay1, 50,65);
        }
        
        if(cpt > 200) {
            let textToDisplay2 = "JPFFE IWLR VRO MGL VBDXK.";
            drawText2(textToDisplay2, 50,120);
        }
        
        if(cpt > 240) {
            let textToDisplay3 = "(click when you are ready.)";
            drawText3(textToDisplay3, 50,150);
        }
    }
    
    //final boss 
    if(backgroundCode == 51) {
        
        
        //draw the background
        if(bossbgRdy){
            ctx.drawImage(bossbgImg, 0,0);
        }
        
        //healthbar
        ctx.fillStyle = "White";
        ctx.fillRect(45, 5, 710, 30)
        
        ctx.fillStyle = "Black";
        ctx.fillRect(dragonHealthBar.x, dragonHealthBar.y, 700, dragonHealthBar.height);
        
        ctx.fillStyle = "Red";
        ctx.fillRect(dragonHealthBar.x, dragonHealthBar.y, dragon.hp, dragonHealthBar.height);
        
        //display dragon shoot
        for(let m = 0; m < 100; m++) {
            let fireTest = firePool[m];
            if(fireTest.alive == true) {
                ctx.drawImage(fireTest.img, fireTest.x, fireTest.y); //try to write imgs
            }
        }
        
        //draw the dragon
        if(drakebossRdy){
            ctx.drawImage(drakebossImg, dragon.x, dragon.y);
        }
        
        //draw the ship
        if(!shipDestroyed && ship.hp > 0){
            if(shipRdy){
                ctx.drawImage(shipImg, ship.x, ship.y);
            }
        }
        
        //draw the ship shoot
        for(let j = 0; j < 50; j++) {
            let laserTest = laserPool[j];
            if(laserTest.alive == true){
                ctx.drawImage(laserTest.img, laserTest.x, laserTest.y); //try to write imgs
            }
        }
        
        //display life points
        if(ship.hp == 3) {
            if(hpRdy){
                ctx.drawImage(hpImg, 10, 567);
                ctx.drawImage(hpImg, 44, 567);
                ctx.drawImage(hpImg, 78, 567);
            }
        }
        if(ship.hp == 2) {
            if(hpRdy){
                ctx.drawImage(hpImg, 10, 567);
                ctx.drawImage(hpImg, 44, 567);
            }
                
        }
        if(ship.hp == 1) {
            if(hpRdy){
                ctx.drawImage(hpImg, 10, 567);
            }
        }
        
        //display the player points
        ctx.font = '24px serif';
        ctx.fillStyle = "#FFF";
        ctx.fillText("Your points : " + pointsTemp, 610, 590);
        
        //the explosion
        if(shipImmortal) {
                    
            //animation crash
            if(cptship <= 10){
                ctx.drawImage(boum10Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 9){
                ctx.drawImage(boum9Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 8){
                ctx.drawImage(boum8Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 7){
                ctx.drawImage(boum7Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 6){
                ctx.drawImage(boum6Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 5){
                ctx.drawImage(boum5Img, ship.x-3, ship.y);
            } 
            
            if(cptship <= 4){
                ctx.drawImage(boum4Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 3){
                ctx.drawImage(boum3Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 2){
                ctx.drawImage(boum2Img, ship.x-3, ship.y);
            }
            
            if(cptship <= 1){
                ctx.drawImage(boum1Img, ship.x-3, ship.y);
            }
            
        }
        
    }
    
    //loose screen
    if (backgroundCode == 52) {
        
        if(blackRdy) {
            ctx.drawImage(blackImg, 0,0);   
        }
        
        ctx.font = "bold 52px Verdana";
        ctx.fillStyle = "#FFF";
        ctx.fillText("GAME OVER", 230, 200);
        ctx.font = "36px Verdana";
        ctx.fillText("Press", 185, 400);
        ctx.fillText("to try again", 400, 400);
        if(rButtonRdy) {
            ctx.drawImage(rButtonImg, 305, 345);
        }
        
    }
    
    //win IT
    if (backgroundCode == 53) {
        if(diplomeItRdy) {
            ctx.drawImage(diplomeItImg, 0, 0);
        }
        
        if(hofRdy) {
            ctx.drawImage(hofImg, 63, 370);
        }
        
        ctx.fillStyle = "#000";
        ctx.font = '46px arial';
        ctx.fillText(points, 268, 305);
    }
    
    //remediation screen
    if (backgroundCode == 54) {
        
        if(blackRdy) {
            ctx.drawImage(blackImg, 0,0);   
        }
        
        ctx.font = "bold 52px Verdana";
        ctx.fillStyle = "#FFF";
        ctx.fillText("You are in remediation", 60, 200);
        ctx.font = "36px Verdana";
        ctx.fillText("Press", 60, 400);
        ctx.fillText("to do the challenge again", 275, 400);
        if(rButtonRdy) {
            ctx.drawImage(rButtonImg, 180, 345);
        }
        
    }
    
    //Hall of fame
    if(backgroundCode == 100) {
        
        if(blackRdy){
            ctx.drawImage(blackImg, 0,0);
        }
        
        ctx.font = "bold 70px Serif";
        ctx.fillStyle = "#FFF";
        ctx.fillText("Hall of fame", 215, 120);
        
        ctx.font = "35px Serif";
        let yHs = 200;
        
        
        //tab display
        for(let i = 0; i < myHighscore.length; i++) {
            
            ctx.fillText(myHighscore[i].name, 100, yHs);
            ctx.fillText("-", 300, yHs);
            ctx.fillText(myHighscore[i].score + " pts", 350, yHs);
            ctx.fillText("-", 510, yHs);
            ctx.fillText(myHighscore[i].country, 560, yHs);
            yHs += 50;
        }
        
        ctx.fillText("Your score : " + points, 50, 530);
        ctx.fillText("Press", 413, 530);
        ctx.fillText("to restart", 600, 530);
        ctx.drawImage(rButtonImg, 510, 490);
    }
    
};


//===================================================================================
//functions divers
//===================================================================================

//when the shoot button is down
function shoot () {
    if (laserTimer == 3) {
        realShoot();
        laserTimer = 0;
    } else {
        laserTimer++;
    }
}

//notAlive
notAlive = function(item){
  return !item.alive;
}

//shoot function

function realShoot (){
    var laser = laserPool.find(notAlive);
    if(!laser){
        return;
    }
    laser.x = ship.x + 23;
    laser.y = ship.y - 10;
    laser.alive = true;
}

//laser function
function Laser(){
    this.x = 0;
    this.y = 0;
    this.alive = false;
    this.img = new Image();
    this.img.src = "images/laser.png"
}

//managment of fire for the dragon
function fireShoot() {
    if(fireTimer == 40) {
        realFireShoot();
        fireTimer = 0;
    } else {
        fireTimer++;
    }
}

function realFireShoot () {
    //select a number between 0 and 6
    let math = Math.floor(Math.random() * Math.floor(6));
    if(math < 3){
        largeShoot();       //largeShoot
    } else if(math > 3) {
        targetShoot();       //targetShoot(); 
    } else {
        allShoot();       //allShoot();
    }
}

function Fire () {
    this.x = 0;
    this.y = 0;
    this.vx = 0; //adaptateur de vitesse (entre -1 et 1)
    this.vy = 1; //adaptateur de vitesse (entre -1 et 1)
    this.alive = false;
    this.img = new Image();
    this.img.src = "images/fire.png"
}


//managment of bullet for ennemy
function ennemyShoot() {
    
    //try to shoot for each ennemy alive
    for (let j = 0; j < 20; j++) {
        
        let ennemyTest = ennemyPool[j];
        if(ennemyTest.alive == true){
            if(ennemyTest.bulletTimer == 27){
                realEnnemyShoot(ennemyTest.x, ennemyTest.y);
                ennemyTest.bulletTimer = 0;
            } else {
                ennemyTest.bulletTimer++;
            }
        }
    }
    
}

function realEnnemyShoot(shootX, shootY) {
    var bullet = bulletPool.find(notAlive);
    if(!bullet) {
        return;
    }
    bullet.x = shootX + 22;
    bullet.y = shootY + 56;
    bullet.alive = true;
}

function bullet () {
    this.x = 0;
    this.y = 0;
    this.alive = false;
    this.img = new Image();
    this.img.src = "images/bullet.png";
}


//managment of ennemy and spawn
function ennemyTrySpawn(){
    if(ennemyTimer == 50){
        ennemyRealSpawn();
        ennemyTimer = 0;
    } else {
        ennemyTimer++;
    }
}

//one ennemy will spawn
function ennemyRealSpawn() {
    
    //select the position of the ennemy
    let mathX = Math.floor(Math.random() * Math.floor(744));
    
    var ennemy = ennemyPool.find(notAlive);
    if(!ennemy){
        return;
    }
    ennemy.x = mathX;
    ennemy.y = 0;
    ennemy.life = 4;
    ennemy.alive = true;
}

function ennemy () {
    this.x = 0;
    this.y = 0;
    this.bulletTimer = 0;
    this.alive = false;
    this.img = new Image();
    this.img.src = "images/ennemy.png";
    this.life = 0;
}


//managment of ennemy for Russo and Widmer
function ennemyTryWRSpawn() {
    if(ennemyTimer == 100){
        ennemyRealWRSpawn();
        ennemyTimer = 0;
    } else {
        ennemyTimer++;
    }
}

function ennemyRealWRSpawn() {
    
    //select the position of the ennemy
    let mathX = Math.floor(Math.random() * Math.floor(744));
    
    var ennemy = ennemyPool.find(notAlive);
    if(!ennemy){
        return;
    }
    ennemy.x = mathX;
    ennemy.y = 0;
    ennemy.life = 4;
    ennemy.bulletTimer = 0;
    ennemy.alive = true;
    
    if(mathX-350 <= 0){
        mathX += 300;
    } else {
        mathX -= 300;        
    }
    
    var ennemy = ennemyPool.find(notAlive);
    if(!ennemy){
        return;
    }
    ennemy.x = mathX;
    ennemy.y = 0;
    ennemy.life = 4;
    ennemy.bulletTimer = 0;
    ennemy.alive = true;
    
}


//managment of the orb
function orbTrySpawn() {
    if(orbTimer == 170){
        orbRealSpawn();
        orbTimer = 0;
    } else {
        orbTimer++;
    }
}

function orbRealSpawn() {
    
    //mathX will be a number between 40 and 745 for the x location of the orb
    let mathX = Math.floor(Math.random() * Math.floor(705));
    mathX+=40;
    
    orb.x = mathX;
    orb.y = 0;
    orb.alive = true;
}

function orbObject(){
    this.x = 0;
    this.y = 0;
    this.alive = false;
    this.img = new Image();
    this.img.src = "images/orb.png";
}


//managment of the meteor
function meteorTrySpawn(){
    if(meteorTimer == 45) {
        meteorRealSpawn();
        meteorTimer = 0;
    } else {
        meteorTimer++;
    }
}

function meteorRealSpawn() {
    
    //mathX will be a number between 40 and 720 for the x location of the orb
    let mathX = Math.floor(Math.random() * Math.floor(680));
    mathX+=40;
    
    var meteor = meteorPool.find(notAlive);
    if(!meteor){
        return;
    }
    meteor.x = mathX;
    meteor.y = -31;
    meteor.life = 4;
    meteor.alive = true;
}

function meteor(){
    this.x = 0;
    this.y = 0;
    this.alive = false;
    this.img = new Image();
    this.img.src = "images/meteor.png";
    this.live = 0;
}



function dragonmove() {
    
    //dragon at left screen
    if(dragon.x <= 15){
        dragonleft = false;
        
        if(Math.floor(Math.random() * Math.floor(2)) == 1){
            dragonhoriz = true;
        } else {
            dragonhoriz = false;
            
            if(dragon.y <= 0){
                dragonzero = true;
            } else {
                dragonzero = false;
            }
        }
    }
    
    //dragon at right screen
    if(dragon.x >= 375){
        dragonleft = true;
        randomNumber = Math.random*2;
        
        if(Math.floor(Math.random() * Math.floor(2)) ==1){
            dragonhoriz = true;
        } else {
            dragonhoriz = false;
            
            if(dragon.y <= 0){
                dragonzero = true;
            } else {
                dragonzero = false;
            }
        }
    }
    
    //move to left horizontally
    if(dragonleft == true && dragonhoriz == true) {
        dragon.x -= 2;
    }
    
    //move to left diagonally
    if(dragonleft == true && dragonhoriz == false) {
        
        if(dragonzero == true) {
            dragon.x -= 2;
            dragon.y += 0.3;
        } else {
            dragon.x -= 2;
            dragon.y -= 0.3;
        }
        
    }
    
    //move to right horizontally
    if(dragonleft == false && dragonhoriz == true) {
        dragon.x += 2;
    }
    
    //move to right diagonally
    if(dragonleft == false && dragonhoriz == false) {
        if(dragonzero == true) {
            dragon.x += 2;
            dragon.y += 0.3;
        } else {
            dragon.x += 2;
            dragon.y -= 0.3;
        }
        
    }
}

//function for draw the first line of text
function drawText(chaine, hor, ver) {
   
    var nb_car = chaine.length;
    var tableau = chaine.split("");
    texte = new Array;
    var txt = '';
    var nb_msg = nb_car - 1;
    for (i=0; i<nb_car; i++) {
        texte[i] = txt+tableau[i];
         txt = texte[i];
    }
   
    function changeMessage() {
        ctx.font = '24px serif ';
        ctx.fillStyle = "#FFF";
        ctx.fillText(texte[actual_texte], hor, ver);
        actual_texte++;
        if(actual_texte >= texte.length)
            actual_texte = nb_msg;
    }
        setInterval(changeMessage(), 1000); // la vitesse de defilement (plus on a une valeur faible plus texte s'affiche rapidement)
}

//function for draw the second line of text
function drawText1 (chaine1, hori, vert) {

    var nb_car1 = chaine1.length; 
    var tableau1 = chaine1.split("");
    texte1 = new Array;
    var txt1 = '';
    var nb_msg1 = nb_car1 - 1;
    for (i=0; i<nb_car1; i++) {
        texte1[i] = txt1+tableau1[i];
         txt1 = texte1[i];
    }

    function changeMessage() {
        ctx.font = '24px serif ';
        ctx.fillStyle = "#FFF";
        ctx.fillText(texte1[actual_texte1], hori, vert);
        actual_texte1++;
        if(actual_texte1 >= texte1.length)
            actual_texte1 = nb_msg1;
    }
        setInterval(changeMessage(), 100); // la vitesse de defilement (plus on a une valeur faible plus texte s'affiche rapidement)
}

//function for draw the third line of text
function drawText2 (chaine2, horiz, verti) {
    
    var nb_car2 = chaine2.length; 
    var tableau2 = chaine2.split("");
    texte2 = new Array;
    var txt2 = '';
    var nb_msg2 = nb_car2 - 1;
    for (i=0; i<nb_car2; i++) {
        texte2[i] = txt2+tableau2[i];
         txt2 = texte2[i];
    }
    
    function changeMessage() {
        ctx.font = '24px serif ';
        ctx.fillStyle = "#FFF";
        ctx.fillText(texte2[actual_texte2], horiz, verti);
        actual_texte2++;
        if(actual_texte2 >= texte2.length)
            actual_texte2 = nb_msg2;
    }
        setInterval(changeMessage(), 1000); // la vitesse de defilement (plus on a une valeur faible plus texte s'affiche rapidement) 
}

//function for draw the fourth line of text
function drawText3 (chaine3, horizo, vertic) {
    
    var nb_car3 = chaine3.length; 
    var tableau3 = chaine3.split("");
    texte3 = new Array;
    var txt3 = '';
    var nb_msg3 = nb_car3 - 1;
    for (i=0; i<nb_car3; i++) {
        texte3[i] = txt3+tableau3[i];
         txt3 = texte3[i];
    }
    
    function changeMessage() {
        ctx.font = '24px serif ';
        ctx.fillStyle = "#FFF";
        ctx.fillText(texte3[actual_texte3], horizo, vertic);
        actual_texte3++;
        if(actual_texte3 >= texte3.length)
            actual_texte3 = nb_msg3;
    }
        setInterval(changeMessage(), 1000); // la vitesse de defilement (plus on a une valeur faible plus texte s'affiche rapidement) 
}

//Set the nickname with the URL
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("="); // Split after the "="
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}

//===================================================================================
//Healthbars
//===================================================================================
    
    //Dragon health bar
var dragonHealthBar = {
    x: 50,      //position x
    y: 10,     //position y
    height: 20  
};

//===================================================================================
//shoot behaviour of the dragon
//===================================================================================

//try to shoot the player
function targetShoot() {
    
    //unit vector(x;y) = x/square root(x^2+y^2);y/square root(x^2+y^2)
    
    let playerx = ship.x + 15;
    let playery = ship.y + 22.5;
    let dragonx = dragon.x + 190;
    let dragony = dragon.y + 239;
    
    let vectorx = playerx - dragonx;
    let vectory = playery - dragony;
    
    
    
    let pythagore = Math.sqrt((vectorx * vectorx) + (vectory * vectory));
    
    let unitVectorx = vectorx / pythagore;
    let unitVectory = vectory / pythagore;
    
    var fire = firePool.find(notAlive);
    if(!fire){
        return;
    }
    fire.x = dragon.x + 190;
    fire.y = dragon.y + 239;
    fire.vx = unitVectorx;
    fire.vy = unitVectory;
    fire.alive = true;
    
    var fire2 = firePool.find(notAlive);
    if(!fire2){
        return;
    }
    fire2.x = dragon.x + 185;
    fire2.y = dragon.y + 239;
    fire2.vx = unitVectorx + 0.3;
    fire2.vy = unitVectory + 0.3;
    fire2.alive = true;
    
    var fire3 = firePool.find(notAlive);
    if(!fire3){
        return;
    }
    fire3.x = dragon.x + 185;
    fire3.y = dragon.y + 239;
    fire3.vx = unitVectorx - 0.3;
    fire3.vy = unitVectory - 0.3;
    fire3.alive = true;
}

//shoot randomly with large scope
function largeShoot() {
    var fire = firePool.find(notAlive);
    if(!fire){
        return;
    }
    //shoot left down
    fire.x = dragon.x + 190;
    fire.y = dragon.y + 239;
    fire.vx = -0.6;
    fire.vy = 0.4;
    fire.alive = true;
    
    var fire2 = firePool.find(notAlive);
    if(!fire2){
        return;
    }
    //shoot down left
    fire2.x = dragon.x + 190;
    fire2.y = dragon.y + 239;
    fire2.vx = -0.4;
    fire2.vy = 0.8;
    fire2.alive = true;
    
    var fire3 = firePool.find(notAlive);
    if(!fire3){
        return;
    }
    //shoot down
    fire3.x = dragon.x + 190;
    fire3.y = dragon.y + 239;
    fire3.vx = 0;
    fire3.vy = 1;
    fire3.alive = true;
    
    var fire4 = firePool.find(notAlive);
    if(!fire4){
        return;
    }
    //shoot down right
    fire4.x = dragon.x + 190;
    fire4.y = dragon.y + 239;
    fire4.vx = 0.4;
    fire4.vy = 0.8;
    fire4.alive = true;
    
    var fire5 = firePool.find(notAlive);
    if(!fire5){
        return;
    }
    //shoot right down
    fire5.x = dragon.x + 190;
    fire5.y = dragon.y + 239;
    fire5.vx = 0.6;
    fire5.vy = 0.4;
    fire5.alive = true;
}

//shoot every directions
function allShoot()  {
    var fire = firePool.find(notAlive);
    if(!fire){
        return;
    }
    //shoot up
    fire.x = dragon.x + 190;
    fire.y = dragon.y + 239;
    fire.vx = 0;
    fire.vy = -1;
    fire.alive = true;
    
    var fire2 = firePool.find(notAlive);
    if(!fire2){
        return;
    }
    //shoot up right
    fire2.x = dragon.x + 190;
    fire2.y = dragon.y + 239;
    fire2.vx = 0.5;
    fire2.vy = -0.8;
    fire2.alive = true;
    
    var fire3 = firePool.find(notAlive);
    if(!fire3){
        return;
    }
    //shoot right up
    fire3.x = dragon.x + 190;
    fire3.y = dragon.y + 239;
    fire3.vx = 0.8;
    fire3.vy = -0.5;
    fire3.alive = true;
    
    var fire4 = firePool.find(notAlive);
    if(!fire4){
        return;
    }
    //shoot right
    fire4.x = dragon.x + 190;
    fire4.y = dragon.y + 239;
    fire4.vx = 1;
    fire4.vy = 0;
    fire4.alive = true;
    
    var fire5 = firePool.find(notAlive);
    if(!fire){
        return;
    }
    //shoot right down
    fire5.x = dragon.x + 190;
    fire5.y = dragon.y + 239;
    fire5.vx = 0.8;
    fire5.vy = 0.5;
    fire5.alive = true;
    
    var fire6 = firePool.find(notAlive);
    if(!fire6){
        return;
    }
    //shoot down right
    fire6.x = dragon.x + 190;
    fire6.y = dragon.y + 239;
    fire6.vx = 0.5;
    fire6.vy = 0.8;
    fire6.alive = true;
    
    var fire7 = firePool.find(notAlive);
    if(!fire7){
        return;
    }
    //shoot down
    fire7.x = dragon.x + 190;
    fire7.y = dragon.y + 239;
    fire7.vx = 0;
    fire7.vy = 1;
    fire7.alive = true;
    
    var fire8 = firePool.find(notAlive);
    if(!fire8){
        return;
    }
    //shoot down left
    fire8.x = dragon.x + 190;
    fire8.y = dragon.y + 239;
    fire8.vx = -0.5;
    fire8.vy = 0.8;
    fire8.alive = true;
    
    var fire9 = firePool.find(notAlive);
    if(!fire9){
        return;
    }
    //shoot left down
    fire9.x = dragon.x + 190;
    fire9.y = dragon.y + 239;
    fire9.vx = -0.8;
    fire9.vy = 0.5;
    fire9.alive = true;
    
    var fire10 = firePool.find(notAlive);
    if(!fire10){
        return;
    }
    //shoot left
    fire10.x = dragon.x + 190;
    fire10.y = dragon.y + 239;
    fire10.vx = -1;
    fire10.vy = 0;
    fire10.alive = true;
    
    var fire11 = firePool.find(notAlive);
    if(!fire11){
        return;
    }
    //shoot left up
    fire11.x = dragon.x + 190;
    fire11.y = dragon.y + 239;
    fire11.vx = -0.8;
    fire11.vy = -0.5;
    fire11.alive = true;
    
    var fire12 = firePool.find(notAlive);
    if(!fire12){
        return;
    }
    //shoot up left
    fire12.x = dragon.x + 190;
    fire12.y = dragon.y + 239;
    fire12.vx = -0.5;
    fire12.vy = -0.8;
    fire12.alive = true;
}
    
    
//===================================================================================
//drag and drop
//===================================================================================

function allowDrop(ev) {
    ev.preventDefault();
}
    
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
    
function drop(ev) {
    ev.preventDefault();
    backgroundCode = 50; 
}

//===================================================================================
//Main and starting function
//===================================================================================

var main = function () {
    var now = Date.now();
    var delta = now - then;
    
    update(delta / 10000);
    render();
    
    then = now;
    
    requestAnimationFrame(main);
};

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
var then = Date.now();

for (let i = 0; i < 50; i++) {
    laserPool.push(new Laser());
    bulletPool.push(new bullet());
} 

for (let k = 0; k < 100; k++) {
    firePool.push(new Fire());
}

for (let j = 0; j<20; j++) {
    ennemyPool.push(new ennemy());
    meteorPool.push(new meteor());
}

reset();
main();