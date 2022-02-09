var botonInicio = document.querySelector("#inicio");
var botonAgregar = document.querySelector("#agregar");
var textoEntrada = document.querySelector("#nText");
//var mostrar = document.querySelector("#mostrar");
var palabras = ["hormiga","mundo","murcielago","oso","carretera","crusigrama","cirujano", 
"herramienta","almeja","cobra","pantera","coyote","cuervo","ciervo","perro","pato",
"aguila","zorro","geografia","tierra","ascensor","futbol","termometro","universidad",];

var ahorcado = document.getElementById("lienzo");
var ctx = ahorcado.getContext("2d");
var nText = "";
var aleatoria = "";
var correcta = [];
var error = "";
var vidas = 6;
var codigo = ""
var plataforma = ""
var estadoJuego = true

function palo(ctx, xi, yi, xf, yf){
    ctx.beginPath();
    ctx.moveTo(xi, yi);
    ctx.lineTo(xf, yf);
    ctx.stroke();
};
function dibujarMunieco(vidas){
    if (vidas === 5) {
        ctx.beginPath();
        ctx.fillStyle = "white"
        ctx.arc(170, 120, 30, 0, 2* Math.PI);
        ctx.fill();
        ctx.stroke();
    };    
    if (vidas === 4) {palo(ctx, 170, 150, 170, 240)};
    if (vidas === 3) {palo(ctx, 170, 240, 200, 310)};
    if (vidas === 2) {palo(ctx, 170, 240, 140, 310)};
    if (vidas === 1) {palo(ctx, 170, 170, 200, 190)};
    if (vidas === 0) {palo(ctx, 170, 170, 140, 190)};
};
function dibujarTorre(){
    ctx.clearRect(0, 0 , 250, 550);
    ctx.beginPath();    
    var img = new Image();
    img.src = "js/rope-24291_640.png";
    img.onload = function(){
        ctx.drawImage(img, 0, 0);
    }
    /*ctx.moveTo(0, 450);
    ctx.lineTo(100, 400);
    ctx.lineTo(200, 450);
    ctx.closePath();
    ctx.stroke();
    palo(ctx, 100, 400, 100, 050);
    palo(ctx, 100, 050, 200, 050);
    palo(ctx, 200, 050, 200, 100);*/
};
function esLetra(caracter){ 
    document.getElementById("entrada").value = "";
    return (64 < caracter.toUpperCase().charCodeAt(0) && caracter.toUpperCase().charCodeAt(0) < 91);
};

function dispositivo(){ return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))};

botonInicio.addEventListener("click", function(event){    
    document.getElementById("mensaje1").innerHTML = ""
    document.getElementById("mensaje2").innerHTML = ""
    event.preventDefault();
    dibujarTorre()
    document.getElementById("error").innerHTML = "";
    estadoJuego = true
    correcta = [];
    error = "";
    vidas = 6;
    codigo = ""
    aleatoria= palabras[Math.floor(Math.random() * palabras.length)].split("");
    for (i=0;i<aleatoria.length;i++){
        correcta[i] = "_";
    };
    document.getElementById("correcta").innerHTML = correcta.join(" ");   
 
    
    window.addEventListener("keypress", (event) => {
        if (estadoJuego){
            if (dispositivo()){
                document.getElementById("entrada").style.display = "flex";
                document.getElementById("entrada").focus();
                let letraMobil = document.querySelector("#entrada").value;
                codigo = letraMobil.substring(0,1);
            } else {
                codigo = event.key.toLowerCase();
            };
                    
            document.getElementById("entrada").value = "";
            if (esLetra(codigo)){
                if (aleatoria.includes(codigo)){
                    for (let i=0; i< aleatoria.length;i++){                    
                        if (aleatoria[i] === codigo){
                            correcta[i] = codigo.toUpperCase();
                        };      
                    };                
                    document.getElementById("correcta").innerHTML = correcta.join("  ");
                    if (aleatoria.join("").toLowerCase() === correcta.join("").toLowerCase()){
                        document.getElementById("mensaje1").style.color = "green"
                        document.getElementById("mensaje1").innerHTML = "GANASTE!! Muy bien!!!";
                        document.getElementById("mensaje2").innerHTML = "La respuesta es \"" + aleatoria.join("") +"\"";
                        estadoJuego = false

                    };
                } else if (!error.includes(codigo) && vidas > 0){
                    vidas -= 1;
                    error += " " + codigo;
                    document.getElementById("error").innerHTML = error.toUpperCase();
                    dibujarMunieco(vidas);
                    if ( vidas === 0 ) {
                        document.getElementById("mensaje1").style.color = "red"
                        document.getElementById("mensaje1").innerHTML = "PERDISTE!!";
                        document.getElementById("mensaje2").innerHTML = "La respuesta correcta era \"" + aleatoria.join("") +"\"";
                        estadoJuego = false
                    };
                };
            } else { alert("Solo se aceptan letras!!")};
        };
    });    
});

botonAgregar.addEventListener("click", function(event){
    event.preventDefault();
    nText = textoEntrada.value.toLowerCase();
    if (/\d/.test(nText)){alert("No se pueden usar numeros")
    } else if (palabras.includes(nText)){
        alert("La palabra \"" + nText + "\" ya se encuentra en la lista.")
    } else {
        palabras.push(nText);
        alert("La palabra \"" + nText + "\" fue agregada con exito!");
        document.querySelector("#nText").value = "";
    };
});

