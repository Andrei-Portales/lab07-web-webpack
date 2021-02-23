import andrewImg from "../../../../assets/images/andrew-lincoln.png";
import jonImg from "../../../../assets/images/Jon_Bernthal.jpg";
import sarahImg from "../../../../assets/images/Sarah_Wayne_Callies.jpg";
import laurieImg from "../../../../assets/images/Laurie_Holden.jpg";
import jeffreyImg from "../../../../assets/images/Jeffrey_DeMunn.jpg";
import stevenImg from "../../../../assets/images/Steven_Yeun.jpg";
import chandlerImg from "../../../../assets/images/Chandler_Riggs.jpg";
import normanImg from "../../../../assets/images/Norman_Reedus.jpg";

const data = [
  `<div class="animatedItem3">
    <img src="${andrewImg}" class="rounded mx-auto d-block" alt="andrew" width="200" height="250">

    <div class="card">
    <h1>Andrew Lincoln</h1>

    <p >
        Andrew James Clutterbuck (Londres, 14 de septiembre de 1973), más conocido por su nombre artístico Andrew
        Lincoln, es un actor británico. Su primera actuación televisiva importante la obtuvo en el drama de la BBC
        This Life (1996-1997), aunque es popularmente conocido por haber interpretado a Rick Grimes en la serie de
        televisión The Walking Dead de la cadena AMC (2010-2020) y por su rol principal en la comedia británica
        Teachers (2001-2004), como Simon Casey.
    </p>
    </div>
  </div>`,

  `
  <div class="animatedItem3">
    <img src="${jonImg}" class="rounded mx-auto d-block" alt="jon" width="200" height="250">

      

      <div class="card">
      <h1>Jon Bernthal</h1>
      <p>
          Jonathan Edward «Jon» Bernthal (Washington D. C., 20 de septiembre de 1976)1​ es un actor estadounidense
          conocido por sus papeles como Shane Walsh en la serie de televisión The Walking Dead y como Frank
          Castle/Punisher en la serie Daredevil y en su serie derivada The Punisher. También apareció en varias series
          como Law & Order: Criminal Intent (2002), The Class (2006-2007) y The Pacific (2010) y en películas como El
          lobo de Wall Street (2013), Fury (2014), Sicario (2015), The Accountant (2016), Wind River (2017) y Baby
          Driver (2017). En 2013 interpretó al Detective Joe Teague en la serie Mob City (2013), también de Frank
          Darabont.
      </p>
      </div>
    </div>
   `,
  ` 
  <div class="animatedItem3">
  <img src="${sarahImg}" class="rounded mx-auto d-block" alt="sarah" width="200" height="250">

    <div class="card animatedItem3">
    <h1>Sarah Wayne Callies</h1>

    <p>
        Sarah Anne Wayne Callies (La Grange, 1 de junio de 1977) es una actriz de cine y televisión estadounidense.
        Conocida por interpretar a Sara Tancredi en Prison Break, Lori Grimes en The Walking Dead y a Katie Bowman
        en Colony.
    </p>
    </div></div>
   `,
  ` 
  <div class="animatedItem3">
  <img src="${laurieImg}" class="rounded mx-auto d-block" alt="laurie" width="200" height="250">

    <div class="card animatedItem3">
    <h1>Laurie Holden</h1>

    <p>
        Heather Laurie Holden (Los Ángeles, California, 17 de diciembre de 1969) es una actriz, directora, modelo,
        empresaria y activista estadounidense canadiense. Entre sus apariciones en el cine y televisión es muy
        conocida por interpretar a Marita Covarrubias en The X-Files y Andrea Harrison en The Walking Dead.
    </p>
    </div></div>
    `,
  ` 
  <div class="animatedItem3">
  <img src="${jeffreyImg}" class="rounded mx-auto d-block" alt="jeffrey" width="200" height="250">

    <div class="card animatedItem3">
    <h1>Jeffrey DeMunn</h1>

    <p>
        Jeffrey DeMunn (Búfalo, Nueva York; 25 de abril de 1947) es un actor estadounidense de teatro, cine y televisión.
    </p>
    </div></div>
    `,
  `  
  <div class="animatedItem3">
  <img src="${stevenImg}" class="rounded mx-auto d-block" alt="steven" width="200" height="250">

    <div class="card animatedItem3">
    <h1>Steven Yeun</h1>

    <p>
        Steven Yeun (en coreano, 연상엽 Yeun Sang Yeop; Seúl, Corea del Sur, 21 de diciembre de 1983) es un actor
        surcoreano conocido principalmente por haber interpretado a Glenn Rhee en la serie original de AMC The
        Walking Dead desde el año 2010 hasta el año 2016.
    </p>
    </div>
    </div>
    `,
  `  
  <div class="animatedItem3">
  <img src="${chandlerImg}" class="rounded mx-auto d-block" alt="chandler" width="200" height="250">

    <div class="card animatedItem3">
    <h1>Chandler Riggs</h1>

    <p>
        Chandler Riggs (Atlanta, Georgia; 27 de junio de 1999) es un actor estadounidense, conocido por su papel de
        Carl Grimes en la serie de AMC The Walking Dead (2010–2018).
    </p>
    </div>
    </div>
   `,
  ` 
  <div class="animatedItem3">
    <img src="${normanImg}" class="rounded mx-auto d-block" alt="norman" width="200" height="250">

      <div class="card animatedItem3">
      <h1>Norman Reedus</h1>

      <p>
          Norman Mark Reedus (Hollywood, Florida; 5 de enero de 1969) es un actor y modelo estadounidense. Se le
          conoce principalmente por su papel de Daryl Dixon en la serie de televisión The Walking Dead y por encarnar
          al personaje de Murphy MacManus en la película The Boondock Saints (1999). También ha dirigido varios vídeos
          y ha posado para varios diseñadores de moda. Además, protagonizó el videojuego de Hideo Kojima, Death
          Stranding (2019) interpretando a Sam.
      </p>
      </div>
    </div>
    `,
];

const names = [
  "Andrew Lincoln",
  "Jon Bernthal",
  "Sarah Wayne",
  "Laurie Holden",
  "Jeffrey DeMunn",
  "Steven Yeun",
  "Chandler Riggs",
  "Norman Reedus",
];

const changePersonaje = (index) => {
  document.getElementById("tagName").textContent = `${names[index]}`;
  const root = document.getElementById("root");
  root.innerHTML = `${data[index]}   
    <div class="spacer-elenco">
    <hr>
    </div>
    <ul class="list-group">
        <li class="list-group-item list-group-item-secondary" id="el0"><a >Andrew Lincoln</a></li>
        <li class="list-group-item" id="el1"><a >Jon Bernthal</a></li>
        <li class="list-group-item  list-group-item-secondary" id="el2"><a >Sarah Wayne</a></li>
        <li class="list-group-item" id="el3"><a >Laurie Holden</a></li>
        <li class="list-group-item list-group-item-secondary" id="el4"><a >Jeffrey DeMunn</a></li>
        <li class="list-group-item" id="el5"><a >Steven Yeun</a></li>
        <li class="list-group-item list-group-item-secondary" id="el6"><a >Chandler Riggs</a></li>
        <li class="list-group-item" id="el7"><a >Norman Reedus</a></li>
    </ul>`;
  for (let i = 0; i <= 8; i++) {
    const item = document.getElementById(`el${i}`);
    if (item !== null) {
      item.addEventListener("click", () => changePersonaje(i));
      item.style.userSelect = "none";
    }
  }
};

export default changePersonaje;
