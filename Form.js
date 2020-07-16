class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h1');
      this.reset = createButton('Reset');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
      // this.reset.hide();
    }
  
    display(){
      this.title.html("Multiplayer Hurdle Game");
      this.title.position(displayWidth/2-200,0);
      this.reset.position(displayWidth/10,displayHeight/12);
      this.input.position(displayWidth/2-100, displayHeight/2);
      this.button.position(displayWidth/2-50, displayHeight/2+100);
      this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          player.name = this.input.value();
          playerCount+=1;
          player.index = playerCount;
          player.update();
          player.updateCount(playerCount);
          this.greeting.html("Hello " + player.name + " Please wait for your friend to join.")
          this.greeting.position(displayWidth/2 - 270, displayHeight/4);
        });
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      });
  
    }
  }
  