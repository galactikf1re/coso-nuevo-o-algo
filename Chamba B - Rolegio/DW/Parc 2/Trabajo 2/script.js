let text = '{ "familiares" : [' +
'{ "firstname": "Veronica", "lastname": "Sanchez", "Edad": 50, "Gustos": "si", "Oficio": "Zapatero"},'+
'{ "firstname": "Rogelio", "lastname": "Centeno", "Edad": 48, "Gustos": "si", "Oficio": "Vendedora de Creditos"},'+
'{ "firstname": "Rogelio", "lastname": "Centeno", "Edad": 17, "Gustos": "si", "Oficio": "Estudiante"},' +
'{  "firstname": "Paola", "lastname": "Centeno", "Edad": 14, "Gustos": "si", "Oficio": "Estudiante"} ]}'

/*let listavoid = document.getElementById("listavoid");
ObjJSON.familiares.forEach(element => {
    console.log("Nombre: " + element.firstname + "\nApellido: " + element.lastname + "\nEdad: " + element.Edad  + "\nGustos: " + element.Gustos  + "\nOficio: " + element.Oficio);
});*/

const ObjJSON = JSON.parse(text);
console.log("Nombre: " + ObjJSON.familiares[0].firstname
    + ", Apellidos: " + ObjJSON.familiares[0].lastname
    + ", Edad: " + ObjJSON.familiares[0].Edad
    + ", Gustos: " + ObjJSON.familiares[0].Gustos
    + ", Oficio: " + ObjJSON.familiares[0].Oficio
);


let listavoid = document.getElementById("listavoid");
ObjJSON.familiares.forEach(element => {
    let ObjLis = document.createElement("ol");
    ObjLis.innerHTML = (element.firstname + ", " + element.lastname +", " + element.Edad +", " + element.Gustos +", " + element.Oficio +", ")
    listavoid.appendChild(ObjLis);
});
