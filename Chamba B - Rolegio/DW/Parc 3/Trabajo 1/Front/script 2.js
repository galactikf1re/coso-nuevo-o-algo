var tabla;
tabla = document.getElementById("tabla");

async function fetchGames() {
    fetch('http://localhost:3000/api/games').then(response => {
        if (!response.ok) {
            throw new Error("Error");
        }
        return response.json();
    }).then(data => {
        console.log(data);
        let tbody = tabla.querySelector('tbody');
        tbody.innerHTML = '';
        data.forEach(game => {
            let row = tbody.insertRow();
            row.insertCell().textContent = game.nombre;
            row.insertCell().textContent = game.precio;
            row.insertCell().textContent = game.plataforma;
        });
    }).catch(error => {
        console.error("Error:", error);
    });
}

window.onload = fetchGames;