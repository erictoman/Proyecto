import "./App.css";
import Cuerpo from "./Pagina/Cuerpo";
import Encabezado from "./Pagina/Encabezado";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Encabezado />
      <Cuerpo />
    </div>
  );
}

export default App;
