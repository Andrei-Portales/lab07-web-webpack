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
  navBar.innerHTML = 
  `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand">The Walking Dead</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav" id="list_navbar">
          </div>
        </div>
      </div>
    </nav>
    
  `;


  const list = document.getElementById('list_navbar');
  list.innerHTML = '';
//<a class="nav-link active" aria-current="page" href="#">Home</a>
  for (let i = 0; i < data.length; i++) {
   
    const button = document.createElement("a");
    button.style.userSelect = "none";
    button.textContent = data[i];
    button.className = index === i ? "nav-link active" : "nav-link";

    button.addEventListener("click", () => navBarF(i));

    list.appendChild(button);
  }

  changeView(index);
};

export default navBarF;
