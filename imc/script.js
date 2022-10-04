/* Abaixo de 17 muito abaixo do peso
entre 17 e 18,49 abaixo do peso 
entre 18,50 e 24,99 peso normal
entre 25 e 29,99 acima do peso
*/

// peso / (altura * altura);

var peso;
var altura;
var imc;
var resultado;

    function calcular(event){
        event.preventDefault();

        peso = document.getElementById("peso").value;
        altura = document.getElementById("altura").value;

        imc = peso / (altura * altura);

        resultado = document.getElementById("resultado");

        if(imc <=17){
            resultado.innerHTML= imc.toFixed(2) + " Você esta muito abaixo do peso ! "
        }else if(imc >= 17 && imc <= 18.49){
            resultado.innerHTML= imc.toFixed(2) + " Você esta abaixo do peso ! "    
        }else if(imc >= 18.50 && imc <= 24.99){
            resultado.innerHTML= imc.toFixed(2) + " Seu peso esta normal ! "
        }else if(imc >= 25.00 && imc <= 29.99){
            resultado.innerHTML= imc.toFixed(2) + " Você esta acima do peso ! "
        }else if(imc >= 30){
            resultado.innerHTML= imc.toFixed(2) + " Você esta obeso ! "
        }else{
            resultado.innerHTML= "<span style='color:red'>Preencha os dados conforme no exemplo acima !<span/>"
        }

            
        document.getElementById("peso").value='';
        document.getElementById("altura").value='';


    }
    




