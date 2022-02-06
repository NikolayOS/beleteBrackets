

let btn = document.getElementById("btnConvert");

btn.addEventListener("click", toConvert);
function toConvert(){
    let textFild1 = document.getElementById("textFild1").value;
    let textFild2 = document.getElementById("textFild2");
    let newText = textFild1;
    let re = /[(\(\)\)\{\}\[\]]/g;
    textFild2.value = newText.replace(re,"")
};
