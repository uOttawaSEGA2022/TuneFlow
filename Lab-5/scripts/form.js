const scriptSource = "https://code.jquery.com/jquery-3.6.3.min.js"

// Services - Experts select restrictions

// Map your choices to your option value
var lookup = {
    'Bike Repair': ['Victor', 'Katherine'],
    'Suspension Service': ['Victor', 'Katherine'],
    'Ski Waxing':  ['Sam'],
    'Skate Sharpening': ['Sam'],
 };
 
 console.log(typeof jQuery)

 
 $(function() {
    $('#options').change(function(){
        var selectValue = $(this).val();

        $('#choices').empty();
    
        // For each chocie in the selected option
        for (i = 0; i < lookup[selectValue].length; i++) {
       // Output choice in the target field
       $('#choices').append("<option value='" + lookup[selectValue][i] + "'>" + lookup[selectValue][i] + "</option>");
    }
    });
});

/*
 // When an option is changed, search the above for matching choices
 $('#options').on('change', function() {
    // Set selected option as variable
    var selectValue = $(this).val();
 
    // Empty the target field
    $('#choices').empty();
    
    // For each chocie in the selected option
    for (i = 0; i < lookup[selectValue].length; i++) {
       // Output choice in the target field
       $('#choices').append("<option value='" + lookup[selectValue][i] + "'>" + lookup[selectValue][i] + "</option>");
    }
 });*/

var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"]
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) == -1 ]
}

function validateCardNumber() {
    //Check if the number contains only numeric value  
    //and is of between 13 to 19 digits
    let cardNumber = document.getElementById("creditCardBox").value;
    console.log(cardNumber);

    if (cardNumber == "" || cardNumber == null) {
        return false
    }

    // Remove all non-digit characters from the input
    let cleanNumber = cardNumber.replace(/\D/g, "");

    // Convert the string to an array of digits
    let digits = cleanNumber.split("").map(Number);

    // Double every other digit, starting from the second digit from the right
    for (let i = digits.length - 2; i >= 0; i -= 2) {
        digits[i] *= 2;

        // If the doubled digit is greater than 9, subtract 9
        if (digits[i] > 9) {
            digits[i] -= 9;
        }
    }

    // Sum all of the digits
    let sum = digits.reduce((acc, val) => acc + val, 0);

    // If the sum is divisible by 10, the card number is valid
    if ((sum % 10 === 0) == true) {
        console.log("PASS");
        return true;
    }
    else {
        console.log("FAIL");
        return false;
    }
}

function validateCardDate() {
    let phone = document.getElementById("expBox").value;
    console.log(phone);
    var re = /^(0[1-9]|1[0-2])\/\d{4}$/;

    return re.test(phone);
}

function validateCardCVV() {
    let phone = document.getElementById("cvvBox").value;
    console.log(phone);
    var re = /^\d{3,4}$/;

    return re.test(phone);
}

function validatePhone() {
    let phone = document.getElementById("phoneNumberField").value;
    console.log(phone);
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    return re.test(phone);
}

function validateEmail() {
    let email = document.getElementById("emailBox").value;
    var re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
    console.log(email);

    if (email == "" || email == null) {
        return false
    }

    return re.test(email);
}

function validateName() {
    let first = document.getElementById("firstBox").value;
    let last = document.getElementById("lastBox").value;


    var re = /^[A-Za-z]+(([',. -][A-Za-z ])?[A-Za-z]*)*$/;

    return re.test(first) && re.test(last);
}

function validateInputs() {

    let modalElement = document.getElementById('exampleModal');
    let phoneElement = document.getElementById('phoneNumberField');
    let first = document.getElementById('firstBox');
    let last = document.getElementById('lastBox');
    let email = document.getElementById('emailBox');
    let cardElement = document.getElementById('creditCardBox');
    let cardExpElement = document.getElementById('expBox');
    let cardCvvElement = document.getElementById('cvvBox');
    let error = document.getElementById('errorMSG');

    if (validateName()) {

        first.style.borderColor = "#495057";
        last.style.borderColor = "#495057";
        phoneElement.style.borderColor = "#495057";
        email.style.borderColor = "#495057";
        cardElement.style.borderColor = "#495057";
        cardExpElement.style.borderColor = "#495057";
        cardCvvElement.style.borderColor = "#495057";

        if (validatePhone()) {
            phoneElement.style.borderColor = "#495057";
            error.textContent = " "

            if (validateEmail()) {
                email.style.borderColor = "#495057";
                error.textContent = " "

                if (validateCardNumber() && validateCardDate() && validateCardCVV()) {
                    cardElement.style.borderColor = "#495057";
                    cardExpElement.style.borderColor = "#495057";
                    cardCvvElement.style.borderColor = "#495057";
                    error.textContent = " "
                    $(modalElement).modal('hide');
                }
                else {
                    cardElement.style.borderColor = "red";
                    cardExpElement.style.borderColor = "red";
                    cardCvvElement.style.borderColor = "red";
                    error.textContent = "Error! Empty or Invalid Credit Card Info."
                }
            }
            else {
                email.style.borderColor = "red";
                error.textContent = "Error! Empty or Invalid Email Address."
            }
        }
        else {
            phoneElement.style.borderColor = "red";
            error.textContent = "Error! Empty or Invalid Phone Number."
        }
    }
    else {
        first.style.borderColor = "red";
        last.style.borderColor = "red";
        error.textContent = "Error! Empty or Invalid First or Last Name."
    }

} 