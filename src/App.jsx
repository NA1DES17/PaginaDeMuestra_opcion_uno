import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./componentes/Header.jsx";
import SeccionUno from "./componentes/SeccionUno.jsx";

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
      <SeccionUno />
    </div>
  );
}

export default App;
