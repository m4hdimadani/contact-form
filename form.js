const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailAddress = document.getElementById("emailAddress");
const button = document.getElementById("btn");

//MESSAGE
const firstNameMessage = document.querySelector(".first-msg");
const lastNameMessage = document.querySelector(".last-msg");
const emailMessage = document.querySelector(".email-msg");

const submitHandler = (event) => {
  event.preventDefault();
  if (firstName === "" && lastName === "" && emailAddress === "") {
    alert("Please fill all input fields");
  }
  if (firstName.value === "") {
    showMessage(firstNameMessage, "Please enter first name", "#FF0000");
  } else {
    showMessage(firstNameMessage, "#4BB543");
  }
  if (lastName.value === "") {
    showMessage(lastNameMessage, "Please enter last name", "#FF0000");
  }else {
    showMessage(lastNameMessage, "#4BB543");
  }
  if (emailAddress.value === "") {
    showMessage(emailAddress, "Please enter email address", "#FF0000");
  } else {
    showMessage(emailAddress,"#4BB543");
  }
};

const showMessage = (element, msg, color) => {
  element.style.visibility = "visible";
  element.textContent = msg;
  element.style.color = color;
  element.previousElementSibling.style.border = `2px solid ${color}`;
};

button.addEventListener("click", submitHandler);
