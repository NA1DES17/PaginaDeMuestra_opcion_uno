// Estilos
import "./App.css";
// Iconos
import "bootstrap-icons/font/bootstrap-icons.css";
// Imagenes
//import quienesSomos from "./imagenes/quienes-somos.jpg";
// Componentes
import Header from "./componentes/Header.jsx";
import SeccionUno, {
  SeccionUnoText,
  SeccionUnoImage,
} from "./componentes/SeccionUno.jsx";
import SeccionDos from "./componentes/SeccionDos.jsx";
import IconosRombos from "./componentes/IconosRombos.jsx";

function App() {
  const iconos = [
    <IconosRombos icono={<i class="bi bi-code-slash"></i>} color={"#C3E895"} />,
    <IconosRombos
      icono={<i class="bi bi-lightning-fill"></i>}
      color={"#8ADDAA"}
    />,
    <IconosRombos
      icono={<i class="bi bi-camera-fill"></i>}
      color={"#6BD4C8"}
    />,
    <IconosRombos icono={<i class="bi bi-gear-fill"></i>} color={"#57AED3"} />,
    <IconosRombos icono={<i class="bi bi-display"></i>} color={"#4A87D3"} />,
    <IconosRombos icono={<i class="bi bi-calendar3"></i>} color={"#6B88E6"} />,
  ];

  return (
    <div className="App contaier">
      {/* <Header
        titulo={
          "Hola! bienvenidos, esta es una muestra del diseño web promocional. Opción 1."
        }
        parrafo={
          "La web incluye el contenido que vemos en este ejemplo No tiene menú ni formulario de contacto. Incluye hasta 6 imagenes y enlaces a redes sociales."
        }
        btnText={"MÁS..."}
      />
      <SeccionUno>
        <SeccionUnoText
          titulo={"Este es un titulo Este es un titulo"}
          parrafo={
            "este es un texto de ejemplo este es un texto de ejemplo este es un texto de ejemplo este es un texto de ejemplo"
          }
        />
        <SeccionUnoImage alt={"nosotros"} imagen={quienesSomos} />
      </SeccionUno> */}
      <SeccionDos iconos={iconos} />
    </div>
  );
}

export default App;
