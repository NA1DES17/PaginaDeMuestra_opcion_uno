import "../stylesheets/SeccionUno.css";

function SeccionUno({children}) {
  return <div className="container seccion-uno-contenedor ">{children}</div>;
}

export function SeccionUnoText({titulo = "", parrafo}) {
  return (
    <>
      <div className="container seccion-uno-texto">
        <h2 className="seccion-uno-titulo">{titulo}</h2>
        <hr />
        <p className="seccion-uno-parrafo">{parrafo}</p>
      </div>
    </>
  );
}

export function SeccionUnoImage({imagen, alt}) {
  return (
    <>
      <img
        className="seccion-uno-imagen img-fluid"
        src={imagen}
        alt={`foto de ${alt}`}
      />
    </>
  );
}

export default SeccionUno;
