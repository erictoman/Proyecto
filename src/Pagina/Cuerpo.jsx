import { useEffect, useState } from "react";
import Card from "../Componentes/Card";
import { obtenerPersonajes } from "../API/personajes";
import Opciones from "../Componentes/Opciones";

const Cuerpo = () => {
  const [personajes, setPersonajes] = useState([]);
  const [paginas, setPaginas] = useState(0);
  const [pagina, setPagina] = useState(1);
  const cambiarPagina = (num) => {
    setPagina(num + 1);
  };

  const cargarPersonajes = async (pagina = 1) => {
    let {
      data: {
        info: { pages },
        results,
      },
    } = await obtenerPersonajes(pagina);
    setPaginas(pages);
    setPersonajes(results);
  };

  useEffect(() => {
    cargarPersonajes();
  }, []);

  useEffect(() => {
    cargarPersonajes(pagina);
  }, [pagina]);

  return (
    <main>
      <div className="tarjetas">
        {personajes.map((personaje) => {
          return <Card key={personaje.id} personaje={personaje} />;
        })}
      </div>
      <Opciones paginas={paginas} cambiarPagina={cambiarPagina} />
    </main>
  );
};

export default Cuerpo;
