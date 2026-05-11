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

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if(method === 'OPTIONS'){
        res.statusCode = 204;
        res.end();
        return;
    }

    res.setHeader('Content-Type', 'application/json');

    if(url ==='/api/users' && method === 'GET'){
        res.end(JSON.stringify(usuarios));
    }

    if(url ==='/api/games' && method === 'GET'){
        res.end(JSON.stringify(juegos));
    }

    if(url ==='/api/streaming' && method === 'GET'){
        res.end(JSON.stringify(streaming));
    }
});

server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000/');
});