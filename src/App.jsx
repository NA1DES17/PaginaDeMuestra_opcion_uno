// Estilos
import "./App.css";
// Iconos
import "bootstrap-icons/font/bootstrap-icons.css";
// Imagenes
import quienesSomos from "./imagenes/quienes-somos.jpg";
// Componentes
import Header from "./componentes/Header.jsx";
import SeccionUno, {
  SeccionUnoText,
  SeccionUnoImage,
} from "./componentes/SeccionUno.jsx";

function App() {
  return (
    <div className="App contaier">
      <Header
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
      </SeccionUno>
    </div>
  );
}

export default App;
