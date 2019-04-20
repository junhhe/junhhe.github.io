function barrier() {
  this.width = 100;
  this.height = 100;
  this.x = w + this.width;
  this.y = Math.floor((Math.random() * h)+10);
 this.gravity = 0; // the force pf gravity
      //this.lift = -10; //opposing force
      this.velocity = 0; // speed of the gravity
          this.p=0;

      this.show = function() {
        
        image(img2, this.x,this.y);
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
  this.width = 100;
  this.height = 100;
  this.x = w + this.width;
  this.y = Math.floor((Math.random() * h)+10);
 this.gravity = 0; // the force pf gravity
      //this.lift = -10; //opposing force
      this.velocity = 0; // speed of the gravity

      
      this.show = function() {
                image(img3, this.x,this.y);

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
        barrier.p+=1;
          document.getElementById("point").innerHTML = barrier.p;
          
        }
        
      }
    }
