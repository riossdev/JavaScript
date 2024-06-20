// Ingresar por teclado Google, Twitch, YouTube, si estas palabras coinciden  con algun navegador redireccionar

let palabra = 'Firefox'

if( palabra === 'Google'){
  console.log('https://www.google.com/?hl=es')
}else if(palabra === 'Twitch'){
  console.log('https://www.twitch.tv')
}else if( palabra === 'YouTube'){
  console.log('https://www.youtube.com')
}