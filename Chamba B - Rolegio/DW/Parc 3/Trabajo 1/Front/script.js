var tabla;
tabla = document.getElementById("tabla");
async function fetchAlgo() {
    fetch('').then(response => {
        if (!response.ok) {
            throw new Error("Error");
        }
        return response.json();
    }).then(data => {
        // Procesar los datos obtenidos
        console.log(data);
    }).catch(error => {
        console.error("Error:", error);
    });
}