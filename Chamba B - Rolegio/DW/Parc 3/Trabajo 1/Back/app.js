const http = require('http');

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
const server = http.createServer((req, res) =>{
    const {method, url} = req;

    res.setHeader('Access-Control-Allow-Orign', '*');
    res.setHeader('Access-Control-Allow-Orign', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Orign', 'Content-Type');

    if(method === 'OPTIONS'){
        res.statusCode = 204;
        res.end();
        return;
    }

    res.setHeader('Content-Type', 'application/json');

    if(url ==='/api/users' && method === 'GET'){
        
    }
});

server.listen(3000, ())