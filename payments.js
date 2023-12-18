const projectType = document.getElementById('projectType');
const currency = document.getElementById('currency');
const exteriorDetails = document.getElementById('exteriorDetails');
const interiorDetails = document.getElementById('interiorDetails');
const numberOfStories = document.getElementById('numberOfStories');
const numberOfRooms = document.getElementById('numberOfRooms');
const numberOfRevisions = document.getElementById('extraRevisions');
const walkthroughTime = document.getElementById('walkthrough');
const estimatedPrice = document.getElementById('estimatedPrice');
const projectScale = document.getElementById('projectscale');
const radioYes = document.getElementById('yes');
const numberOfOptions = document.getElementById('options');

let basePrice = 9500.00;
projectType.addEventListener('change', updatePrice);
currency.addEventListener('change', changeBasePrice);
projectScale.addEventListener('change', changeBasePrice);




//Switch between Rooms and Storeys quantity based on project type
updatePrice();

function updatePrice() {
  const selectedProjectType = projectType.value;
  

  if (selectedProjectType === 'exterior') {
    exteriorDetails.style.display = 'block';
    interiorDetails.style.display = 'none';
    
  } else {
    exteriorDetails.style.display = 'none';
    interiorDetails.style.display = 'block';
    
  }

  calculatePrice();
}


function calculatePrice() {
  
  let bp = basePrice;
  let increment = Number(0);
  const selectedProjectType = projectType.value;
  const selectedCurrency = currency.value;
  const addon = calculateAddonPrice();

  increment = calculateIncrement();

  if (selectedProjectType === 'exterior') {

    bp = bp + increment + addon;
  } else {
    bp = bp * numberOfRooms.value + addon;
  }

  if (selectedCurrency === 'INR') {
    estimatedPrice.textContent = `₹${bp.toFixed(2)}`;
  } else {
    estimatedPrice.textContent = `$${bp.toFixed(2)}`;
  }
}



function changeBasePrice(){
  const selectedCurrency = currency.value;
  const selectedScale = projectScale.value;
  let bp=basePrice;
  if (selectedCurrency === 'INR' && selectedScale === 'R'){
    bp = 9500;
  } else if (selectedCurrency === 'INR' && selectedScale === 'C'){
    bp = 10500;
  } else if (selectedCurrency === 'USD' && selectedScale === 'R'){
    bp = 150;
  } else if (selectedCurrency === 'USD' && selectedScale === 'C'){
    bp = 200;
  };
  basePrice=bp;
  calculatePrice();
}

function calculateIncrement(){
  let temp = Number(0);
  if (currency.value === 'INR'){
    temp = 1000;
  } else{
    temp = 25;
  }
  let increment = Number(temp * (numberOfStories.value-1));
  
  return increment;
}
function calculateAddonPrice(){
  const c = currency.value;
  const selectedProjectType = projectType.value;
  let alladdons = Number(0.00);
  let addon = Number(0.00);

  //Revisions addon
  if (c === 'INR'){
    addon = (numberOfRevisions.value -3)* 500;
  } else{
    addon = (numberOfRevisions.value -3)* 10;
  }
  alladdons +=addon;
  addon = 0;

  //Walkthrough addon
  if (c === 'INR'){
    addon = (walkthroughTime.value)* 250;
  } else{
    addon = (walkthroughTime.value)* 5;
  }
  alladdons +=addon;
  addon = 0;
  //2D Dimensions addon

  if(radioYes.checked){
    if (selectedProjectType === 'exterior' && c==='INR'){
      addon = 1500;
    }
    else if (selectedProjectType === 'exterior' && c==='USD'){
      addon = 30;
    }
    else if (selectedProjectType === 'interior' && c==='INR'){
      addon = 1500 * numberOfRooms.value;
    }
    else if (selectedProjectType === 'interior' && c==='USD'){
      addon = 30 * numberOfRooms.value;
    }
    
  }
  alladdons +=addon;
  addon = 0;
  
  // Extra Options addon
  if (numberOfOptions.value > 0){
      addon = 0.375 * basePrice * numberOfOptions.value;
  }
  alladdons +=addon;
  addon=0;
  
  return alladdons;
}

