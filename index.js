// alert("esto es la primera parte de todo el codigo");
var msj ="";
function encriptar(){

    var datos = document.getElementById("textoIngresado").value.toLowerCase();

    const cambiar = document.getElementById("mostarEncriptado");
    
    var cadCamb = "";
    for(var i = 0; i < datos.length; i++){

        if (datos[i] == "a"){
            cadCamb = cadCamb+"ai";
        }
        if (datos[i] == "e"){
            cadCamb = cadCamb+"enter"
        }
        if (datos[i] == "i"){
            cadCamb = cadCamb+"imes"
        }
        if (datos[i] == "o"){
            cadCamb = cadCamb+"ober"
        }
        if (datos[i] == "u"){
            cadCamb = cadCamb+"ufat"
        }
        if(datos[i] != "a" && datos[i] != "e" && datos[i] != "i" && datos[i] != "o" && datos[i] != "u" ){
            cadCamb = cadCamb+datos[i];
        }
    }

    cambiar.innerHTML ='<h2>'+cadCamb+'<h2>';
    document.getElementById("background").style.background = "none";

}

function desencriptar(){
    console.log("vamos bien, quisiste desencriptar.")

    var datos = document.getElementById("textoIngresado").value;
    const cambiar = document.getElementById("mostarEncriptado");
    
    var cadCamb = "";
    for(var i = 0; i < datos.length; i++){
        switch (datos[i]) {
            case 'a':
                cadCamb = cadCamb+"a";
                i = i+1;
                console.log("posicion "+i+  " letra "+ datos[i]);
                break;
            case 'e':
                cadCamb = cadCamb+"e"
                i = i+4;
                console.log("posicion "+i+  " letra "+ datos[i]);
                break;
            case 'i':
                
                cadCamb = cadCamb+"i"
                i = i+3;
                console.log("posicion "+i+  " letra "+ datos[i]);
                break;

            case 'o':
                cadCamb = cadCamb+"o";
                i = i + 3;
                console.log("posicion "+i+  " letra "+ datos[i]);
                break;

            case 'u':
                cadCamb = cadCamb+"u";
                i = i+ 3;
                console.log("posicion "+i+  " letra "+ datos[i]);
                break;
            case ' ':
                cadCamb = cadCamb+" ";
                console.log("posicion "+i+  " letra "+ datos[i]);
                break;
            default:
                cadCamb = cadCamb+datos[i];
                console.log("posicion "+i+  " letra "+ datos[i]);
                break;       
        }
    }

    cambiar.innerHTML ='<h2>'+cadCamb+'<h2>';
}

function copiar(){

    console.log("vamos bien, quisiste copiar.");
    var cop = document.getElementById("mostarEncriptado").innerText;
    
    navigator.clipboard.writeText(cop)
        .then(() => {
        console.log("Text copied to clipboard...")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })

    // console.log(cop.innerText);
    
}
