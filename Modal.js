
/*---------------------------------- Javascript file for portfolio page ----------------------------------- */


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



/* Back to top fixed button in the website (located on the bottom of screen) */

mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topfunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

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














    
    /*-------------------------------Modal Gallery for portfolio (make images fullscreen)---------------------------------- */
    // create references to the modal...
    var modal = document.getElementById('myModal');
    // to all images -- note I'm using a class!
    var images = document.getElementsByClassName('maxsize');
    // the image in the modal
    var modalImg = document.getElementById("img01");
    // and the caption in the modal
    var captionText = document.getElementById("captiontext");

    // Go through all of the images with our custom class
    for (var i = 0; i < images.length; i++) {
      var img = images[i];
      // and attach our click listener for this image.
      img.onclick = function(evt) {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }
    }

    var close1 = document.getElementsByClassName("closemodal");

    function closeGallery() {
      document.getElementById("myModal").style.display = "none";
    }







  /* ----------------------------------------------- Tab Bar Animation ------------------------------------------ */
  var nav = $('.tabbar');
  var line = $('<div/>').addClass('line');
  
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
    const linewidth = document.querySelectorAll('.line');
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

    if(_this.parent().text()== 'exterior'){
      state1();
    }
    else if(_this.parent().text()== 'interior'){
      state2();
    }
    else{
      imagesvisible()
    };
  });

function imagesvisible(){
  ext=document.querySelectorAll("#exteriorimages");
  ext.forEach(function(element) {
    element.style.display = 'block';
  });
  int=document.querySelectorAll("#interiorimages");
  int.forEach(function(element) {
    element.style.display = 'block';
  });
}

function state1(){
  ext=document.querySelectorAll("#exteriorimages");
  ext.forEach(function(element) {
    element.style.display = 'block';
  });
  int=document.querySelectorAll("#interiorimages");
  int.forEach(function(element) {
    element.style.display = 'none';
  });
  
}

function state2(){
  ext=document.querySelectorAll("#exteriorimages");
  ext.forEach(function(element) {
    element.style.display = 'none';
  });
  int=document.querySelectorAll("#interiorimages");
  int.forEach(function(element) {
    element.style.display = 'block';
  });
  
}

      




/* ------------------------------ Text Animation --------------------------------- */


// import Typed from 'typed.js';

var typed = new Typed('#typed', {
  strings: ['Quick', 'Budget-Friendly', 'Quantitative'],
  typeSpeed: 80,
  backDelay: 750,
  loop: true });











 

  