function decrementNumberOfStories() {
 
  
  let currentNumber = parseInt(numberOfStories.value);
  if (currentNumber > 1) {
    currentNumber--;
    numberOfStories.value = currentNumber;
    calculatePrice();
  }
}

function incrementNumberOfStories() {
  let currentNumber = parseInt(numberOfStories.value);
  currentNumber++;
  numberOfStories.value = currentNumber;
  calculatePrice();
}

function decrementNumberOfRooms() { 
  let currentNumber = parseInt(numberOfRooms.value);
  if (currentNumber > 1) {
    currentNumber--;
    numberOfRooms.value = currentNumber;
    calculatePrice();
  }
}

function incrementNumberOfRooms() {
  let currentNumber = parseInt(numberOfRooms.value);
  currentNumber++;
  numberOfRooms.value = currentNumber;
  calculatePrice();
}

function decrementNumberOfRevisions() { 
  let currentNumber = parseInt(numberOfRevisions.value);
  if (currentNumber > 3) {
    currentNumber--;
    numberOfRevisions.value = currentNumber;
    calculatePrice();
  }
}

function incrementNumberOfRevisions() {
  let currentNumber = parseInt(numberOfRevisions.value);
  currentNumber++;
  numberOfRevisions.value = currentNumber;
  calculatePrice();
}


function decrementWalkthroughTime() { 
  let currentNumber = parseInt(walkthroughTime.value);
  if (currentNumber > 0) {
    currentNumber--;
    walkthroughTime.value = currentNumber;
    calculatePrice();
  }
}

function incrementWalkthroughTime() {
  let currentNumber = parseInt(walkthroughTime.value);
  currentNumber++;
  walkthroughTime.value = currentNumber;
  calculatePrice();
}

function decrementOptions(){
  let currentNumber = parseInt(numberOfOptions.value);
  if (currentNumber > 0) {
    currentNumber--;
    numberOfOptions.value = currentNumber;
    calculatePrice();
  }
}

function incrementOptions() {
  let currentNumber = parseInt(numberOfOptions.value);
  currentNumber++;
  numberOfOptions.value = currentNumber;
  calculatePrice();
}
















//----------------------Google Pay Payment Method---------------------------
let googlePayClient;

const tokenizationSpecification = {
  type: 'PAYMENT_GATEWAY',
  parameters: {
    gateway: 'example',
    gatewayMerchantId: 'gatewayMerchantId'
  }
};
const cardPaymentMethod = {
  type: 'CARD',
  tokenizationSpecification: tokenizationSpecification,
  parameters: {
    allowedCardNetworks: ['VISA', 'MASTERCARD'],
    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS']
  }
};
const googlePayConfiguration ={
  apiVersion: 2,
  apiVersionMinor: 0,
  allowedPaymentMethods: [cardPaymentMethod],

};
function  onGooglePayLoaded(){

  googlePayClient = new google.payments.api.PaymentsClient({
    environment: 'TEST',

  });

  googlePayClient.isReadyToPay(googlePayConfiguration)
    .then(response => {
      if (response.result){
        createAndAddButton();
      } else{
        //The User cannot pay. Offer another payment method
      }
    })
    .catch (error => console.error('isReadyToPay error: ', error));
}

function createAndAddButton(){
  const googlePayButton = googlePayClient.createButton({
    onClick: onGooglePayButtonClicked
  });

  document.getElementById('paybutton').appendChild(googlePayButton);
}

function onGooglePayButtonClicked() {
  const paymentDataRequest = {...googlePayConfiguration};
  paymentDataRequest.merchantInfo = {
    merchantId: 'BCR2DN4T3HJ3XR2W',
    merchantName: 'ArchCGI'
  };
  paymentDataRequest.transactionInfo = {
    totalPriceStatus: 'FINAL',
    totalPrice: estimatedPrice,
    currencyCode: 'EUR',
    countryCode: 'IN'
  };

  googlePayClient.loadPaymentData(paymentDataRequest)
   .then(paymentData => processPaymentData(paymentData))
   .catch(error => console.error('loadPaymentsData error: ', error));
}

function processPaymentData(){
  fetch(ordersEndpointURL, {
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    body: paymentData
  })
}