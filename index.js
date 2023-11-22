
var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var io = require('socket.io')(server);

const { SerialPort } = require('serialport')

var serialport = new SerialPort({ path: 'COM3', baudRate: 9600 })

app.engine('ejs', require('ejs').__express);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('index');
});

serialport.on('open', function () {
    console.log('serial port opened');
});

io.on('connection', function (socket) {

    console.log('socket.io connection');

    socket.on('fast', function (data) {
        serialport.write(data + 'T'); //O servidor recebe mensagem so clinte realiza a cominucação srial com o arduino
    });

    socket.on('in', function (data) {
        serialport.write(data + 'T');//O servidor recebe mensagem so clinte realiza a cominucação srial com o arduino
    });

    socket.on('rand', function (data) {
        serialport.write(data + 'T');//O servidor recebe mensagem so clinte realiza a cominucação srial com o arduino
    });

    socket.on('disconnect', function () {
        console.log('disconnected');
    });
});

server.listen(3000, function () {
    console.log('listening on port 3000...');
}); 
