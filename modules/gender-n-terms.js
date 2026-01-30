//"./modules/gender-n-terms.js"
import {showRedBorder} from "./input-error.js";

const genders = document.querySelectorAll("input[name='gender']");
const genderDiv = document.getElementById("radio-container");

const termsConditions = document.getElementById("terms-conditions");
const labelTermsConditions = document.getElementById("label-terms-conditions");

function hasValueRadioGroup (nodeList) {
  return [...nodeList].some(node=> node.checked);
}

function hasErrTemplate (nodeList, nodeBorder){
   if(hasValueRadioGroup(nodeList)){
    showRedBorder(nodeBorder, false);
    return false;
  } else {
    showRedBorder(nodeBorder, true);
    return true;
  }  
}   


function hasErrInNode (elem, nodeBorder) {
   if(elem.checked){
    showRedBorder(nodeBorder, false);
    return false;
  } else {
    showRedBorder(nodeBorder, true);
    return true;
  }  
}   

export function hasGenderErr () {
  return hasErrTemplate(genders, genderDiv);
} 

export function hasTermsErr () {
  return hasErrInNode(termsConditions, labelTermsConditions);
}

export default function initGenderNTermsListeners (){
  genderDiv.addEventListener("change", el => {
    showRedBorder(genderDiv, false);
  });
  termsConditions.addEventListener("change", el => {
    showRedBorder(labelTermsConditions, false);
  });
}


