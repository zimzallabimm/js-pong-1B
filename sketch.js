// variáveis da bolinha;
let xBolinha = 300
let yBolinha = 200
let diametro = 20
let raio = diametro/2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 4;

// variáveis da raquete
  let larguraRaquete = 10;
  let alturaRaquete = 60;

  let xRaquete = 5;
  let yRaquete = 170;

  let xRaqueteOponente = 585;
  let yRaqueteOponente = 170;

  let meusPontos = 0;
  let pontosOponente =0;

// variáveis do som
let ponto;
let raquetada;
let trilha;

function setup() {
  createCanvas(600, 400);
  trilha.loop();

}
 
function draw() {
  background(0);
  desenhaBolinha();
  movimentaBolinha();
  verificaBorda();
  desenhaRaquete(xRaquete, yRaquete);
  desenhaRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaquete();
  verificaRaquete();
  desenhaPlacar();
  contabilizarPlacar();
  
  
}
  
function desenhaBolinha(){
  circle(xBolinha, yBolinha, diametro);
  
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0 ){
    velocidadeXBolinha *= -1
  }
  if (yBolinha + raio > height || yBolinha - raio < 0 ){
    velocidadeYBolinha *= -1
  }
}

function desenhaRaquete(x, y){
    rect(x, y, larguraRaquete, alturaRaquete);
}
  
function movimentaRaquete(){
   if (keyIsDown(87)){
    yRaquete -= 10;
  }
  if (keyIsDown(83)){
    yRaquete += 10;
  }
  // movimento do Oponente
  if (keyIsDown(UP_ARROW)){
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaqueteOponente += 10;
  }
}
 
function verificaRaquete(){
  if(xBolinha - raio <= xRaquete + larguraRaquete && 
     yBolinha + raio >= yRaquete &&
     yBolinha - raio <= yRAquete + alturaRaquete){
    velocidadexBolinha *= -1;
    raquetada.play();
  }
  if(xBolinha + raio >= xRaqueteOponente &&
     yBolinha + raio >= yRaqueteOponente &&
     yBolinha - raio <= yRaqueteOponente + alturaRaquete){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
 }
 
 function desenhaPlacar(){
   fill('blue');
   rect(130, 5, 40, 25);
   rect(430, 5, 40, 25);
   fill(255);
   textAlign(CENTER);
   textSize(20);
   text(meusPontos, 150, 20);
   text(pontosOponente,450, 20); 
 } 

function contabilizarPlacar(){
  if(xBolinha - raio <=0){
    pontosOponente += 1;
    ponto.play();
  }

  if(xBolinha + raio >= width){
    meusPontos += 1;
    ponto.play();
  }
}
  
  function preload(){
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
  }
