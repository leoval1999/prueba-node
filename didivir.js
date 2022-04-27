 function div(a,b){
    if( a == 0 || b == 0){
        return "no se puede dividir por 0";
    }else{
       return  a / b;
    }
}
module.exports = div;