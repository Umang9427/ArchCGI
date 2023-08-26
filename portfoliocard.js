//Extra code for opening the gallery on clicking on the card
const parentDiv = document.querySelector('.portfolio1');

parentDiv.addEventListener('click', function(event) {
    const clickedChild1 = event.target.closest('.portfolio1 .btn_wrap');
    const clickedChild2 = event.target.closest('.portfolio1 .input-wrapper');
    const clickedChild3 = event.target.closest('.portfolio1 .tworings');
    if (clickedChild1 || clickedChild2 || clickedChild3) {
        // The click occurred within a child div, do nothing
        return;
    }
    window.open('https://archcgi.com/realistic.html', "_self");
});


//Extra code for opening the gallery on clicking on the card
const parentDiv2 = document.querySelector('.portfolio2');

parentDiv2.addEventListener('click', function(event) {
    const clickedChild1 = event.target.closest('.portfolio2 .btn_wrap');
    const clickedChild2 = event.target.closest('.portfolio2 .input-wrapper');
    const clickedChild3 = event.target.closest('.portfolio2 .tworings');
    if (clickedChild1 || clickedChild2 || clickedChild3) {
        // The click occurred within a child div, do nothing
        return;
    }
    window.open('https://archcgi.com/ultrarealistic.html', "_self");
});


const parentDiv3 = document.querySelector('.portfolio3');

parentDiv3.addEventListener('click', function(event) {
    const clickedChild1 = event.target.closest('.portfolio3 .btn_wrap');
    const clickedChild2 = event.target.closest('.portfolio3 .input-wrapper');
    const clickedChild3 = event.target.closest('.portfolio3 .tworings');
    if (clickedChild1 || clickedChild2 || clickedChild3) {
        // The click occurred within a child div, do nothing
        return;
    }
    window.open('https://archcgi.com/VR.html', "_self");
});


const parentDiv4 = document.querySelector('.portfolio4');

parentDiv4.addEventListener('click', function(event) {
    const clickedChild1 = event.target.closest('.portfolio4 .btn_wrap');
    const clickedChild2 = event.target.closest('.portfolio4 .input-wrapper');
    const clickedChild3 = event.target.closest('.portfolio4 .tworings');
    if (clickedChild1 || clickedChild2 || clickedChild3) {
        // The click occurred within a child div, do nothing
        return;
    }
    window.open('https://archcgi.com/Walkthrough.html', "_self");
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
    var slides = document.querySelectorAll("#slideonclick");
    var copies = document.querySelectorAll("#copymessage");

    for (var i = 0; i < 2; i++) {
    slides[i].style.transform = "translateX(-100%)";
    slides[i].style.transitionDelay = "0.1s";

    copies[i].style.transitionDelay = "0.2s";
    copies[i].style.opacity = "1";
    copies[i].style.transform = "scale(1)";
    }
    setTimeout(openmessage2, 1400);
  
  }
  
  function openmessage2(){
    var slide = document.querySelectorAll("#slideonclick");
    var copy = document.querySelectorAll("#copymessage");
    for (var i = 0; i < 2; i++) {
    slide[i].style.transform = "translateX(0px)";
    
    copy[i].style.opacity = "0";
    copy[i].style.transform = "scale(0.1)";
    }
  }
  
  
  //-------------------------- Validate email from input and send to google sheet --------------------------------
  
  
  // Get the email input and submit button for portfolio card 1
  const emailInput = document.getElementById('email-input1');
  const submitButton = document.getElementById('input-submit1');
  
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
  
  //Thank you message on submit (ClicK) of portfolio card 1
  $(document).ready(function () {
    $(".input-submit1").click(function () {
      document.getElementById('email-input1').style.animation = "inputSuccess 2s ease-in-out 1 normal forwards";
      document.getElementById('input-submit1').innerHTML = 'Thank You!';
      submitButton.style.animation = "success 2s ease-in-out 1 normal forwards"
    });
  });


// ----------------------- REPEATED CODE ------------------------------
// Get the email input and submit button for portfolio card 2
const emailInput2 = document.getElementById('email-input2');
const submitButton2 = document.getElementById('input-submit2');

// Add input event listener to email input
emailInput2.addEventListener('input', () => {
  // Validate email address using the validateEmail function
  const isValidEmail = validateEmail(emailInput2.value);

  // Enable/disable submit button based on email input validity
  submitButton2.disabled = !isValidEmail;

  // Change submit button color based on email input validity
  if (emailInput2.value === '') {
    submitButton2.style.backgroundColor = 'rgba(0, 0, 0, 0.45)'; // Black color for empty input
    submitButton2.style.animationPlayState = 'paused';
  } else if (isValidEmail) {
    submitButton2.style.backgroundColor = 'rgba(0, 95, 0, 0.45)'; // Green color for valid input
    submitButton2.style.animation = 'radiate 1.6s infinite'; // Add radiating animation to submit button
  } else {
    submitButton2.style.backgroundColor = 'rgba(142, 0, 0, 0.45)'; // Red color for invalid input
    submitButton2.style.animation = 'step-end';
    submitButton2.style.animationPlayState = 'paused';
  }
});

$(document).ready(function () {
    $(".input-submit2").click(function () {
      document.getElementById('email-input2').style.animation = "inputSuccess 2s ease-in-out 1 normal forwards";
      document.getElementById('input-submit2').innerHTML = 'Thank You!';
      submitButton2.style.animation = "success 2s ease-in-out 1 normal forwards"
    });
  });

  
  

  
//On submit(click), also execute the google sheets as per the video https://www.youtube.com/watch?v=jzzgFi_PO3g
let forms = document.querySelectorAll("form");
forms.forEach(function(form) {
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let data = new FormData(form);
        fetch('https://script.google.com/macros/s/AKfycbzqMbT9rHpDF8_My5mQ61ZUdOdNIr1bf4nCkvcOhE2vM7QiQpOPlOiHGTsA_UNLYktB/exec',{
        method: "POST",
        body: data
        })
        .then(res => res.text())
        .then(data => console.log(data));
    })
});

//------------------------------------------ End of sending email and validation--------------------------------------