import img from "../../../assets/images/img1.jpg";
import audio from '../../../assets/audio/theme_song.mp3';

const home = () => {
  document.getElementById("tagName").textContent = "Inicio";
  const root = document.getElementById("root");
  root.innerHTML = `
    
  <div class="animatedItem1">
  
  <img src="${img}" class="rounded mx-auto d-block" alt="Imagen de serie" width="300" height="200" class="card">

  <div class="card">
  <h1>The Walking Dead</h1>
      <p>
          The Walking Dead es una serie de televisión estadounidense de horror post-apocalíptico para AMC basada en
          la serie de cómics de Robert Kirkman, Tony Moore y Charlie Adlard. La serie presenta un gran elenco como
          sobrevivientes de un apocalipsis zombi, tratando de mantenerse con vida bajo la amenaza casi constante
          de ataques de los zombis sin conciencia, coloquialmente conocidos como «caminantes». Sin embargo, con la
          caída de la humanidad, estos sobrevivientes también enfrentan conflictos con otros sobrevivientes que
          han formado grupos y comunidades con sus propios conjuntos de leyes y morales, lo que a menudo conduce a
          conflictos hostiles entre las comunidades humanas.
      </p>
  </div>

  <hr>

 <div class="card">
  <details>
      <summary>Pais de origen</summary>
      <p>Estados Unidos</p>
  </details>

  <details>
      <summary>Idioma original</summary>
      <p>Ingles</p>
  </details>

  <details>
      <summary>No. de temporadas</summary>
      <p>10 temporadas</p>
  </details>

  <details>
      <summary>No. de episodios</summary>
      <p>147 episodios</p>
  </details>

  <details>
      <summary>Tema de la serie</summary>
      <audio controls>
          <source src="${audio}" type="audio/mp3">
      Your browser does not support the audio element.
      </audio>
  </details>


 </div>
  </div>
    
    `;
};

export default home;
