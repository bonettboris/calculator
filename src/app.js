// variables 
const botonesNumeros = document.getElementsByName("data-number");
const botonOpera = document.getElementsByName("data-opera");
const botonIgual = document.getElementsByName("data-igual")[0];
const botonDelete = document.getElementsByName("data-delete")[0];
var resultado = document.getElementById("resultado");

var opeActual = "";
var opeAnterior = "";
var operacion = undefined;

//addEvenListener

botonesNumeros.forEach(function(element, index){
    element.addEventListener('click', function(){
        agregarNumero(element.innerText);
    });
});

botonOpera.forEach(function(elemet, index){
    elemet.addEventListener('click', function(){
        selectOperacion(elemet.innerText);
    }) 
});

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});

//Function

function selectOperacion(op){
    if(opeActual === "") return;
    if(opeAnterior !== ""){
        calcular();
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = "";
};

function  calcular(){ 
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior) || (isNaN(actual))) return;
    switch(operacion){
        case "+":
            calculo = anterior + actual;
            break;
        case "-":
            calculo = anterior - actual;
            break;
        case "x":
            calculo = anterior * actual;
            break;
        case "/":
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = "";
};

function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
};

function clear(){
    opeActual = "";
    opeAnterior = ""; 
    operacion = undefined;
};

function actualizarDisplay(){
    resultado.value = opeActual;
};