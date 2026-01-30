//"./script.js"



import {initNameListeners} from "./modules/validate-name.js";
import {initEmailListeners} from "./modules/validate-email.js";
import {initPhoneListeners} from "./modules/validate-phone.js";
import {initLoginListeners} from "./modules/login/validate-login.js";
import {initPasswordListeners, initConfirmPassListeners} from "./modules/validate-password.js";
import {initSelectCountry} from "./modules/select-country.js";
import initGenderNTermsListeners from "./modules/gender-n-terms.js";

import initSubmitListener from "./modules/submit.js"; 

//INITIATIONS
initSelectCountry();
//EVENT LISTENERS with validation
initNameListeners();
initEmailListeners();
initPhoneListeners();
initLoginListeners();
initPasswordListeners();
initConfirmPassListeners();
initSubmitListener();
initGenderNTermsListeners();