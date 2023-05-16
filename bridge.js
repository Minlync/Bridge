var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
};

// this is the code for the pop-up on the home page
// it alerts the user that they have been matched
window.addEventListener(“load”, function(){
  setTimeout(
      function open(event){
          document.querySelector(“.popup”).style.display = “block”;
      },
      1000 
  )
});
document.querySelector(“#close”).addEventListener(“click”, function(){
  document.querySelector(“.popup”).style.display = “none”;
});