var number1 = Math.floor(Math.random() * 10);
document.getElementById('random1').innerHTML = number1;
var number2 = Math.floor(Math.random() * 20);
document.getElementById('random2').innerHTML = number2;
var submit = 0;


// **************************************************
// ***** PAPER SUBMISSION FORM VALIDATION START *****
// **************************************************

function validate_form() {
    console.log("form is submit")

    submit++;
    var inputtitle = document.forms['sign_up_form']['input_title_name'].value;
    var inputauthor = document.forms['sign_up_form']['input_author_name'].value;
    var inputemail = document.forms['sign_up_form']['input_email_name'].value;
    var inputresearchpaper = document.forms['sign_up_form']['input_researchpaper_name'].value;

    if (inputtitle == "") {
        document.getElementById('titlepaper').innerHTML = "This field is required.";
        document.getElementById('titlepaper').style.color += "#990000";
        document.getElementById('titlepaper').style.fontSize += "13px";
        document.getElementById('input_title').style.outline += "thin solid red";
    }

    if (inputauthor == "") {
        document.getElementById('author').innerHTML = "This field is required.";
        document.getElementById('author').style.color += "#990000";
        document.getElementById('author').style.fontSize += "13px";
        document.getElementById('input_author').style.outline += "thin solid red";
    }

    if (inputemail == "") {
        document.getElementById('email').innerHTML = "This field is required.";
        document.getElementById('email').style.color += "#990000";
        document.getElementById('email').style.fontSize += "13px";
        document.getElementById('input_email').style.outline += "thin solid red";
    }
    if (inputresearchpaper == "") {
        document.getElementById('researchpaper').innerHTML = "This field is required.";
        document.getElementById('researchpaper').style.color += "#990000";
        document.getElementById('researchpaper').style.fontSize += "13px";
        document.getElementById('research_paper').style.outline += "thin solid red";
    }
    return false;
}

// onkeyup validation start

// keyup validation for paper title
function keyup_papertitle() {
    if (submit == 0) {

    } else {
        var inputtitle = document.forms['sign_up_form']['input_title_name'].value;

        if (inputtitle != "") {
            document.getElementById('titlepaper').innerHTML = "";
            document.getElementById('input_title').style.outline = "";
        } else {
            document.getElementById('titlepaper').innerHTML = "This field is required.";
            document.getElementById('titlepaper').style.color += "#990000";
            document.getElementById('titlepaper').style.fontSize += "13px";
            document.getElementById('input_title').style.outline += "thin solid red";
        }
    }
}

// keyup validation for author input
function keyup_author() {
    if (submit == 0) {

    } else {
        var inputauthor = document.forms['sign_up_form']['input_author_name'].value;

        if (inputauthor != "") {
            document.getElementById('author').innerHTML = "";
            document.getElementById('input_author').style.outline = "";
        } else {
            document.getElementById('author').innerHTML = "This field is required.";
            document.getElementById('author').style.color += "#990000";
            document.getElementById('author').style.fontSize += "13px";
            document.getElementById('input_author').style.outline += "thin solid red";
        }
    }
}

// keyup validation for email input
function keyup_email() {
    if (submit == 0) {

    } else {
        var inputemail = document.forms['sign_up_form']['input_email_name'].value;
        var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
        var check = email_regex.test(inputemail);
        if (check != true) {
            document.getElementById('email').innerHTML = "Please enter a valid email address.";
            document.getElementById('email').style.color += "#990000";
            document.getElementById('email').style.fontSize += "13px";
            document.getElementById('input_email').style.outline += "thin solid red";

        } else if (check == true) {
            document.getElementById('email').innerHTML = "";
            document.getElementById('input_email').style.outline = "";
        } else {
            document.getElementById('email').innerHTML = "This field is required.";
            document.getElementById('email').style.color += "#990000";
            document.getElementById('email').style.fontSize += "13px";
            document.getElementById('input_email').style.outline += "thin solid red";
        }
    }
}

// keyup validation for research paper option
function keyup_researchpaper() {
    if (submit == 0) {

    } else {
        var inputresearchpaper = document.forms['sign_up_form']['input_researchpaper_name'].value;

        if (inputresearchpaper != "") {
            document.getElementById('researchpaper').innerHTML = "";
            document.getElementById('researchpaper').style.outline = "";
        } else {
            document.getElementById('researchpaper').innerHTML = "This field is required.";
            document.getElementById('researchpaper').style.color += "#990000";
            document.getElementById('researchpaper').style.fontSize += "13px";
            document.getElementById('research_paper').style.outline += "thin solid red";
        }
    }
}

// **************************************************
// ***** PAPER SUBMISSION FORM VALIDATION END *****
// **************************************************

// **************************************************
// ***** CONTACT US FORM VALIDATION START *****
// **************************************************
// $(document).ready(function() {
function contactUsValidateForm() {
    var name = document.forms['sign_up_form']['name'].value;
    var email = document.forms['sign_up_form']['email'].value;
    var message = document.forms['sign_up_form']['message'].value;
    var captcha = document.forms['sign_up_form']['captcha'].value;
    if (name == "" || email == "" || message == "" || captch == "") {
        document.getElementById('all-field').innerHTML = "Please, fill in the following field:";
    }
    if (name == "") {
        document.getElementById('name-field').innerHTML = '<li>' + "Name" + '</li>';
        document.getElementById('inputName').style.border = "2px solid red";
    } else {
        document.getElementById('name-field').innerHTML = "";
        document.getElementById('inputName').style.border = "none";
    }

    var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var check = email_regex.test(email);
    if (email == "") {
        document.getElementById('email-field').innerHTML = '<li>' + "Email Address" + '</li>';
        document.getElementById('inputEmail').style.border = "2px solid red";
    } else if (!check == true) {
        document.getElementById('all-field2').innerHTML = "Please, fix the following errors";
        document.getElementById('invalid-email').innerHTML += '<li>' + "Invalid Email" + '</li>';
    } else {
        document.getElementById('email-field').innerHTML = "";
        document.getElementById('inputEmail').style.border = "none";
    }

    if (message == "") {
        document.getElementById('message-field').innerHTML = '<li>' + "Message" + '</li>';
        document.getElementById('inputMessage').style.border = "2px solid red";
    } else {
        document.getElementById('message-field').innerHTML = "";
        document.getElementById('inputMessage').style.border = "none";
    }
    if (captcha == "") {
        document.getElementById('captcha-field').innerHTML = '<li>' + "Captcha" + '</li>';
        document.getElementById('input-answer').style.border = "2px solid red";
    } else {
        document.getElementById('captcha-field').innerHTML = "";
        document.getElementById('input-answer').style.border = "none";
    }
    return false;
}

// randomly generate two numbers


// *******************************************
// ***** CONTACT US FORM VALIDATION END *****
// *******************************************