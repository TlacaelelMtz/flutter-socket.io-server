const {io} = require('../index');


//mensajes de sockets

io.on('connection', client => {

    console.log('cliente conectado');
    client.on("disconnect", ()=>{

        console.log('cliente desconectado');
    });

    client.on('mensaje', (payload)=>{
        console.log("mensaje!!!", {admin:"nuevo mensaje"});
    });

 
  });
