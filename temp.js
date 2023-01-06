document.getElementById("mainwords").style.animation="Umang 15s ease-in-out infinite";

function doSetTimeout(){
  setTimeout(function() {
   document.getElementById('mainwords').innerHTML = '<span>Top Notch Detailing in Architectural Visualization</span>';
   doSetTimeout2();

  }, 3750);
}
function doSetTimeout2(){
  setTimeout(function() {
   document.getElementById('mainwords').innerHTML = '<span>Bringing 3D Rendering to a Vast Majority Globally</span>';
   doSetTimeout3();

  }, 3750);
}
function doSetTimeout3(){
  setTimeout(function() {
   document.getElementById('mainwords').innerHTML = '<span>Expert 3D Interior | Exterior | Landscape Design</span>';
   doSetTimeout4();

  }, 3750);
}
function doSetTimeout4(){
  setTimeout(function() {
   document.getElementById('mainwords').innerHTML = '<span>Industry Leading Showcase of CGI for Architecture</span>';
   doSetTimeout();

  }, 3750);
}


doSetTimeout();
