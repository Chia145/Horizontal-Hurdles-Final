class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(gameState){
      database.ref('/').update({
        gameState: gameState
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form();
        form.display();
      }
  
      player1 = createSprite(500,200);
      player1.addAnimation("r1",runner1_img);
      player2 = createSprite(500,400);
      player2.addAnimation("r2",runner2_img);
      players = [player1, player2];

      
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        background(rgb(198,135,103));
        image(track, 0,-displayHeight/20+10,displayWidth*5, displayHeight);
        
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x;
        var y = yVal;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the players a little away from each other in y direction
          y = y + 200;
          //use data form the database to display the players in x direction
          x = displayWidth + (allPlayers[plr].distance);
          players[index-1].x = x;
          players[index-1].y = y;
  
          if (index === player.index){
            stroke(10);
            fill("red");
            ellipse(x,y,60,60);
            camera.position.x = players[index-1].x;
            camera.position.y = displayHeight/2;
          }

            
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyIsDown(RIGHT_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
      if (keyDown("space")) {
        // console.log(player.x)
        players[index - 1].velocityY = -4;

    }
      if(player.distance > 3000){
        gameState = 2;
      }
     
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
      textSize(15);
        text('Game Ended')
    }
    
  }
  