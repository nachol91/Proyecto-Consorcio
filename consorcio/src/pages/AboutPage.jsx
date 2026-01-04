import avatarmujer from '../assets/img/avatarmujer.jpg';
import avatarmujer2 from '../assets/img/avatarmujer2.jpg';
import avatarhombre from '../assets/img/avatarhombre.jpg';
import avatarhombre2 from '../assets/img/avatarhombre2.jpg';
import avatarhombre3 from '../assets/img/avatarhombre3.jpg';
import avatarhombre4 from '../assets/img/avatarhombre4.jpg';
import logogithub from '../assets/img/github-gif.gif';
import '../styles/AboutPage.css';


export default function AboutPage() {
  return (
    <div>
      <main className='main-about'>
        <h1>Gestor App</h1>

        <br />

        <h2>Quienes Somos</h2>
        <p>
          Somos un grupo de estudiantes que empezamos este recorrido dando
          nuestros primeros pasos como desarrolladores, buscando crear sitios
          web interactivos y que se adapten a las necesidades de todo tipo de
          usuario.
        </p>

        <hr />
        <br />

        <h2>Nuestro Objetivo</h2>
        <p>
          {" "}
          Creamos una app web pensada para poder facilitar la gestión de
          edificios, con una interfaz amigable y sencilla tanto para el usuario
          inquilino como el administrador, facilitando gestiones muy importantes
          tales como : Gastos y Pagos de Expensas,Reserva de Espacios Comunes,
          Comunicación Directa y demás.Con una gestión 100% digital que ahorra
          tiempo y mejora la convivencia comunitaria.
        </p>
        <br />

        <h2>Integrantes</h2>

        <div id="card-avatares">
          <div id="CardImagenes">
            <img id="GaleríaImagen" src={avatarhombre} />
            <h3>Ignacio Loidi</h3>
            <a
              href="https://github.com/nachol91"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img id="Logo-Github" src={logogithub} />
            </a>
          </div>

          <div id="CardImagenes">
            <img id="GaleríaImagen" src={avatarmujer} />
            <h3>Fanny Rasgido</h3>
            <a href="https://github.com/fanny1664" target="_blank">
              <img id="Logo-Github" src={logogithub} />
            </a>
          </div>

          <div id="CardImagenes">
            <img id="GaleríaImagen" src={avatarhombre3} />
            <h3>Facundo Silva Soria</h3>
            <a href="https://github.com/FacuSilvaSoria" target="_blank">
              <img id="Logo-Github" src={logogithub} />
            </a>
          </div>

          <div id="CardImagenes">
            <img id="GaleríaImagen" src={avatarmujer2} />
            <h3>Agostina Morano</h3>
            <a href="https://github.com/agmo15" target="_blank">
              <img id="Logo-Github" src={logogithub} />
            </a>
          </div>

          <div id="CardImagenes">
            <img id="GaleríaImagen" src={avatarhombre2} />
            <h3>Joaquín Guzmán</h3>
            <a href="https://github.com/JoaacooG" target="_blank">
              <img id="Logo-Github" src={logogithub} />
            </a>
          </div>

          <div id="CardImagenes">
            <img id="GaleríaImagen" src={avatarhombre4} />
            <h3>Gonzalo García</h3>
            <a
              href="https://github.com/Gonzalo-Garcia-1995"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img id="Logo-Github" src={logogithub} />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
