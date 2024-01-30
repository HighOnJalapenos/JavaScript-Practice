// function func1() {
//   setTimeout(() => {
//     return "This is response sent after 2 secs";
//   }, 2000);
// }

// const res = func1();
// console.log(res);

//undefined because it is async and the code moves on.

// function func2(callback) {
//   setTimeout(() => {
//     const res = "This is a response after 2 sec";
//     callback(res);
//   }, 2000);
// }

// func2((res) => {
//   console.log("first callback", res);
//   func2((res) => {
//     console.log("second callback", res);
//     func2((res) => {
//       console.log("third callback", res);
//     });
//   });
// });

//this is the use of callback function. We need to perform certain tasks but once the async operations have been completed.
// to perform additional async operations or further operations after the async operattions more and more callbacks are needed.
// this leads to nested callbacks called callback hell
// settimeout itself isn't async so it will not return pronmise (or anything)
