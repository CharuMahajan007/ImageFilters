var image= null;
var canvas;
var fileinput;
function upload(){
  canvas = document.getElementById("can");
  fileinput = document.getElementById("finput");
  
  image = new SimpleImage(fileinput);
  image.drawTo(canvas);
}

function makegray(){
  for(var px of image.values()){
    var avg = (px.getRed()+px.getGreen()+px.getBlue())/3;
    px.setRed(avg);
    px.setGreen(avg);
    px.setBlue(avg);
  }
  canvas = document.getElementById("can");
  image.drawTo(canvas);
}

function makered(){
  for(var px of image.values()){
    var avg = (px.getRed()+px.getGreen()+px.getBlue())/3;
    if(avg<128){
    px.setRed(2*avg);
    px.setGreen(0);
    px.setBlue(0);
    }
    else{
      px.setRed(255);
      px.setGreen((2*avg) - 255);
      px.setBlue((2*avg) - 255);
    }
  }
  var canvas = document.getElementById("can");
  image.drawTo(canvas);
}

function erase(){
  doClear(canvas);
}

function doClear(canvas) {
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
}

function makerainbow(){
  for (var pixel of image.values()){
    var y = pixel.getY();
    var h = image.getHeight();
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if (y < h/7){
    if (avg < 128) {
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(2*avg-255);
      }
    }else if (y < 2*h/7){
      if (avg < 128) {
        pixel.setRed(2*avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(1.2*avg-51);
        pixel.setBlue(2*avg-255);
      }
    }else if (y < 3*h/7){
      if (avg < 128) {
        pixel.setRed(2*avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
      }
    }else if (y < 4*h/7){
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(2*avg-255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
      }
    }else if (y < 5*h/7){
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      } else {
        pixel.setRed(2*avg-255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(255);
      }
    }else if (y < 6*h/7){
      if (avg < 128) {
        pixel.setRed(0.8*avg);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      } else {
        pixel.setRed(1.2*avg-51);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(255);
      }
    } else {
      if (avg < 128) {
        pixel.setRed(1.6*avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
      } else {
        pixel.setRed(0.4*avg+153);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(0.4*avg+153);
      }
    } 
}
canvas=document.getElementById("can");
  image.drawTo(canvas);
}

function makeblur(){
 canvas = document.getElementById("can");
   
  for (var px of image.values()) {
    var w = image.getWidth();
    var h = image.getHeight();
    var r = Math.random();
    var x = px.getX();
    var y = px.getY();
    var xx;
    var yy;    
    if (r > 0.5 ) {
      var randx = Math.floor((r * 10) + 1);
      var randy = Math.floor((r * 10) + 1);      
      if (x+randx < w/5){
        xx = x+randx;
      }
      else{
        xx = x-randx;
      }
      if(y+randy < h/5){
        yy = y+randy;
      }
      else{
        yy = y-randy;
      }
      
      image.setPixel(x, y, image.getPixel(xx, yy));
    }
  }
  canvas = document.getElementById("can");
  image.drawTo(canvas);
}

function reset(){
  canvas = document.getElementById("can");
  fileinput = document.getElementById("finput");
  image = new SimpleImage(fileinput);
  
  image.drawTo(canvas);
}

