import "../stylesheets/SeccionDos.css";
//import IconosRombos from "./IconosRombos";

function SeccionDos({iconos}) {
  // return <div className="container seccion-dos-contenedor ">{children}</div>;
  return (
    <div className="seccion-dos-contenedor">
      <ul className="lista-rombos">
        {iconos.map((elem) => (
          <li>{elem}</li>
        ))}
      </ul>
    </div>
  );
}

export default SeccionDos;
