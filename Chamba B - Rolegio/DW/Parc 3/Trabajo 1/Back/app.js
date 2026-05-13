const http = require('http');
const querystring = require('querystring');

var usuarios = [
    {
        nombre : "Meku Lean",
        usuario : "xX_CevinoSobretti_Xx",
        matricula : "xnxx",
        edad : "999",
        activo : "no"
    },
    {
        nombre : "Meku Lean",
        usuario : "xX_CevinoSobretti_Xx",
        matricula : "xnxx",
        edad : "999",
        activo : "no"
    },
    {
        nombre : "Meku Lean",
        usuario : "xX_CevinoSobretti_Xx",
        matricula : "xnxx",
        edad : "999",
        activo : "no"
    },
    {
        nombre : "Meku Lean",
        usuario : "xX_CevinoSobretti_Xx",
        matricula : "xnxx",
        edad : "999",
        activo : "no"
    },
    {
        nombre : "Meku Lean",
        usuario : "xX_CevinoSobretti_Xx",
        matricula : "algo",
        edad : "999",
        activo : "no"
    }
]

var juegos = [
    {
        nombre: "The Witcher 3",
        precio: 29.99,
        plataforma: "PC"
    },
    {
        nombre: "FIFA 23",
        precio: 59.99,
        plataforma: "PlayStation"
    },
    {
        nombre: "Minecraft",
        precio: 19.99,
        plataforma: "Multiplataforma"
    }
]

var streaming = [
    {
        servicio: "Netflix",
        precio: 15.99,
        calidad: "4K"
    },
    {
        servicio: "Disney+",
        precio: 7.99,
        calidad: "HD"
    },
    {
        servicio: "HBO Max",
        precio: 14.99,
        calidad: "4K"
    }
]

const server = http.createServer((req, res) =>{
    const {method, url} = req;
    let body = "";

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if(method === 'OPTIONS'){
        res.statusCode = 204;
        res.end();
        return;
    }

    res.setHeader('Content-Type', 'application/json');

    // GET endpoints
    if(url ==='/api/users' && method === 'GET'){
        res.end(JSON.stringify(usuarios));
        return;
    }

    if(url ==='/api/games' && method === 'GET'){
        res.end(JSON.stringify(juegos));
        return;
    }

    if(url ==='/api/streaming' && method === 'GET'){
        res.end(JSON.stringify(streaming));
        return;
    }

    // POST endpoints
    if(url === '/api/users' && method === 'POST'){
        req.on('data', chunk =>{
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                const datos = JSON.parse(body);
                const newUser = {
                    nombre: datos.nombre,
                    usuario: datos.usuario,
                    matricula: datos.matricula,
                    edad: datos.edad,
                    activo: datos.activo
                };
                usuarios.push(newUser);
                res.statusCode = 201;
                res.end(JSON.stringify({success: true, message: "Usuario agregado", data: newUser}));
            } catch (error) {
                res.statusCode = 400;
                res.end(JSON.stringify({success: false, message: "Error al procesar datos"}));
            }
        });
        return;
    }

    if(url === '/api/games' && method === 'POST'){
        req.on('data', chunk =>{
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                const datos = JSON.parse(body);
                const newGame = {
                    nombre: datos.nombre,
                    precio: datos.precio,
                    plataforma: datos.plataforma
                };
                juegos.push(newGame);
                res.statusCode = 201;
                res.end(JSON.stringify({success: true, message: "Juego agregado", data: newGame}));
            } catch (error) {
                res.statusCode = 400;
                res.end(JSON.stringify({success: false, message: "Error al procesar datos"}));
            }
        });
        return;
    }

    if(url === '/api/streaming' && method === 'POST'){
        req.on('data', chunk =>{
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                const datos = JSON.parse(body);
                const newService = {
                    servicio: datos.servicio,
                    precio: datos.precio,
                    calidad: datos.calidad
                };
                streaming.push(newService);
                res.statusCode = 201;
                res.end(JSON.stringify({success: true, message: "Servicio agregado", data: newService}));
            } catch (error) {
                res.statusCode = 400;
                res.end(JSON.stringify({success: false, message: "Error al procesar datos"}));
            }
        });
        return;
    }

    // 404 para rutas no encontradas
    res.statusCode = 404;
    res.end(JSON.stringify({success: false, message: "Ruta no encontrada"}));
});

server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000/');
});