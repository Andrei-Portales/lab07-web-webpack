import img from "../../../../assets/images/elenco.jpg";
import changePersonaje from './elenco-personajes';

const elenco = () => {
  document.getElementById("tagName").textContent = "Elenco";
  const root = document.getElementById("root");
  root.innerHTML = `
        <div class="animatedItem1">
          <img src="${img}" class="rounded mx-auto d-block" alt="elenco" width="300" height="200">

          <h1>Elenco y personajes principales</h1>

          <h2>Lista de personajes</h2>

          <ul class="list-group">
              <li class="list-group-item list-group-item-secondary" id="el0"><a >Andrew Lincoln</a></li>
              <li class="list-group-item" id="el1"><a >Jon Bernthal</a></li>
              <li class="list-group-item  list-group-item-secondary" id="el2"><a >Sarah Wayne</a></li>
              <li class="list-group-item" id="el3"><a >Laurie Holden</a></li>
              <li class="list-group-item list-group-item-secondary" id="el4"><a >Jeffrey DeMunn</a></li>
              <li class="list-group-item" id="el5"><a >Steven Yeun</a></li>
              <li class="list-group-item list-group-item-secondary" id="el6"><a >Chandler Riggs</a></li>
              <li class="list-group-item" id="el7"><a >Norman Reedus</a></li>
          </ul>
        </div>
    `;

  for (let i = 0; i <= 8; i++) {
    const item = document.getElementById(`el${i}`);
    if (item !== null) {
      item.addEventListener("click", () => changeElenco(i));
      item.style.userSelect = "none";
    }
  }
};

const changeElenco = (index) => changePersonaje(index);

export default elenco;
