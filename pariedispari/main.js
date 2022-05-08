let Numero = Number(prompt("Inserisci un numero"));
function PariDispari(){return Result%2 == 0;}
function Numerorandom(){return(Math.floor(Math.random() * 5))};
if(Numero>= 5){
    alert("Scegli Un Numero da 1 a 5 perfavore")
}else{
Result = Numerorandom() + Numero ;
console.log(Numerorandom())
}if(Result%2 == 0){
    console.log("Numero pari")
}else{
    console.log("Numero dispari")
}   