import { Button, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import logo from '../assets/icons/logo.png'
import ingreso from '../assets/icons/icono-ingreso.png'
import '../styles/HeaderHome.css'

export default function HeaderHome() {


    return (
        <section className="header-home">

            <div className="icono-home">
                <NavLink className="nav-links" to="/">
                    <img className="img-sin-fondo" src={logo} alt="logo" />
                </NavLink>
                <p>Gestor app</p>
            </div>

            <div className="links-header">

                <NavLink  className="nav-links"  to= "/">Inicio</NavLink>
                <NavLink className="nav-links" to= "/" >Contacto</NavLink>
                <NavLink className="nav-links" to= "/about" >Nosotros</NavLink>

            </div>

            <div className="boton-home">

                <Button className="boton-ingreso" >
                    <NavLink className="nav-links" to = "/login" target="_blank">
                      Ingresar <img src={ingreso} alt="icono login" style={{ width: '25px', height: '25px' }}/> 
                    </NavLink>
                </Button>
                
            </div>

        </section>

    )
}
