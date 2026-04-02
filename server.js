const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.url === "/oi" && req.method === "GET") {
        res.statusCode = 200;
        res.end(JSON.stringify({
            mensagem: "Olá mundo"
        }));
    } 
    else if (req.url === "/2012" && req.method === "GET") {
        res.statusCode = 200;
        res.end(JSON.stringify({
            mensagem: "Fim do mundo"
        }));
    } 
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({
            erro: "Rota não encontrada"
        }));
    }
});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
