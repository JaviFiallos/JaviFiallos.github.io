import React from "react";
import "./Introduction.css";

const Introduction = () => {
  return (
    <section className="intro-contenedor">
      <div className="intro-contenido">
        <h2>Hola! Soy JaviF un apasionado del desarrollo web</h2>
        <p>
        Me considero un entusiasta del mundo digital con un enfoque en el desarrollo web. Si bien mi dominio del lenguaje Java es sólido y actualmente me he enfocado en el back-end, mi verdadera pasión sigue estando en el ámbito del front-end. Disfruto creando experiencias en línea distintivas, explorando nuevas tecnologías y tendencias para que las páginas destaquen con un estilo único.
        </p>
        <p>
        Estoy ansioso por expandir mis conocimientos, especialmente en servicios e integración en la nube. Poseo experiencia en el manejo de bases de datos y estoy siempre dispuesto a seguir aprendiendo y mejorando en este campo.
        </p>
      </div>

      <div className="profile-img">
          <div>
            <img
              className="javi-img"
              src="./assets/images/javiFiallos.jpg"
              alt=""
            />
          </div>

          <div>
            <div className="tech-icon">
              <img src="./assets/images/javaIcon.svg" alt="" />
            </div>
            <div className="tech-icon">
              <img src="./assets/images/Nest.js.svg" alt="" />
            </div>
            <div className="tech-icon">
              <img src="./assets/images/Angular.svg" alt="" />
            </div>
            <div className="tech-icon">
              <img src="./assets/images/PostgresSQL.svg" alt="" />
            </div>
          </div>

        </div>
    </section>
  );
};

export default Introduction;
