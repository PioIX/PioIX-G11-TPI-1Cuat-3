function imagen(){
    NoRepetir =new Set()
    for(i=0;i<8;i++){
        /* Elije un id de todos los que hay y se fija si hay una imagen o no*/
        lista = Math.floor(Math.random()* 15)
        prueba = false
        while(prueba == false){
            if (document.getElementById(lista).value == 1){
                console.log("ID ocupado")
                lista = Math.floor(Math.random()* 16)
            }else {
                console.log("ID libre" + document.getElementById(lista).id)
                numero = lista
                prueba = true
            }
        }
        /* Elije un nro aleatorio y obtiene una imagen*/
        
        imagen = Math.floor(Math.random()*17)
        otro = NoRepetir.has(imagen)
        console.log("FIND() " +  otro )

        while (otro == true){
            imagen = Math.floor(Math.random()*17)
            console.log("Nueva Imagen ")
            otro = NoRepetir.has(imagen)
        }

        odsID = ""

        switch(imagen){ 
            case 0:
                x = "/static/img/ODS17.png"
                odsID = "ods17"
                NoRepetir.add(0)
                break;
            case 1:
                x= "/static/img/ODS1.png"
                odsID = "ods1"
                NoRepetir.add(1)
                break;
            case 2:
                x="static/img/ODS2.png"
                NoRepetir.add(2)
                odsID = "ods2"
                break;
            case 3:
                x = "static/img/ODS3.jpg"
                NoRepetir.add(3)
                odsID = "ods3"
                break;
            case 4:
                x= "static/img/ODS4.png"
                NoRepetir.add(4)
                odsID = "ods4"
                break;
            case 5:
                x = "static/img/ODS5.png"
                NoRepetir.add(5)
                odsID = "ods5"
                break;
            case 6:
                x= "static/img/ODS6.png"
                NoRepetir.add(6)
                odsID = "ods6"
                break;
            case 7:
                x = "static/img/ODS7.jpg"
                NoRepetir.add(7)
                odsID = "ods7"
                break;
            case 8:
                x= "static/img/ODS8.png"
                NoRepetir.add(8)
                odsID = "ods8"
                break;
            case 9:
                x="static/img/ODS9.png"
                NoRepetir.add(9)
                odsID = "ods9"
                break;
            case 10:
                x="static/img/ODS10.png"
                NoRepetir.add(10)
                odsID = "ods10"
                break;
            case 11:
                x ="static/img/ODS11.png"
                NoRepetir.add(11)
                odsID = "ods11"
                break;
            case 12:
                x="static/img/ODS12.png"
                NoRepetir.add(12)
                odsID = "ods12"
                break;
            case 13:
                x="static/img/ODS13.jpg"
                NoRepetir.add(13)
                odsID = "ods13"
                break;
            case 14:
                x="static/img/ODS14.png"
                NoRepetir.add(14)
                odsID = "ods14"
                break;
            case 15:
                x="static/img/ODS15.png"
                NoRepetir.add(15)
                odsID = "ods15"
                break;
            case 16:
                x="static/img/ODS16.jpg"
                NoRepetir.add(16)
                odsID = "ods16"
                break;
            case 17:
                x="static/img/ODS17.png"
                NoRepetir.add(17)
                odsID = "ods17"
                break;
        }    
        
        
        console.log(NoRepetir)
        console.log(x)
        
        /* Agrega la imagen al primer id*/
        document.getElementById(numero).value = "1"
        document.getElementById(numero).innerHTML += `
      <img src=${x} id= ${odsID} onclick="mostrarImagen(${odsID})" width="80" height="80" hidden>`
      
      

        /* Busca otro id para poner el par*/    
        posicion = Math.floor(Math.random()*16)
        console.log("Posicion= " + posicion)

        /* Coloca devuelta la imagen y en nuevo id*/
        valor = false
        while(valor == false){
        if(document.getElementById(posicion).value == 0){
            document.getElementById(posicion).value = "1"
            document.getElementById(posicion).innerHTML += `
    <img src=${x} id= ${odsID} onclick="mostrarImagen(${odsID})" width="80" height="80" hidden >`

      
            valor = true
          }else{
                console.log("ocupado")
                posicion = Math.floor(Math.random()*16)
                console.log(posicion)
                
                
            } 
        }
   
    }
    
}

