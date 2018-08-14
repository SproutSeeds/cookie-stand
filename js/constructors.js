'use strict';

// var gregor = {
//   firstName: 'Gregor',
//   lastName: 'Sancehez',
//   favoriteFood: 'Naturual Balance Platefulls',
//   introduction: function() {
//     return 'Hi, my name is ' + this.firstName + ' ' + this.lastName + '. I am a cat, and I like to eat ' + this.favoriteFood;
//   }
// };

// var hound = {
//   firstName: 'The Hound',
//   lastName: 'Sanchez',
//   favoriteFood: 'Tuna',
//   introduction: function() {
//     return 'Hi, my name is ' + this.firstName + ' ' + this.lastName + '. I am a cat, and I like to eat ' + this.favoriteFood;
//   },
//   likesToEat: function() {
//     return 'I like to eat ' + this.favoriteFood;
//   }
// };

// console.log(gregor.introduction());
// console.log(hound.introduction());
// console.log(hound);

// function Cat(firstName, lastName, favoriteFood, isCute) {
//   //Storing information that you want your objects to have as attributes/properties
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.favoriteFood = favoriteFood;
//   this.isCute = isCute;

//   this.introduction = function() {
//     return 'Hi, my name is ' + this.firstName + ' ' + this.lastName + '. I am a cat, and I like to eat ' + this.favoriteFood;
//   };
//   this.likesToEat = function() {
//     return 'I like to eat ' + this.favoriteFood;
//   };
// }
// //Must have 'new' infront of the Cat call to properly make new object
// var buddy = new Cat('Buddy', 'Hamm', 'Mice', true);
// var gary = new Cat('Gary', 'Grampa', 'Homemade dog food', true);
// console.log(buddy.introduction());
// console.log(gary.introduction());
// console.log(gary.likesToEat());

function Cat(firstName, lastName, favoriteFood, isCute) {
  //Storing information that you want your objects to have as attributes/properties
  if(firstName === undefined || lastName === undefined || favoriteFood === undefined || isCute === undefined) {
    return undefined;
  }
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteFood = favoriteFood;
  this.isCute = isCute;

  this.introduction = function() {
    return 'Hi, my name is ' + this.firstName + ' ' + this.lastName + '. I am a cat, and I like to eat ' + this.favoriteFood;
  };

}
//Making a prototype gives you the ability to create this 'likes to eat' functionality outside of the constructor function. 
Cat.prototype.likesToEat = function() {
  // Cody - 'THIS' and prototype belongs together.
  return 'I like to eat ' + this.favoriteFood;
};

Cat.prototype.speak = function() {
  return 'meow   :3';
};

//Must have 'new' infront of the Cat call to properly make new object
var buddy = new Cat('Buddy', 'Hamm', 'Mice', true);
var gary = new Cat('Gary', 'Grampa', 'Homemade dog food', true);
console.log(buddy.introduction());
console.log(gary.introduction());
console.log(gary.likesToEat());
console.log(gary.speak());

//Instance of is used for validation of the buddy and gary instances/objects to make sure the objects you are questioning about is made with a specific 'Cat' constructor.
console.log(buddy instanceof Cat);
console.log(gary instanceof Cat);
// console.log(gregor instanceof Cat);
// console.log(hound instanceof Cat);

