function maior(n1,n2,n3,n4,n5){

    if(n1==n2 && n1==n3 && n1==n4 && n1==n5){

        console.log('sla');
        return "todo os numeros sao iguais";
     }

     if(n1>n2 && n1>n3 && n1>n4 && n1>n5)
     {
         
         return "N1 e maior";
         
     }
     if(n2>n1 && n2>n3 && n2>n4 && n2>n5)
     { 
         return "N2 e maior";
         
     }
     if(n3>n2 && n3>n2 && n3>n4 && n3>n5)
     { 
         return "N3 e maior";
         
     }
     if(n4>n1 && n4>n3 && n4>n2 && n4>n5)
     { 
         return "N4 e maior";
         
     }
     if(n5>n1 && n5>n3 && n5>n2 && n5>n4)
     { 
         return "N5 e maior";
         
     }
 

}
var somaresult=maior(2,2,2,2,2)
console.log('Resultado:',somaresult);