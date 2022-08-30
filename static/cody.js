const palabras = [
  ["HAMBRE", "Necesidad de comer"], 
  ["AGENDA", "libro o cuaderno donde se apuntan las fechas para no olvidarlas"],
  ["AYUDAR", "dar una mano al otro"], 
  ["FALTAR","Carencia de algo"], 
  ["COMIDA","Alimento vital para sobrevivir"], 
  ["CAUSAS","Motivo o razón para obrar de una manera determinada"], 
  ["ESTADO","Comunidad social con una organizacion politica"] , 
  ["SANGRE","Tipo de _ _ _ _ _ _"] ,	
  ["OFRECE", "_ _ _ _ _ _ ayuda"], 
  ["FORMAR", "Hacer o crear algo"], 
  ["DEBATE", "Reunion donde se discute un tema"], 
  ["PUEBLO", "Poblacion mas pequeña que una ciudad"], 
  ["EXAMEN", "Medio de evaluacion"],
  ["DINERO", "Medio legal de pago"],
  ["GENTIL", "Amable, educado, cortés"], 
  ["GLOBAL", "Abarca el mundo entero"], 
  ["HUELGA", "Protesta o manifestación con un objetivo"], 
  ["LUCHAR", "Emplear la fuerza para conseguir un fin"], 
  ["MENTIR", "Decir algo incorrecto con intencion"], 
  ["NUTRIR", "Proporcionar a un organismo las sustancias que necesita para su conservación y crecimiento"],
  ["OPINAR", "Compartir una postura de algo"],
  ["LIBROS", "Conjuntos de hojas"],
  ["DOCTOR", "Se dedica a curar o prevenir enfermedades"],
  ["BEBIDA", "Sustancia líquida que se toma"],
]

var palabra = "";
var pista = "";
var num = 0;
var listaIDPalabrasQueYaEstan = [];
var listaPistasDeLasPalabrasQueYaEstan = [];
var cantidadPalabrasEnElCody = 6;
var cantidadLetrasPorPalabra = 6;

inicioJuego();

function resetearListas() {
  listaIDPalabrasQueYaEstan = [];
  listaPistasDeLasPalabrasQueYaEstan = [];
  // console.log("se resetearon las listas")
}

function inicioJuego(){
  resetearListas();
  nuevoCody();
}

function nuevoCody() {
  
  do {
    let num = numeroRandom();
    if (num in listaIDPalabrasQueYaEstan) {
    } else {
      listaIDPalabrasQueYaEstan.push(num);
      listaPistasDeLasPalabrasQueYaEstan.push(palabras[num][1])
      
      console.log(palabras[num][0]);
    }
  } while (listaIDPalabrasQueYaEstan.length<6) 
  
}

function numeroRandom(){
  return Math.floor(Math.random() * palabras.length);
}
  
function mostrarPista(cualID){
  let posicionEnVectorPalabras = listaIDPalabrasQueYaEstan[cualID]; 
  let pista = palabras[posicionEnVectorPalabras][1];
  
  document.getElementById('pista').textContent = pista;
  // console.log(pista);
}

function leerPalabraColocada(menorID, mayorID) {
  let palabrita = "";
  
  for (let i = menorID; i<=mayorID; i++) {
    palabrita = palabrita.concat(document.getElementById(i).value)
    
  }
  palabrita = palabrita.toUpperCase();
  corroborarPalabra(palabrita, mayorID);
}

function corroborarPalabra(palabrita, menorID) {

  try {
    let pos = -1;
    for (let i = palabras.length; i>0 ; i--) {
      if (palabras[i-1][0] == palabrita) {
        pos = i;
        // console.log("si")
        palabraEstaBien(menorID);
      }
    }
    if (pos == -1) {
      // console.log("no")
      palabraEstaMal(menorID);
    }
  } catch (ex) {
    console.log(ex.message);
  }
  
  // console.log("termina de corroborarse la palabrita")
} 

  
function palabraEstaBien(id) {
  console.log("esa si");
    // a continuacion pensar efecto para dejar marcado que la palabra esta bien
    
  document.getElementById(id).style.borderColor = "green";
  document.getElementById(id-1).style.borderColor = "green";
  document.getElementById(id-2).style.borderColor = "green";
  document.getElementById(id-3).style.borderColor = "green";
  document.getElementById(id-4).style.borderColor = "green";
  document.getElementById(id-5).style.borderColor = "green";
  
}

function palabraEstaMal(id) {
  console.log("esa no");
  let palabraQueEstaBien = document.getElementById(id);
  // palabraQueEstaBien.style.color = 'red';
  // a continuacion pensar efecto para dejar marcado que la palabra esta mal, como poner algun borde en rojo
}





// https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event