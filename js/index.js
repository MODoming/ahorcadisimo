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

function palo(ctx, xi, yi, xf, yf){
    ctx.beginPath();
    ctx.moveTo(xi, yi);
    ctx.lineTo(xf, yf);
    ctx.stroke();
};
function dibujarMunieco(vidas){
    if (vidas === 5) {
        ctx.beginPath();
        ctx.arc(200, 130, 30, 0, 2* Math.PI);
        ctx.stroke();
    };    
    if (vidas === 4) {palo(ctx, 200, 160, 200, 250)};
    if (vidas === 3) {palo(ctx, 200, 250, 230, 320)};
    if (vidas === 2) {palo(ctx, 200, 250, 170, 320)};
    if (vidas === 1) {palo(ctx, 200, 180, 230, 200)};
    if (vidas === 0) {palo(ctx, 200, 180, 170, 200)};
};
function dibujarTorre(){
    ctx.clearRect(0, 0 , 250, 500);
    ctx.beginPath();
    ctx.moveTo(0, 450);
    ctx.lineTo(100, 400);
    ctx.lineTo(200, 450);
    ctx.closePath();
    ctx.stroke();
    palo(ctx, 100, 400, 100, 050);
    palo(ctx, 100, 050, 200, 050);
    palo(ctx, 200, 050, 200, 100);
};
function esLetra(caracter){return (64 < caracter.toUpperCase().charCodeAt(0) < 91)};

function dispositivo(){ return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))};

botonInicio.addEventListener("click", function(event){    
    document.getElementById("mensaje1").innerHTML = ""
    document.getElementById("mensaje2").innerHTML = ""
    event.preventDefault();
    dibujarTorre()
    document.getElementById("error").innerHTML = "";
    correcta = [];
    error = "";
    vidas = 6;
    codigo = ""
    aleatoria= palabras[Math.floor(Math.random() * palabras.length)].split("");
    for (i=0;i<aleatoria.length;i++){
        correcta[i] = "_";
    };
    document.getElementById("correcta").innerHTML = correcta.join(" ");   

    if (dispositivo()){
        document.getElementById("entrada").style.display = "flex";
        document.getElementById("entrada").focus();
    };
    window.addEventListener("keypress", (event) => {
        codigo = event.key.toLowerCase();
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
                    document.getElementById("mensaje1").innerHTML = "GANASTE!! Muy bien!!!";
                    document.getElementById("mensaje2").innerHTML = "La respuesta es " + aleatoria.join("");
                };
            } else if (!error.includes(codigo) && vidas > 0){
                vidas -= 1;
                error += " " + codigo;
                document.getElementById("error").innerHTML = error.toUpperCase();
                dibujarMunieco(vidas);
                if ( vidas === 0 ) {
                    document.getElementById("mensaje1").innerHTML = "PERDISTE!!";
                    document.getElementById("mensaje2").innerHTML = "La respuesta correcta era " + aleatoria.join("");
                };
            };
        } else { alert("Solo se aceptan letras!!")};
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

