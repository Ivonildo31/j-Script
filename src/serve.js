    var net = require('net');
     ;
    net.createServer(function(connection){//cria uma conecçao
        connection.write('servidor ativo !');//convirma a conecçao
        connection.on('data',function(message){//ouve um cliente
            console.log(message.toString());//recebe uma msg do cliente
      })
    }).listen(3000);    