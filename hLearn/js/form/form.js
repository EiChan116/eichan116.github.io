function formValidation() {
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    var uname = document.registration.username;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    var umsex = document.registration.male;
    var ufsex = document.registration.female;

    if(userId_validation(uid, 5, 12)) {
        if(passId_validation(passid, 7, 12)) {
            if(allLetter(uname)) {
                if(alphaNumeric(uadd)) {
                    if(countrySelect(ucountry)) {
                        if(allNumeric(uzip)) {
                            if(validateEmail(uemail)) {
                                if(validGender(umsex, ufsex)) {

                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}
function userId_validation(uid, mx, my) {
    var uid_len = uid.value.length;
    if(uid_len == 0 || uid_len >= my || uid_len < mx) {
        alert("User id should not be empty and length be between " + mx + "and " + my + ".");
        uid.focus();
        return false;
    }
    return true;
}
function passId_validation(inputtxt) {
    var passwd = ("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$");
    if(inputtxt.value.match(passwd)) {
        return true;
    }
    else {
        alert('Password must include alphabert, special charatter and numbers!');
        inputtxt.focus();
        return false;
    }
}
function allLetter(uname) {
    // var letters = ("^(?=(.*[a-zA-Z/s])$");
    var letters = /^[A-Za-z\s]+$/;
    if(uname.value.match(letters)) {
        return true;
    }
    else {
        alert('User name must have alphabet characters and space only.');
        uname.focus();
        return false;
    }
}
function alphaNumeric(uadd) {
 
    var letters = /^[A-Za-z0-9_@./#&+-,\s]+$/;
    if(uadd.value.match(letters)) {
        return true;
    }
    else {
        alert('Address must have alphanumeric characters only!');
        uadd.focus();
        return false;
    }
}
function countrySelect(ucountry) {
    if(ucountry.value == "default") {
        alert('Select your counrty from the list!');
        ucountry.focus();
        return false;
    }
    else {
        return true;
    }
}
function allNumeric(uzip) {
    var numbers = /^[0-9]+$/;
    if(uzip.value.match(numbers)) {
        return true;
    }
    else {
        alert('ZIP code must only have numeric number!');
        uzip.focus();
        return false;
    }
}
function validateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat)) {
        return true;
    }
    else {
        alert("You have entered an invalid email adress! Please check again.");
        uemail.focus();
        return false;
    }
}
function validGender(umsex, ufsex) {
    var x = 0;
    if(umsex.checked) {
        x++;
    }
    if(ufsex.checked) {
        x++;
    }
    if(x == 0) {
        alert('Please check male or female option');
        umsex.focus();
        return false;
    }
    else {
        alert('Form successfully Submitted!');
        window.location.reload();
        return true;
    }
}