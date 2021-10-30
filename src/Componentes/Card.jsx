const Card = ({ personaje }) => {
  const { image } = personaje;

  const estilos = {
    imagen: {
      height: "10rem",
      width: "10rem",
      borderRadius: "100px",
    },
    card: {
      backgroundColor: "#054c90",
      borderRadius: "25px",
      height: "18em",
      width: "14rem",
      marginTop: "2em",
      marginBottom: "2em",
      marginLeft: "0.5em",
      marginRight: "0.5em",
      display: "flex",
      flexDirection: "column",
    },
    info: {
      marginBottom: "2em",
      marginLeft: "2em",
      marginRight: "2em",
      color: "#FFFFFF",
      fontSize: "1em",
      textAlign: "left",
    },
  };

  const { name, species, status } = personaje;
  return (
    <div>
      <div style={estilos.card}>
        <div>
          <img style={estilos.imagen} src={image} alt="" />
        </div>
        <div style={estilos.info}>
          <p>Nombre: {name}</p>
          <p>Especie: {species}</p>
          <p>Estatus: {status}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
