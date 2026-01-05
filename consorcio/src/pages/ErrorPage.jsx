import { Link } from "react-router-dom";
import "../styles/ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>
      <h2 className="error-text">Página no encontrada</h2>
      <p className="error-description">
        La ruta que intentás acceder no existe.
      </p>

      <Link to="/" className="error-button">
        Volver al inicio
      </Link>
    </div>
  );
};

export default ErrorPage;
