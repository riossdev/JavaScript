// Ingresar por teclado 2 numeros, si el primero es mayor que el segundo mostar la suma y su diferecia
// Si el segundo es mayor mostar su multiplicaion y su divicion

let num1 = 5
let num2 = 4

let multiplicacion = num1 * num2
let divicion = num2 / num1

if( num1 >
   num2 ){
  let suma = num1 + num2
  let resta = num1 - num2
  console.log(`El numero ${num1} es mayor, por lo tanto la suma de los numero es: ${suma}`)
  console.log(`Y su diferencia es: ${resta}`)
}else{
  console.log(`El numero ${num2} es mayor, por lo tanto la multiplicación de los numero es: ${multiplicacion}`)
  console.log(`Y su diferencia es: ${divicion}`)

}