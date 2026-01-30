//"./modules/login/validate-login.js"

import {usedLogin} from "./login-service.js";
import {hideAllErrorsInpt, renderErrorInpt, showRedBorder} from "../input-error.js";
import {serverStatus, changeServerStatus, showIndicator} from "./server-indicator.js";

const inputLogin = document.getElementById("login");
const elementInvalidLogin = document.getElementById("invalid-login");

export function validateLogin() {
  let status = false;
  const max = 20;
  const min = 2;
  const msgs = {
      msgStopList: `Login must contain only letters and digitals.`,
      msgShortName: `It's too short. Minimum length is ${min}.`,
      msgLongName: `It's too long. Maximum length is ${max}.` ,
      msgFirstLetter: "Login must start with letter.",
      msgServer: "Login already have been used. Choose another one.",
  }
  const error = {
      errorMsg: ""
  };
  const stopList = /^[a-zA-Z0-9]+$/;  
  const firstLetter = /^[a-zA-Z]/;
  if(serverStatus !== null){
      if(serverStatus.includes("not-ok")){
        error.errorMsg += `<p>${msgs.msgServer}</p>`;
        status = true;
      }
  }    
  if(!stopList.test(inputLogin.value)){
    error.errorMsg += `<p>${msgs.msgStopList}</p>`;
    status = true;
  } else if(!firstLetter.test(inputLogin.value)){
    error.errorMsg += `<p>${msgs.msgFirstLetter}</p>`;
    status = true;
  } 
   if(inputLogin.value.trim().length < min){
    error.errorMsg += `<p>${msgs.msgShortName}</p>`;
    status = true;
  } 
  if(inputLogin.value.trim().length > max){
    error.errorMsg += `<p>${msgs.msgLongName}</p>`;
    status = true;
  }
  
  if(status){
    error.elementLink = elementInvalidLogin;
    return error;
  } 

  return null;
}

export function initLoginListeners () {
              inputLogin.addEventListener("input", ()=>{
                hideAllErrorsInpt();
                if(!renderErrorInpt(validateLogin())){
                  showIndicator("hide");
                  changeServerStatus("wait"); 
                  showIndicator(serverStatus);
                  usedLogin(inputLogin.value);
                  renderErrorInpt(validateLogin());
                }
              });

              inputLogin.addEventListener("focus", ()=>{
                //when focus remove red border from input
                showRedBorder(inputLogin, false);
                hideAllErrorsInpt();  
                if(inputLogin.value!==""){
                    const error = validateLogin();
                    renderErrorInpt(error);
                }
              }); 

              inputLogin.addEventListener("blur", ()=>{
                hideAllErrorsInpt();

                if(inputLogin.value!==""){
                    const error = validateLogin();
                    if(error){ 
                      showRedBorder(inputLogin, true);
                    } else {
                      showRedBorder(inputLogin, false);
                    }
                } 
                else {
                  showIndicator("hide");
                  showRedBorder(inputLogin, false);
                }
              });

}

export function currentFocusLogin () {
  document.activeElement === inputLogin ? true : showRedBorder(inputLogin, true);
}

export function hasLoginErr() {
  if(validateLogin()){
    showRedBorder(inputLogin, true);
    return true;
  }
  return false;
}


