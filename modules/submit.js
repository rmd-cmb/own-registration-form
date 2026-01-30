//"./modules/submit.js" 


import {hasNameErr} from "./validate-name.js";
import {hasEmailErr} from "./validate-email.js";
import {hasPhoneErr} from "./validate-phone.js";
import {hasLoginErr} from "./login/validate-login.js";
import {hasPasswordErr} from "./validate-password.js";
import {hasCountryErr} from "./select-country.js";
import {hasGenderErr, hasTermsErr} from "./gender-n-terms.js";


function sendToServer (){
     fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json));
}

//const submitBtn = document.getElementById("submit-btn");
const regForm = document.getElementById("reg-form")
export default function initSubmitListener (){
    regForm.addEventListener("submit", (e)=>{
    
    e.preventDefault(); 
    console.log("submited");

    sendToServer();


    const name = hasNameErr();
    const email = hasEmailErr();
    const phone = hasPhoneErr();
    const login = hasLoginErr();
    const password = hasPasswordErr();
    const country = hasCountryErr();
    const gender =  hasGenderErr();
    const terms = hasTermsErr();

    let hasErr = 
        name ||
        email ||
        phone ||
        login ||
        password ||
        country ||
        gender ||
        terms;
    
    if(hasErr){
        console.log("you have errors");
    } else {
       sendToServer();
    }

    });
}    