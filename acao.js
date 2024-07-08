function changeColor() {
    document.getElementById('ryan1').innerHTML = "Bertaglia";
}
var cont = 0;
function addCont(){
    cont++
    document.getElementById('decinc').innerText = cont;
}
function decCont(){
    if(cont>0){
    cont--
    document.getElementById('decinc').innerText = cont;}
}