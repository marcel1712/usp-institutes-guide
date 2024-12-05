import React from "react";
import './Institute.css';

function Sobre() {
  return (
    <div>
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              Início
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Grupos
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Institutos
            </a>
          </li>
        </ul>
      </header>

      <h1>Nome do instituto</h1>
      <h2 className="sobre">Sobre o instituto</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lacus
        neque. Phasellus rutrum elementum orci id tincidunt. Duis finibus ligula
        sapien, non fermentum orci mollis et. Donec ullamcorper magna eget
        ultricies tempor. Mauris rhoncus felis sit amet semper vulputate. Nulla
        facilisi. Donec sed accumsan erat. Integer vehicula quam non urna
        sollicitudin, sit amet blandit est hendrerit. Aenean ullamcorper nulla
        felis, et ultrices ligula finibus non. Vivamus a mattis orci.
        Pellentesque cursus ullamcorper felis, a vestibulum elit eleifend in.
        Vestibulum sed urna felis. Quisque quis pharetra justo, ac vulputate
        ipsum.
      </p>
      <h2 className="mapa">Mapa</h2>
      <iframe
        src="mapaurl"
        width="500"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa"
      ></iframe>
      <h2 className="grupos">Grupos de extensão</h2>
    </div>
  );
}

export default Institute;
