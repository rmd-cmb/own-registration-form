//"./modules/submit.js" 

import {hasNameErr} from "./validate-name.js";
import {hasEmailErr} from "./validate-email.js";
import {hasPhoneErr} from "./validate-phone.js";
import {hasLoginErr} from "./login/validate-login.js";
import {hasPasswordErr} from "./validate-password.js";
import {hasCountryErr} from "./select-country.js";
import {hasGenderErr, hasTermsErr} from "./gender-n-terms.js";

const submitBtn = document.getElementById("submit-btn");
const regForm = document.getElementById("reg-form");

function makeSubmitWait(status){
    if(status){
        submitBtn.disabled = true;
        document.body.style.cursor = "wait";
    } else {
         document.body.style.cursor = "default";
         submitBtn.disabled = false;
    }
}

async function sendToServer (){
    const formData = new FormData(regForm);
    const data = Object.fromEntries(formData.entries());
    try {
        makeSubmitWait(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );
        if (!response.ok){
            throw new Error("Server err on submit");
        } else {
            console.log(response);
            window.location.href = "./pages/success.html";
        } 
    } catch (error) {
        console.log(error);
        alert("Error on submit");
    } finally {
        makeSubmitWait(false);
    }
}


export default function initSubmitListener (){
    regForm.addEventListener("submit", e => {
        e.preventDefault(); 
        
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
            console.log("you have errors in form");
        } else {
        sendToServer();
        }
    });
}    