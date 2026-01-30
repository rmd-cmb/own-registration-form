//"./modules/listeners-name.js"
import {hideAllErrorsInpt, renderErrorInpt, showRedBorder} from "./input-error.js";

export default function initeListenters (input, validateFunc) {

    input.addEventListener("input", ()=>{
      hideAllErrorsInpt();
      renderErrorInpt(validateFunc(input));
    });

    input.addEventListener("focus", ()=>{
      //when focus remove red border from input
      showRedBorder(input, false);
      hideAllErrorsInpt();  
      if(input.value!==""){
        renderErrorInpt(validateFunc(input));
      }
    }); 

    input.addEventListener("blur", ()=>{
      hideAllErrorsInpt();
      if(input.value!==""){
          if(validateFunc(input)){ 
            showRedBorder(input, true);
          } else {
            showRedBorder(input, false);
          }
      } 
      else {
        showRedBorder(input, false);
      }
    });
}
