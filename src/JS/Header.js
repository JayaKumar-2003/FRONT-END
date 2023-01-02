import React from 'react'
import './Header.css';
import { Button, Container, Nav, Navbar, NavbarBrand, NavDropdown, NavLink } from 'react-bootstrap';
const Header = () => {
  return (
    <div>
        <Navbar>
            
            <Container>
                
                <Nav className="details">
                <NavbarBrand className='details_brand'> Univas</NavbarBrand>
                   <Nav.Link className='details_item'>
                        About us
                   </Nav.Link>
                    <NavDropdown title='PortFolio' id='details_item_dropdown'>
                        <NavDropdown.Item >ben</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className='details_item'>FAQ</Nav.Link>
                    <Nav.Link className='details_item'>Contact</Nav.Link>
                  <div className='details_corner'>
                    <NavLink className='details_item_sign'>Sign In</NavLink>
                    <Button className='details_button'>Register</Button>
                  </div>
                </Nav>
                
            </Container>
        </Navbar>
    </div>
  )
}

export default Header;