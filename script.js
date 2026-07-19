// CAMBIO DE SECCIONES

function mostrar(id){

    let secciones = document.querySelectorAll(".seccion");

    secciones.forEach(function(seccion){
        seccion.classList.add("oculto");
    });


    document.getElementById(id).classList.remove("oculto");

}







// PLATO INTELIGENTE


let alimentosSeleccionados = [];



function agregarAlimento(alimento){


    alimentosSeleccionados.push(alimento);


    document.getElementById("miPlato").innerHTML =
    alimentosSeleccionados.join(" - ");


}




function analizarPlato(){


let resultado = document.getElementById("resultadoAnalisis");


let frutas =
alimentosSeleccionados.includes("Manzana") ||
alimentosSeleccionados.includes("Plátano");


let verduras =
alimentosSeleccionados.includes("Brócoli") ||
alimentosSeleccionados.includes("Zanahoria");


let proteina =
alimentosSeleccionados.includes("Pollo") ||
alimentosSeleccionados.includes("Pescado") ||
alimentosSeleccionados.includes("Huevo");


let carbohidrato =
alimentosSeleccionados.includes("Arroz") ||
alimentosSeleccionados.includes("Papa");


let gaseosa =
alimentosSeleccionados.includes("Gaseosa");



if(gaseosa){

resultado.innerHTML =
"Tu plato puede mejorar. Intenta reemplazar la gaseosa por agua u otra bebida saludable.";

}


else if(frutas && verduras && proteina && carbohidrato){

resultado.innerHTML =
"Excelente. Tu plato contiene variedad de alimentos y grupos importantes.";

}


else{

resultado.innerHTML =
"Tu plato está bien, pero puedes agregar más variedad de alimentos.";

}


}









// QUIZ


let preguntasQuiz=[


{

pregunta:"¿Cuál de estos alimentos pertenece al grupo de proteínas?",

opciones:["Pollo","Gaseosa","Caramelo","Chicle"],

respuesta:"Pollo"

},


{

pregunta:"¿Qué bebida es una mejor opción para hidratarse?",

opciones:["Agua","Gaseosa","Energizante","Jugo artificial"],

respuesta:"Agua"

},


{

pregunta:"¿Qué grupo incluye frutas y verduras?",

opciones:["Vitaminas y minerales","Dulces","Grasas trans","Azúcares"],

respuesta:"Vitaminas y minerales"

},


{

pregunta:"¿Una alimentación saludable debe tener variedad?",

opciones:["Sí","No","Nunca","Solo dulces"],

respuesta:"Sí"

},


{

pregunta:"¿Qué ayuda a cuidar la salud digestiva?",

opciones:["Buenos hábitos alimenticios","Saltarse comidas","No tomar agua","Comer solo ultraprocesados"],

respuesta:"Buenos hábitos alimenticios"

}

];


let preguntaActual=0;

let puntos=0;



function cargarQuiz(){


let pregunta=document.getElementById("preguntaQuiz");

let opciones=document.getElementById("opcionesQuiz");



if(!pregunta) return;



let actual=preguntasQuiz[preguntaActual];



pregunta.innerHTML=actual.pregunta;


opciones.innerHTML="";



actual.opciones.forEach(function(opcion){


let boton=document.createElement("button");


boton.innerHTML=opcion;



boton.onclick=function(){

if(opcion===actual.respuesta){

puntos++;

document.getElementById("resultadoQuiz").innerHTML="Respuesta correcta";

}

else{

document.getElementById("resultadoQuiz").innerHTML="Respuesta incorrecta";

}



preguntaActual++;



if(preguntaActual<preguntasQuiz.length){

cargarQuiz();

}

else{

document.getElementById("puntajeQuiz").innerHTML=
"Puntaje final: "+puntos+"/"+preguntasQuiz.length;

}


};



opciones.appendChild(boton);


});


}








// VERDADERO O FALSO


let preguntasVF=[

{
texto:"Una alimentación saludable incluye diferentes grupos de alimentos.",
respuesta:true
},

{
texto:"Tomar agua no es importante para el cuerpo.",
respuesta:false
},

{
texto:"Las frutas y verduras aportan nutrientes.",
respuesta:true
},

{
texto:"Dormir bien también forma parte de los hábitos saludables.",
respuesta:true
},

{
texto:"Solo comer dulces es una alimentación equilibrada.",
respuesta:false
}

];


let numeroVF=0;



function cargarVF(){


let pregunta=document.getElementById("preguntaVF");


if(!pregunta) return;


pregunta.innerHTML=preguntasVF[numeroVF].texto;


}



function responderVF(respuesta){


let resultado=document.getElementById("resultadoVF");


if(respuesta===preguntasVF[numeroVF].respuesta){

resultado.innerHTML="Respuesta correcta";

}

else{

resultado.innerHTML="Respuesta incorrecta";

}



numeroVF++;



if(numeroVF<preguntasVF.length){

setTimeout(cargarVF,1000);

}

else{

resultado.innerHTML="Juego terminado";

}


}








// ROBOT


function responderRobot(){


let pregunta =
document.getElementById("preguntaRobot").value.toLowerCase();



let respuesta =
document.getElementById("respuestaRobot");



if(pregunta.includes("anorexia")){

respuesta.innerHTML=
"La anorexia es un trastorno alimenticio relacionado con una preocupación intensa por la alimentación y el peso.";

}


else if(pregunta.includes("bulimia")){


respuesta.innerHTML=
"La bulimia se relaciona con episodios de atracones y necesita apoyo adecuado.";

}


else if(pregunta.includes("saludable")){


respuesta.innerHTML=
"Una alimentación saludable incluye variedad, equilibrio, agua y buenos hábitos.";

}


else{


respuesta.innerHTML=
"Puedes preguntarme sobre trastornos alimenticios o alimentación saludable.";

}



}








// AUTOEVALUACION


let preguntasEvaluacion=[

"¿Consumes frutas con frecuencia?",

"¿Incluyes verduras en tus comidas?",

"¿Tomas suficiente agua?",

"¿Tienes horarios de comida?",

"¿Consumes alimentos variados?",

"¿Evitas exceso de productos ultraprocesados?",

"¿Realizas actividad física?",

"¿Duermes adecuadamente?",

"¿Cuidas tu salud digestiva?",

"¿Buscas información sobre alimentación saludable?"

];





function cargarEvaluacion(){


let zona=document.getElementById("preguntasEvaluacion");


if(!zona)return;



preguntasEvaluacion.forEach(function(pregunta,index){


zona.innerHTML+=`

<div class="tarjeta">

<p>${index+1}. ${pregunta}</p>

<select>

<option>Siempre</option>

<option>A veces</option>

<option>Nunca</option>

</select>

</div>

`;


});


}






function calcularEvaluacion(){


document.getElementById("resultadoEvaluacion").innerHTML=

"Gracias por completar la autoevaluación. Sigue mejorando tus hábitos poco a poco.";


}








// DIPLOMA


function generarDiploma(){


let nombre=document.getElementById("nombreDiploma").value;



document.getElementById("nombreEnDiploma").innerHTML = nombre;


}






window.onload=function(){

cargarQuiz();

cargarVF();

cargarEvaluacion();

}