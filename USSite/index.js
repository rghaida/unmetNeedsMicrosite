document.getElementById('formBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default form submission action

    // Validation
    let isValid = true;
    const emailAddress = document.getElementById('emailAddress');
    const confirmEmail = document.getElementById('confirmEmail');
    const agreeCheckbox = document.getElementById('agree');
    const specialty = document.getElementById('specialty');
    const npiNumber = document.getElementById('npiNumber');
    const signUpContainer = document.querySelector('.signUpContainer');
    // const institutionName = document.getElementById('institutionName');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');


    // Reset styles
    resetStyles([emailAddress, confirmEmail, agreeCheckbox, specialty, npiNumber, firstName, lastName]);



    if (!firstName.value) {
        setErrorStyles([firstName]);
        isValid = false;
    }
    
    if (!lastName.value) {
        setErrorStyles([lastName]);
        isValid = false;
    }
    // Check if email fields are filled and match
    if (!emailAddress.value || emailAddress.value !== confirmEmail.value) {
        setErrorStyles([emailAddress, confirmEmail]);
        isValid = false;
    }

    // Check if institution name field is filled
// if (!institutionName.value) {
//     setErrorStyles([institutionName]);
//     isValid = false;
// }


    // Check if specialty and NPI number fields are filled
    if (!specialty.value || !npiNumber.value) {
        setErrorStyles([specialty, npiNumber]);
        isValid = false;
    }

    // Check if checkbox is checked
    if (!agreeCheckbox.checked) {
        setErrorStyles([agreeCheckbox]);
        isValid = false;
    }

    if (isValid) {
        // Hide form and show thank you message
        document.querySelector('.signUpContent').style.display = 'none';
        document.querySelector('.signUpForm').style.display = 'none';
        document.querySelector('.thankyou').style.display = 'block';

        // Update styles for signUpContainer
        signUpContainer.style.paddingLeft = '0px';
        signUpContainer.style.paddingTop = '40px';
    }
});

function setErrorStyles(elements) {
    elements.forEach(element => {
        if (element.type === 'checkbox') {
            // Change the label color for the checkbox
            element.nextElementSibling.style.color = '#ff005a';
        } else {
            // Change the border color for input fields
            element.style.borderColor = '#ff005a';

            // Special handling for NPI number input
            if (element.id === 'npiNumber') {
                // Access the label for NPI number
                const npiLabel = document.getElementById('npiLabel');
                if (npiLabel) {
                    npiLabel.style.color = '#ff005a';
                }
            } else if (element.previousElementSibling && element.previousElementSibling.tagName === 'LABEL') {
                // Change label color for other input fields
                element.previousElementSibling.style.color = '#ff005a';
            }
        }
    });
}


function resetStyles(elements) {
    elements.forEach(element => {
        if (element.type === 'checkbox') {
            // Reset the label color for the checkbox
            element.nextElementSibling.style.color = '';
        } else {
            // Reset the border color for input fields
            element.style.borderColor = '';

            // Special handling for NPI number input
            if (element.id === 'npiNumber') {
                // Access the label for NPI number
                const npiLabel = document.getElementById('npiLabel');
                if (npiLabel) {
                    npiLabel.style.color = '';
                }
            } else if (element.previousElementSibling && element.previousElementSibling.tagName === 'LABEL') {
                // Reset label color for other input fields
                element.previousElementSibling.style.color = '';
            }
        }
    });
}

const infoIcon = document.querySelector('.npi-info-icon');
const modal = document.querySelector('.npi-hover-modal');
const npiLabel = document.getElementById('npiLabel');
let isModalOpen = false; // Flag to track modal state

document.querySelector('.npi-info-icon').addEventListener('mouseenter', function() {
    document.querySelector('.npi-hover-modal').style.display = 'block';
});

infoIcon.addEventListener('touchstart', function(event) {
    event.preventDefault(); // Prevent the default touch action

    // Toggle modal display
    if (isModalOpen) {
        modal.style.display = 'none';
        if (window.innerWidth <= 768) { // Assuming mobile devices are <= 768px in width
            npiLabel.style.paddingTop = '0px'; // Remove extra padding on mobile
        }
    } else {
        modal.style.display = 'block';
        if (window.innerWidth <= 768) { // Check if on mobile device
            npiLabel.style.paddingTop = '70px'; // Add extra padding on mobile
        }
    }
    isModalOpen = !isModalOpen; // Toggle the flag
});

institutionName.addEventListener('input', function() {
    if (institutionName.value) {
        resetStyles([institutionName]);
    } else {
        setErrorStyles([institutionName]);
    }
});

// document.querySelector('.npi-info-icon').addEventListener('mouseleave', function() {
//     document.querySelector('.npi-hover-modal').style.display = 'none';
// });
// Event listener for email fields
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

[emailAddress, confirmEmail].forEach(field => {
    field.addEventListener('input', function() {
        const isEmailValid = emailAddress.value.match(emailRegex) && confirmEmail.value.match(emailRegex);
        const isEmailMatch = emailAddress.value === confirmEmail.value;

        if (isEmailValid && isEmailMatch) {
            resetStyles([emailAddress, confirmEmail]);
        } else {
            setErrorStyles([emailAddress, confirmEmail]);
        }
    });
});
// Event listener for specialty and NPI number fields
[specialty, npiNumber].forEach(field => {
    field.addEventListener('input', function() {
        if (field.value) {
            resetStyles([field]);
        } else {
            setErrorStyles([field]);
        }
    });
});
const agreeCheckbox = document.getElementById('agree');
// Event listener for checkbox
agreeCheckbox.addEventListener('change', function() {

    const checkboxLabel = document.querySelector('label[for="agree"]'); // Select the label associated with the checkbox

    if (agreeCheckbox.checked) {
        checkboxLabel.style.color = ''; // Reset the label color when checkbox is checked
    } else {
        checkboxLabel.style.color = '#ff005a'; // Set error color when checkbox is unchecked
    }
});

[firstName, lastName].forEach(field => {
    field.addEventListener('input', function() {
        if (field.value) {
            resetStyles([field]);
        } else {
            setErrorStyles([field]);
        }
    });
});