function jumper() {
      this.x = 50;
      this.y = 0;
      this.gravity = 0.7; // the force pf gravity
      this.lift = -20; //opposing force
      this.velocity = 0; // speed of the gravity
      
      this.show = function() {
        image(img, this.x,this.y);
      }
      this.move = function(){
        if ((keyIsDown(65)) && (this.x > 50)){
      this.x -= 10;
      }
       if ((keyIsDown(68)) && (this.x < w-50)) {  // need both condition inorder to work
        this.x += 10;
       }
      }
      this.up = function(){
        this.velocity += this.lift; //when im going up im oppose the velocity
      }
      this.update = function() {
        this.velocity += this.gravity;
        this.y += this.velocity;
        this.velocity *= 0.9;
        if (this.y > (h - 75)) {
          this.y = (h - 75); // this is the final height
          this.velocity = -10;
        }
        if (this.y < 0){
          this.y = 0;
          this.velocity = 0;
        }
      }
    } 
    