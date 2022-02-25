import {user_data, load_dataFromLS, push_data, toggle_displays, text, validate_login} from './Module.js';

// select registration information
const f_name = document.getElementById('fName');
const l_name = document.getElementById('lName');
const email = document.getElementById('email');
const mobile_num = document.getElementById('mobNum');
const username = document.getElementById('uName');
const password = document.getElementById('password')

// select login data
const username_login = document.getElementById('username_login');
const password_login = document.getElementById('password_login');

// select container
const signup_container = document.getElementById('registration');
const login_container = document.getElementById('login-container');
console.log(signup_container, login_container)

// layout selector
const change_toLogin = document.querySelectorAll('.navigate_login');
const change_tosignup = document.getElementById('navigate_signup');

// select form
const login_form = document.getElementById('login_form');
const signup_form = document.getElementById('signup_form');

let customerAccount = [];
window.onload = function () {
  customerAccount = load_dataFromLS('CustomerAccount', customerAccount);
}

signup_form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new user_data(f_name.value, l_name.value, email.value,
    mobile_num.value, username.value, password.value);

  push_data(customerAccount, data,  customerAccount.length, 'CustomerAccount')
})

// changing between forms
change_toLogin.forEach((change) => change.addEventListener('click', () => {
  toggle_displays(login_container, signup_container);

}))

change_tosignup.addEventListener('click', () => {
  toggle_displays(signup_container, login_container)
})


login_form.addEventListener('submit', (e) => {
  e.preventDefault();

  let isFound = validate_login(customerAccount,  username_login.value, password_login.value) ;

  if (isFound)
    console.log("Correct Login information")
  else
    console.log("Incorrect Login information")
})

function validateForm() {

  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");

  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {

      y[i].className += " invalid";

      valid = false;
    }
  }

  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}