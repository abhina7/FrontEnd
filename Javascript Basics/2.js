let fruits = ['apple', 'mango', 'banana', 'pineapple'];

document.getElementById('sort-button').onclick = function() {
  fruits.sort().reverse();
  console.log(fruits);
}