const { Socket } = require('socket.io');

//Importar o módulos
const app = require('express')();

const http = require('http').createServer(app);

const io = require('socket.io')(http);

//Rota para a página inicial
app.get('/', (req,res) => res.sendFile(__dirname + '/index.html'));

//Evento para quando o usuário conectar ao servidor
io.on('connection', (socket) => {
    console.log('Usuário conectado');

//Evento para quando envia uma mensagem
socket.on('chat message', (data) => io.emit('chat message', data));

//Evento para quando do usuário desconectar
socket.on('disconnect', () => console.log('Usuário desconectado'));

});

//Iniciar o servidor
http.listen(3000, () => {
    console.log(`Servidor rodando - Link http://localhost:3000`)
})