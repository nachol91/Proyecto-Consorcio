import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from '../assets/icons/logo.png'
import edificio from '../assets/img/img-edificio.webp'
import '../styles/LogIn.css'


export default function LogInPage({ authAdmin, authInquilinos, logInAdmin, logInInquilino, logOutAdmin, logOutInquilino }) {
    return (
        <main className="main-login">

            <span className="logo-login"><img src={logo} alt="logo gestor app"/></span>
            
            <h2>Bienvenidos</h2>
                
            <p>Ingresa tu Email y Contraseña</p>

            <div className="form-login">
                
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Contraseña" required />
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{backgroundColor:'#afff05', color: '#033136', border:'1px, solid, #033136'}}>
                        Ingresar
                    </Button>
                </Form>

            </div>

        </main>
    )
}
               


            
                




