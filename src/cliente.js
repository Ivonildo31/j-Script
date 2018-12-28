var net = require('net');

var cliente=net.connect(3000); //conecta usando uma porta 3000

    cliente.on('connect',function(){// conecta com o servidor
        cliente.write('Eu sou cliente !')//envia uma resposta
    });  
    
    
    cliente.on('data',function(message){//ouve um servidor
          console.log(message.toString());//recebe uma msg
    });

    //conversa entre cliente
    process.stdin.on('readable',function(){
        var message=process.stdin.read();
        if(!message)return;
        message=message.toString().replace(/\n/, '');
           cliente.write(message);    
    })