//"./modules/validate-name.js"

import initeListenters from "./init-listeners.js";
import {showRedBorder} from "./input-error.js";

const inputName = document.getElementById("name");
const elementInvalidName = document.getElementById("invalid-name");

function validateName() {
  let status = false;
  const max = 10;
  const min = 2;
  const msgs = {
      msgSymb: `Don't use symbols ?@"' and numbers.`,
      msgShortName: `It's too short.  Minimum length is ${min}.`,
      msgLongName: `It's too long.  Maximum length is ${max}.`
  }
  const error = {
      errorMsg: ""
  };
  const stopList = /[?@"'\d]+/;  
  
  if(stopList.test(inputName.value)){
    error.errorMsg += `<p>${msgs.msgSymb}</p>`;
    status = true;
  } 
  if(inputName.value.trim().length < min){
    error.errorMsg += `<p>${msgs.msgShortName}</p>`;
    status = true;
  } 
  if(inputName.value.trim().length > max){
    error.errorMsg += `<p>${msgs.msgLongName}</p>`;
    status = true;
  }

  if(status){
    error.elementLink = elementInvalidName;
    return error;
  } 
  return null;
}

export function initNameListeners () {
  initeListenters(inputName, validateName);
};

export function hasNameErr() {
  if(validateName()){
    showRedBorder(inputName, true);
    return true;
  }
  return false;
}