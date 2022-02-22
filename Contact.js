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



    /* ------------Back to top fixed button in the website (located on the bottom of screen)------------------ */

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



$('.loading').hide();
$('input, textarea').placeholder(); // Placeholder Browser Compatibility Plugin

function validateForm() {
	var form_message_success = "Thank you for your email, we will be in contact with you shortly",
			form_checker = document.forms["ctsForm"]["formChecker"].value,
			data = $(this).serialize(),
			action = $(this).attr("action"),
			method = $(this).attr("method");
	// Spam Filter
	if (form_checker != "") {
		console.log("spam detected");
		return false;
	}
	$(".loading").show(); // show loading gif
	// alerts & email
	$.ajax({
		url: action,
		type: method,
		data: data,
		success: function(data) {
			$(".loading").hide();
			$('.alert-message-wrap').remove();
			$('.alert-wrap').css({'display':'block'});
			$('.alert-wrap').append('<div class="alert-message-wrap alert-success"><span class="alert-message"><i class="fa fa-check"></i>' + form_message_success + '</span></div>').delay(2000).fadeOut('slow');
		},
		error: function(err) {
			console.log('email form did not submit');
			$(".loading").hide();
			$('.alert-message-wrap').remove();
			$('.alert-wrap').css({'display':'block'});
			$('.alert-wrap').append('<div class="alert-message-wrap alert-fail"><span class="alert-message"><i class="fa fa-exclamation-circle"></i>' + form_message_success + '</span></div>').delay(2000).fadeOut('slow');
		},
		complete: function() {
			$(".loading").hide();
		}
	});
	return false; // don't let the form be submitted
}



