import logo from "../assets/icons/logo.png";


const HeaderInquilino = () => {
  const fecha = new Date().toLocaleDateString();
  const hora = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <header className="header-inquilino">
      <img src={logo} alt="Logo Consorcio" className="logo" />

      <div className="fecha-hora">
        <span>{fecha}</span>
        <span>{hora}</span>
      </div>

      <div className="perfil">
        <div className="avatar">FS</div>
        <button className="logout">Cerrar sesión</button>
      </div>
    </header>
  );
};

export default HeaderInquilino;