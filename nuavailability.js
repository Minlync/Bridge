const submitButton = document.getElementById("submit-button");
const cells = document.querySelectorAll("td");

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.classList.toggle("selected");
  });
});

submitButton.addEventListener;
