// Realizar un programam que pida por teclado 3 notas de un alumno, calcule el promedio e imprima 
// si es promedio >= 7 "Promocionado"
// si es promedio >= 4 "Regular"
// si es promedio >= 7 "Reprobado"

const n1 = 5
const n2 = 5
const n3 = 8

const promedio = (n1 + n2 + n3) / 3

if(promedio >= 7){
  console.log("Estudiante Promocionado")
}else if(promedio >= 4){
  console.log("Estudiante Regular")
}else{
  console.log("Estudiante Reprobado")
}

