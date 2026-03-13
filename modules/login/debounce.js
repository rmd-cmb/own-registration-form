//"./modules/login/debounce.js"
//login debounce
const delay = 500;

export function debounceInput (func) {
    let timerID;
    return function (value){
      clearTimeout(timerID);
      timerID = setTimeout(() => func(value), delay);
    };
}
