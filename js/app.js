'use strict';

var hourOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm','6pm','7pm', '8pm'];
//An array Representing all the store instances created.
var allStores = [];

var eachHourTotalCookies = [];

//Assigning the storeTable element's 'id' representation.
var storeTable = document.getElementById('storeTable');
var tableForm = document.getElementById('tableForm');

//////////Creation of Constructor function////////////
function Stores(name, min, max, avgCookieSale){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookieSale = avgCookieSale;

  this.customers = [];
  this.cookies = [];
  this.totalCookies = 0;

  allStores.push(this);
}
//////Prototype Creation for funcCustomers///////
Stores.prototype.funcCustomers = function() {
  for(var i = 0; i < hourOfOperation.length; i++) {
    this.min = Math.ceil(this.min);
    this.max = Math.floor(this.max);
    this.customers[i] = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;

    console.log('testing');
    console.log(this.customers[i]);
  }
};
//////Prototype Creation for funcCookies///////
Stores.prototype.funcCookies = function() {
  for(var i = 0; i < hourOfOperation.length; i++) {
    this.cookies[i] = Math.floor(this.customers[i] * this.avgCookieSale);

    //Calculating total cookies for whole day. One hour at a time.
    this.totalCookies += this.cookies[i];
  }
};
/////////////Prototype to Render/////////////
Stores.prototype.render = function() {
  // create tr
  var trEl = document.createElement('tr');
  // create td
  var tdEl = document.createElement('td');
  // give td content (Name for an individual Store)
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  storeTable.appendChild(trEl);
  /////////This will print the cookies per hour/////////
  for(var i = 0; i < hourOfOperation.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookies[i];
    trEl.appendChild(tdEl);
    storeTable.appendChild(trEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookies;
  trEl.appendChild(tdEl);
};

///This is my decalred function that renders all objects created
function renderAll() {
  makeHeader();

  //forloop to render all of the prototype functions
  for(var i = 0; i < allStores.length; i++) {
    // calling each function here
    allStores[i].funcCustomers();
    allStores[i].funcCookies();
    allStores[i].render();
  }
  makeFooter();
}
//This is my declared event handler function, after the event listener hears the event, this function will run.
function handlerOfSubmit(event) {
  event.preventDefault();//prevents the page to reload on submit.

  var storeNames = event.target.storeName.value;
  var minCusto = event.target.minCust.value;
  var maxCusto = event.target.maxCust.value;
  var avgCookie = event.target.avgCookies.value;

  new Stores(storeNames, minCusto, maxCusto, avgCookie);
  console.log(allStores);
  event.target.storeName.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.avgCookies.value = null;

  storeTable.innerHTML = '';

  renderAll();
}
//Function for making the header
function makeHeader() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Store';
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
  for(var i = 0; i < hourOfOperation.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = hourOfOperation[i];
    trEl.appendChild(thEl);
    storeTable.appendChild(trEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
}

function makeFooter() {
  //For loops that Assigns all of the places in the eachHourTotal cookies array to hourly totals.
  for(var i = 0; i < hourOfOperation.length; i++) {
    eachHourTotalCookies[i] = 0;

    for(var j = 0; j < allStores.length; j++) {
      eachHourTotalCookies[i] += allStores[j].cookies[i];
    }
  }
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Hourly Totals';
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);

  for(var k = 0; k < hourOfOperation.length; k++){
    thEl = document.createElement('th');
    thEl.textContent = eachHourTotalCookies[k];
    trEl.appendChild(thEl);
    storeTable.appendChild(trEl);
  }
  var totalCookiesForAllStores = 0;

  for(var l = 0; l < eachHourTotalCookies.length; l++) {
    totalCookiesForAllStores += eachHourTotalCookies[l];
    console.log(totalCookiesForAllStores);
  }
  thEl = document.createElement('th');
  thEl.textContent = totalCookiesForAllStores;
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
}

///This adds an event listener on my submit input button in relation to my form
tableForm.addEventListener('submit', handlerOfSubmit);

/////////Creating new objects || instances/////////
new Stores('1st And Pike', 23, 65, 6.3);
new Stores('SeaTac Airport', 3, 24, 1.2);
new Stores('Seattle Center', 11, 38, 3.7);
new Stores('Capitol Hill', 20, 38, 2.3);
new Stores('Alki', 2, 16, 4.6);

////This function call will render all objects created////
renderAll();