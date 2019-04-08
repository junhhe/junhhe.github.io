function platform() {
  this.width = 100;
  this.height = 100;
  this.x = 650;
  this.y = 250;
      
      this.show = function() {
        fill(color('green'));
        rect(this.x,this.y,this.width,this.height);
      }
      
      
      
    }