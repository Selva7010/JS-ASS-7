const inputbox=document.getElementById("inputbox")

function displaynumber(input){
    inputbox.value +=input
}

function allclr(){
    inputbox.value=""
}

function calculate(){
    try{
        inputbox.value=eval(inputbox.value)
    }
    catch{
        inputbox.value="Error"
    }
}

function del(){
    inputbox.value=inputbox.value.toString().slice(0,-1)
}

function calculatesquare(){
    inputbox.value=Math.pow(inputbox.value,2)
}
function calculatesquare1(){
    inputbox.value=Math.pow(inputbox.value,3)
}