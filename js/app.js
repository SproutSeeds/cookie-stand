'use strict';

var hourOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm','6pm','7pm', '8pm'];
//Representing all the store instances in occurrence.
var allStores = [];
//Assigning the storeTable element's 'id' representation.
var storeTable = document.getElementById('storeTable');

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

    //Calculating total cookies property.
    this.totalCookies += this.cookies[i];
    console.log(this.cookies[i]);
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
//Function for making the header
var makeHeader = function() {
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
};
/////////Creating new objects || instances/////////
new Stores('1st And Pike', 23, 65, 6.3);
new Stores('SeaTac Airport', 3, 24, 1.2);
new Stores('Seattle Center', 11, 38, 3.7);
new Stores('Capitol Hill', 20, 38, 2.3);
new Stores('Alki', 2, 16, 4.6);

makeHeader();

//forloop to render all of the prototype functions
for(var i = 0; i < allStores.length; i++) {
  // calling each function here
  allStores[i].funcCustomers();
  allStores[i].funcCookies();
  allStores[i].render();
}