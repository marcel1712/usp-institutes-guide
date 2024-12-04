import React from "react";

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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d777.6346311531665!2d-47.89768839675342!3d-22.008454529228068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b87734a55e2a89%3A0xdf4430229c1ecdbd!2sIFSC%20-%20Instituto%20de%20F%C3%ADsica%20de%20S%C3%A3o%20Carlos!5e0!3m2!1spt-BR!2sbr!4v1732899952968!5m2!1spt-BR!2sbr"
        width="500"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa"
      ></iframe>
      <h2 className="grupos">Grupos de extensão</h2>
    </div>
  );
}

export default Sobre;
