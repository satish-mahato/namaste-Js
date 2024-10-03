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

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am promise");
    // resolve("sucsess");
    reject("Network Error");
  });
};
let promise = getPromise();
promise.then((res) => {
  console.log("promise filled", res);
});
promise.catch((err) => {
  console.log("Promise reject", err);
});
