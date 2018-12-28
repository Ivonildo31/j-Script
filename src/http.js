var app = router('4242');

var candidato = [{nome:ivonildo ,idade:32,tel:111554456465},
                 {nome:joao ,idade:41,tel:555554456456},
                 {nome:carlos ,idade:14,tel:77774456499},
                 {nome:gleidson ,idade:5,tel:00004567334}];
 
var endereco = [ {cidade:cariacica ,rua:a,numero:123},
                 {cidade:vitoria ,rua:b,tenumero:74},
                 {cidade:viana ,rua:c,tenumero:7},
                 {cidade:vilaVelha,rua:d,tnumero:99}];   
                 
app.get('./candidato',function(req,res){
    res.write(JSON.stringify(candidato));
    res.end();
});    

app.get('./endereco',function(req,res){
    res.write(JSON.stringify(endereco));
    res.end();
});  