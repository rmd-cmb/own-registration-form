//"./modules/input-error.js"

const errorsInptElements = document.querySelectorAll(".error-msg");

function hide(e) {
  e.classList.add("hidden");
}

function hasError (errInpt){
  if (errInpt !== null && Object.hasOwn(errInpt, "elementLink")){
    return true;
  }
  return false;
}

function innerMsgToDiv (objErrorInpt){
  objErrorInpt.elementLink.innerHTML = objErrorInpt.errorMsg;
}

function unhide(e) {
  e.classList.remove("hidden");
}

export function renderErrorInpt (errorInpt) {
  if(hasError(errorInpt)){
    innerMsgToDiv(errorInpt);
    unhide(errorInpt.elementLink);
  }
}

export function hideAllErrorsInpt(){
  errorsInptElements.forEach(elem => {
    elem.innerHTML = "";
    hide(elem);
    }
  );
}

export function showRedBorder (el, option) {
  if(option){ 
      el.classList.add("red-border");
    } else {
       el.classList.remove("red-border");
    }
}



