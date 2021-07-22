let flavorOfTheDay = 'unicorn';

let menu = 'chocolate, rocky road, mint chip, superman, batman';

let hasSprinkles = false;
let medium = 3;

let myOrder = '';
let myItems = prompt('what would you like to order?');

myOrder = myItems;

let wantsSprinkles = prompt('would you like sprinkles on top?');

if(wantsSprinkles === 'yes') {
  myOrder = myItems + ' and sprinkles on top!';
} else if (wantsSprinkles === 'no') {
  myOrder = myItems + ' without sprinkles on top';
} else {
  myOrder = myItems;
}

document.write('You want to order:' + myOrder);

// document.write('Today\'s menu is: ' + flavorOfTheDay + ', ' + menu);

// alert('Welcome! Today\'s flavor of the day is:' + ' ' + flavorOfTheDay);

// let userName = prompt('Hi! What is your name?');


// document.write(userName);


// let userChoice = prompt('do you want your phone to be...');

// alert(userChoice);