import "../stylesheets/Header.css";
//import {FaCloud} from "react-icons/fa";
function Header({titulo, parrafo, btnText}) {
  return (
    <div className="container cabecera">
      <div className="contenido-header">
        <i class="bi bi-cloud-fill icono-header"></i>
        <h1 className="titulo-header">{titulo}</h1>
        <p className="parrafo-header">{parrafo}</p>
        <button className="boton-header">{btnText}</button>
      </div>
    </div>
  );
}
export default Header;
/*

       */
