$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items:2,
     autoplay:1200,
      margin:30,
      loop:true,
      dots:true
//      nav:true,
//      navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>" ]
  });
});



$('.owl-carousel1').owlCarousel({
  center: true,
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: true,
  autoplayTimeout: 1500,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})