const inputText = document.querySelector(".main__input__textarea");
const outputText = document.querySelector("#outputText");

function btnCriptografar() {
    const textoEncriptado = criptografar(inputText.value);
    inputText.value = "";
    document.getElementById("initialSection").style.display = "none";
    document.getElementById("resultSection").style.display = "block";
    outputText.value = textoEncriptado;
}

function btnDescriptografar() {
    const textoDecriptado = descriptografar(inputText.value);
    inputText.value = "";
    document.getElementById("initialSection").style.display = "none";
    document.getElementById("resultSection").style.display = "block";
    outputText.value = textoDecriptado;
}

function btnCopiar() {

    outputText.select();
    outputText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(outputText.value);
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 2500);
}


function criptografar(stringCriptografada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"],];
    stringCriptografada = stringCriptografada.toLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "");

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringCriptografada.includes(matrizCodigo[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

    }
    return stringCriptografada;
}

function descriptografar(stringDescriptografada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"],];
    stringDescriptografada = stringDescriptografada.toLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "");;

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDescriptografada.includes(matrizCodigo[i][1])) {
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }

    }
    return stringDescriptografada;
}
