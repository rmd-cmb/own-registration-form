//"./modules/login/login-service.js"
//server fetch login and mock

import {serverStatus, changeServerStatus, showIndicator} from "./server-indicator.js";
import {debounceInput} from "./debounce.js";
import {validateLogin, currentFocusLogin} from "./validate-login.js";

let debounceHandler = debounceInput(usedLoginMOCK);
const useMock = false;

async function usedLoginSERVER (userData){
  try{
    let serverResponse = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!serverResponse.ok){
      throw new Error("Server error" + serverResponse.status);
    }
    let serverData = await serverResponse.json();
    let usersLogins = serverData.map(obj => obj["username"]);
      
      /* userLogins
      ['Bret', 'Antonette', 'Samantha', 'Karianne', 'Kamren', 'Leopoldo_Corkery', 'Elwyn.Skiles', 'Maxime_Nienow', 'Delphine', 'Moriah.Stanton']
      */

    const exists = usersLogins.includes(userData);  
    if(exists){
        showIndicator("hide");
        changeServerStatus("not-ok");
        showIndicator(serverStatus);
        currentFocusLogin();
    } else {
        showIndicator("hide");
        changeServerStatus("ok");
        showIndicator(serverStatus);
    }
    validateLogin();
    return exists;
  } catch(err){
    console.error("Function isLoginCorrect.", "Error: ", err);
    return false;
  }
}  

//if true - login is already in dataBase
function usedLoginMOCK (userData){
  const serverData = ["login", "lol", "test"];
  console.log("MOCK returns result.");
  const exists = serverData.includes(userData);  
    if(exists){
        showIndicator("hide");
        changeServerStatus("not-ok");
        showIndicator(serverStatus);
        currentFocusLogin();
    } else {
        showIndicator("hide");
        changeServerStatus("ok");
        showIndicator(serverStatus);
    }
    validateLogin();
    return exists;
}

export const usedLogin = useMock ? debounceHandler : usedLoginSERVER;
