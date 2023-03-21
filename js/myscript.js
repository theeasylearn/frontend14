
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