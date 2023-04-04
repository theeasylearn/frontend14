//create class es6 
class IO
{
    $(id)
    {
        return document.getElementById(id);
    }
    html(id,message)
    {
        this.$(id).innerHTML += message;
    }
}
