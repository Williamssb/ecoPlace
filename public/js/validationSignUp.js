window.addEventListener("load", function () {
  let errors = {};
  console.log('prueba');
  const signUpForm = document.querySelector(".signUpForm");

  const signUpName = document.getElementById("userName");
  const signUpEmail = document.getElementById("userEmail");
  const signUpPassword = document.getElementById("userPassword");
  const signUpConfirmPassword = document.getElementById("userConfirmPassword");
  const signUpImage = document.getElementById("userImage");

  const validateSignUpName = (event) => {
    let errorText = "";

    const field = event.target;
    if (field.value.trim() == "") {
      errorText = "Debés completar el campo name.";
    } else if (field.value.trim().length < 3) {
      errorText = "Debe tener al menos 3 caracteres.";
    }

    handleError(signUpName, errorText);
  };

  const validateSignUpEmail = (event) => {
    let errorText = "";

    const field = event.target;
    const mailValidator = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (field.value.trim() == "") {
      errorText = "Debés completar el campo email.";
    } else if (!field.value.match(mailValidator)) {
      errorText = "Debés completar el campo email con caracteres correctos.";
    }

    handleError(signUpEmail, errorText);
  };

  const validateSignUpPassword = (event) => {
    let errorText = "";

    const field = event.target;
    if (field.value == "") {
      errorText = "Debés completar el campo password.";
    } else if (field.value.length < 8) {
      errorText = "Debe contar con al menos 8 caracteres.";
    }

    handleError(signUpPassword, errorText);
  };

  const validateSignUpConfirmPassword = (event) => {
    let errorText = "";

    const field = event.target;
    if (field.value == "") {
      errorText = "Debés completar el campo confirmar password.";
    } else if (field.value !== signUpPassword.value) {
      errorText = "Las passwords deben coincidir.";
    }

    handleError(signUpConfirmPassword, errorText);
  };

  let validateSignUpImage = (event) => {
    let errorText = '';

    let validFormat = true;
    const field = event.target;
    if(field.value) {
        let ext = field.value.split('.')[1];
        switch (ext) {
        case 'jpg':
            validFormat = true;
            break;
        case 'jpeg':
            validFormat = true;
            break;
        case 'png':
            validFormat = true;
            break;
        case 'gif':
            validFormat = true;
            break;
        default:
            validFormat = false;
            break;
        }
    }
    if (!validFormat) {
        errorText = 'La imagén debe tener uno de los siguientes formatos (JPG, JPEG, PNG, GIF).';
    }

    handleError(signUpImage, errorText);
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

  signUpName.addEventListener("blur", validateSignUpName);
  signUpEmail.addEventListener("blur", validateSignUpEmail);
  signUpPassword.addEventListener("blur", validateSignUpPassword);
  signUpConfirmPassword.addEventListener("blur", validateSignUpConfirmPassword);
  signUpImage.addEventListener("blur", validateSignUpImage);

  signUpForm.addEventListener("submit", function (event) {
    validateSignUpName();
    validateSignUpEmail();
    validateSignUpPassword();
    validateSignUpConfirmPassword();
    validateSignUpImage();

    if (Object.keys(errors).length) {
      event.preventDefault();
    }
  });
});
