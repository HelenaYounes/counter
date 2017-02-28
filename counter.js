
// label button is "click me" + "0" below it . Zero represents counter variable.

//create function add 1 on click. that increments counter by one everytime button is clicked.


// how to change a node's content ?
// 1 . get the node
// document.getQuerySelector('div');
// 2 . set the node's innerHTML attribute (node.innerHTML = "Hello";)


// try to change the 0 into a 1
// GOkjgkgjkgglkk
var onLoad = function() {
  // when the page loads
  // what should we do ?
  // i already have an increment function. what do i do with it ?
  // when i click on the button. i want to increment the count
  // 1. get the button node
  // 2. listen for click event on the button node and link it to a function called increment
  var button = document.querySelector('.increment');
  button.addEventListener('click', increment);
};
 function increment(){
   var count = document.querySelector('.count');
   count.innerHTML++;

 }


window.addEventListener('load', onLoad);
