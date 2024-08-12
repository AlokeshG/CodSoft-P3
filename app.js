let displayvalue='';

function appendToDisplay(value){
    displayvalue+=value;
    document.getElementById('display').value=displayvalue;
}

function calculate(){
    try{
        displayvalue=eval(displayvalue);
        document.getElementById('display').value=displayvalue;
    }catch(error){
        document.getElementById('display').value='Error';
    }
}

function clearDisplay(){
    displayvalue='';
    document.getElementById('display').value='';
}
