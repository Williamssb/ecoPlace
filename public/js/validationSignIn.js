window.addEventListener("load", function () {
  let errors = {};

  const signInForm = document.querySelector(".signInForm");

  const signInEmail = document.getElementById("userEmail");
  const signInPassword = document.getElementById("userPassword");

  const validateSignInEmail = (event) => {
    let errorText = "";

    const field = event.target;
    const mailValidator = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (field.value.trim() == "") {
      errorText = "Debés completar el campo email.";
    } else if (!field.value.match(mailValidator)) {
      errorText = "Debés completar el campo email con caracteres correctos.";
    }

    handleError(signInEmail, errorText);
  };

  const validateSignInPassword = (event) => {
    let errorText = "";

    const field = event.target;
    if (field.value.trim() == "") {
      errorText = "Debés completar el campo password.";
    } else if (field.value.trim().length < 8) {
      errorText = "Debe contar con al menos 8 caracteres.";
    }

    handleError(signInPassword, errorText);
  };

  let handleError = function (element, textError) {
    let textErrorElement = element.nextElementSibling;

    if (textError) {
      element.classList.add("input-danger");
      textErrorElement.classList.add("text-danger");
      errors[element.name] = textError;
    } else {
      element.classList.remove("input-danger");
      textErrorElement.classList.remove("text-danger");
      delete errors[element.name];
    }

    textErrorElement.innerText = textError;
  };

  signInEmail.addEventListener("blur", validateSignInEmail);
  signInPassword.addEventListener("blur", validateSignInPassword);

  signInForm.addEventListener("submit", function (event) {
    validateSignInEmail();
    validateSignInPassword();

    if (Object.keys(errors).length) {
      event.preventDefault();
    }
  });
});
