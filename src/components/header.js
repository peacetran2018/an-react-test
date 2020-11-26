import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

function Header() {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <div className="container">
                <Navbar.Brand href="#home">Documentation</Navbar.Brand>                
            </div>

        </Navbar>
    )
}

export default Header;