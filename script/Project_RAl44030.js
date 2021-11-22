function validation(form){
    if(validateFirstName(form) && validateLastName(form) && validateAge(form) && validateEmail(form) && validateSubject(form) && 
        validateMessage(form)){
       return true;
    } else{
       return false;
    }
}

function validateFirstName(form){
    var firstName = form.elements["firstName"];

    if(firstName.validity.valueMissing){
        firstName.setCustomValidity("Please enter your first name");
        return false;
    } else{
        firstName.setCustomValidity("");
        return true;
    }
}

function validateLastName(form){
    var lastName = form.elements["lastName"];

    if(lastName.validity.valueMissing){
        lastName.setCustomValidity("Please enter your last name");
        return false;
    } else{
        lastName.setCustomValidity("");
        return true;
    }
}

function validateAge(form){
    var age = form.elements["age"];

    if(age.validity.valueMissing){
        age.setCustomValidity("Please enter your age");
        return false;
    } else if(age.validity.rangeUnderflow){
        age.setCustomValidity("Please enter the an age greater or equal to 18 years old");
        return false;
    } else{
        age.setCustomValidity("");
        return true;
    }
}

function validateEmail(form){
    var email = form.elements["email"];

    if(email.validity.valueMissing){
        email.setCustomValidity("Please enter an email");
        return false;
    } else if(email.validity.typeMismatch){
        email.setCustomValidity("Email '" + email.value + "' is not in a correct format");
        return false;
    } else{
        email.setCustomValidity("");
        return true;
    }
}

function validateSubject(form){
    var subject = form.elements["subject"];

    if(subject.validity.valueMissing){
        subject.setCustomValidity("Please enter the subject");
        return false;
    } else{
        subject.setCustomValidity("");
        return true;
    }
}

function validateMessage(form){
    var message = form.elements["message"];

    if(message.validity.valueMissing){
        message.setCustomValidity("Please enter your email message");
        return false;
    } else{
        message.setCustomValidity("");
        return true;
    }
}