ganaste = []
vector = []
fallos = 0
movimientos = 0



function mostrar(id){
  if(vector.length <= 1){
    movimientos += 1
    nombre = document.getElementById(id)
    nombre.children[0].hidden = false
    vector.push(id)
    console.log(vector)
    
    if(document.getElementById(vector[0]).children[0].id == document.getElementById(vector[1]).children[0].id)
    {
      if(vector[0] === vector[1]){
        
        setTimeout(function(){
      nombre = document.getElementById(vector[0])
      nombre.children[0].hidden = true
      nombre = document.getElementById(vector[1])
      nombre.children[0].hidden = true
      vector = []
      fallos +=1
      movimientos +=1
      cargarDatos(fallos,movimientos)
      
}, 1000);
          
      }else{

      
        
      nombre = document.getElementById(vector[0])
      document.getElementById(vector[0]).style.borderColor = "green";
      document.getElementById(vector[0]).disabled = true;
      setTimeout(function(){
          nombre.style.backgroundColor = 'transparent'
          nombre.style.borderColor = 'transparent'
          nombre.children[0].hidden = true
        
      }, 300);
      ganaste.push(document.getElementById(vector[0]).id)
      nombres =  document.getElementById(vector[1])
      document.getElementById(vector[1]).style.borderColor = "green";
      document.getElementById(vector[1]).disabled = true;
      setTimeout(function(){
          nombres.style.backgroundColor = 'transparent'
          nombres.style.borderColor = 'transparent'
          nombres.children[0].hidden = true
        
      }, 300);
      ganaste.push(document.getElementById(vector[0]).id)
      vector = []
      console.log(vector)
      movimientos +=1
      cargarDatos(fallos,movimientos)
      ganar()
      }

    }else{
      
      document.getElementById(vector[0]).style.borderColor =  "red";
      document.getElementById(vector[1]).style.borderColor = "red";
      fallos +=1
      movimientos +=1
      cargarDatos(fallos,movimientos)
      
      
      setTimeout(function(){
      document.getElementById(vector[0]).style.borderColor = 'rgb(238, 145, 38)';
      document.getElementById(vector[1]).style.borderColor = 'rgb(238, 145, 38)';
}, 500);
      
      setTimeout(function(){
      nombre = document.getElementById(vector[0])
      nombre.children[0].hidden = true
      nombre = document.getElementById(vector[1])
      nombre.children[0].hidden = true
      vector = []
}, 500);
      
    }
  }else{
    console.log(vector)
  }

}
imagen()


function cargarDatos(fallos,movimientos){
  document.getElementById('aciertos').innerHTML = `❌ Fallos: ${fallos}`
movimientos = movimientos / 3
  document.getElementById('movimientos').innerHTML = `🏃‍♂️ Movimientos: ${movimientos}`
}

cargarDatos(fallos,movimientos)
tiempo = true
var sec = 0;
var min = 0;
var tiempo = sec + ":" + min;

function cronometro(){
  document.getElementById('tiempo').innerHTML = `🕐 Tiempo: <time>${min}:${sec}</time>`
  setInterval(function(){
    sec++
    if(sec >= 60){
      min++
      sec = 0
    }
    document.getElementById('tiempo').innerHTML = `🕐 Tiempo: <time>${min}:${sec}</time>`
  },1000);
  
}

cronometro()

guardar = document.getElementById('nombre').value;
id=0
function ganar(){
  if(ganaste.length == 16){
    setTimeout(function(){
      window.location.href = 'https://pioixg11-tpi-1cuat-2.damian-efrainef.repl.co/ganarMemo'
    
}, 1000);
        
      }
        
}

function pagina(){
  location.reload()
}
