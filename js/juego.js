function esLetra(caracter){ 
    if (64 < caracter.toUpperCase().charCodeAt(0) && caracter.toUpperCase().charCodeAt(0) < 91){
        return caracter;
    } else {
        alert ("Solo se permiten letras");
        return "";
    };
};

function dispositivo(){ return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))};

function juego(aleatoria, codigo, correcta, salud, erronea){
    vidas = salud;
    error = erronea;
<<<<<<< HEAD
    let responde = ""
    if (aleatoria.join("").toLowerCase() !== correcta.join("").toLowerCase() && vidas > 0){ 
        document.getElementById("mensaje-movil").innerHTML = responde;
        if (aleatoria.includes(codigo)){
=======
    let respuesta = toString(correcta.join(""));
    if (aleatoria.join("").toLowerCase() !== correcta.join("").toLowerCase() && vidas > 0){  
        if (aleatoria.includes(codigo)){        
>>>>>>> 120646913f85338394e5fba800d115ac8d590ba5
            for (let i=0; i< aleatoria.length;i++){                    
                if (aleatoria[i] === codigo){
                    correcta[i] = codigo.toUpperCase();
                };      
<<<<<<< HEAD
            };            
            responde = correcta.join(" ").toString()
            
            document.getElementById("mensaje-movil").innerHTML = responde;
=======
            };
            if (dispositivo()){
                document.getElementById("correcta").value = respuesta;
            } else {
                document.getElementById("correcta").innerHTML = correcta.join(" ");
            };
>>>>>>> 120646913f85338394e5fba800d115ac8d590ba5
            document.getElementById("correcta").innerHTML = correcta.join(" ");
            if (aleatoria.join("").toLowerCase() === correcta.join("").toLowerCase()){
                document.getElementById("mensaje1").style.color = "green";
                document.getElementById("mensaje1").innerHTML = "GANASTE!! Muy bien!!!";
                document.getElementById("mensaje2").innerHTML = "La respuesta es \"" + aleatoria.join("") +"\"";
                document.getElementById("entrada").blur();
                return false;
            };
        } else if (!error.includes(codigo) && vidas > 0){
            vidas -= 1;
            error += " " + codigo;
            document.getElementById("error").innerHTML = error.toUpperCase();
            dibujarMunieco(vidas);
            if ( vidas === 0 ) {
                document.getElementById("mensaje1").style.color = "red";
                document.getElementById("mensaje1").innerHTML = "PERDISTE!!";
                document.getElementById("mensaje2").innerHTML = "La respuesta correcta era \"" + aleatoria.join("") +"\"";
                document.getElementById("entrada").blur();
                return false;
            };
            document.getElementById("mensaje-movil").innerHTML = responde;
        };
    } else { 
        document.getElementById("entrada").blur();
        return false; 
    };
};



            
