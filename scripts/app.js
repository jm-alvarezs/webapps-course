/*
  Database
*/
let tareas = [
  {
    titulo: "Ejercicios pág. 26",
    materia: "Matemáticas 6",
    entrega: "2019-23-04",
    descripcion: ""
  },
  {
    titulo: "Ensayo Final",
    materia: "Español 6",
    entrega: "2019-26-04",
    descripcion: "Corregir versión anterior"
  },
  {
    titulo: "Ejercicios pág. 50",
    materia: "Física 6",
    entrega: "2019-24-04",
    descripcion: "Problemas 8 a 10"
  }
];

//Template de tarea (Mustache.js)
let template = "<div id='tarea-{{key}}' class='tarea w3-row w3-padding'><div class='w3-half'><div class='titulo w3-third' id='title-{{key}}'>{{titulo}}</div>"+
                "<div class='w3-third' id='mat-{{key}}'>{{materia}}</div><div id='ent-{{key}}' class='w3-third'>{{entrega}}</div>"+
                "</div><div class='w3-half'><div class='w3-twothird' id='desc-{{key}}'>{{descripcion}}</div><div class='botones w3-third'>"+
                "<div class='boton w3-half'><button id='check-{{key}}' class='w3-btn w3-green round' onclick='check(this.id)'><i class='fa fa-check'></i></button></div>"+
                "<div class='boton w3-half'><button id='del-{{key}}' class='w3-btn w3-red round' onclick='del(this.id)'><i class='fas fa-trash'></i></button></div>"+
                "</div></div></div>";

/*
  Listeners
*/

//Funcion que se ejecuta al cargar
window.onload = () => {
  for(let i = 0; i < tareas.length; i++){
      agregarTarea(tarea[i], i);
  }
}

/*
  Funciones
*/

//Desplegar formulario de captura
const capturarNueva = () => {
  $('#captura').css('display', 'block');
}

const agregarTarea = (tarea, key) => {

}