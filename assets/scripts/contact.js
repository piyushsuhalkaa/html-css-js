var inputForName = document.getElementById("inputForName");
var invalidInputofName = document.getElementById("invalidInputofName");
var inputForMail = document.getElementById("inputForMail");
var invalidInputofMail = document.getElementById("invalidInputofMail");
var inputForPhone = document.getElementById("inputForPhone");
var invalidInputofPhone = document.getElementById("invalidInputofPhone");

function inputNameValidator(value) {
  console.log("Function Called");
  if (value.length > 3) {
    inputForName.classList.add("form-validation-error");
    invalidInputofName.style.visibility = "visible";
  } else {
    inputForName.classList.remove("form-validation-error");
    invalidInputofName.style.visibility = "hidden";
  }
}
function inputMailVaildator(inputText) {
  var mailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.test(mailRegx)) {
    inputForName.classList.add("form-validation-error");
    invalidInputofName.style.visibility = "visible";
  } else {
    inputForMail.classList.remove("form-validation-error");
    invalidInputofMail.style.visibility = "hidden";
  }
}
function inputPhoneVaildator(inputText) {
  var phoneRegx = /^[7-9]\{9}$/;
  if (PhoneRegx.test(inputText)) {
    inputForPhone.classList.add("form-validation-error");
    invalidInputofPhone.style.visibility = "visible";
  } else {
    inputForMail.classList.remove("form-validation-error");
    invalidInputofPhone.style.visibility = "hidden";
  }
}
