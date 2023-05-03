let a=[]
let b=[]
let c=[];
let suma=0;
let dimensiona=parseInt(prompt("ingrese dimension del arreglo a."));
let dimensionb=parseInt(prompt("ingrese dimension del arreglo b."));
let dimensionc=(dimensiona+dimensionb);
for (i=0; i<dimensiona; i++) {
    a[i]=parseInt(prompt("ingrese numeros para el arreglo a."))
}
for (i=0; i<dimensionb; i++) {
    b[i]=parseInt(prompt("ingrese numeros para el arreglo b."))
}
for (i=0; i<dimensionc; i++) {
    c[i]=a[i]
}
i=0
for (z=dimensiona; z<dimensionc; z++) {
    c[z]=b[i]
    i++
}
for (i=0; i<dimensionc; i++) {
    suma=suma+c[i]
}
document.write(a+"<br>");
document.write(b+"<br>");
document.write(c+"<br>");
document.write("la suma de los numeros del arreglo c es: "+suma)