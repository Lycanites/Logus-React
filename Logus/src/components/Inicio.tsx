import "./Inicio.css";

const Inicio = () => {
  return (
    <>
      <div className="img">
        <div className="Logo">
          <img src="/public/img/Logo.png" alt="Logo" />
        </div>
      </div>
      <div className="container">
        <button className="Jugar">Jugar</button>
        <button className="Opciones">Opciones</button>
        <button className="Tienda">Tienda</button>
      </div>
    </>
  );
};

export default Inicio;
