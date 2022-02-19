import {user_data, load_dataFromLS, push_data, toggle_displays, text, validate_login} from './Module.js';

// select signup info of seller
const f_name = document.getElementById('fName');
const l_name = document.getElementById('lName');
const email = document.getElementById('email');
const mobile_num = document.getElementById('phoneNum1');
const username = document.getElementById('uName');
const password = document.getElementById('password')
console.log(text)
//select container
const seller_loginContainer = document.getElementById('SellerLogin-container')
const seller_signupContainer = document.getElementById('seller_registration-container');

// change layout selector
const change_toSellerLogin = document.querySelectorAll('.navigate_seller_login')
console.log(change_toSellerLogin)
const change_toSellerSignup = document.getElementById('navigate_seller_signup')

// select form
const sellerLogin_form = document.getElementById('SellerLogin_form');
const seller_registration = document.getElementById('SellerSignup_form');

// select login data
const username_login = document.getElementById('username_login');
const password_login = document.getElementById('password_login');

let sellerAccount = [];

window.onload = function () {
    sellerAccount = load_dataFromLS('SellerAccount', sellerAccount);
  }

seller_registration.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new user_data(f_name.value, l_name.value, email.value,
        mobile_num.value, username.value, password.value);
    console.log(data)
      push_data(sellerAccount, data,  sellerAccount.length, 'SellerAccount')

})

change_toSellerLogin.forEach((change)  => change.addEventListener('click', () => {
    toggle_displays(seller_loginContainer, seller_signupContainer)
}))


change_toSellerSignup.addEventListener('click', ()=> {
    toggle_displays(seller_signupContainer, seller_loginContainer);
})

sellerLogin_form.addEventListener('submit', (e)=> {
    e.preventDefault();

    let isFound = validate_login(sellerAccount, username_login.value, password_login.value);

    if (isFound)
     {
      console.log("Correct Login information")
      window.location.href ="http://127.0.0.1:5501/Seller%20Page/index.html";
     }
  else
    console.log("Incorrect Login information")
} )