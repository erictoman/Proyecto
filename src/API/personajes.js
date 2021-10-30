import instancia from "./apiBase";

const obtenerPersonajes = async (pagina) => {
  return instancia.get("/character", {
    params: {
      page: pagina,
    },
  });
};

export { obtenerPersonajes };
