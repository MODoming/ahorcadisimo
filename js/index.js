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

function esLetra(caracter){ 
    if (64 < caracter.toUpperCase().charCodeAt(0) && caracter.toUpperCase().charCodeAt(0) < 91){
        return caracter;
    } else {
        alert ("Solo se permiten letras");
        return "";
    }};

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
    
    if (estadoJuego){
        window.addEventListener("keypress", (event) => {
            if (dispositivo()){
                document.getElementById("entrada").style.display = "flex";
                document.getElementById("entrada").focus();
                codigo = esLetra(document.querySelector("#entrada").value);
                document.getElementById("entrada").value = "";
                document.getElementById("mensaje2").innerHTML = "esto es un celular"
            } else {
                codigo = esLetra(event.key.toLowerCase());
            };
            document.getElementById("entrada").value = "";
            
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
        });
    };
        
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

