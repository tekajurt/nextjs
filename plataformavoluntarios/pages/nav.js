import { NavbarBrand, NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const navBar = () =>{
    return(
        <Navbar className='text-light' expand="xs">
            <Container>
                <NavbarToggle aria-controls='basic-navbar-nav' />
                <NavbarBrand href="/">LogoCAC</NavbarBrand>
                <Navbar.Collapse className='w-auto' id='basic-navbar-nav'>
                    <Nav className='me-auto text-light'>
                        <NavLink href='/'>Home</NavLink>
                        <NavLink href='who'>Quienes Somos</NavLink>
                        <NavLink href='proyects'>Proyectos</NavLink>
                        <NavLink href='join'>Inscripción voluntariado</NavLink>
                        <NavLink href='contact'>Contáctenos</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default navBar;