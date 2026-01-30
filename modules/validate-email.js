//"./modules/validate-email.js"

import initeListenters from "./init-listeners.js";
import {showRedBorder} from "./input-error.js";

const inputEmail = document.getElementById("email");
const elementInvalidEmail = document.getElementById("invalid-email");

function validateEmail() {
  let status = false;
  const min = 7;
  const max = 15;
  const msgs = {
    msgSymb: `Invalid email`,
    msgShortName: `It's too short.  Minimum length is ${min}.`,
    msgLongName: `It's too long.  Maximum length is ${max}.`,
  }
  const stopList = /^[^\s@]+@[^\s@]+\.[\w]{2,6}$/;  
  const error = {
    errorMsg: ""
  };
  
  if(!stopList.test(inputEmail.value)){
    error.errorMsg += `<p>${msgs.msgSymb}</p>`;
    status = true;
  } 
  if(inputEmail.value.trim().length < min){
    error.errorMsg += `<p>${msgs.msgShortName}</p>`;
    status = true;
  } 
  if(inputEmail.value.trim().length > max){
    error.errorMsg += `<p>${msgs.msgLongName}</p>`;
    status = true;
  }
  
  if(status){
    error.elementLink = elementInvalidEmail;
    return error;
  } 

  return null;
}

export function initEmailListeners () {
  initeListenters(inputEmail, validateEmail);
};


export function hasEmailErr() {
  if(validateEmail()){
    showRedBorder(inputEmail, true);
    return true;
  }
  return false;
}