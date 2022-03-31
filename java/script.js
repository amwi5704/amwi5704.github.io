const para = document.querySelector('p');
para.addEventListener('click', updateName);
function updateName () {
  const name = prompt('Enter a new name');
  para.textContext = `Player1: ${name}`;
}

let myVariable;
myVariable = 'mandy';
let myVariable2 = 'em';

/* comment */
// also comment but single line

let myNumber = 7;
let myBoolean = true;
let myArray = [1, "two", true];
let myObject = document.querySelector('p');

// operators

6 + 9;
'hello' + 'Bitches';
4 - 2 * 8 / 12;

// assignment has 1 =
// check if equal 3 ===

!(myNumber === 3);
myNumber !== 3;

let iceCream = 'chocolate';

if(iceCream === 'chocolate'){
  alert('OMG chocolate...');
} else {
  alert('ew');
}

// event listeners

document.querySelector('html').addEventListener('click',
function() {
  alert('poke');
});
