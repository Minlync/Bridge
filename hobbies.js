const bubbleButtons = document.querySelectorAll(".bubble");

bubbleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("clicked");
  });
});
