var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 0, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2],
    [2, 1, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 5, 1, 2],
    [2, 1, 1, 2, 3, 2, 1, 6, 1, 1, 2, 1, 1, 2, 2, 1, 2],
    [2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 2, 3, 1, 1, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 3, 2, 1, 1, 1, 2],
    [2, 3, 4, 2, 2, 1, 1, 2, 2, 1, 2, 2, 2, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 1, 1, 2],
    [2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];

var score = 0;

var life= 3;

var dead = "YOU ARE DEAD!"

var pacman = {
    x: 1,
    y: 1,
};

function displayWorld() {
    var output = "";
    for (var i = 0; i < world.length; i++) {
        output += "\n<div class='row'>\n";
        for (var j = 0; j < world[i].length; j++) {
            if (world[i][j] == 3)
                output += "<div class='cherry'></div>";
            if (world[i][j] == 2)
                output += "<div class='brick'></div>";
            else if (world[i][j] == 1)
                output += "<div class='coin'></div>";
            if (world[i][j] == 0)
                output += "<div class='empty'></div>";
            if (world[i][j] == 4)
                output += "<div id='ghostOne'></div>";
            if (world[i][j] == 5)
                output += "<div id='ghostTwo'></div>";
            if (world[i][j] == 6)
                output += "<div id='ghostThree'></div>";
        }
        output += "\n</div>";
    }
    // console.log(output);
    document.getElementById("world").innerHTML = output;
}

function displayPacman() {
    document.getElementById("pacman").style.top = pacman.y*20 + "px";
    document.getElementById("pacman").style.left = pacman.x*20 + "px";
}

function displayScore() {
    document.getElementById("score").innerHTML=score;
}

function displayLife(){
    document.getElementById("life").innerHTML=life;
}

function displayDead(){
    document.getElementById("dead").innerHTML=dead;
}


displayWorld();
displayPacman();
displayScore();
displayLife();
displayDead();

document.onkeydown = function(e){
    if (e.keyCode == 37 && world[pacman.y][pacman.x-1] !=2){
        pacman.x--;
        document.getElementById("pacman").style.transform="rotateY(180deg)";
    }
    else if (e.keyCode == 39 && world[pacman.y][pacman.x+1] !=2){
        pacman.x++;
        document.getElementById("pacman").style.transform="rotate(0deg)";
    }
    else if (e.keyCode == 38 && world[pacman.y-1][pacman.x] !=2){
        pacman.y--;
        document.getElementById("pacman").style.transform="rotate(270deg)";
    }
    else if (e.keyCode == 40 && world[pacman.y+1][pacman.x] !=2){
        pacman.y++;
        document.getElementById("pacman").style.transform="rotate(90deg)";
    }
    if(world[pacman.y][pacman.x]==1){
        world[pacman.y][pacman.x]=0;
        score+=10;
        displayWorld();
        displayScore();
    }
    else if(world[pacman.y][pacman.x]==3){
            world[pacman.y][pacman.x]=0;
            score+=50;
            displayWorld();
            displayScore();
    }
    if(world[pacman.y][pacman.x]>3){
        pacman.x=1;
        pacman.y=1
        life-=1;
        displayWorld();
        displayLife();
    }
    if(life==0){
        pacman.x=1;
        pacman.y=1
        displayWorld();
        displayLife();
        document.getElementById("dead").style.color="red";
        displayDead();
    }
    // console.log(e.keyCode);
    displayPacman();
}

