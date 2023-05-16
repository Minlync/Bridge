const avatarBoxes = document.querySelectorAll(".avatar-box");
const continueBtn = document.querySelector(".continue-btn");

avatarBoxes.forEach((avatarBox) => {
  avatarBox.addEventListener("click", () => {
    // Remove 'selected' class from all avatar boxes
    avatarBoxes.forEach((box) => box.classList.remove("selected"));
    // Add 'selected' class to the clicked avatar box
    avatarBox.classList.add("selected");
  });
});

continueBtn.addEventListener("click", () => {
  // Add code here to redirect to the next page
  console.log("Continue button clicked!");
});
// Get the <body> element
const body = document.querySelector("body");

// Set the height of the <body> element to "auto"
body.style.height = "auto";
