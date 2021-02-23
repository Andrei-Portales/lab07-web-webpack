import home from "./content/inicio";
import resumen from "./content/resumen";
import produccion from "./content/produccion";
import lanzamiento from "./content/lanzamiento";
import recepcion from "./content/recepcion";
import elenco from "./content/elenco/elenco";

const data = [
  "Inicio",
  "Elenco y personajes",
  "Resumen",
  "Produccion",
  "Lanzamiento",
  "Recepcion",
];

const changeView = (index) => {
  switch (index) {
    case 0:
      home();
      break;
    case 1:
      elenco();
      break;
    case 2:
      resumen();
      break;
    case 3:
      produccion();
      break;
    case 4:
      lanzamiento();
      break;
    case 5:
      recepcion();
      break;
    default:
      home();
  }
};

const navBarF = (index) => {
  const navBar = document.getElementById("nav-bar");
  navBar.innerHTML = `
  <div class="pos-f-t">
    
    <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand">The Walking Dead</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
    </nav>
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="drop-down-menu">
        <div class="navbar-nav" id="list_navbar">
            
        </div>
      </div>
    </div>
  </div>


  `;


  const classes = [
    "nav-bar-item--home",
    "nav-bar-item--elenco",
    "nav-bar-item--resumen",
    "nav-bar-item--produccion",
    "nav-bar-item--lanzamiento",
    "nav-bar-item--recepcion",
  ];

  const list = document.getElementById("list_navbar");
  if (list !== null) {
    list.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
      const button = document.createElement("a");
      button.style.userSelect = "none";
      button.textContent = data[i];
      button.className = classes[i];

      button.addEventListener("click", () => navBarF(i));

      list.appendChild(button);
      /*const hr = document.createElement('hr');
      hr.className = 'divider';
      list.appendChild(hr);*/
    }

    changeView(index);
  }
};

export default navBarF;
