// function attachEventListener() {
//   let count = 0;
//   document.getElementById("clickMe").addEventListener("click", function abc() {
//     console.log("Button Click", ++count);
//   });
// }
// attachEventListener();
//*****************************************************************
// promise
function getData(dataId, getNextData) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      // console.log("data", dataId);
      // res("success");
      rej("error in code");
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}
