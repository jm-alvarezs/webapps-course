<h1>¡Bienvenidos!</h1>
<p>En este curso aprenderás a construir aplicaciones web escalables aplicando tus conocimientos previos de HTML/CSS y JavaScript. Además, utilizaremos frameworks de JavaScript como Mustache y Vue.js.</p>
<br>
<h2>Código de Inicio</h2>
<p>Copia este repositorio</p>
<br>
<h3>Primer componente</h3>
<h4>Tarea</h4>
<code>
  <div class='tarea w3-row w3-padding'>
					<div class='w3-half'>
						<div class='w3-third'>Ejercicios Pág. 26</div>
						<div class='w3-third'>Matemáticas 6</div>
						<div class='w3-third'>2019-24-04</div>
					</div>
					<div class='w3-half'>
						<div class='w3-twothird'>
              Problemas 8 al 10
						</div>
						<div class='w3-third'>
							<div class="w3-row boton-cont">
								<div class="boton w3-half">
									<button id="check-0" class='w3-btn w3-green round' onclick='check(this.id)'>
										<i class='fa fa-check'></i>
									</button>
								</div>
								<div class="boton w3-half">
									<button id="del-0" class='w3-btn w3-red round' onclick='del(this.id)'>
										<i class='fa fa-trash'></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
  </code>
<br>
<h3>Segundo componente</h3>
<h4>Encabezados de tareas</h4>
<code>
  <div class='w3-row w3-padding w3-hide-small'>
					<div class='w3-half'>
						<div class='w3-third'><b>Titulo</b></div>
						<div class='w3-third'><b>Materia</b></div>
						<div class='w3-third'><b>Fecha de Entrega</b></div>
				</div>
				<div class='w3-half'>
					<div class='w3-twothird'>
						<b>Descripción</b>
					</div>
					<div class='w3-third'>
						<b>Acciones</b>
					</div>
				</div>
				</div>
</code>
<br>
<h3>Tercer Componente</h3>
<h4>Formulario para capturar tareas</h4>
<code>
  <div id='captura' class='w3-row w3-padding'>
					<div class='w3-half'>
						<div class='w3-third'>
							<input id='titulo' type='text' class='w3-input' placeholder='Titulo'>
						</div>
						<div class='w3-third'>
							<input id='materia' type='text' class='w3-input' placeholder='Materia'>
						</div>
						<div class='w3-third'>
							<input id='entrega' type='date' class='w3-input'>
						</div>
					</div>
					<div class='w3-half'>
						<div class='w3-twothird'>
							<input id='desc' type='text' class='w3-input' placeholder='Descripción'>
						</div>
						<div class='w3-third'>
							<div class='w3-half'>
								<button onclick='subirTarea()' class='w3-btn w3-green round'>
									<i class="fa fa-check"></i>
								</button>
							</div>
							<div class='w3-half'>
								<button onclick='cancelar()' class='w3-btn w3-red round'>
									<i class="fa fa-trash"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
</code>
<br>
<h2>JavaScript</h2>
<br>
<h3>Arreglo de Tareas</h3>
<code>
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
</code>
<h3>Mustache</h3>
<code>
  <script src='./scripts/mustache.min.js'></script>
</code>
<h3>Plantilla o "Template"</h3>
<code>
  let template = "<div id='tarea-{{key}}' class='tarea w3-row w3-padding'><div class='w3-half'><div class='titulo w3-third' id='title-{{key}}'>{{titulo}}</div>"+
                "<div class='w3-third' id='mat-{{key}}'>{{materia}}</div><div id='ent-{{key}}' class='w3-third'>{{entrega}}</div>"+
                "</div><div class='w3-half'><div class='w3-twothird' id='desc-{{key}}'>{{descripcion}}</div><div class='botones w3-third'>"+
                "<div class='boton w3-half'><button id='check-{{key}}' class='w3-btn w3-green round' onclick='check(this.id)'><i class='fa fa-check'></i></button></div>"+
                "<div class='boton w3-half'><button id='del-{{key}}' class='w3-btn w3-red round' onclick='del(this.id)'><i class='fas fa-trash'></i></button></div>"+
                "</div></div></div>";
</code>
<h3>Iterar por el arreglo</h3>
<code>
  window.onload = () => {
    for(let i = 0; i < tareas.length; i++){
        agregarTarea(tarea[i], i);
    }
  }
</code>
  <h3>Función de desplegar tarea</h3>
  <code>
    const agregarTarea = (tarea, key) => {
      tarea.key = key;
      $("#tareas").html( $("#tareas").html() + Mustache.render(template, tarea) );
    }
  </code>
  <h3>Función para agregar una tarea</h3>
  <code>
    const subirTarea = () => {
        var titulo = $('#titulo').val();
        var materia = $('#materia').val();
        var entrega = $('#entrega').val();
        var descripcion = $('#desc').val();
        tareas.push(
          {
            titulo: titulo,
            materia: materia,
            entrega: entrega,
            descripcion: descripcion
          }
        );
      }
  </code>
  <h3>Función para cancelar agregar</h3>
  <code>
    const cancelar = () => {
      $('#captura').css('display', 'none');
      $('#titulo').val('');
      $('#materia').val('');
      $('#entrega').val('');
      $('#desc').val('');
    }
  </code>
  <h3>Función para quitar una tarea</h3>
  <code>
    const check = (key) => {
      const id = key.substring(6);
      tareas[id].Lista = true;      
      $('#tarea-'+id).remove();
    }
  </code>
  <h3>Función para eliminar una tarea</h3>
  <code>
    const del = (key) => {
      const id = key.substring(4);
      if(confirm('¿Borrar Tarea?')){
        tareas.splice(id, 1);
        $('#tarea-'+id).remove();
      }
    }
  </code>
