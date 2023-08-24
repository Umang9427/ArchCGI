
 /* -----------------------Navigation Bar------------------------------ */
 var preloader = document.getElementById('gooey');
 function pageloaded() {
   preloader.style.display = 'none';
 };
 
 function closeNav() {
   document.getElementById("responsiveSideNav").style.width = "0%";
 }
 function openNav() {
   document.getElementById("responsiveSideNav").style.width = "100%";
 }
 
 window.addEventListener("scroll", function () {
   if (window.pageYOffset > 200) {
     document.getElementById("logo").style.opacity = '0.8';
   }
   else {
     document.getElementById("logo").style.display = "block";
     document.getElementById("logo").style.opacity = '1';
   }
 })

 
 /* ----------------------Passive smooth scroll javascript ----------------------------------- */
document.addEventListener('wheel', (evt) => {
    // ... do stuff with evt
    }, {
    capture: true,
    passive: true
    })
    
    document.addEventListener('touchstart', (evt) => {
    // ... do stuff with evt
    }, {
    capture: true,
    passive: true
    })
    document.addEventListener('touchmove', (evt) => {
    // ... do stuff with evt
    }, {
    capture: true,
    passive: true
    })
    document.addEventListener('mousewheel', (evt) => {
    // ... do stuff with evt
    }, {
    capture: true,
    passive: true
    })
    
    

//-------------------------------------------- Scroll Arrows ------------------------------------------

// JavaScript to scroll the screen up and down
const scrollArrows = document.querySelector('.scroll-arrows');
const upArrow = scrollArrows.querySelector('.up');
const downArrow = scrollArrows.querySelector('.down');

upArrow.addEventListener('click', () => {
  window.scrollBy(0, -150);
});

downArrow.addEventListener('click', () => {
  window.scrollBy(0, 150);
});



  
//--------------------------------------------- On click Button load iframe ----------------------------------------------------
// Get references to the button and iframe elements
const showButton = document.getElementById("showButton1");
const myIframe = document.getElementById("myIframe1");
// Add a click event listener to the button
showButton.addEventListener("click", () => {
    // Toggle the iframe's visibility
    showButton.style.disable="true";
    showButton.style.display="none";
    myIframe.style.display = "block"; 
  });

// Get references to the button and iframe elements
const showButton2 = document.getElementById("showButton2");
const myIframe2 = document.getElementById("myIframe2");
// Add a click event listener to the button
showButton2.addEventListener("click", () => {
    // Toggle the iframe's visibility
    showButton2.style.disable="true";
    showButton2.style.display="none";
    myIframe2.style.display = "block"; 
  });












  // ----------------------------------------------- Tab Bar Animation ------------------------------------------ 
  var nav = $('.tabbar');
  var line = $('<div/>').addClass('lline');
  
  line.appendTo(nav);

  var active = nav.find('.active');
  var pos = 0;
  var wid = 0;
  
  if(active.length) {
    pos = active.position().left;
    wid = active.width();
    line.css({
      left: pos,
      width: wid
    });
  }
  
  nav.find('ul li a').click(function(e) {
    e.preventDefault();
    const linewidth = document.querySelectorAll('.lline');
    linewidth.forEach(line =>{
      line.style.marginLeft='-4px';
    });
    if(!$(this).parent().hasClass('active') && !nav.hasClass('animate')) {
      
      nav.addClass('animate');
  
      var _this = $(this);
  
      nav.find('ul li').removeClass('active');
  
      var position = _this.parent().position();
      var width = _this.parent().width();
  
      if(position.left >= pos) {
        line.animate({
          width: ((position.left - pos) + width)
        }, 300, function() {
          line.animate({
            width: width,
            left: position.left
          }, 150, function() {
            nav.removeClass('animate');
          });
          _this.parent().addClass('active');
        });
      } else {
        line.animate({
          left: position.left,
          width: ((pos - position.left) + wid)
        }, 300, function() {
          line.animate({
            width: width
          }, 150, function() {
            nav.removeClass('animate');
          });
          _this.parent().addClass('active');
        });
      }
  
      pos = position.left;
      wid = width;
    };

    if(_this.parent().text()== 'Panaroma 2'){
      state2();
    }
    
    else{
      state1()
    };
  });

function state1(){
  ext=document.querySelectorAll("#scene1");
  ext.forEach(function(element) {
    element.style.display = 'block';
  });
  int=document.querySelectorAll("#scene2");
  int.forEach(function(element) {
    element.style.display = 'none';
  });
  
}

function state2(){
  ext=document.querySelectorAll("#scene1");
  ext.forEach(function(element) {
    element.style.display = 'none';
  });
  int=document.querySelectorAll("#scene2");
  int.forEach(function(element) {
    element.style.display = 'block';
  });
  
}
