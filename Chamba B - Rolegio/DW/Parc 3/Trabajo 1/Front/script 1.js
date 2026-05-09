var tabla;
tabla = document.getElementById("tabla");

async function fetchAlgo() {
    fetch('http://localhost:3000/api/users').then(response => {
        if (!response.ok) {
            throw new Error("Error");
        }
        return response.json();
    }).then(data => {
        // Procesar los datos obtenidos
        console.log(data);
        // Limpiar el tbody
        let tbody = tabla.querySelector('tbody');
        tbody.innerHTML = '';
        // Agregar filas dinámicamente
        data.forEach(user => {
            let row = tbody.insertRow();
            row.insertCell().textContent = user.nombre;
            row.insertCell().textContent = user.usuario;
            row.insertCell().textContent = user.matricula;
            row.insertCell().textContent = user.edad;
            row.insertCell().textContent = user.activo;
        });
    }).catch(error => {
        console.error("Error:", error);
    });
}

// Llamar a la función al cargar la página
window.onload = fetchAlgo;