import { Button, Form, FormGroup } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import mano from "../assets/img/imagen-mano.png"
import entrega from "../assets/icons/entrega-rapida.png"
import facil from "../assets/icons/facil.png"
import precio from "../assets/icons/precio-bajo.png"
import interactivo from "../assets/icons/interactivo.png"
import admin from "../assets/img/imagen-admin.jpg"
import propietario from "../assets/img/imagen-propietario.jpg"
import separador from "../assets/img/foto-separador.jpg"
import consulta from "../assets/img/imagen-consulta.jpg"
import google from "../assets/icons/google-play.png"
import mac from "../assets/icons/mac.png"
import '../styles/HomePage.css'


export default function HomePage() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6gbm26d', 'template_lara2rs', form.current, {
        publicKey: 'qVrWVHzoFGKlgoPlk',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    e.target.reset();
  };

  return (
    <main className='home-body'>

      <section className='presentacion'>
        <div className="titulo-presentacion">
          <p className='titulo'>La solución de gestión <br/>para tu consorcio</p>
          <div className="botones">
            <Button className='boton-presentacion'>
              <NavLink className="nav-links" to = "*"><span><img src={google} alt="google play"/>Google Play</span></NavLink>
            </Button>
            <Button className='boton-presentacion'>
              <NavLink className="nav-links" to = "*"><span><img src={mac} alt="mac"/>App Store</span></NavLink>
            </Button>
          </div>
        </div>

        <div className="imagen-presentacion">
          <img className='img-mano' src= {mano} alt="imagen mano en app" />
        </div>
      </section>
      <section className="seccion-media">
        <h2 style={{fontSize: '70px', fontFamily: 'lato', color: '#045B61'}}>Por que te conviene Gestor app?</h2>
        <div className="iconos-media">
          <span className="icono-mid">
            <img src={facil} alt="icono facil de usar" style={{ width: '100px'}}/>
            <p>Facil de usar</p>
          </span>
          
          <span className="icono-mid">
            <img src={entrega} alt="icono facil de usar" style={{ width: '100px'}}/>
            <p>Entrega rápida</p>
          </span>
          
          <span className="icono-mid">
            <img src={interactivo} alt="icono facil de usar" style={{ width: '100px'}}/>
            <p>Interactivo</p>
          </span>
          
          <span className="icono-mid">
            <img src={precio} alt="icono facil de usar" style={{ width: '100px'}}/>
            <p>Bajo costo</p>
          </span>
        </div>
        
        <div className="usos">
          
          <div className="ejemplo-usos">
            
            <span>
              <img src={admin}alt="imagen admin ejemplo" style={{ width: '450px', borderRadius: '5%'}} />
            </span>
            
            <div className="lista-ejemplos">
              <h3 style={{fontSize: '40px', fontFamily: 'lato', color: '#045B61'}}>Si sos Administrador</h3>
              <ul style={{marginTop: '50px'}}>
                <li className="elementos-lista" style={{color: 'grey'}}>Acceso online al panel de los consorcios administrados.</li>
                <br />
                <li className="elementos-lista" style={{color: 'grey'}}>Alta de los consorcios y propietarios.</li>
                <br />
                <li className="elementos-lista" style={{color: 'grey'}}>Alta los servicios útiles / Reglamentos / Actividades mensuales.</li>
                <br />
                <li className="elementos-lista" style={{color: 'grey'}}>Carga y envío automático de expensas de los consorcios.</li>
                <br />
                <li className="elementos-lista" style={{color: 'grey'}}>Carga y envío automático de avisos / reuniones de consorcio y demás.</li>
                <br />
                <li className="elementos-lista" style={{color: 'grey'}}>Avisos Masivos: Carga y envío automático a todos los consorcios juntos con un solo click.</li>
                <br />
                <li className="elementos-lista" style={{color: 'grey'}}>El historial de toda la información y envíos realizados siempre online.</li>
              </ul>

            </div>

          </div>
          
          <div className="ejemplo-usos">
            
            <div>
              
              <h3 style={{fontSize: '40px', fontFamily: 'lato', color: '#045B61'}}>Si sos propietario/inquilino</h3>
              <ul style={{marginTop: '50px'}}>
                <li className="elementos-lista" style={{color: 'grey'}}>Acceso online al panel de tu consorcio.</li>
                <br />
                <li className="elementos-lista" style={{color: 'grey'}}>Consultar y/o descargar las expensas recibidas mes a mes.</li>
                <br />
                <li className="elementos-lista" style={{color: 'grey'}}>Consultar los avisos enviados a su consorcio.</li>
                <br />
                <li className="elementos-lista" style={{color: 'grey'}}>Consultar listado de proveedores recomendados por el <br /> administrador (gasista, electricista, pintor, etc).</li>
                <br />
                <li className="elementos-lista" style={{color: 'grey'}}>Realizar consultas y/o reclamos al administrador de manera online.</li>
                <br />
                <li className="elementos-lista" style={{color: 'grey'}}>El Historial de expensas online.</li>
                <br />
                <li className="elementos-lista" style={{color: 'grey'}}>Descargando la app tendras acceso tambien a toda esta info.</li>
                <br />
              </ul>

            </div>
            
            <span>
              <img src={propietario} alt="imagen propietario ejemplo" style={{ width: '450px', borderRadius: '5%'}} />
            </span>
            
          </div>

        </div>
          
      </section>

      <span><img src={separador} style={{width: '100%', marginTop: '40px'}} alt="separador" /></span>

      <section id="contacto">
        
        <h2 style={{fontSize: '60px', fontFamily: 'lato', color: '#045B61', marginBottom: '40px'}}>Contacto</h2>
        <h3 style={{fontSize: '25px', fontFamily: 'lato'}}>Estamos listo para ayudarte a encontrar las mejores soluciones</h3>
        
        <div className="contenedor-consulta">
          <Form className="formulario-consulta" ref={form} onSubmit={sendEmail}>
            <FormGroup className="mb-3" controlId="nombre">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control type="text" name="user_name" placeholder="John Doe" required />
            </FormGroup>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="user_email" placeholder="nombre@ejemplo.com" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="pregunta">
              <Form.Label>Consulta</Form.Label>
              <Form.Control as="textarea" name="message" rows={6} placeholder="Por favor ingrese su piso y depto por el cual hace su consulta" maxLength={300} />
            </Form.Group>
            <Button style={{backgroundColor:'#afff05', color: '#033136', border:'1px, solid, #033136'}} type="submit" value="Send">
              Enviar
            </Button>
          </Form>

          <span><img src={consulta} alt="imagen de formulario" style={{ width: '400px', borderRadius: '5%'}} /></span>
        </div>

        <div className="cuadro-consultas" style={{ width: '40%', height: '200px', borderRadius: '10px'}}>
          
          <div>
              <h3>Llamanos</h3>
              <p>+123 456 789 101 <br /> +235 456 789 101</p>

          </div>
          
          <div>
            <h3>Correos</h3>
            <p>info@company.com <br />hello@company.com</p>
          </div>

        </div>
        
        
      </section>
        


      
    </main>
  )
}



















