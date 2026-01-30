//"./modules/select-country.js"
import {showRedBorder} from "./input-error.js";

const selectCountry = document.getElementById("select-country");
const countryContainer = document.getElementById("country-container");

const sizeSelectCountry = 3;
const countries = {
    "lt": "Lithuania",
    "no": "Norway",
    "es": "Spain",
    "other": "Other"
    }

function renderSelectCountry () {
    let str = '<option value="" disabled selected>Select country</option>';
    for(const [value, label] of Object.entries(countries)){
        str +=`<option value="${value}">${label}</option>`;
    }   
    return str;
}

export function initSelectCountry () {
  selectCountry.size = sizeSelectCountry;
  selectCountry.innerHTML = renderSelectCountry();
  selectCountry.addEventListener("change", e => {
    showRedBorder(countryContainer, false);
  })
}

export function hasCountryErr() {
  if(selectCountry.selectedIndex === 0){
    showRedBorder(countryContainer, true);
    return true;
  } else {
    showRedBorder(countryContainer, false);
    return false;
  }
}