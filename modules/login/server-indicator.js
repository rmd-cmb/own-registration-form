//"./modules/login/server-indicator.js"
//server status indicator for input 

const serverIconLogin = document.getElementById("server-icon-login");
export let serverStatus = null;

export function changeServerStatus (str) {
    let status = [ "hide", "wait", "ok", "not-ok", null];
    if(status.includes(str)){
        serverStatus = str;
    } else console.log("Wrong new statusServer");
}

//status true add .hidden and false remove .hidden
function toggleIndicator(element, status){
    element.classList.toggle("hidden", status);   
}

function removeAllIcons(element){
    element.classList.remove("wait");
    element.classList.remove("ok");
    element.classList.remove("not-ok");
}

function addServerIcon (element, icon) {
       element.classList.add(icon);
}

//let status = [ "hide", "wait", "ok", "not-ok"];
export function showIndicator (status){
    removeAllIcons(serverIconLogin);
    if(status === "hide"){
        toggleIndicator(serverIconLogin, true);
        return;
    }
    toggleIndicator(serverIconLogin, false);
    addServerIcon(serverIconLogin, status);
}