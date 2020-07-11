let lcdScreen = document.getElementById('lcdScreen');


function insert(num){
    lcdScreen.value = lcdScreen.value + num;
}

function clean(){
    lcdScreen.value = "";

}

function equal(){
    let exp = lcdScreen.value;
    if(exp){
        lcdScreen.value = eval(exp);
    }
}