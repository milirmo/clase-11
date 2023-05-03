let num1;
let num2;

function sumar(num1,num2) {
    num1=parseInt(document.getElementById("num1").value);
    num2=parseInt(document.getElementById("num2").value);
    let suma=num1+num2
}

function intervalo (num1,num2) {
    num1=parseInt(document.getElementById("num1").value);
    num2=parseInt(document.getElementById("num2").value);

    if (num1<num2) {
        for (i=num1+1; i<num2; i++) {
            document.write(i)
        }
    } else {
        if (num2<num1) {
            for (i=num2+1; i<num1; i++) {
                document.write(i)
            }
        } else {
            document.write("no hay intervalos, los numeros son iguales.")
        }
    }
}
function intervaloreversa (num1,num2) {
    num1=parseInt(document.getElementById("num1").value);
    num2=parseInt(document.getElementById("num2").value);
    if (num1>num2) {
        for (i=num1-1; i>num2; i--) {
            document.write(i)
        }
    } else {
        if (num2>num1) {
            for (i=num2-1; i>num1; i--) {
                document.write(i)
            }
        } else {
            document.write("no hay intervalos, los numeros son iguales.")
        }
    }
}