import logo from "../Imagenes/Logo.png";
const Encabezado = () => {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
      <div className="d-flex align-items-center">
        <img className="logo" src={logo} alt="" />
      </div>
    </header>
  );
};

export default Encabezado;
