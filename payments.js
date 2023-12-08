const projectType = document.getElementById('projectType');
const currency = document.getElementById('currency');
const exteriorDetails = document.getElementById('exteriorDetails');
const interiorDetails = document.getElementById('interiorDetails');
const numberOfStories = document.getElementById('numberOfStories');
const numberOfRooms = document.getElementById('numberOfRooms');
const estimatedPrice = document.getElementById('estimatedPrice');
const projectScale = document.getElementById('projectscale');
const checkButton = document.getElementById('checkbutton');
let basePrice = 9500.00;
projectType.addEventListener('change', updatePrice);
currency.addEventListener('change', changeBasePrice);
projectScale.addEventListener('change', changeBasePrice);
checkButton.addEventListener('click', calculatePrice);



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

  increment = calculateIncrement();

  if (selectedProjectType === 'exterior') {

    bp = bp + increment;
  } else {
    bp = bp * numberOfRooms.value;
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