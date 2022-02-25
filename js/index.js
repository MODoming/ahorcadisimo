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
var codigo = "";
var plataforma = "";
var estadoJuego = true;
var correcta = [];
var vidas = 6;
var error = "";

botonInicio.addEventListener("click", function(event){   
    document.getElementById("entrada").placeholder = " ";
    document.getElementById("entrada").value = ""
    document.getElementById("mensaje1").innerHTML = ""
    document.getElementById("mensaje2").innerHTML = ""
    event.preventDefault();
    dibujarTorre();
    document.getElementById("error").innerHTML = "";
    estadoJuego = true;
    correcta = [];
    codigo = "";
    error = "";
    vidas = 6;
    aleatoria= palabras[Math.floor(Math.random() * palabras.length)].split("");       
    for (i=0;i<aleatoria.length;i++){
        correcta[i] = "_";
    };
    document.getElementById("correcta").innerHTML = correcta.join(" ");
    document.getElementById("mensaje-movil").innerHTML = " ";  

    if (estadoJuego){        
        if (dispositivo()){
            let letra = ""
            document.getElementById("entrada").style.display = "flex";
            document.getElementById("entrada").style.border = "solid";
            document.getElementById("entrada").focus();
            document.getElementById("entrada").oninput = function(e) {
                letra = e.data;
                codigo = (esLetra(letra.charAt(0))).toLowerCase();
                estadoJuego = juego(aleatoria, codigo, correcta, vidas, error);
                document.getElementById("entrada").value = "";
                document.getElementById("entrada").placeholder = " " + e.data;
            };    
        } else {
            window.addEventListener("keypress", (event) => {
                codigo = esLetra(event.key.toLowerCase());
                estadoJuego = juego(aleatoria, codigo, correcta, vidas, error);
            });
        };      
    };        
});

botonAgregar.addEventListener("click", function(event){
    event.preventDefault();
    nText = textoEntrada.value.toLowerCase();
    if (/\d/.test(nText)){alert("No se pueden usar numeros")
    } else if (palabras.includes(nText)){
        alert("La palabra \"" + nText + "\" ya se encuentra en la lista.");
    } else {
        palabras.push(nText);
        alert("La palabra \"" + nText + "\" fue agregada con exito!");
        document.querySelector("#nText").value = "";
    };
});

