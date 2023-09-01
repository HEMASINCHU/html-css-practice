const btn = document.getElementById("elem");

function btnToExe() {
  console.log("click me");
}

// // btn.addEventListener("click", btnToExe);

// btn.onclick = btnToExe;
// first--question

const carsModel = document.getElementById("cars");
const carName = document.getElementById("car");

// carsModel.addEventListener("click", () => {
//   carName.style.display = carName.style.display === "none" ? "block" : "none";
// });

//second-question
const element = document.getElementById("myDiv");
function changeBackgroundColor(element, color) {
  if (element) {
    element.addEventListener("mouseenter", () => {
      element.style.backgroundColor = color;
    });
  }
}
// changeBackgroundColor(element, "green");

//third-question

const form = document.getElementById("myform");
const errorMessagesDiv = document.getElementById("errorMessages");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  errorMessagesDiv.innerHTML = "";
  const requiredFields = form.querySelectorAll("[required]");
  requiredFields.forEach((field) => {
    if (field.value.trim() === "") {
      const fieldName = field.getAttribute("name");
      const errorMessage = document.createElement("p");
      errorMessage.textContent = `${fieldName} is required.`;
      errorMessagesDiv.appendChild(errorMessage);
    }
  });
});
