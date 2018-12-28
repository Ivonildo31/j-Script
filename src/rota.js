var http= require('http');

 var criarRota=function(port){
     var api ={};
     var routes={};
     var methods=['GET','POST'];
     methods.forEach(function(method){
         routes[method]={};
         api[method.toLowerCase()]=function(path,fn){
             routes[method][path]=fn;
         };
     });

     http.criarServer(function(req,res){
        res.serHeader('Access-Control-Alow-Origi','*');
        if(!routes[req.method][req.url])return res.end();
        
     }).listen(port);
     return api;
 }   

 module.exports = criarRota;