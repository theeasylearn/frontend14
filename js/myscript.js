
let html = function (id,message,isAdd=false) {
    if(isAdd==false)
    {
        document.getElementById(id).innerHTML = message;
    }
    else 
    {
        document.getElementById(id).innerHTML += message;
    }
}
let val = (id) => document.getElementById(id).value;
//https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number
function isNumeric(value) {
    return /^-?\d+$/.test(value);
}
