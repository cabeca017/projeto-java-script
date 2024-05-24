function setup() {
 createCanvas(600, 600);
 background("black")
}

 function draw() {

 stroke("black");
 fill("lime");  
   
 if(mouseIsPressed){  
   circle(mouseX, mouseY, 200);
 }  
}   