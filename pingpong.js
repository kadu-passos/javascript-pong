// aqui eu vou criar a bolinha
let xBolinha = 300;
let yBolinha = 200;
let tambolinha = 25
function setup(){
    //aqui vou criar minha "mesa"
    createCanvas(600,400);
}

function draw (){
    //aqui vou por a cor da "mesa"
    background(176,224,230);

    criabolinha (xBolinha, yBolinha, tambolinha);
}

//função bolinha
function criabolinha (xBolinha, yBolinha, tambolinha){
    circle (xBolinha, yBolinha, tambolinha);
}