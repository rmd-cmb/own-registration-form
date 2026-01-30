//"./modules/validate-password.js"
//Validate password

import {hideAllErrorsInpt, renderErrorInpt, showRedBorder} from "./input-error.js";

const inputPassword = document.getElementById("password");
const inputConfirmPassword = document.getElementById("confirm-password");
const elementInvalidPassword = document.getElementById("invalid-password");
const elementInvalidConfirmPassword = document.getElementById("invalid-confirm-password");

function validatePassword() {
  let status = false;
  const max = 12;
  const min = 8;
  const msgs = {
      msgSymb: `Password must have at least one symbol from !@#.-_*=?`,
      msgNumber: `Password must have numbers.`,
      msgLetter: `Password must have leters.`,
      msgShortName: `It's too short. Minimum length is ${min}.`,
      msgLongName: `It's too long. Maximum length is ${max}.`,
  }
  const error = {
      errorMsg: ""
  };
  const regSymb = /[!@#\-\_\*\=\?\.]+/;  
  const regNumber = /[0-9]+/;
  const regLetter = /[a-zA-Z]+/; 

  if(!regSymb.test(inputPassword.value)){
    error.errorMsg += `<p>${msgs.msgSymb}</p>`;
    status = true;
  } 
  
  if(!regNumber.test(inputPassword.value)){
    error.errorMsg += `<p>${msgs.msgNumber}</p>`;
    status = true;
  } 
  
  if(!regLetter.test(inputPassword.value)){
    error.errorMsg += `<p>${msgs.msgLetter}</p>`;
    status = true;
  } 

  if(inputPassword.value.trim().length < min){
    error.errorMsg += `<p>${msgs.msgShortName}</p>`;
    status = true;
  } 
  if(inputPassword.value.trim().length > max){
    error.errorMsg += `<p>${msgs.msgLongName}</p>`;
    status = true;
  }
  
  if(status){
    error.elementLink = elementInvalidPassword;
    return error;
  } 

  return null;
}

function validateConfirmPassword(){
  let status = false;
  const msgs = {
      msg: `Password is not the same.`,
  }
  const error = {
      errorMsg: ""
  };

  if(inputPassword.value !== inputConfirmPassword.value){
    error.errorMsg += `<p>${msgs.msg}</p>`;
    status = true;
  } 

  if(status){
    error.elementLink = elementInvalidConfirmPassword;
    return error;
  }

  return null;
}


//passwords listeners
export function initPasswordListeners () {
    inputPassword.addEventListener("input", ()=>{
      hideAllErrorsInpt();
      renderErrorInpt(validatePassword());
      if(inputConfirmPassword.value!==""){
          if(validateConfirmPassword()){ 
            showRedBorder(inputConfirmPassword, true);
          } else {
            showRedBorder(inputConfirmPassword, false);
          }
      } 
    });
    inputPassword.addEventListener("focus", ()=>{
      //when focus remove red border from input
      showRedBorder(inputPassword, false);
      hideAllErrorsInpt();  
      if(inputPassword.value!==""){
          renderErrorInpt(validatePassword());
      }
    }); 
    inputPassword.addEventListener("blur", ()=>{
      hideAllErrorsInpt();
      if(inputPassword.value!==""){
          if(validatePassword()){ 
            showRedBorder(inputPassword, true);
          } else {
            showRedBorder(inputPassword, false);
          }
      } 
      else {
        showRedBorder(inputPassword, false);
      }
    });
}

export function initConfirmPassListeners () {
    //input Confirm Password
    inputConfirmPassword.addEventListener("input", ()=>{
      hideAllErrorsInpt();
      renderErrorInpt(validateConfirmPassword());
    });
    inputConfirmPassword.addEventListener("focus", ()=>{
      showRedBorder(inputConfirmPassword, false);
      hideAllErrorsInpt();
      if(inputConfirmPassword.value!==""){
          renderErrorInpt(validateConfirmPassword());
      }
    });
    inputConfirmPassword.addEventListener("blur", ()=>{
      hideAllErrorsInpt();
      if(inputConfirmPassword.value!==""){
          if(validateConfirmPassword()){ 
            showRedBorder(inputConfirmPassword, true);
          } else {
            showRedBorder(inputConfirmPassword, false);
          }
      } 
      else {
        showRedBorder(inputConfirmPassword, false);
      }
    });
}


export function hasPasswordErr() {
  let status = false;
  if(validatePassword()){
    showRedBorder(inputPassword, true);
    status = true;
  }
  if(validateConfirmPassword()){
    showRedBorder(inputConfirmPassword, true);
    status = true;
  }
  return status;
}
