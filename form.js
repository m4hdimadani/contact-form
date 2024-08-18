document.querySelector("#btn").addEventListener("click", function (event) {
  event.preventDefault();
  let isValid = true;

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("emailAddress");
  const queryTypeGeneral = document.getElementById("general");
  const queryTypeSupport = document.getElementById("support");
  const message = document.getElementById("message");
  const consent = document.querySelector(".checkbox input");

  document.querySelectorAll(".error-message").forEach((el) => el.remove());

  function showError(input, message) {
    isValid = false;
    const error = document.createElement("p");
    error.className = "error-message";
    error.textContent = message;
    error.style.color = "#e74c3c";
    input.style.borderColor = "#e74c3c";
    if (input === email) {
      input.classList.add("email-error");
    }
    input.classList.add("error");
    input.classList.remove("success");

    input.parentNode.appendChild(error);
  }
  function removeError(input) {
    input.style.borderColor = "#015a25";
    input.classList.add("success");
    input.classList.remove("error");
    if (input === email) {
      input.classList.remove("email-error");
    }
    const error = input.parentNode.querySelector(".error-message");
    if (error) {
      error.remove();
    }
  }

  if (!firstName.value.trim()) {
    showError(firstName, "This field is required");
  } else {
    removeError(firstName);
  }
  if (!lastName.value.trim()) {
    showError(lastName, "This field is required");
  } else {
    removeError(lastName);
  }
  if (!email.value.trim()) {
    showError(email, "Please enter a valid email address");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    showError(email, "Please enter a valid email address");
  } else {
    removeError(email);
  }
  if (!queryTypeGeneral.checked && !queryTypeSupport.checked) {
    const queryTypeLabel = document.querySelector(".queryType label");
    showError(queryTypeLabel, "Please select a query type");
  } else {
    removeError(queryTypeGeneral);
    removeError(queryTypeSupport);
  }
  if (!message.value.trim()) {
    showError(message, "This field is required");
  } else {
    removeError(message);
  }
  if (!consent.checked) {
    showError(
      consent,
      "To submit this form, please consent to being contacted"
    );
  } else {
    removeError(consent);
  }

  if (isValid) {
    document.querySelector("form").submit();
  }
});
document.querySelectorAll("input, textarea").forEach((input) => {
  input.addEventListener("input", function () {
    if (this.value.trim()) {
      removeError(this);
    }
  });
});

document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    if (this.checked) {
      removeError(this);
    }
  });
});

document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    const generalBox = document.querySelector(".general");
    const supportBox = document.querySelector(".support");

    if (this.id === "general") {
      supportBox.querySelector("input").disabled = true;
      generalBox.classList.add("selected");
      supportBox.classList.remove("selected");
    } else if (this.id === "support") {
      generalBox.querySelector("input").disabled = true;
      supportBox.classList.add("selected");
      generalBox.classList.remove("selected");
    }

    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
      if (radio !== this) {
        radio.disabled = !this.checked;
      }
    });
  });
});
