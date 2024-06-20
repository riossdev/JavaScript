// Ingresar 2 numeros por teclado mostrar la divicion del primero respescto al segundo y mostrar un mensaje que indique que no se puede dividir si el ultimo numero es igual a cero

let num1 = 10
let num2 = 5

if(num2 != 0){
  let divicion = num1 / num2
  console.log(`El numero ${num1} dividido entre ${num2}, es: ${divicion}` )
}else{
  console.log(`N0 se puede ealizar una divicion por cero`)
}