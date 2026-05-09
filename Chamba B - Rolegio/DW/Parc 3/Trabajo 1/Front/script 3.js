var tabla;
tabla = document.getElementById("tabla");

async function fetchStreaming() {
    fetch('http://localhost:3000/api/streaming').then(response => {
        if (!response.ok) {
            throw new Error("Error");
        }
        return response.json();
    }).then(data => {
        console.log(data);
        let tbody = tabla.querySelector('tbody');
        tbody.innerHTML = '';
        data.forEach(service => {
            let row = tbody.insertRow();
            row.insertCell().textContent = service.servicio;
            row.insertCell().textContent = service.precio;
            row.insertCell().textContent = service.calidad;
        });
    }).catch(error => {
        console.error("Error:", error);
    });
}

window.onload = fetchStreaming;