let pantallas = "";
let vaul = 0;
let oper = "";

function actualizarDisplay() {
    document.getElementById("tablero").innerHTML = pantallas || "0";
}

function onClickNum(num) {
    if (num === "." && pantallas.includes(".")) {
        return;
    }
    pantallas += num;
    actualizarDisplay();
}

function seleccionarOperacion(o) {
    if (pantallas === "") return;
    vaul = parseFloat(pantallas);
    oper = o;
    pantallas = "";
    actualizarDisplay();
}

function onClickS() { seleccionarOperacion("+"); }
function onClickR() { seleccionarOperacion("-"); }
function onClickM() { seleccionarOperacion("*"); }
function onClickD() { seleccionarOperacion("/"); }

function onClickI() {
    if (oper === "" || pantallas === "") return;
    const segundo = parseFloat(pantallas);
    switch (oper) {
        case "+":
            pantallas = (vaul + segundo).toString();
            break;
        case "-":
            pantallas = (vaul - segundo).toString();
            break;
        case "*":
            pantallas = (vaul * segundo).toString();
            break;
        case "/":
            pantallas = (vaul / segundo).toString();
            break;
        case "^":
            pantallas = Math.pow(vaul, segundo).toString();
            break;
    }
    oper = "";
    vaul = parseFloat(pantallas);
    actualizarDisplay();
}

function limpiar() {
    pantallas = "";
    vaul = 0;
    oper = "";
    actualizarDisplay();
}

function retroceder() {
    pantallas = pantallas.slice(0, -1);
    actualizarDisplay();
}

function raizCuadrada() {
    if (pantallas === "") return;
    pantallas = Math.sqrt(parseFloat(pantallas)).toString();
    actualizarDisplay();
}

function presionarPotencia() {
    seleccionarOperacion("^");
}
