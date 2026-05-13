document.getElementById('usuarioForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const usuario = document.getElementById('usuario').value;
    const matricula = document.getElementById('matricula').value;
    const edad = document.getElementById('edad').value;
    const activo = document.getElementById('activo').value;
    
    const datos = {
        nombre: nombre,
        usuario: usuario,
        matricula: matricula,
        edad: edad,
        activo: activo
    };
    
    fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        const messageDiv = document.getElementById('message');
        if(data.success) {
            messageDiv.className = 'message success';
            messageDiv.textContent = 'Usuario agregado exitosamente';
            document.getElementById('usuarioForm').reset();
            setTimeout(() => {
                window.location.href = '1.html';
            }, 1500);
        } else {
            messageDiv.className = 'message error';
            messageDiv.textContent = 'Error: ' + data.message;
        }
        messageDiv.style.display = 'block';
    })
    .catch(error => {
        const messageDiv = document.getElementById('message');
        messageDiv.className = 'message error';
        messageDiv.textContent = 'Error de conexión con el servidor';
        messageDiv.style.display = 'block';
        console.error('Error:', error);
    });
});