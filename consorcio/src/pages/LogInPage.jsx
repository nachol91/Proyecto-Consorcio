import { Button, ButtonGroup, ButtonToolbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from '../assets/icons/logo.png'

export default function LogInPage({ authAdmin, authInquilinos, logInAdmin, logInInquilino, logOutAdmin, logOutInquilino }) {
    return (
        <div>
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
    )
}
