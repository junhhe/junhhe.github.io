
function barrier() {
  this.width = (Math.random()*500);
  this.height = (Math.random()*500);
  this.x = w + this.width;
  this.y = Math.floor((Math.random() * h)+10);
 this.gravity = 0; // the force pf gravity
      //this.lift = -10; //opposing force
      this.velocity = 0; // speed of the gravity
          this.p=0;

      this.show = function() {
        fill(color('blue'));
        rect(this.x,this.y,this.width,this.height);
      }
      this.move = function(){
      this.x -= 10;
      }
      
      this.update = function() {
        this.velocity += this.gravity;
        this.y += this.velocity;
        if (this.x < (0-this.width)){
          this.x = w + this.width;
          this.y = Math.floor((Math.random() * h)+10);
          this.p+=1;
          document.getElementById("point").innerHTML = this.p;
        }
        
      }
    }
    
    
    function barrier2() {
  this.width = (Math.random()*200);
  this.height = (Math.random()*500);
  this.x = w + this.width;
  this.y = Math.floor((Math.random() * h)+10);
 this.gravity = 0; // the force pf gravity
      //this.lift = -10; //opposing force
      this.velocity = 0; // speed of the gravity
      
      this.show = function() {
        fill(color('purple'));
        rect(this.x,this.y,this.width,this.height);
      }
      this.move = function(){
      this.x -= 10;
      }
      
      this.update = function() {
        this.velocity += this.gravity;
        this.y += this.velocity;
        if (this.x < (0-this.width)){
          this.x = w + this.width;
          this.y = Math.floor((Math.random() * h)+10);
        }
        
      }
    }
    