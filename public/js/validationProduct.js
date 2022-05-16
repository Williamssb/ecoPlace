window.addEventListener('load', function(){

    let errors = {};

    const productForm = document.getElementById('productForm');

const productName = document.getElementById('productName');
const productPrice = document.getElementById('productPrice');
const productImage = document.getElementById('file');
const productDescription = document.getElementById('productDescription');

const validateProductName = (event) => {
    let errorText = '';

    const field = event.target;
    if(field.value.trim() == ""){
        errorText = 'Debés completar el campo nombre';
    } else if(field.value.trim().length < 5) {
        errorText = 'El campo nombre debe tener al menos 5 caracteres';
    }

    handleError(productName, errorText);
};

const validateProductPrice = (event) => {
    let errorText = '';

    const field = event.target;
    if(field.value.trim() == ""){
        errorText = 'Debés completar el campo precio.';
    } else if(isNaN(field.value.trim() == "")) {
        errorText = 'Solo se permiten números.';
    }

    handleError(productPrice, errorText);
};

let validateProductDescription = function(event) {
    let errorText = '';
    
    const field = event.target;
    if (field.value.trim() == '') {
        errorText = 'Debes completar el campo descripción';
    } else if(field.value.trim().length < 20) {
        errorText = 'El campo descripción debe tener al menos 20 caracteres';
    }

    handleError(productDescription, errorText);
};

let validateProductImage = function(event) {
    let errorText = '';

    let validFormat = true;
    const field = event.target
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

    handleError(productImage, errorText);
};


let handleError = function (element, textError) {
    let textErrorElement = element.nextElementSibling;

    if (textError) {
        element.classList.add('input-danger');
        textErrorElement.classList.add('text-danger');
        errors[element.name] = textError;
    } else {
        element.classList.remove('input-danger');
        textErrorElement.classList.remove('text-danger');
        delete errors[element.name];
    }
    
    textErrorElement.innerText = textError;
}

productName.addEventListener('blur', validateProductName);
productPrice.addEventListener('blur', validateProductPrice);
productDescription.addEventListener('blur', validateProductDescription);
productImage.addEventListener('blur', validateProductImage);

productForm.addEventListener('submit', function (event) {
    validateProductName();
    validateProductPrice();
    validateProductDescription();
    validateProductImage();
    
    if (Object.keys(errors).length) {
        event.preventDefault();
    }
})
})