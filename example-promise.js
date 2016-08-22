// function getTempCallback (localtion, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback ('Philadelphia', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function (temp){
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// });

// Challenge
// function addPromise (a, b) {
//   return new Promise(function (resolve, reject) {
//     if (typeof a === 'number' && typeof b === 'number') {
//       resolve(a + b);
//     } else {
//       reject('One of them is not a number');
//     }
//   });
// }
//
// addPromise(2, 6).then(function (sum) {
//   console.log(sum);
// }, function (err) {
//   console.log(err);
// });
//
// addPromise(2, 'hello').then(function (sum) {
//   console.log(sum);
// }, function (err) {
//   console.log(err);
// });
