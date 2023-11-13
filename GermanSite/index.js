document.getElementById('formBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default form submission action

    // Validation
    let isValid = true;
    const emailAddress = document.getElementById('emailAddress');
    const confirmEmail = document.getElementById('confirmEmail');
    const agreeCheckbox = document.getElementById('agree');
    const signUpContainer = document.querySelector('.signUpContainer');

    // Reset styles
    resetStyles([emailAddress, confirmEmail, agreeCheckbox]);

    // Check if email fields are filled and match
    if (!emailAddress.value || emailAddress.value !== confirmEmail.value) {
        setErrorStyles([emailAddress, confirmEmail]);
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
            // Change the border color and label color for input fields
            element.style.borderColor = '#ff005a';
            element.previousElementSibling.style.color = '#ff005a';
        }
    });
}

function resetStyles(elements) {
    elements.forEach(element => {
        if (element.type === 'checkbox') {
            // Reset the label color for the checkbox
            element.nextElementSibling.style.color = '';
        } else {
            // Reset the border color and label color for input fields
            element.style.borderColor = '';
            element.previousElementSibling.style.color = '';
        }
    });
}
