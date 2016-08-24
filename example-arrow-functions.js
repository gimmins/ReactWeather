var names = ['Andrew', 'Min Soo Kim', 'Daniel'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.map((name, index, currentArray) => {
//   console.log('mapFunc', name);
//   console.log('index', index);
//   console.log('array', currentArray);
// });
//
// names.forEach((name) => console.log('arrowFunc with no curly', name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Min Soo Kim'));
//
var person = {
  name: 'Andrew',
  greetWithFunction: function () {
    names.forEach(function (name) {
      this.name = 'Charlie';
      console.log(this.name + ' says hi to ' + name);
    });
  },
  greetWithArrowFunc: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
}

person.greetWithFunction();
person.greetWithArrowFunc();

// Challenge Area!
function add (a, b) {
  return a + b;
}

// addStatement
var addStatement = (a, b) => {
  return a + b;
}

var addExpression = (a, b) => a + b;

console.log(add(1, 3));
console.log(add(9, 0));
console.log(addStatement(10, 15));
console.log(addExpression(9, 23));
