function idade(n1,n2,n3){
    cont = 0;
    cont2 = 0;
    if(n1>=18){
        cont++;
    }else if(n1>0){
        cont2++;
    }

    if(n2>=18){
        cont++;
    }else if(n2>0){
        cont2++;
    }

    if(n3>=18){
        cont++;
    }else if(n3>0){
        cont2++;
    }
    
    retorno = cont2+' são menores de idade, e '+cont+' são maiores de idade';
    return retorno;
}

var a = idade(12,14,18);
console.log(a);