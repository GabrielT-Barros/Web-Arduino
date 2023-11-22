(function () {
    var socket = io(); // intacia uma variavel com a biblioteca io

    var botton1 = document.getElementById("b1");
    var botton2 = document.getElementById("b2");
    var botton3 = document.getElementById("b3");

    botton1.addEventListener("click", function () { //ecvento ao clicar o butão com o id
        var fastClick = botton1.classList.toggle('buttonClick');
        socket.emit('fast', fastClick + "_fast");  //Este codigo roda do lado do cliente, envia a mensagem para o servidor
    });

    botton2.addEventListener("click", function () { //ecvento ao clicar o butão com o id
        var inClick = botton2.classList.toggle('buttonClick');
        socket.emit('in', inClick + "_in");//Este codigo roda do lado do cliente, envia a mensagem para o servidor
    });

    botton3.addEventListener("click", function () { //ecvento ao clicar o butão com o id
        var randClick = botton3.classList.toggle('buttonClick');
        socket.emit('rand', randClick + "_rand");//Este codigo roda do lado do cliente, envia a mensagem para o servidor
    });
})();