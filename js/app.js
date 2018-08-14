'use strict';

var hourOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm','6pm','7pm', '8pm'];


/////////////////First And Pike Object////////////////////////
var firstAndpike = {
  name: '1st And Pike',//Key: 'Value' -- Pair
  min: 23,
  max: 65,
  avgCookieSale: 6.3,
  customers: [],
  cookies: [],
  totalCookies: [0],
  funcCustomers: function() {
    for(var i = 0; i < hourOfOperation.length; i++) {
      this.min = Math.ceil(this.min);
      this.max = Math.floor(this.max);
      this.customers[i] = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;

      console.log(this.customers[i]);
    }
  },
  funcCookies: function() {
    for(var i = 0; i < hourOfOperation.length; i++) {
      this.cookies[i] = Math.floor(this.customers[i] * this.avgCookieSale);

      //Calculating total cookies property.
      this.totalCookies[0] += this.cookies[i];
      console.log(this.cookies[i]);
    }
  },
  render: function() {
    // Access the <ul> in the DOM where we will put data
    var firstAndPikeUlEl = document.getElementById('firstAndPike');
    // console.log(alkiBeachUlEl);
    // For each value in the array...
    for (var i = 0; i < hourOfOperation.length; i++) {
      // console.log(this.seagullCount[i]);
      // Create the <li> element
      var liEl = document.createElement('li');
      // Give the <li> element content
      liEl.textContent = hourOfOperation[i] + ': ' + this.cookies[i];
      // Append the <li> element to the <ul>
      firstAndPikeUlEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    // Give the <li> element content
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    // Append the <li> element to the <ul>
    firstAndPikeUlEl.appendChild(liEl);
  }
};
console.log('~~~~~~~Below first and Pike customers are listed~~~~~~');
firstAndpike.funcCustomers();
console.log('~~~~~~~Below first and pike Cookies are listed~~~~~~~');
firstAndpike.funcCookies();
console.log('~~~~~~~~~Below the Total Cookies for first and pike is listed~~~~~~~~~~~~~~');
console.log(firstAndpike.totalCookies[0]);

firstAndpike.render();

/////////////////////SeaTac Airport Object///////////////////////
var seaTacAirport = {
  name: 'SeaTac Airport',
  min: 3,
  max: 24,
  avgCookieSale: 1.2,
  customers: [],
  cookies: [],
  totalCookies: [0],
  funcCustomers: function() {
    for(var i = 0; i < hourOfOperation.length; i++) {
      this.min = Math.ceil(this.min);
      this.max = Math.floor(this.max);
      this.customers[i] = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;

      console.log(this.customers[i]);
    }
  },
  funcCookies: function() {
    for(var i = 0; i < hourOfOperation.length; i++) {
      this.cookies[i] = Math.floor(this.customers[i] * this.avgCookieSale);

      //Calculating total cookies property.
      this.totalCookies[0] += this.cookies[i];
      console.log(this.cookies[i]);
    }
  },
  render: function() {
    // Access the <ul> in the DOM where we will put data
    var seaTacAirportUlEl = document.getElementById('seaTacAirport');
    // For each value in the array...
    for (var i = 0; i < hourOfOperation.length; i++) {
      // Create the <li> element
      var liEl = document.createElement('li');
      // Give the <li> element content
      liEl.textContent = hourOfOperation[i] + ': ' + this.cookies[i];
      // Append the <li> element to the <ul>
      seaTacAirportUlEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    // Give the <li> element content
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    // Append the <li> element to the <ul>
    seaTacAirportUlEl.appendChild(liEl);
  }
};
console.log('~~~~~~~Below SeaTac customers are listed~~~~~~');
seaTacAirport.funcCustomers();
console.log('~~~~~~~Below SeaTac Cookies are listed~~~~~~~');
seaTacAirport.funcCookies();
console.log('~~~~~~~~~Below the Total Cookies for SeaTac is listed~~~~~~~~~~~~~~');
console.log(seaTacAirport.totalCookies[0]);

seaTacAirport.render();

/////////////////////Seattle Center Object///////////////////////
var seattleCenter = {
  name: 'Seattle Center',
  min: 11,
  max: 38,
  avgCookieSale: 3.7,
  customers: [],
  cookies: [],
  totalCookies: [0],
  funcCustomers: function() {
    for(var i = 0; i < hourOfOperation.length; i++) {
      this.min = Math.ceil(this.min);
      this.max = Math.floor(this.max);
      this.customers[i] = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;

      console.log(this.customers[i]);
    }
  },
  funcCookies: function() {
    for(var i = 0; i < hourOfOperation.length; i++) {
      this.cookies[i] = Math.floor(this.customers[i] * this.avgCookieSale);

      //Calculating total cookies property.
      this.totalCookies[0] += this.cookies[i];
      console.log(this.cookies[i]);
    }
  },
  render: function() {
    // Access the <ul> in the DOM where we will put data
    var seattleCenterUlEl = document.getElementById('seattleCenter');
    // For each value in the array...
    for (var i = 0; i < hourOfOperation.length; i++) {
      // Create the <li> element
      var liEl = document.createElement('li');
      // Give the <li> element content
      liEl.textContent = hourOfOperation[i] + ': ' + this.cookies[i];
      // Append the <li> element to the <ul>
      seattleCenterUlEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    // Give the <li> element content
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    // Append the <li> element to the <ul>
    seattleCenterUlEl.appendChild(liEl);
  }
};
console.log('~~~~~~~Below Seattle Center customers are listed~~~~~~');
seattleCenter.funcCustomers();
console.log('~~~~~~~Below Seattle Center Cookies are listed~~~~~~~');
seattleCenter.funcCookies();
console.log('~~~~~~~~~Below the Total Cookies for Seattle Center is listed~~~~~~~~~~~~~~');
console.log(seattleCenter.totalCookies[0]);

seattleCenter.render();

/////////////////////Capitol Hill Object/////////////////////////
var capitolHill = {
  name: 'Capitol Hill',
  min: 20,
  max: 38,
  avgCookieSale: 2.3,
  customers: [],
  cookies: [],
  totalCookies: [0],
  funcCustomers: function() {
    for(var i = 0; i < hourOfOperation.length; i++) {
      this.min = Math.ceil(this.min);
      this.max = Math.floor(this.max);
      this.customers[i] = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;

      console.log(this.customers[i]);
    }
  },
  funcCookies: function() {
    for(var i = 0; i < hourOfOperation.length; i++) {
      this.cookies[i] = Math.floor(this.customers[i] * this.avgCookieSale);

      //Calculating total cookies property.
      this.totalCookies[0] += this.cookies[i];
      console.log(this.cookies[i]);
    }
  },
  render: function() {
    // Access the <ul> in the DOM where we will put data
    var capitolHillUlEl = document.getElementById('capitolHill');
    // For each value in the array...
    for (var i = 0; i < hourOfOperation.length; i++) {
      // Create the <li> element
      var liEl = document.createElement('li');
      // Give the <li> element content
      liEl.textContent = hourOfOperation[i] + ': ' + this.cookies[i];
      // Append the <li> element to the <ul>
      capitolHillUlEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    // Give the <li> element content
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    // Append the <li> element to the <ul>
    capitolHillUlEl.appendChild(liEl);
  }
};
console.log('~~~~~~~Below Capitol Hill customers are listed~~~~~~');
capitolHill.funcCustomers();
console.log('~~~~~~~Below Capitol Hill Cookies are listed~~~~~~~');
capitolHill.funcCookies();
console.log('~~~~~~~~~Below the Total Cookies for Capitol Hill is listed~~~~~~~~~~~~~~');
console.log(capitolHill.totalCookies[0]);

capitolHill.render();

/////////////////////Alki Object/////////////////////////////
var alki = {
  name: 'Alki',
  min: 2,
  max: 16,
  avgCookieSale: 4.6,
  customers: [],
  cookies: [],
  totalCookies: [0],
  funcCustomers: function() {
    for(var i = 0; i < hourOfOperation.length; i++) {
      this.min = Math.ceil(this.min);
      this.max = Math.floor(this.max);
      this.customers[i] = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;

      console.log(this.customers[i]);
    }
  },
  funcCookies: function() {
    for(var i = 0; i < hourOfOperation.length; i++) {
      this.cookies[i] = Math.floor(this.customers[i] * this.avgCookieSale);

      //Calculating total cookies property.
      this.totalCookies[0] += this.cookies[i];
      console.log(this.cookies[i]);
    }
  },
  render: function() {
    // Access the <ul> in the DOM where we will put data
    var alkiUlEl = document.getElementById('alki');
    // For each value in the array...
    for (var i = 0; i < hourOfOperation.length; i++) {
      // Create the <li> element
      var liEl = document.createElement('li');
      // Give the <li> element content
      liEl.textContent = hourOfOperation[i] + ': ' + this.cookies[i];
      // Append the <li> element to the <ul>
      alkiUlEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    // Give the <li> element content
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    // Append the <li> element to the <ul>
    alkiUlEl.appendChild(liEl);
  }
};
console.log('~~~~~~~Below Alki customers are listed~~~~~~');
alki.funcCustomers();
console.log('~~~~~~~Below Alki Cookies are listed~~~~~~~');
alki.funcCookies();
console.log('~~~~~~~~~Below the Total Cookies for Alki is listed~~~~~~~~~~~~~~');
console.log(alki.totalCookies[0]);

alki.render();


// I want each object to be calculating its own cookies per hour and own customers per hour.

// var stores = [firstAndpike];

//This function will generate a random amount of customers between min and max.
// var randomCustomers = function(min, max){
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

//customers[i] value is stored as a (rounded down) random customer amount between min and max

//These for loops assigns property cookie[j] in object store[i]
// for(var j = 0; j < stores.length; j++) {
//   for(var i = 0; i < hourOfOperation.length; i++) {
//     //cookies[i] value is stored as random customer between min and max multipled by average cookies bought per customer.
//     stores[j].cookies[i] = Math.floor(randomCustomers(stores[j].min, stores[j].max) * stores[j].avgCookieSale);

//     console.log(stores[j].cookies[i]);
//   }
// }


// stores[0].render();