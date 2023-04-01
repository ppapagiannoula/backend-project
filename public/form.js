'use strict';

// Handle the submit event
function validate() {
  // Reference to the form elements
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const veremail = document.getElementById("veremail").value;
  const phone = document.getElementById("phone").value;
  const adress = document.getElementById("adress").value;
  const message = document.getElementById("message").value;
  const error_message = document.getElementById("error_message");
  const email_re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  error_message.style.padding = "5px";

  // Name checks
  if (name.length < 3) {
    // Required
    error_message.textContent = "Please Enter a valid Name";
    return false;
    
  }
  
  //Phone check
  if(isNaN(phone)) {
    console.error('phone is missing');

    if(phone.length != 10) {
      //Required
      error_message.textContent =  "Please Enter a valid phone";
      return false;
    }
  }

  // E-mail checks
  if (email_re.test(email)) {
    // Valid Value
    error_message.textContent = "Please Enter valid Email";
    return false;
  }

  //Verification email test
  if (veremail != email) {
    // Valid Value
    error_message.textContent = "wrong email";
    return false;
  }

  //Adress check
  if (adress.trim().length === 0) {
    error_message.textContent = "Please enter adress"
    return false;
  }

  //Message check
  if(message.length <= 20) {
    //Required
    error_message.textContent = "Please Enter More Than 20 Characters";
    return false;
  }

  alert("Form Submitted Successfully!");
  return true;
};
