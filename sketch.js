var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var players, player1, player2;

var track, runner1_img, runner2_img;

var yVal, jumpCounter, upPressed;
 
function preload(){
  track = loadImage("images/track.jpg");
  runner1_img = loadAnimation("images/runner3.1.png","images/runner3.2.png","images/runner3.3.png");
  runner2_img = loadAnimation("images/runner4.1.png","images/runner4.2.png","images/runner4.3.png");
}

function setup(){
  canvas = createCanvas(displayWidth + 20, displayHeight+30);
  database = firebase.database();
  jumpCounter = 0;
  yVal = 175;
  upPressed = 0;
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(rgb(100,200,200));
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
