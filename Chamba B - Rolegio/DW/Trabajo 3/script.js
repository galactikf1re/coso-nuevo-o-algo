let celda1;
let celda2;
let celda3;
let celda4;
let celda5;
let celda6 ;
let celda7 ;
let celda8 ;
let celda9;
document.addEventListener('DOMContentLoaded', () => {
    celda1 = document.getElementById("1"); 
    celda2 = document.getElementById("2");
    celda3 = document.getEleSmentById("3"); 
    celda4 = document.getElementById("4");
    celda5 = document.getElementById("5"); 
    celda6 = document.getElementById("6"); 
    celda7 = document.getElementById("7"); 
    celda8 = document.getElementById("8"); 
    celda9 = document.getElementById("9"); });


function cambiarBotonMalo(tempcell){
    tempcell.setAttribute('src', '"C:\Users\Alumno\Documents\Chamba B - Rolegio\DW\Trabajo 3\Imagenes\flat-design-hole-icon-pitfall-vector.jpg"');
    tempcell.setAttribute('onClick','alertPerdiste()');
}  

function cambiarBotonBueno(otracell){
    otracell.setAttribute('src', '"C:\Users\Alumno\Documents\Chamba B - Rolegio\DW\Trabajo 3\Imagenes\naca.jpg"');
}