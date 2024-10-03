// function attachEventListener() {
//   let count = 0;
//   document.getElementById("clickMe").addEventListener("click", function abc() {
//     console.log("Button Click", ++count);
//   });
// }
// attachEventListener();
//*****************************************************************
// promise
// function getData(dataId, getNextData) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       // console.log("data", dataId);
//       // res("success");
//       rej("error in code");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }
/************************************************************************* */

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am promise");
//     // resolve("sucsess");
//     reject("Network Error");
//   });
// };
// let promise = getPromise();
// promise.then((res) => {
//   console.log("promise filled", res);
// });
// promise.catch((err) => {
//   console.log("Promise reject", err);
// });

//************************************************************************************ */
// function asynFunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Some data 1.........");
//       resolve("Success");
//     }, 4000);
//   });
// }
// console.log("Fetching data 1......");
// let p1 = asynFunc();
// p1.then((res) => {
//   console.log(res);
// });

//************************************************************************************ */
function asynFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 1 printing....");
      resolve("success");
    }, 4000);
  });
}
function asynFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 222 printing....");
      resolve("success");
    }, 4000);
  });
}
console.log("printing data111111");
let p1 = asynFunc1();
p1.then((res) => {
  console.log(res);
  console.log("printing data22222222");
  let p2 = asynFunc2();
  p2.then((res) => {
    console.log(res);
  });
});
