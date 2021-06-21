let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt('Ingrese su nombre');
  datosPersona.edad = parseInt(prompt('Ingrese su año de nacimiento'));
  datosPersona.ciudad = prompt('Ingrese su ciudad');
  datosPersona.interesPorJs = confirm('Te gusta JS?');

  datosPersona.edad = 2021 - datosPersona.edad;
  
  if(datosPersona.interesPorJs) {
    datosPersona.interesPorJs = 'Sí'
  } else {
    datosPersona.interesPorJs = 'No'
  }
}



function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let datosACompletar = document.querySelectorAll('h3 span');

  let listaDeDatos = Object.values(datosPersona)
  for(let i = 0; i < datosACompletar.length; i++){
    datosACompletar[i].innerHTML += listaDeDatos[i];
  }
}


/* ------------------------- NO MODIFICAR ESTE ARRAY ------------------------ */
const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let div = document.getElementById('fila');
  let boton = document.getElementById('obtener-materias');

  if(div.innerHTML === "") {
    boton.innerText = "Ocultar materias";
    for(let elemento of listado){
      div.innerHTML += `<div class="caja">
      <img src="${elemento.imgUrl}">
      <p class="lenguajes">${elemento.lenguajes}</p>
      <p class="bimestre">${elemento.bimestre}</p>
      </div>`;
    }
  } else {
    boton.innerText = "Obtener materias";
    div.innerHTML = "";
  }
}


function mostrarYOcultarDescripcionCompleta() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let mostrar = document.getElementsByClassName('sobre-mi')
  mostrar[0].classList.toggle('sobre-mi-completo')
}
