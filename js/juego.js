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

function palo(ctx, xi, yi, xf, yf){
    ctx.beginPath();
    ctx.moveTo(xi, yi);
    ctx.lineTo(xf, yf);
    ctx.stroke();
};
function dibujarMunieco(vidas){
    if (vidas === 5) {
        ctx.beginPath();
        ctx.arc(250, 230, 30, 0, 2* Math.PI);
        ctx.stroke();
    };    
    if (vidas === 4) {palo(ctx, 250, 260, 250, 350)};
    if (vidas === 3) {palo(ctx, 250, 350, 280, 420)};
    if (vidas === 2) {palo(ctx, 250, 350, 220, 420)};
    if (vidas === 1) {palo(ctx, 250, 280, 280, 300)};
    if (vidas === 0) {palo(ctx, 250, 280, 220, 300)};
};
function dibujarTorre(){
    ctx.clearRect(50, 50 , 300, 550);
    ctx.beginPath();
    ctx.moveTo(50, 550);
    ctx.lineTo(150, 500);
    ctx.lineTo(250, 550);
    ctx.closePath();
    ctx.stroke();
    palo(ctx, 150, 500, 150, 150);
    palo(ctx, 150, 150, 250, 150);
    palo(ctx, 250, 150, 250, 200);
};

const esLetra = (caracter) => {
	let ascii = caracter.toUpperCase().charCodeAt(0);
	return ascii > 64 && ascii < 91;
};

botonInicio.addEventListener("click", function(event){    
    event.preventDefault();
    dibujarTorre()
    document.getElementById("error").innerHTML = "";
    var correcta = [];
    var error = "";
    var vidas = 6;
    aleatoria= palabras[Math.floor(Math.random() * palabras.length)].split("");
    for (i=0;i<aleatoria.length;i++){
        correcta[i] = "_";
    };
    document.getElementById("correcta").innerHTML = "Respuesta: " + correcta.join(" ");   
    
    window.addEventListener("keypress", (event) => {        
        var codigo = event.key.toLowerCase();
        if (esLetra(codigo)){
            if (aleatoria.includes(codigo)){
                for (let i=0; i< aleatoria.length;i++){                    
                    if (aleatoria[i] === codigo){
                        correcta[i] = codigo.toUpperCase();
                    };               
                };                
                document.getElementById("correcta").innerHTML = "Respuesta: " + correcta.join(" ");
            } else if (!error.includes(codigo)){
                vidas -= 1;
                error += " " + codigo;
                document.getElementById("error").innerHTML = error.toUpperCase();
                dibujarMunieco(vidas);
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
