import { Button, ButtonGroup, ButtonToolbar, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import logo from '../assets/icons/logo.png'
import '../styles/HomePage.css'

export default function HomePage({ authAdmin, authInquilinos, logInAdmin, logInInquilino, logOutAdmin, logOutInquilino }) {


  return (
    <main>
      <section className="header-home">

        <div className="icono-home">
          <NavLink className="nav-links" to="/">
            <img className="img-sin-fondo" src={logo} alt="logo" />
          </NavLink>
        </div>

        <div className="links-container">
          <Nav className="nav-links-container">
            {authAdmin && (<NavLink className="nav-links" to="/admin">Ingresar al portal de Administracion</NavLink>)}
            {authInquilinos && (<NavLink className="nav-links" to="/inquilinos">Ingresar al portal de Inquilinos</NavLink>)}
          </Nav>
        </div>

        <div className="botones-home">
          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="me-2" aria-label="First group">
              <Button onClick={() => authAdmin ? logOutAdmin() : logInAdmin()}>
                {authAdmin ? 'LogOut Admin' : 'LogIn Admin'}
              </Button>
            </ButtonGroup>
            <ButtonGroup className="me-2" aria-label="Second group">
              <Button onClick={() => authInquilinos ? logOutInquilino() : logInInquilino()}>
                {authInquilinos ? 'LogOut Inquilino' : 'LogIn Inquilino'}
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>

      </section>

    </main>
  )
}



















