import "../stylesheets/iconosRombos.css";
function IconosRombos({icono, color}) {
  return (
    <div className="container">
      <div className="container contenedor-icono">
        <span className="icono" style={(color = {color})}>
          {icono}
        </span>
      </div>
    </div>
  );
}
export default IconosRombos;
