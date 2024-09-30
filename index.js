function attachEventListener() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function abc() {
    console.log("Button Click", ++count);
  });
}
attachEventListener();
