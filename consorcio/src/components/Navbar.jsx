import "../Styles/Navbar.css";
import logo from "../assets/icons/logo.png";

const Navbar = ({ isLogged, userName, onLogout }) => {
  const now = new Date();

  return (
    <header className="navbar">
      {/* IZQUIERDA: LOGO + TEXTO */}
      <div className="navbar-left">
        <img src={logo} alt="Logo Consorcio" className="navbar-logo" />
        <span className="navbar-title">Gestor App</span>
      </div>

      {/* CENTRO: LINKS */}
      <nav className="navbar-center">
        <a href="/">Inicio</a>
        <a href="/nosotros">Nosotros</a>
      </nav>

      {/* DERECHA: FECHA / PERFIL */}
      <div className="navbar-right">
        {isLogged && (
          <>
            <div className="navbar-datetime">
              <span>{now.toLocaleDateString()}</span>
              <span>
                {now.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>

            <div className="navbar-profile">
              <span className="navbar-user">👤 {userName}</span>
              <button className="btn-logout" onClick={onLogout}>
                Cerrar sesión
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;