//"./modules/validate-email.js"

import initeListenters from "./init-listeners.js";
import {showRedBorder} from "./input-error.js";

const inputPhone = document.getElementById("phone");
const elementInvalidPhone = document.getElementById("invalid-phone");

function validatePhone() {
  let status = false;
  const min = 12;
  const max = 15;
  const msgs = {
    msgSymb: `Use only digitals.`,
    msgShortName: `It's too short.  Minimum length is ${max}.`,
    msgLongName: `It's too long.  Maximum length is ${min}.`,
  }
  const stopList = /^[+]?[\d]+$/;  
  const error = {
    errorMsg: ""
  };
  
  if(!stopList.test(inputPhone.value)){
    error.errorMsg += `<p>${msgs.msgSymb}</p>`;
    status = true;
  } 
  if(inputPhone.value.trim().length < min){
    error.errorMsg += `<p>${msgs.msgShortName}</p>`;
    status = true;
  } 
  if(inputPhone.value.trim().length > max){
    error.errorMsg += `<p>${msgs.msgLongName}</p>`;
    status = true;
  }
  
  if(status){
    error.elementLink = elementInvalidPhone;
    return error;
  } 

  return null;
}

export function initPhoneListeners () {
  initeListenters(inputPhone, validatePhone);
};


export function hasPhoneErr() {
  if(validatePhone()){
    showRedBorder(inputPhone, true);
    return true;
  }
  return false;
}


