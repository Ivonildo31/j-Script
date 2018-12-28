
/*//module.export possibilita acessar essa função em outra classe
module.exports.result= function(){
   
    return Math.floor((Math.random()*valor1)+valor2);
};*/


// função desse classe
var fucaoRtorno=function(){
// função dessa função principal 
var result= function(){
    var  valor1=10;
    var valor2=10;
    return Math.floor((Math.random()*valor1)+valor2);
};
 return {
    result:result
};

};

module.exports= new fucaoRtorno();// exporta para outra classe funçao dentro da principal

  var testeUm = function(){
     
    var testar= function(){
       var  nome=33454;
        
        return (nome);
    };
     return {
        testar:testar
    };
    
    };
     
    module.exports= new testeUm();
