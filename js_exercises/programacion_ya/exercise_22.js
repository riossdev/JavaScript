// Ingresar el precio de un producto, si este es mayor a 250, hacer un descuento del 10%, si el valor de menor de 250, hacer un descuento del 5%.

let valorProducto = 230


if(valorProducto > 250 ){
  const total = valorProducto * 0.10
  const vTotal = valorProducto - total
  console.log(`El descuento es del 10%, el valor a pagar es de : ${vTotal} pesos.`)
}else{
  const total = valorProducto * 0.05
  const vTotal = valorProducto - total
  console.log(`El descuento es del 5%, el valor a pagar es de : ${vTotal} pesos.`)  
}
