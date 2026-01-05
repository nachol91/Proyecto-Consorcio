import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import listadoAdmins from "../../admins.json"
import listadoInquilinos from "../../inquilinos.json"
import { NavLink, useNavigate } from "react-router-dom";
import logo from '../assets/icons/logo.png'
import '../styles/LogIn.css'


export default function LogInPage({ authAdmin, authInquilinos, logInAdmin, logInInquilino, logOutAdmin, logOutInquilino }) {

    const [emailsAdmins, setEmailsAdmins] = useState([]);
    const [emailsInquis, setEmailsInquis] = useState([]);
    const navigate = useNavigate();

    useEffect(()=> {
        const adminsEmails = listadoAdmins.map(usuario => usuario.email);
        setEmailsAdmins(adminsEmails);
    },[]);

     useEffect(()=> {
        const inquisEmails = listadoInquilinos.map(usuario => usuario.email);
        setEmailsInquis(inquisEmails);
    },[]);

    console.log(emailsAdmins);
    console.log(emailsInquis);


    function logPageForm(e) {
        e.preventDefault();

        const emailingresado = e.target.email.value
        console.log(emailingresado);

        if (emailsAdmins.includes(emailingresado)) {
            logInAdmin();
            navigate('/admin')

        } else if(emailsInquis.includes(emailingresado)) {
            logInInquilino();
            navigate('/inquilinos')
            
        } else{
            alert('el mail no esta registrado')
        }
    }


    return (
        <main className="main-login">

            <span className="logo-login"><img src={logo} alt="logo gestor app" /></span>

            <h2>Bienvenidos</h2>

            <p>Ingresa tu Email y Contraseña</p>

            <div className="form-login">

                <Form onSubmit={logPageForm}>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Control type="email" placeholder="Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Control type="password" placeholder="Contraseña" required />
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{ backgroundColor: '#afff05', color: '#033136', border: '1px, solid, #033136' }}>
                        ingresar
                    </Button>
                </Form>

            </div>

        </main>
    )
}



















