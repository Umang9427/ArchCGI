//Extra code for opening the gallery on clicking on the card
$('.portfoliocard').on('click', function(e) {
  if (e.target == this) {  
    window.open('https://archcgi.com/Exterior.html',"_self");
  }
});

//---------------------- Copy Text to clipboard ----------------------------

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.error('Unable to copy', err);
  }

  document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
  openmessage();
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Copying to clipboard was successful!');
  }, function(err) {
    console.error('Could not copy text: ', err);
  });
}

function openmessage(){ 
  var slide = document.getElementById("slideonclick");
  var copy = document.getElementById("copymessage");
  var card = document.getElementById("portfoliocard");

  slide.style.transform = "translateX(-280px)";
  slide.style.transitionDelay = "0.1s";
  

  copy.style.transitionDelay = "0.2s";
  copy.style.opacity = "1";
  copy.style.transform = "scale(1)";
  setTimeout(openmessage2, 1400);

}

function openmessage2(){
  var slide = document.getElementById("slideonclick");
  var copy = document.getElementById("copymessage");

  slide.style.transform = "translateX(0px)";
  
  copy.style.opacity = "0";
  copy.style.transform = "scale(0.1)";
}


//-------------------------- Validate email from input and send to google sheet --------------------------------


// Get the email input and submit button
const emailInput = document.getElementById('email-input');
const submitButton = document.getElementById('input-submit');

// Email validation function using a comprehensive regex pattern
const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
  return emailPattern.test(email);
};

// Add input event listener to email input
emailInput.addEventListener('input', () => {
  // Validate email address using the validateEmail function
  const isValidEmail = validateEmail(emailInput.value);

  // Enable/disable submit button based on email input validity
  submitButton.disabled = !isValidEmail;

  // Change submit button color based on email input validity
  if (emailInput.value === '') {
    submitButton.style.backgroundColor = 'rgba(0, 0, 0, 0.45)'; // Black color for empty input
    submitButton.style.animationPlayState = 'paused';
  } else if (isValidEmail) {
    submitButton.style.backgroundColor = 'rgba(0, 95, 0, 0.45)'; // Green color for valid input
    submitButton.style.animation = 'radiate 1.6s infinite'; // Add radiating animation to submit button
  } else {
    submitButton.style.backgroundColor = 'rgba(142, 0, 0, 0.45)'; // Red color for invalid input
    submitButton.style.animation = 'step-end';
    submitButton.style.animationPlayState = 'paused';
  }
});


//Thank you message on submit (ClicK)
$(document).ready(function () {
  $(".input-submit").click(function () {
    $(this).parent().addClass("active");
    document.getElementById('input-submit').innerHTML = 'Thank You!';
    submitButton.style.animation = "success 2s ease-in-out 1 normal forwards"
  });
});

//On submit(click), also execute the google sheets as per the video https://www.youtube.com/watch?v=jzzgFi_PO3g
let form = document.querySelector("form");
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  let data = new FormData(form);
  fetch('https://script.google.com/macros/s/AKfycbzZnGcZFP3LMNICMtyJPRkcs2tiLVWREaomix0hz9bwY3Uc4Ik3j90WxEatcGPxzD_H3w/exec ',{
    method: "POST",
    body: data
  })
    .then(res => res.text())
    .then(data => console.log(data));
}
)